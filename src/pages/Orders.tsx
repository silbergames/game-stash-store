import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';
import { Package, ShoppingBag } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const Orders = () => {
  const { orders } = useCart();

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'secondary';
      case 'processing':
        return 'default';
      case 'shipped':
        return 'default';
      case 'delivered':
        return 'secondary';
      default:
        return 'secondary';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'pending':
        return 'Pendente';
      case 'processing':
        return 'Processando';
      case 'shipped':
        return 'Enviado';
      case 'delivered':
        return 'Entregue';
      default:
        return status;
    }
  };

  if (orders.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <Package className="h-24 w-24 mx-auto mb-6 text-muted-foreground" />
            <h1 className="text-3xl font-bold mb-4">Nenhum pedido encontrado</h1>
            <p className="text-muted-foreground mb-8">
              Você ainda não realizou nenhuma compra. Comece agora!
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/jogos">
                <Button size="lg">Explorar Jogos</Button>
              </Link>
              <Link to="/colecionaveis">
                <Button size="lg" variant="secondary">Ver Colecionáveis</Button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Meus Pedidos</h1>

        <div className="space-y-6 max-w-4xl">
          {orders.map((order) => (
            <Card key={order.id} className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-lg mb-1">Pedido #{order.id}</h3>
                  <p className="text-sm text-muted-foreground">
                    {format(new Date(order.date), "dd 'de' MMMM 'de' yyyy 'às' HH:mm", {
                      locale: ptBR,
                    })}
                  </p>
                </div>
                <Badge variant={getStatusColor(order.status)}>
                  {getStatusLabel(order.status)}
                </Badge>
              </div>

              <div className="space-y-3 mb-4">
                {order.items.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <Link to={`/produto/${item.id}`}>
                        <p className="font-medium text-sm hover:text-primary transition-colors">
                          {item.name}
                        </p>
                      </Link>
                      <p className="text-sm text-muted-foreground">
                        Quantidade: {item.quantity} × R$ {item.price.toFixed(2)}
                      </p>
                    </div>
                    <p className="font-semibold text-sm">
                      R$ {(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t">
                <span className="font-semibold">Total do Pedido</span>
                <span className="text-xl font-bold text-primary">
                  R$ {order.total.toFixed(2)}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Orders;
