import { useState, useMemo } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import ProductFilter from '@/components/ProductFilter';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { techProducts } from '@/data/products';

const Tech = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    categories: [] as string[],
    brands: [] as string[],
    priceRange: [0, 5000] as [number, number],
    inStockOnly: false,
  });

  const categories = useMemo(() => 
    [...new Set(techProducts.map(p => p.category))],
    []
  );

  const brands = useMemo(() => 
    [...new Set(techProducts.map(p => p.brand))],
    []
  );

  const filteredProducts = useMemo(() => {
    return techProducts.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = filters.categories.length === 0 || 
                            filters.categories.includes(product.category);
      
      const matchesBrand = filters.brands.length === 0 || 
                         filters.brands.includes(product.brand);
      
      const matchesPrice = product.price >= filters.priceRange[0] && 
                         product.price <= filters.priceRange[1];
      
      const matchesStock = !filters.inStockOnly || product.inStock;

      return matchesSearch && matchesCategory && matchesBrand && matchesPrice && matchesStock;
    });
  }, [searchTerm, filters]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Tecnologia</h1>
          <p className="text-muted-foreground">
            Computadores, periféricos e componentes de alta performance
          </p>
        </div>

        <div className="mb-6 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
          <Input
            type="text"
            placeholder="Buscar por produtos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 w-full"
          />
        </div>

        <div className="flex gap-6">
          <aside className="w-64 hidden lg:block">
            <ProductFilter
              categories={categories}
              brands={brands}
              onFilterChange={setFilters}
            />
          </aside>

          <div className="flex-1">
            <div className="mb-4">
              <p className="text-muted-foreground">
                {filteredProducts.length} produto(s) encontrado(s)
              </p>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  Nenhum produto encontrado com os filtros selecionados.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Tech;
