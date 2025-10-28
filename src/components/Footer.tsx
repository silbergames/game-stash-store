import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t bg-card mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4 bg-gradient-to-r from-primary to-[hsl(220,83%,58%)] bg-clip-text text-transparent">
              GameCollect
            </h3>
            <p className="text-sm text-muted-foreground">
              Sua loja especializada em jogos, action figures e colecionáveis.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-primary transition-colors">Início</Link></li>
              <li><Link to="/jogos" className="hover:text-primary transition-colors">Jogos & Figures</Link></li>
              <li><Link to="/colecionaveis" className="hover:text-primary transition-colors">Colecionáveis</Link></li>
              <li><Link to="/sobre" className="hover:text-primary transition-colors">Sobre Nós</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Suporte</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/pedidos" className="hover:text-primary transition-colors">Meus Pedidos</Link></li>
              <li><Link to="/carrinho" className="hover:text-primary transition-colors">Carrinho</Link></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Redes Sociais</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">YouTube</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; 2025 GameCollect. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
