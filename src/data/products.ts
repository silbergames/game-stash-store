import { Product } from '@/types/product';
import gameImg from '@/assets/game-1.jpg';
import figureImg from '@/assets/figure-1.jpg';
import legoImg from '@/assets/lego-1.jpg';
import cardImg from '@/assets/card-1.jpg';

// Vídeos únicos para cada produto
const gameVideos = [
  'dQw4w9WgXcQ', 'kJQP7kiw5Fk', '9bZkp7q19f0', 'hTWKbfoikeg', 'jNQXAC9IVRw',
  'uelHwf8o7_U', 'fJ9rUzIMcZQ', 'SX_ViT4Ra7k', '60ItHLz5WEA', 'L_jWHffIx5E'
];

// Imagens dos produtos
const productImages = [gameImg, figureImg, gameImg, figureImg];

// Gerando 300 produtos de jogos e action figures
export const gamesProducts: Product[] = Array.from({ length: 300 }, (_, i) => {
  const categories = ['Videogame', 'Action Figure', 'Console', 'Acessório'];
  const brands = ['Nintendo', 'Sony', 'Xbox', 'Sega', 'Bandai', 'Hasbro', 'Funko'];
  const subcats = ['RPG', 'Ação', 'Aventura', 'Esporte', 'Corrida', 'Luta', 'Estratégia'];
  
  const category = categories[i % categories.length];
  const brand = brands[i % brands.length];
  const subcat = subcats[i % subcats.length];
  
  const basePrice = 59.99 + (i % 10) * 20;
  const hasDiscount = i % 5 === 0;
  const mainImage = productImages[i % productImages.length];
  
  return {
    id: `game-${i + 1}`,
    name: `${brand} ${category} ${subcat} Edition ${i + 1}`,
    description: `Incrível ${category.toLowerCase()} da ${brand} com temática ${subcat.toLowerCase()}. Produto oficial com alta qualidade e acabamento premium.`,
    price: hasDiscount ? basePrice * 0.8 : basePrice,
    originalPrice: hasDiscount ? basePrice : undefined,
    category,
    subcategory: subcat,
    brand,
    image: mainImage,
    images: [mainImage, mainImage, mainImage],
    inStock: i % 15 !== 0,
    rating: 3.5 + (i % 15) / 10,
    reviews: 50 + (i % 200),
    videoUrl: `https://www.youtube.com/embed/${gameVideos[i % gameVideos.length]}`,
    specs: {
      'Material': category === 'Action Figure' ? 'PVC/ABS' : 'Digital',
      'Altura': category === 'Action Figure' ? `${15 + (i % 20)}cm` : 'N/A',
      'Plataforma': category === 'Videogame' ? ['PS5', 'Xbox', 'PC', 'Switch'][i % 4] : 'N/A',
      'Ano': `202${3 - (i % 4)}`,
      'Classificação': ['Livre', '+10', '+12', '+16', '+18'][i % 5],
    },
    type: 'games',
  };
});

// Vídeos únicos para colecionáveis
const collectibleVideos = [
  'YQHsXMglC9A', 'fRh_vgS2dFE', 'OPf0YbXqDm0', 'hY7m5jjJ9mM', '2Vv-BfVoq4g',
  'cz5BWjk4AAo', 'E8gmARGvPlI', 'eWzZ4qqLYb4', 'JGwWNGJdvx8', 'EngW7tLk6R8'
];

// Imagens dos colecionáveis
const collectibleImages = [legoImg, cardImg, legoImg, cardImg];

// Gerando 300 produtos de colecionáveis e legos
export const collectiblesProducts: Product[] = Array.from({ length: 300 }, (_, i) => {
  const categories = ['LEGO', 'Card Game', 'Estátua', 'Miniatura'];
  const brands = ['LEGO', 'Magic', 'Yu-Gi-Oh!', 'Pokémon', 'Iron Studios', 'Prime 1'];
  const subcats = ['Arquitetura', 'Star Wars', 'Marvel', 'DC Comics', 'Harry Potter', 'Disney'];
  
  const category = categories[i % categories.length];
  const brand = brands[i % brands.length];
  const subcat = subcats[i % subcats.length];
  
  const basePrice = 79.99 + (i % 15) * 30;
  const hasDiscount = i % 7 === 0;
  const mainImage = collectibleImages[i % collectibleImages.length];
  
  return {
    id: `collectible-${i + 1}`,
    name: `${brand} ${subcat} ${category} Set ${i + 1}`,
    description: `Colecionável exclusivo ${category.toLowerCase()} com tema ${subcat}. Edição limitada com certificado de autenticidade.`,
    price: hasDiscount ? basePrice * 0.85 : basePrice,
    originalPrice: hasDiscount ? basePrice : undefined,
    category,
    subcategory: subcat,
    brand,
    image: mainImage,
    images: [mainImage, mainImage, mainImage],
    inStock: i % 12 !== 0,
    rating: 4 + (i % 10) / 10,
    reviews: 30 + (i % 150),
    videoUrl: `https://www.youtube.com/embed/${collectibleVideos[i % collectibleVideos.length]}`,
    specs: {
      'Tipo': category,
      'Peças': category === 'LEGO' ? `${500 + (i % 2000)}` : 'N/A',
      'Escala': category === 'Estátua' ? ['1/4', '1/6', '1/10'][i % 3] : 'N/A',
      'Material': ['Plástico', 'Resina', 'PVC', 'Metal'][i % 4],
      'Edição': i % 3 === 0 ? 'Limitada' : 'Regular',
      'Ano': `202${3 - (i % 4)}`,
    },
    type: 'collectibles',
  };
});

export const allProducts = [...gamesProducts, ...collectiblesProducts];
