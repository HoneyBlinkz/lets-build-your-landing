import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';

export const CategorySection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-950 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 border border-primary/20" />
            <img
              src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/34403a47-c2b4-4960-b26b-8c8b6c6eaab8/vest-collection-banner-8451475d-1777026112055.webp"
              alt="Vest Collection"
              className="relative z-10 w-full rounded-sm object-cover shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-sm font-bold tracking-[0.3em] text-primary uppercase">Speciality Collection</h2>
            <h3 className="mb-6 font-serif text-4xl font-bold md:text-5xl">The Signature Vest Collection</h3>
            <p className="mb-8 text-lg text-slate-400">
              Our vests are engineered for the modern man. Whether it's for a formal event or a casual weekend outing, 
              D-Blinkz vests offer unmatched quality and style at prices that make sense.
            </p>
            <ul className="mb-8 space-y-4">
              <li className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-primary">✓</span>
                <span>Premium Grade Fabrics</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-primary">✓</span>
                <span>Versatile Year-Round Styling</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-primary">✓</span>
                <span>Exceptional Value for Quality</span>
              </li>
            </ul>
            <Button size="lg" className="h-14 px-10 text-lg">
              Explore Vests
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};