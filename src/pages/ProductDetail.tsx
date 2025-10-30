import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useCart } from '@/contexts/CartContext';
import { useFavorites } from '@/contexts/FavoritesContext';
import { allProducts } from '@/data/products';
import { ShoppingCart, Star, Package, Shield, Truck, ArrowLeft, Calculator, Play, Heart } from 'lucide-react';
import { useState } from 'react';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  const [cep, setCep] = useState('');
  const [frete, setFrete] = useState<{ valor: number; prazo: number } | null>(null);
  
  const product = allProducts.find(p => p.id === id);

  const calcularFrete = () => {
    if (cep.length === 8) {
      const valorFrete = Math.random() * 30 + 10;
      const prazo = Math.floor(Math.random() * 10) + 3;
      setFrete({ valor: valorFrete, prazo });
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-bold mb-4">Produto não encontrado</h1>
          <Link to="/">
            <Button>Voltar para Home</Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8">
        <Link to={product.type === 'games' ? '/jogos' : '/colecionaveis'}>
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar
          </Button>
        </Link>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Images */}
          <div>
            <Card className="aspect-square overflow-hidden mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </Card>
            <div className="grid grid-cols-3 gap-2">
              {product.images.map((img, idx) => (
                <Card key={idx} className="aspect-square overflow-hidden cursor-pointer hover:ring-2 hover:ring-primary transition-all">
                  <img src={img} alt={`${product.name} ${idx + 1}`} className="w-full h-full object-cover" />
                </Card>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="flex items-start gap-2 mb-2">
              <Badge variant="secondary">{product.category}</Badge>
              {discountPercent > 0 && (
                <Badge variant="destructive">-{discountPercent}%</Badge>
              )}
              {!product.inStock && (
                <Badge variant="outline">Fora de Estoque</Badge>
              )}
            </div>

            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(product.rating)
                        ? 'fill-accent text-accent'
                        : 'text-muted-foreground'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {product.rating.toFixed(1)} ({product.reviews} avaliações)
              </span>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-4xl font-bold text-primary">
                  R$ {product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">
                    R$ {product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
              <p className="text-sm text-muted-foreground">
                em até 12x de R$ {(product.price / 12).toFixed(2)} sem juros
              </p>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              {product.description}
            </p>

            {/* Calculadora de Frete */}
            <Card className="p-4 mb-4 bg-muted/50">
              <div className="flex items-center gap-2 mb-3">
                <Calculator className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">Calcular Frete e Prazo</h3>
              </div>
              <div className="flex gap-2">
                <div className="flex-1">
                  <Input
                    placeholder="Digite seu CEP"
                    value={cep}
                    onChange={(e) => setCep(e.target.value.replace(/\D/g, ''))}
                    maxLength={8}
                  />
                </div>
                <Button onClick={calcularFrete} variant="secondary">
                  Calcular
                </Button>
              </div>
              {frete && (
                <div className="mt-3 p-3 bg-card rounded-md border">
                  <p className="text-sm font-medium">
                    Frete: R$ {frete.valor.toFixed(2)}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Entrega em até {frete.prazo} dias úteis
                  </p>
                </div>
              )}
            </Card>

            <Button
              size="lg"
              className="w-full mb-4"
              onClick={() => addToCart(product)}
              disabled={!product.inStock}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              {product.inStock ? 'Adicionar ao Carrinho' : 'Fora de Estoque'}
            </Button>

            <Button
              size="lg"
              variant={isFavorite(product.id) ? "secondary" : "outline"}
              className="w-full mb-4"
              onClick={() => {
                if (isFavorite(product.id)) {
                  removeFromFavorites(product.id);
                } else {
                  addToFavorites(product);
                }
              }}
            >
              <Heart className={`mr-2 h-5 w-5 ${isFavorite(product.id) ? 'fill-current' : ''}`} />
              {isFavorite(product.id) ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}
            </Button>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <Truck className="h-6 w-6 mx-auto mb-2 text-primary" />
                <p className="text-xs text-muted-foreground">Frete Grátis</p>
              </div>
              <div className="text-center">
                <Shield className="h-6 w-6 mx-auto mb-2 text-secondary" />
                <p className="text-xs text-muted-foreground">Compra Segura</p>
              </div>
              <div className="text-center">
                <Package className="h-6 w-6 mx-auto mb-2 text-accent" />
                <p className="text-xs text-muted-foreground">Garantia</p>
              </div>
            </div>

            <Separator className="my-6" />

            <div>
              <h3 className="font-semibold mb-4">Especificações</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Marca:</span>
                  <span className="font-medium">{product.brand}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Categoria:</span>
                  <span className="font-medium">{product.subcategory}</span>
                </div>
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{key}:</span>
                    <span className="font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Seção de Detalhes Expandida */}
        <Tabs defaultValue="descricao" className="mb-12">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="descricao">Descrição Completa</TabsTrigger>
            <TabsTrigger value="video">Vídeo do Produto</TabsTrigger>
            <TabsTrigger value="avaliacoes">Avaliações</TabsTrigger>
          </TabsList>
          
          <TabsContent value="descricao" className="mt-6">
            <Card className="p-6">
              <h3 className="text-2xl font-bold mb-4">Sobre este produto</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>{product.description}</p>
                <p>
                  Este produto foi cuidadosamente selecionado para nossa coleção e atende aos mais altos 
                  padrões de qualidade. Ideal para colecionadores e entusiastas que buscam autenticidade 
                  e excelência em cada detalhe.
                </p>
                <p>
                  Garantimos a originalidade de todos os nossos produtos. Cada item passa por rigoroso 
                  controle de qualidade antes de ser disponibilizado em nossa loja, assegurando que você 
                  receba exatamente o que espera.
                </p>
                <div className="mt-6">
                  <h4 className="font-semibold text-foreground mb-2">Características principais:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Produto 100% original e licenciado</li>
                    <li>Embalagem original lacrada</li>
                    <li>Garantia de autenticidade</li>
                    <li>Atendimento especializado</li>
                    <li>Entrega rápida e segura</li>
                  </ul>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="video" className="mt-6">
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Play className="h-5 w-5 text-primary" />
                <h3 className="text-2xl font-bold">Vídeo do Produto</h3>
              </div>
              <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src={product.videoUrl}
                  title="Vídeo do Produto"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Assista ao vídeo para conhecer todos os detalhes e características deste produto incrível.
              </p>
            </Card>
          </TabsContent>

          <TabsContent value="avaliacoes" className="mt-6">
            <Card className="p-6">
              <h3 className="text-2xl font-bold mb-4">Avaliações dos Clientes</h3>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="border-b pb-4 last:border-0">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, idx) => (
                          <Star key={idx} className="h-4 w-4 fill-accent text-accent" />
                        ))}
                      </div>
                      <span className="font-medium">Cliente {i}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Produto excelente! Chegou rápido e muito bem embalado. 
                      Superou minhas expectativas em todos os aspectos.
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
