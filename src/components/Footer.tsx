import React from 'react';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 pt-20 pb-10 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-serif text-2xl font-bold tracking-tighter text-primary">D-BLINKZ</h3>
            <p className="mt-6 text-slate-400">
              Redefining men's fashion with quality, style, and affordability. Specializing in premium vests and modern essentials for the modern man.
            </p>
            <div className="mt-8 flex gap-4">
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition-colors hover:bg-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition-colors hover:bg-primary">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition-colors hover:bg-primary">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-lg font-bold">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="transition-colors hover:text-primary">Shop All</a></li>
              <li><a href="#vests" className="transition-colors hover:text-primary">Vests Collection</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">New Arrivals</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">About Us</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-lg font-bold">Customer Service</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="transition-colors hover:text-primary">Shipping Policy</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">Returns & Exchanges</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">Size Guide</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">FAQs</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-lg font-bold">Store Info</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span>123 Fashion Ave, Lagos, Nigeria</span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span>+234 800 123 4567</span>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span>hello@dblinkz.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 border-t border-slate-800 pt-8 text-center text-slate-500">
          <p>© {new Date().getFullYear()} D-Blinkz Collectionz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};