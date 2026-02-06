import React, { useEffect } from 'react';
import { ContentItem, ContentType } from '../types';
import { X, Calendar, Clock, Tag, ExternalLink, Film, BookOpen, Globe } from 'lucide-react';

interface ContentModalProps {
  item: ContentItem;
  onClose: () => void;
}

const ContentModal: React.FC<ContentModalProps> = ({ item, onClose }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  const imageUrl = `https://picsum.photos/seed/${item.id}/1200/800`;
  
  // Construct a search URL since we don't have direct links in the database
  const sourceUrl = `https://www.google.com/search?q=${encodeURIComponent(item.title + " " + item.source)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Blurred Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/90 backdrop-blur-md transition-opacity duration-300" 
        onClick={onClose}
        aria-hidden="true"
      ></div>
      
      {/* Modal Window */}
      <div 
        className="relative bg-slate-900 rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col border border-slate-700/50 animate-in fade-in zoom-in-95 duration-300 ring-1 ring-white/10"
        role="dialog"
        aria-modal="true"
      >
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 bg-black/40 hover:bg-black/60 text-white/80 hover:text-white rounded-full transition-all backdrop-blur-md border border-white/10 group"
          aria-label="Close"
        >
          <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
        </button>

        {/* Hero Section */}
        <div className="relative h-72 sm:h-96 flex-shrink-0 bg-slate-900 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={item.title} 
            className="w-full h-full object-cover opacity-80 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10 z-10">
             <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className={`px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wider flex items-center gap-1.5 shadow-lg border border-white/10 ${item.type === ContentType.FILM ? 'bg-indigo-600 text-white' : 'bg-emerald-600 text-white'}`}>
                    {item.type === ContentType.FILM ? <Film className="w-3.5 h-3.5" /> : <BookOpen className="w-3.5 h-3.5" />}
                    {item.type === ContentType.FILM ? 'Documentary' : 'Article'}
                </span>
                
                {item.year && (
                  <span className="flex items-center text-slate-200 text-xs font-semibold bg-slate-800/60 px-3 py-1 rounded-full backdrop-blur-md border border-white/10">
                    <Calendar className="w-3.5 h-3.5 mr-1.5 text-slate-400" />
                    {item.year}
                  </span>
                )}
             </div>
             
             <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight drop-shadow-lg tracking-tight">
                {item.title}
             </h2>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-8 sm:p-10 space-y-10 bg-slate-900">
          
          {/* Metadata Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 bg-slate-800/30 rounded-2xl border border-slate-800">
             <div className="flex items-center">
                <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400 mr-4">
                    <Clock className="w-5 h-5" />
                </div>
                <div>
                    <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Duration</div>
                    <div className="text-slate-200 font-medium">{item.type === ContentType.FILM ? item.duration : item.readTime}</div>
                </div>
             </div>
             
             <div className="flex items-center">
                <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 mr-4">
                    <Globe className="w-5 h-5" />
                </div>
                <div>
                    <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Source</div>
                    <a 
                        href={sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-200 font-medium hover:text-emerald-400 transition-colors border-b border-transparent hover:border-emerald-400/50 pb-0.5 inline-block"
                        title="Search for this source"
                    >
                        {item.source} <ExternalLink className="inline w-3 h-3 ml-1 opacity-50" />
                    </a>
                </div>
             </div>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Main Text */}
            <div className="md:col-span-2 space-y-6">
                <h3 className="text-xl font-bold text-white flex items-center">
                    Synopsis
                    <div className="h-px bg-slate-800 flex-1 ml-4"></div>
                </h3>
                <p className="text-slate-300 leading-8 text-lg font-light">
                {item.description}
                </p>
                <p className="text-slate-400 leading-7">
                This selected piece serves as a window into the fascinating world of {item.tags[0].toLowerCase()}. 
                Whether you are a seasoned enthusiast or a curious newcomer, this {item.type === ContentType.FILM ? 'film' : 'article'} offers valuable insights and compelling storytelling that aligns with our mission to promote scientific literacy.
                </p>
            </div>

            {/* Sidebar / Actions */}
            <div className="space-y-8">
                <div>
                    <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Topic Tags</h4>
                    <div className="flex flex-wrap gap-2">
                        {item.tags.map(tag => (
                            <span key={tag} className="flex items-center text-sm font-medium bg-slate-800 text-slate-300 px-3 py-1.5 rounded-lg border border-slate-700/50 hover:border-indigo-500/30 transition-colors cursor-default">
                            <Tag className="w-3.5 h-3.5 mr-2 text-indigo-400" /> {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="pt-6 border-t border-slate-800">
                    <a 
                        href={sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center bg-white text-slate-900 hover:bg-indigo-50 font-bold py-4 px-6 rounded-xl transition-all shadow-lg hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                    >
                        {item.type === ContentType.FILM ? 'Watch Documentary' : 'Read Full Article'} 
                        <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                    <button 
                        onClick={onClose}
                        className="w-full mt-3 py-3 text-slate-500 hover:text-slate-300 font-medium transition-colors text-sm"
                    >
                        Close Details
                    </button>
                </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContentModal;