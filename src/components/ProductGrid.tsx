import React from 'react';
import { motion } from 'framer-motion';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter } from './ui/card';
import { ShoppingBag } from 'lucide-react';

const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Classic Navy Quilted Vest',
    price: 45.99,
    category: 'Vests',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/34403a47-c2b4-4960-b26b-8c8b6c6eaab8/featured-vest-1-25eceaf2-1777026112754.webp',
    description: 'High-quality quilted vest with premium insulation.',
    isFeatured: true
  },
  {
    id: '2',
    name: 'Premium Cotton Tee',
    price: 24.99,
    category: 'Shirts',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/34403a47-c2b4-4960-b26b-8c8b6c6eaab8/mens-tshirt-item-7ceb5147-1777026111943.webp',
    description: 'Soft, breathable cotton for everyday comfort.'
  },
  {
    id: '3',
    name: 'Sky Blue Linen Shirt',
    price: 39.99,
    category: 'Shirts',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/34403a47-c2b4-4960-b26b-8c8b6c6eaab8/mens-linen-shirt-eec53518-1777026112488.webp',
    description: 'Perfect for summer days and casual outings.'
  },
  {
    id: '4',
    name: 'Olive Slim-Fit Chinos',
    price: 54.99,
    category: 'Pants',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/34403a47-c2b4-4960-b26b-8c8b6c6eaab8/mens-chinos-029df3b7-1777026112349.webp',
    description: 'Tailored fit chinos made from high-quality cotton.'
  }
];

export const ProductGrid: React.FC<{ category?: string; title: string; id?: string }> = ({ category, title, id }) => {
  const { addToCart } = useCart();
  
  const filteredProducts = category 
    ? PRODUCTS.filter(p => p.category === category)
    : PRODUCTS;

  return (
    <section id={id} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="font-serif text-4xl font-bold">{title}</h2>
            <div className="mt-2 h-1 w-20 bg-primary" />
          </div>
          <Button variant="link" className="text-primary">View All</Button>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group overflow-hidden border-none bg-secondary/30 shadow-none transition-all hover:bg-secondary/50">
                <CardContent className="p-0">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity group-hover:opacity-100">
                      <Button 
                        onClick={() => addToCart(product)}
                        className="rounded-full shadow-lg"
                      >
                        <ShoppingBag className="mr-2 h-4 w-4" /> Add to Cart
                      </Button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col items-start p-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{product.category}</span>
                  <h3 className="mt-1 font-medium">{product.name}</h3>
                  <p className="mt-1 font-bold text-primary">${product.price.toFixed(2)}</p>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};