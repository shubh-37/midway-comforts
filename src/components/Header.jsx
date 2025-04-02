import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { ScrollProgress } from './magicui/scroll-progress';
import midwayLogo from '@/assets/midway-logo.jpg';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Products', href: '/products' },
  { name: 'Key Projects', href: '/projects' },
  { name: 'AC Guide', href: '/ac-guide' },
  { name: 'AC Calculator', href: '/calculator' }
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm transition-all duration-300',
        scrolled ? 'shadow-md' : ''
      )}
    >
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center transition-transform duration-300 hover:scale-105">
          <div className="w-44">
            <img src={midwayLogo} alt="Midway Comforts" />
          </div>
        </Link>

        <nav className="hidden md:flex md:items-center md:space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="relative text-sm font-medium text-gray-700 transition-colors hover:text-blue-600 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <ScrollProgress className="top-[65px]" />
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <button className="inline-flex h-10 w-10 items-center justify-center rounded-md text-gray-700 transition-colors  hover:bg-gray-100 hover:text-blue-600">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[80%] sm:w-[350px] bg-white">
            <nav className="mt-10 ml-5 flex flex-col space-y-6">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    'text-base font-medium text-gray-700 transition-all hover:text-blue-600 hover:translate-x-1',
                    'animate-fadeIn'
                  )}
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
