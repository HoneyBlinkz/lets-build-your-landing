import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-10000 hover:scale-105"
        style={{ backgroundImage: `url('https://storage.googleapis.com/dala-prod-public-storage/generated-images/34403a47-c2b4-4960-b26b-8c8b6c6eaab8/hero-background-aa8467c0-1777026111521.webp')` }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container relative mx-auto flex h-full flex-col justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h2 className="mb-2 text-sm font-bold tracking-[0.3em] text-primary uppercase">Elegance Redefined</h2>
          <h1 className="mb-6 font-serif text-5xl font-bold text-white md:text-7xl">
            Modern Style for the Modern Man
          </h1>
          <p className="mb-8 text-lg text-slate-200 md:text-xl">
            Experience the perfect blend of quality, comfort, and affordability. From tailored vests to everyday essentials.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="h-14 px-8 text-lg">
              Shop Collection <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="h-14 bg-white/10 px-8 text-lg text-white backdrop-blur-sm hover:bg-white/20">
              Our Vests
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};