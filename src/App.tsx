import { CartProvider } from './context/CartContext';
import { Toaster } from './components/ui/sonner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductGrid } from './components/ProductGrid';
import { CategorySection } from './components/CategorySection';
import { Footer } from './components/Footer';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
        <Navbar />
        <main>
          <Hero />
          
          <div className="py-12 bg-secondary/20">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                <div className="text-center">
                  <p className="text-2xl font-bold">100%</p>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Premium Cotton</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">Free</p>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Shipping Over $100</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">30 Day</p>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Return Policy</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">24/7</p>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Customer Support</p>
                </div>
              </div>
            </div>
          </div>

          <ProductGrid title="New Arrivals" />
          
          <CategorySection />
          
          <ProductGrid id="vests" category="Vests" title="The Vest Collection" />
          
          <section className="bg-primary py-20 text-primary-foreground">
            <div className="container mx-auto px-4 text-center">
              <h2 className="mb-6 font-serif text-4xl font-bold">Join the Collection</h2>
              <p className="mx-auto mb-10 max-w-xl text-lg opacity-90">
                Subscribe to our newsletter to receive updates on new arrivals, special offers, and styling tips.
              </p>
              <div className="mx-auto flex max-w-md gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 rounded-md bg-primary-foreground/10 px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button className="rounded-md bg-white px-8 py-3 font-bold text-primary transition-colors hover:bg-slate-100">
                  Subscribe
                </button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
        <Toaster position="bottom-right" />
      </div>
    </CartProvider>
  );
}

export default App;