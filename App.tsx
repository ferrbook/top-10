import React, { useState, useEffect } from 'react';
import { ContentType, ContentItem } from './types';
import { getDailyContent, getTimeRemaining } from './utils/dailySeed';
import { ALL_CONTENT } from './data/content';
import ContentCard from './components/ContentCard';
import ContentModal from './components/ContentModal';
import { Film, BookOpen, Clock, Sparkles } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ContentType>(ContentType.FILM);
  const [timeLeft, setTimeLeft] = useState<string>('');
  const [dailyContent, setDailyContent] = useState<{ films: ContentItem[], articles: ContentItem[] } | null>(null);
  const [selectedItem, setSelectedItem] = useState<ContentItem | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Scroll handler for navbar styling
    const handleScroll = () => {
        setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    // 1. Initial load
    setDailyContent(getDailyContent());

    // 2. Deep linking
    const params = new URLSearchParams(window.location.search);
    const contentId = params.get('content');
    if (contentId) {
        const foundItem = ALL_CONTENT.find(c => c.id === contentId);
        if (foundItem) {
            setSelectedItem(foundItem);
            window.history.replaceState({}, '', window.location.pathname);
        }
    }

    // 3. Timer & Auto-refresh
    let currentDay = new Date().getDate();
    const updateTimer = () => {
        setTimeLeft(getTimeRemaining());
        const nowDay = new Date().getDate();
        if (nowDay !== currentDay) {
            currentDay = nowDay;
            setDailyContent(getDailyContent());
        }
    };
    
    updateTimer();
    const timerInterval = setInterval(updateTimer, 1000);

    return () => {
        clearInterval(timerInterval);
        window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!dailyContent) return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white space-y-4">
        <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="animate-pulse text-indigo-200">Curating today's discoveries...</p>
    </div>
  );

  return (
    <div className="min-h-screen pb-20">
      
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/20 rounded-full blur-[120px] opacity-30"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-fuchsia-600/20 rounded-full blur-[120px] opacity-30"></div>
      </div>

      {/* Hero Header */}
      <header className="relative pt-16 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-widest mb-6 backdrop-blur-sm">
                <Sparkles className="w-3 h-3 text-amber-300" />
                <span>Daily Science Curation</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-4 drop-shadow-sm">
                Daily<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">DocuSci</span>
            </h1>
            
            <p className="mt-4 text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                Expand your horizon with 10 hand-picked documentaries and articles. 
                <br className="hidden md:block" />
                Refreshed every 24 hours.
            </p>

            {/* Countdown Timer Badge */}
            <div className="mt-8 inline-flex flex-col items-center">
                <div className="bg-slate-900/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-4 shadow-xl ring-1 ring-white/5">
                    <div className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1">Next Refresh In</div>
                    <div className="text-3xl font-mono font-bold text-white flex items-center justify-center tabular-nums tracking-wider">
                        <Clock className="w-5 h-5 mr-3 text-indigo-400 animate-pulse-slow" />
                        {timeLeft}
                    </div>
                </div>
            </div>
        </div>
      </header>

      {/* Floating Navigation Tabs */}
      <div className={`sticky top-4 z-40 transition-all duration-300 ${scrolled ? 'translate-y-0' : 'translate-y-2'}`}>
        <div className="max-w-fit mx-auto px-4">
            <div className="bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-full p-1.5 shadow-2xl flex space-x-2 ring-1 ring-black/20">
                <button
                    onClick={() => setActiveTab(ContentType.FILM)}
                    className={`flex items-center px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                        activeTab === ContentType.FILM
                        ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-900/30'
                        : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                    }`}
                >
                    <Film className={`w-4 h-4 mr-2 ${activeTab === ContentType.FILM ? 'fill-current' : ''}`} />
                    Documentaries
                    <span className={`ml-2 text-[10px] px-1.5 py-0.5 rounded-full ${activeTab === ContentType.FILM ? 'bg-indigo-500/50 text-white' : 'bg-slate-700 text-slate-400'}`}>
                        {dailyContent.films.length}
                    </span>
                </button>
                <button
                    onClick={() => setActiveTab(ContentType.ARTICLE)}
                    className={`flex items-center px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                        activeTab === ContentType.ARTICLE
                        ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/30'
                        : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                    }`}
                >
                    <BookOpen className={`w-4 h-4 mr-2 ${activeTab === ContentType.ARTICLE ? 'fill-current' : ''}`} />
                    Articles
                    <span className={`ml-2 text-[10px] px-1.5 py-0.5 rounded-full ${activeTab === ContentType.ARTICLE ? 'bg-emerald-500/50 text-white' : 'bg-slate-700 text-slate-400'}`}>
                        {dailyContent.articles.length}
                    </span>
                </button>
            </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        
        {/* Masonry Layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6">
            {(activeTab === ContentType.FILM ? dailyContent.films : dailyContent.articles).map((item, index) => (
                <div 
                    key={item.id} 
                    className="break-inside-avoid mb-6 animate-in fade-in slide-in-from-bottom-4 duration-500" 
                    style={{ animationDelay: `${index * 50}ms` }}
                >
                    <ContentCard 
                        item={item} 
                        onClick={() => setSelectedItem(item)}
                    />
                </div>
            ))}
        </div>

        {/* Empty State */}
        {((activeTab === ContentType.FILM && dailyContent.films.length === 0) || 
          (activeTab === ContentType.ARTICLE && dailyContent.articles.length === 0)) && (
            <div className="flex flex-col items-center justify-center py-20 text-slate-500">
                <Sparkles className="w-12 h-12 mb-4 opacity-20" />
                <p className="text-lg font-medium">No content available for today.</p>
                <p className="text-sm opacity-60">Check back tomorrow!</p>
            </div>
        )}
      </main>

      <footer className="text-center py-12 text-slate-500 text-sm relative z-10">
        <div className="max-w-7xl mx-auto px-6 border-t border-slate-800/50 pt-8">
            <p className="font-medium text-slate-400">&copy; {new Date().getFullYear()} DailyDocuSci.</p>
            <p className="mt-2 text-slate-600">
                Promoting scientific literacy. Content simulated for demonstration.
            </p>
        </div>
      </footer>

      {/* Modal */}
      {selectedItem && (
        <ContentModal 
            item={selectedItem} 
            onClose={() => setSelectedItem(null)} 
        />
      )}
    </div>
  );
};

export default App;