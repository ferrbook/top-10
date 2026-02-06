import React, { useState } from 'react';
import { ContentItem, ContentType } from '../types';
import { Film, BookOpen, Clock, Hash, Share2, Check, ArrowUpRight } from 'lucide-react';

interface ContentCardProps {
  item: ContentItem;
  onClick: () => void;
}

const ContentCard: React.FC<ContentCardProps> = ({ item, onClick }) => {
  const [copied, setCopied] = useState(false);
  const imageUrl = `https://picsum.photos/seed/${item.id}/600/400`;

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    const link = `${window.location.origin}?content=${item.id}`;
    navigator.clipboard.writeText(link).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }).catch(err => console.error('Failed to copy link: ', err));
  };

  return (
    <div 
        onClick={onClick}
        className="group relative bg-slate-800/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1 cursor-pointer flex flex-col h-full ring-1 ring-white/5"
        role="button"
        tabIndex={0}
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900 animate-pulse"></div>
        <img 
          src={imageUrl} 
          alt={item.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
          loading="lazy"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>

        {/* Top Badges */}
        <div className="absolute top-0 left-0 w-full p-3 flex justify-between items-start">
            <span className={`px-2.5 py-1 text-[10px] font-bold rounded-lg uppercase tracking-wider shadow-lg backdrop-blur-md border border-white/10 ${item.type === ContentType.FILM ? 'bg-indigo-600/90 text-white' : 'bg-emerald-600/90 text-white'}`}>
                {item.type === ContentType.FILM ? 'Documentary' : 'Article'}
            </span>

            <button
                onClick={handleShare}
                className="p-2 bg-slate-900/60 hover:bg-slate-800 text-slate-200 rounded-full backdrop-blur-md transition-all duration-200 border border-white/10 shadow-lg group-hover:scale-105 active:scale-95"
                title="Copy link"
            >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
            </button>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">
        <div className="mb-3">
            <div className="flex justify-between items-start gap-2">
                <h3 className="text-lg font-bold text-slate-100 leading-snug group-hover:text-indigo-400 transition-colors line-clamp-2">
                    {item.title}
                </h3>
                <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-indigo-400 transition-colors flex-shrink-0 opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 duration-300" />
            </div>
            <div className="flex items-center gap-2 mt-2 text-xs font-medium text-slate-400">
                <span className="text-indigo-300/80">{item.source}</span>
                <span className="w-1 h-1 rounded-full bg-slate-600"></span>
                <span className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {item.type === ContentType.FILM ? item.duration : item.readTime}
                </span>
            </div>
        </div>
        
        <p className="text-slate-400 text-sm mb-5 line-clamp-3 leading-relaxed flex-1 border-t border-slate-700/50 pt-3 mt-1">
          {item.description}
        </p>
        
        <div className="flex flex-wrap gap-1.5 mt-auto">
            {item.tags.slice(0, 3).map(tag => (
                <span key={tag} className="flex items-center text-[10px] font-medium bg-slate-700/30 text-slate-400 px-2 py-1 rounded-md border border-slate-700/50 group-hover:border-slate-600 transition-colors">
                    <Hash className="w-2.5 h-2.5 mr-1 opacity-50" /> {tag}
                </span>
            ))}
            {item.tags.length > 3 && (
                <span className="text-[10px] text-slate-500 py-1 px-1">+{item.tags.length - 3}</span>
            )}
        </div>
      </div>
    </div>
  );
};

export default ContentCard;