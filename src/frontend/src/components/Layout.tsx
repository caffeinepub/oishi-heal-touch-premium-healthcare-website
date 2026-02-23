import { Outlet, Link, useLocation } from '@tanstack/react-router';
import { Menu, X, Phone, Heart } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/doctors', label: 'Doctors' },
    { href: '/lab-tests', label: 'Lab Tests' },
    { href: '/why-us', label: 'Why Us' },
    { href: '/about', label: 'About' },
    { href: '/testimonials', label: 'Testimonials' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-16 md:h-20 items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-primary to-accent">
                <Heart className="w-5 h-5 md:w-6 md:h-6 text-white fill-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg md:text-xl font-bold text-foreground leading-tight">
                  Oishi Heal Touch
                </span>
                <span className="text-xs text-muted-foreground hidden sm:block">Premium Healthcare</span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    location.pathname === link.href
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-2">
              <Button asChild className="hidden md:flex" size="default">
                <a href="tel:9875539688">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </a>
              </Button>

              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="lg:hidden">
                    {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[280px] sm:w-[320px]">
                  <nav className="flex flex-col space-y-1 mt-8">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                          location.pathname === link.href
                            ? 'text-primary bg-primary/10'
                            : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-gradient-to-br from-slate-50 to-slate-100 border-t mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent">
                  <Heart className="w-5 h-5 text-white fill-white" />
                </div>
                <span className="text-lg font-bold text-foreground">Oishi Heal Touch</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Premium, compassionate healthcare in Kolkata. Trusted Pathkind Lab Partner.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/doctors" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Our Doctors
                  </Link>
                </li>
                <li>
                  <Link to="/lab-tests" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Lab Tests
                  </Link>
                </li>
                <li>
                  <Link to="/why-us" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Why Choose Us
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Health Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Services</h3>
              <ul className="space-y-2">
                <li className="text-sm text-muted-foreground">Dermatology</li>
                <li className="text-sm text-muted-foreground">Orthopedic</li>
                <li className="text-sm text-muted-foreground">General Physician</li>
                <li className="text-sm text-muted-foreground">Gynecology</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-sm text-muted-foreground">
                  CIT More, Kalimuddin Sarkar Lane
                  <br />
                  Beleghata, Kolkata – 700010
                </li>
                <li>
                  <a href="tel:9875539688" className="text-sm text-primary hover:underline">
                    +91 98755 39688
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Oishi Heal Touch. All rights reserved. Built with{' '}
              <Heart className="inline w-3 h-3 text-red-500 fill-red-500" /> using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                  typeof window !== 'undefined' ? window.location.hostname : 'oishi-heal-touch'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-4 right-4 z-40 md:hidden">
        <Button asChild size="lg" className="rounded-full shadow-lg">
          <a href="tel:9875539688">
            <Phone className="w-5 h-5 mr-2" />
            Call Now
          </a>
        </Button>
      </div>
    </div>
  );
}
