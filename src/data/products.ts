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

// Gerando 300 produtos de jogos (tabuleiro, card games e mídias físicas)
export const gamesProducts: Product[] = Array.from({ length: 300 }, (_, i) => {
  const categories = ['Jogo de Tabuleiro', 'Card Game', 'Mídia Física', 'RPG de Mesa'];
  const brands = ['Galápagos', 'Copag', 'Magic', 'Yu-Gi-Oh!', 'Pokémon', 'Devir', 'Grow'];
  const subcats = ['Estratégia', 'Família', 'Party Game', 'Cooperativo', 'Deck Building', 'Guerra', 'Aventura'];
  
  const category = categories[i % categories.length];
  const brand = brands[i % brands.length];
  const subcat = subcats[i % subcats.length];
  
  const basePrice = 39.99 + (i % 12) * 15;
  const hasDiscount = i % 5 === 0;
  const mainImage = productImages[i % productImages.length];
  
  return {
    id: `game-${i + 1}`,
    name: `${brand} ${category} ${subcat} Edition ${i + 1}`,
    description: `${category} ${subcat.toLowerCase()} da ${brand}. Produto oficial lacrado com alta qualidade e acabamento premium.`,
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
      'Tipo': category,
      'Jogadores': category === 'Jogo de Tabuleiro' ? `${2 + (i % 4)}-${4 + (i % 4)}` : 'N/A',
      'Duração': category === 'Jogo de Tabuleiro' ? `${30 + (i % 90)} min` : 'N/A',
      'Idade': `+${8 + (i % 10)}`,
      'Idioma': ['Português', 'Inglês', 'Multilíngue'][i % 3],
      'Ano': `202${3 - (i % 4)}`,
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

// Gerando 300 produtos de colecionáveis (action figures, LEGO, estátuas)
export const collectiblesProducts: Product[] = Array.from({ length: 300 }, (_, i) => {
  const categories = ['Action Figure', 'LEGO', 'Estátua', 'Miniatura'];
  const brands = ['Bandai', 'Hasbro', 'Funko', 'LEGO', 'Iron Studios', 'Prime 1', 'Hot Toys'];
  const subcats = ['Anime', 'Star Wars', 'Marvel', 'DC Comics', 'Harry Potter', 'Disney', 'Games'];
  
  const category = categories[i % categories.length];
  const brand = brands[i % brands.length];
  const subcat = subcats[i % subcats.length];
  
  const basePrice = 89.99 + (i % 15) * 35;
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
      'Altura': category === 'Action Figure' ? `${12 + (i % 25)}cm` : 'N/A',
      'Peças': category === 'LEGO' ? `${500 + (i % 2000)}` : 'N/A',
      'Escala': category === 'Estátua' ? ['1/4', '1/6', '1/10'][i % 3] : 'N/A',
      'Material': ['PVC/ABS', 'Resina', 'PVC', 'Metal'][i % 4],
      'Edição': i % 3 === 0 ? 'Limitada' : 'Regular',
      'Ano': `202${3 - (i % 4)}`,
    },
    type: 'collectibles',
  };
});

// Vídeos únicos para tech
const techVideos = [
  'p4CDDBxZLJM', 'ZWGr7w9HRvM', 'KU2sSZ_90PY', 'M9PxXm2rIaQ', 'nrJEE_mhqM0',
  'VBDoT8o4q00', 'zkiIW0Twj3U', 'k1Q8ksRI1Eo', '_Uz9W9CYz84', '5LuI7_bS0qc'
];

// Gerando 300 produtos de tecnologia (computadores, periféricos, componentes)
export const techProducts: Product[] = Array.from({ length: 300 }, (_, i) => {
  const categories = ['Computador', 'Periférico', 'Componente', 'Notebook'];
  const brands = ['Intel', 'AMD', 'Nvidia', 'Corsair', 'Logitech', 'Razer', 'HyperX', 'Asus'];
  const subcats = ['Gamer', 'Profissional', 'Home Office', 'Streaming', 'Criação de Conteúdo'];
  
  const category = categories[i % categories.length];
  const brand = brands[i % brands.length];
  const subcat = subcats[i % subcats.length];
  
  const basePrice = 299.99 + (i % 20) * 150;
  const hasDiscount = i % 6 === 0;
  const mainImage = productImages[i % productImages.length];
  
  return {
    id: `tech-${i + 1}`,
    name: `${brand} ${category} ${subcat} ${i + 1}`,
    description: `${category} ${brand} para ${subcat.toLowerCase()}. Produto novo com garantia do fabricante e alta performance.`,
    price: hasDiscount ? basePrice * 0.9 : basePrice,
    originalPrice: hasDiscount ? basePrice : undefined,
    category,
    subcategory: subcat,
    brand,
    image: mainImage,
    images: [mainImage, mainImage, mainImage],
    inStock: i % 10 !== 0,
    rating: 4.2 + (i % 8) / 10,
    reviews: 80 + (i % 300),
    videoUrl: `https://www.youtube.com/embed/${techVideos[i % techVideos.length]}`,
    specs: {
      'Tipo': category,
      'Processador': category === 'Computador' || category === 'Notebook' ? `${brand} Core i${5 + (i % 4)}` : 'N/A',
      'Memória RAM': category === 'Computador' || category === 'Notebook' ? `${8 + (i % 3) * 8}GB` : 'N/A',
      'Armazenamento': category === 'Computador' || category === 'Notebook' ? `${256 + (i % 4) * 256}GB SSD` : 'N/A',
      'Conexão': category === 'Periférico' ? ['USB', 'Wireless', 'Bluetooth'][i % 3] : 'N/A',
      'Garantia': `${1 + (i % 3)} ano(s)`,
      'Cor': ['Preto', 'Branco', 'RGB'][i % 3],
    },
    type: 'tech' as 'games' | 'collectibles',
  };
});

export const allProducts = [...gamesProducts, ...collectiblesProducts, ...techProducts];
