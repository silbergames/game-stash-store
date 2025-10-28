import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/contexts/CartContext';
import { allProducts } from '@/data/products';
import { ShoppingCart, Star, Package, Shield, Truck, ArrowLeft } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  
  const product = allProducts.find(p => p.id === id);

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

            <Button
              size="lg"
              className="w-full mb-4"
              onClick={() => addToCart(product)}
              disabled={!product.inStock}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              {product.inStock ? 'Adicionar ao Carrinho' : 'Fora de Estoque'}
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
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
