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
        {/* Promoções */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">🔥 Promoções</h2>
              <p className="text-muted-foreground">Aproveite enquanto durarem os estoques!</p>
            </div>
            <Link to="/jogos">
              <Button variant="ghost">
                Ver Tudo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {promos.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
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
