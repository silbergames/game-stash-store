import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Gamepad2, Gift, Package, Star, ArrowRight, Sparkles } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { gamesProducts, collectiblesProducts } from '@/data/products';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Home = () => {
  const featuredGames = gamesProducts.slice(0, 4);
  const featuredCollectibles = collectiblesProducts.slice(0, 4);
  const promos = [...gamesProducts, ...collectiblesProducts]
    .filter(p => p.originalPrice)
    .slice(0, 8);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-[hsl(220,83%,58%)] to-primary py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-accent" variant="secondary">
              <Sparkles className="h-3 w-3 mr-1" />
              Ofertas Imperdíveis
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Sua Loja de Jogos e Colecionáveis
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8">
              Encontre os melhores action figures, LEGOs, jogos e colecionáveis em um só lugar!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/jogos">
                <Button size="lg" variant="hero">
                  <Gamepad2 className="mr-2 h-5 w-5" />
                  Explorar Jogos
                </Button>
              </Link>
              <Link to="/colecionaveis">
                <Button size="lg" variant="accent">
                  <Gift className="mr-2 h-5 w-5" />
                  Ver Colecionáveis
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <main className="flex-1 container mx-auto px-4 py-12">
        {/* Banner Promocional Interativo */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Card className="relative overflow-hidden group cursor-pointer hover:shadow-[var(--shadow-card-hover)] transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80 z-10" />
              <img 
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=400&fit=crop" 
                alt="Promoção Jogos"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center p-6">
                <Badge className="mb-4 bg-accent animate-pulse">Até 70% OFF</Badge>
                <h3 className="text-3xl font-bold text-white mb-2">Super Ofertas em Jogos</h3>
                <p className="text-white/90 mb-4">Descontos imperdíveis em títulos AAA</p>
                <Link to="/jogos">
                  <Button size="lg" variant="secondary">
                    Ver Ofertas <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </Card>

            <Card className="relative overflow-hidden group cursor-pointer hover:shadow-[var(--shadow-card-hover)] transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/80 to-primary/80 z-10" />
              <img 
                src="https://images.unsplash.com/photo-1601814933824-fd0b574dd592?w=800&h=400&fit=crop" 
                alt="Promoção Colecionáveis"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center p-6">
                <Badge className="mb-4 bg-secondary animate-pulse">Lançamentos</Badge>
                <h3 className="text-3xl font-bold text-white mb-2">Colecionáveis Exclusivos</h3>
                <p className="text-white/90 mb-4">Edições limitadas chegando</p>
                <Link to="/colecionaveis">
                  <Button size="lg" variant="secondary">
                    Explorar <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </Card>
          </div>

          {/* Vídeo Promocional */}
          <Card className="overflow-hidden mb-6">
            <div className="relative aspect-video bg-muted">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Vídeo Promocional"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </Card>

          {/* Cards Interativos de Ofertas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20 hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 group cursor-pointer">
              <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">🎮</div>
              <h3 className="text-2xl font-bold mb-2">Frete Grátis</h3>
              <p className="text-muted-foreground mb-4">Em compras acima de R$ 199,00</p>
              <Button variant="link" className="p-0 h-auto">
                Saiba mais <ArrowRight className="ml-1 h-3 w-3" />
              </Button>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-accent/10 to-primary/10 border-accent/20 hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 group cursor-pointer">
              <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">💳</div>
              <h3 className="text-2xl font-bold mb-2">Parcelamento</h3>
              <p className="text-muted-foreground mb-4">Em até 12x sem juros no cartão</p>
              <Button variant="link" className="p-0 h-auto">
                Saiba mais <ArrowRight className="ml-1 h-3 w-3" />
              </Button>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-secondary/10 to-accent/10 border-secondary/20 hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 group cursor-pointer">
              <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">🎁</div>
              <h3 className="text-2xl font-bold mb-2">Primeira Compra</h3>
              <p className="text-muted-foreground mb-4">10% OFF no primeiro pedido</p>
              <Button variant="link" className="p-0 h-auto">
                Saiba mais <ArrowRight className="ml-1 h-3 w-3" />
              </Button>
            </Card>
          </div>
        </section>

        {/* Categorias */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Categorias</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/jogos">
              <Card className="p-6 hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 cursor-pointer group">
                <Gamepad2 className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-2">Jogos & Action Figures</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Videogames, consoles, acessórios e figures incríveis
                </p>
                <Button variant="ghost" className="group-hover:text-primary">
                  Explorar <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Card>
            </Link>

            <Link to="/colecionaveis">
              <Card className="p-6 hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 cursor-pointer group">
                <Gift className="h-12 w-12 text-secondary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-2">Colecionáveis & LEGOs</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Estátuas, miniaturas, cards e sets LEGO exclusivos
                </p>
                <Button variant="ghost" className="group-hover:text-primary">
                  Explorar <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Card>
            </Link>

            <Link to="/sobre">
              <Card className="p-6 hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 cursor-pointer group">
                <Package className="h-12 w-12 text-accent mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-2">Sobre Nós</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Conheça nossa história e compromisso com colecionadores
                </p>
                <Button variant="ghost" className="group-hover:text-primary">
                  Saiba Mais <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Card>
            </Link>
          </div>
        </section>

        {/* Destaques Jogos */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">🎮 Jogos em Destaque</h2>
              <p className="text-muted-foreground">Os mais procurados pelos gamers</p>
            </div>
            <Link to="/jogos">
              <Button variant="ghost">
                Ver Tudo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {featuredGames.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Destaques Colecionáveis */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">✨ Colecionáveis em Destaque</h2>
              <p className="text-muted-foreground">Itens exclusivos para sua coleção</p>
            </div>
            <Link to="/colecionaveis">
              <Button variant="ghost">
                Ver Tudo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {featuredCollectibles.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
