import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Heart, Award, Shield, Truck } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-[hsl(220,83%,58%)] bg-clip-text text-transparent">
            Sobre a GameCollect
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Somos mais do que uma loja - somos apaixonados por jogos e colecionáveis!
            Desde 2020, conectamos colecionadores aos itens mais desejados do universo geek.
          </p>
        </div>

        {/* Nossa História */}
        <section className="max-w-4xl mx-auto mb-16">
          <Card className="p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6">Nossa História</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Fundada em 2020 por um grupo de colecionadores apaixonados, a GameCollect nasceu
                do desejo de criar um espaço onde fãs de jogos, action figures e colecionáveis
                pudessem encontrar produtos autênticos e de qualidade.
              </p>
              <p>
                Começamos com uma pequena seleção de produtos e, graças à confiança de nossa
                comunidade, hoje oferecemos um catálogo com mais de 600 itens exclusivos das
                melhores marcas do mercado.
              </p>
              <p>
                Nossa missão é proporcionar uma experiência de compra excepcional, com produtos
                originais, preços justos e atendimento personalizado. Cada item em nosso estoque
                é cuidadosamente selecionado para garantir a satisfação dos colecionadores mais
                exigentes.
              </p>
            </div>
          </Card>
        </section>

        {/* Nossos Valores */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Nossos Valores</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center hover:shadow-[var(--shadow-card-hover)] transition-all">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Paixão</h3>
              <p className="text-sm text-muted-foreground">
                Amamos o que fazemos e isso reflete em cada produto que oferecemos
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-[var(--shadow-card-hover)] transition-all">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-4">
                <Award className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Qualidade</h3>
              <p className="text-sm text-muted-foreground">
                Apenas produtos originais e verificados entram em nosso catálogo
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-[var(--shadow-card-hover)] transition-all">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                <Shield className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Confiança</h3>
              <p className="text-sm text-muted-foreground">
                Garantia de autenticidade e segurança em todas as transações
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-[var(--shadow-card-hover)] transition-all">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Compromisso</h3>
              <p className="text-sm text-muted-foreground">
                Entrega rápida e segura para todo o Brasil
              </p>
            </Card>
          </div>
        </section>

        {/* Estatísticas */}
        <section className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 to-secondary/5">
            <h2 className="text-3xl font-bold text-center mb-10">Números que nos Orgulham</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">600+</div>
                <div className="text-sm text-muted-foreground">Produtos</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">10k+</div>
                <div className="text-sm text-muted-foreground">Clientes</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Marcas</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">4.8</div>
                <div className="text-sm text-muted-foreground">Avaliação</div>
              </div>
            </div>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
