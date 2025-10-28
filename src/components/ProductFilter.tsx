import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

interface ProductFilterProps {
  categories: string[];
  brands: string[];
  onFilterChange: (filters: FilterState) => void;
}

export interface FilterState {
  categories: string[];
  brands: string[];
  priceRange: [number, number];
  inStockOnly: boolean;
}

const ProductFilter = ({ categories, brands, onFilterChange }: ProductFilterProps) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [inStockOnly, setInStockOnly] = useState(false);

  const handleCategoryToggle = (category: string) => {
    const newCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];
    setSelectedCategories(newCategories);
    applyFilters(newCategories, selectedBrands, priceRange, inStockOnly);
  };

  const handleBrandToggle = (brand: string) => {
    const newBrands = selectedBrands.includes(brand)
      ? selectedBrands.filter((b) => b !== brand)
      : [...selectedBrands, brand];
    setSelectedBrands(newBrands);
    applyFilters(selectedCategories, newBrands, priceRange, inStockOnly);
  };

  const handlePriceChange = (value: number[]) => {
    const newRange: [number, number] = [value[0], value[1]];
    setPriceRange(newRange);
    applyFilters(selectedCategories, selectedBrands, newRange, inStockOnly);
  };

  const handleStockToggle = (checked: boolean) => {
    setInStockOnly(checked);
    applyFilters(selectedCategories, selectedBrands, priceRange, checked);
  };

  const applyFilters = (
    cats: string[],
    brds: string[],
    price: [number, number],
    stock: boolean
  ) => {
    onFilterChange({
      categories: cats,
      brands: brds,
      priceRange: price,
      inStockOnly: stock,
    });
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedBrands([]);
    setPriceRange([0, 1000]);
    setInStockOnly(false);
    onFilterChange({
      categories: [],
      brands: [],
      priceRange: [0, 1000],
      inStockOnly: false,
    });
  };

  return (
    <Card className="p-4 sticky top-20">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-lg">Filtros</h3>
        <Button variant="ghost" size="sm" onClick={clearFilters}>
          Limpar
        </Button>
      </div>

      <Separator className="mb-4" />

      {/* Categorias */}
      <div className="mb-6">
        <Label className="text-sm font-semibold mb-3 block">Categoria</Label>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                id={`cat-${category}`}
                checked={selectedCategories.includes(category)}
                onCheckedChange={() => handleCategoryToggle(category)}
              />
              <label
                htmlFor={`cat-${category}`}
                className="text-sm cursor-pointer flex-1"
              >
                {category}
              </label>
            </div>
          ))}
        </div>
      </div>

      <Separator className="mb-4" />

      {/* Marcas */}
      <div className="mb-6">
        <Label className="text-sm font-semibold mb-3 block">Marca</Label>
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {brands.map((brand) => (
            <div key={brand} className="flex items-center space-x-2">
              <Checkbox
                id={`brand-${brand}`}
                checked={selectedBrands.includes(brand)}
                onCheckedChange={() => handleBrandToggle(brand)}
              />
              <label
                htmlFor={`brand-${brand}`}
                className="text-sm cursor-pointer flex-1"
              >
                {brand}
              </label>
            </div>
          ))}
        </div>
      </div>

      <Separator className="mb-4" />

      {/* Preço */}
      <div className="mb-6">
        <Label className="text-sm font-semibold mb-3 block">
          Preço: R$ {priceRange[0]} - R$ {priceRange[1]}
        </Label>
        <Slider
          min={0}
          max={1000}
          step={10}
          value={priceRange}
          onValueChange={handlePriceChange}
          className="mt-2"
        />
      </div>

      <Separator className="mb-4" />

      {/* Disponibilidade */}
      <div className="flex items-center space-x-2">
        <Checkbox
          id="inStock"
          checked={inStockOnly}
          onCheckedChange={handleStockToggle}
        />
        <label htmlFor="inStock" className="text-sm cursor-pointer">
          Apenas em estoque
        </label>
      </div>
    </Card>
  );
};

export default ProductFilter;
