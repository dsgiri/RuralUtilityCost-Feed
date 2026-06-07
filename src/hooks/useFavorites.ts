import { useState, useEffect } from 'react';

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('feed_favorites');
      if (stored) {
        setFavorites(JSON.parse(stored));
      }
    } catch (err) {
      console.error('Failed to load favorites', err);
    }
  }, []);

  const toggleFavorite = (id: string) => {
    setFavorites(prev => {
      const isFav = prev.includes(id);
      const next = isFav ? prev.filter(f => f !== id) : [...prev, id];
      try {
        localStorage.setItem('feed_favorites', JSON.stringify(next));
      } catch (err) {
        console.error('Failed to save favorites', err);
      }
      return next;
    });
  };

  const isFavorite = (id: string) => favorites.includes(id);

  return { favorites, toggleFavorite, isFavorite };
}
