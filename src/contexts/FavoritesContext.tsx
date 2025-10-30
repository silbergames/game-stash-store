import { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '@/types/product';
import { useToast } from '@/hooks/use-toast';

interface FavoritesContextType {
  favorites: Product[];
  addToFavorites: (product: Product) => void;
  removeFromFavorites: (productId: string) => void;
  isFavorite: (productId: string) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider = ({ children }: { children: React.ReactNode }) => {
  const [favorites, setFavorites] = useState<Product[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    const stored = localStorage.getItem('favorites');
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (product: Product) => {
    setFavorites(prev => {
      if (prev.find(p => p.id === product.id)) {
        return prev;
      }
      toast({
        title: "Adicionado aos favoritos!",
        description: product.name,
      });
      return [...prev, product];
    });
  };

  const removeFromFavorites = (productId: string) => {
    setFavorites(prev => {
      const updated = prev.filter(p => p.id !== productId);
      toast({
        title: "Removido dos favoritos",
      });
      return updated;
    });
  };

  const isFavorite = (productId: string) => {
    return favorites.some(p => p.id === productId);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};
