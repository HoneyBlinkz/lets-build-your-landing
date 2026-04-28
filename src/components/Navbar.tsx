import React from 'react';
import { ShoppingBag, Menu, User, Search } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { CartDrawer } from './CartDrawer';

export const Navbar: React.FC = () => {
  const { totalItems } = useCart();

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle className="text-left font-serif text-2xl">D-Blinkz</SheetTitle>
              </SheetHeader>
              <div className="mt-8 flex flex-col gap-4 text-lg">
                <a href="#" className="hover:text-primary">Shop All</a>
                <a href="#vests" className="hover:text-primary">Vests</a>
                <a href="#" className="hover:text-primary">New Arrivals</a>
                <a href="#" className="hover:text-primary">About</a>
              </div>
            </SheetContent>
          </Sheet>
          <a href="/" className="font-serif text-2xl font-bold tracking-tighter text-primary">
            D-BLINKZ <span className="text-foreground">COLLECTIONZ</span>
          </a>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">SHOP ALL</a>
          <a href="#vests" className="text-sm font-medium hover:text-primary transition-colors">VESTS</a>
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">NEW ARRIVALS</a>
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">ABOUT</a>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <User className="h-5 w-5" />
          </Button>
          <CartDrawer>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                  {totalItems}
                </span>
              )}
            </Button>
          </CartDrawer>
        </div>
      </div>
    </nav>
  );
};