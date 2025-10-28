import { Link } from 'react-router-dom';
import { Product } from '@/types/product';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Star } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Card className="group overflow-hidden hover:shadow-[var(--shadow-card-hover)] transition-all duration-300">
      <Link to={`/produto/${product.id}`}>
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      </Link>

      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <Link to={`/produto/${product.id}`} className="flex-1">
            <h3 className="font-semibold text-sm line-clamp-2 group-hover:text-primary transition-colors">
              {product.name}
            </h3>
          </Link>
          {discountPercent > 0 && (
            <Badge variant="destructive" className="text-xs">
              -{discountPercent}%
            </Badge>
          )}
        </div>

        <div className="flex items-center gap-1 mb-2">
          <Star className="h-3 w-3 fill-accent text-accent" />
          <span className="text-xs text-muted-foreground">
            {product.rating.toFixed(1)} ({product.reviews})
          </span>
        </div>

        <p className="text-xs text-muted-foreground mb-3">{product.brand}</p>

        <div className="flex items-end justify-between gap-2">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold text-primary">
                R$ {product.price.toFixed(2)}
              </span>
            </div>
            {product.originalPrice && (
              <span className="text-xs text-muted-foreground line-through">
                R$ {product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          <Button
            size="icon"
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            disabled={!product.inStock}
            className="shrink-0"
          >
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>

        {!product.inStock && (
          <Badge variant="secondary" className="w-full mt-2 justify-center">
            Fora de Estoque
          </Badge>
        )}
      </div>
    </Card>
  );
};

export default ProductCard;
