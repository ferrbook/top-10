import { ContentItem, ContentType } from '../types';
import { ALL_CONTENT } from '../data/content';

// Simple Linear Congruential Generator for seeded randomness
class SeededRandom {
  private seed: number;

  constructor(seed: number) {
    this.seed = seed;
  }

  // Returns a pseudo-random number between 0 and 1
  next(): number {
    const a = 1664525;
    const c = 1013904223;
    const m = 4294967296; // 2^32
    this.seed = (a * this.seed + c) % m;
    return this.seed / m;
  }
}

function getDailySeed(): number {
  const now = new Date();
  // Create a seed based on the current date (YYYYMMDD)
  // This ensures the seed changes exactly at midnight local time
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  return year * 10000 + month * 100 + day;
}

// Shuffle array using Fisher-Yates algorithm with seeded random
function shuffleArray<T>(array: T[], rng: SeededRandom): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(rng.next() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function getDailyContent(): { films: ContentItem[], articles: ContentItem[] } {
  const seed = getDailySeed();
  const rng = new SeededRandom(seed);

  const allFilms = ALL_CONTENT.filter(c => c.type === ContentType.FILM);
  const allArticles = ALL_CONTENT.filter(c => c.type === ContentType.ARTICLE);

  // Shuffle both lists deterministically based on the date
  const shuffledFilms = shuffleArray(allFilms, rng);
  const shuffledArticles = shuffleArray(allArticles, rng);

  // Return top 10 of each
  // Note: Since our sample data in this demo is small (~20 each), 
  // we might return fewer than 10 unique ones if the list is short. 
  // In a real app, the list would be huge.
  // We will loop nicely if we don't have enough, or just return what we have.
  
  return {
    films: shuffledFilms.slice(0, 10),
    articles: shuffledArticles.slice(0, 10)
  };
}

export function getTimeRemaining(): string {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    
    const diff = tomorrow.getTime() - now.getTime();
    
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}