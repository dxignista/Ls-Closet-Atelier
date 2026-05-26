import React from "react";
import { Link } from "wouter";
import { Instagram, Mail, Menu } from "lucide-react";
import { Button } from "./ui/button";

export function Layout({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-serif bg-background text-foreground selection:bg-[#4A2F3D] selection:text-white">
      <header className={`fixed top-0 left-0 right-0 z-50 px-6 py-6 flex items-center justify-between transition-colors duration-300 ${scrolled ? 'bg-background/90 backdrop-blur-md border-b border-white/5' : 'mix-blend-difference text-white'}`}>
        <Link href="/" className="text-xl tracking-widest font-medium z-50 relative">L'S CLOSET ATELIER</Link>
        
        <nav className="hidden md:flex items-center gap-8 text-sm tracking-widest uppercase relative z-50">
          <Link href="/alteration" className="hover:text-primary transition-colors duration-300">Alteration Requests</Link>
          <Link href="/costume" className="hover:text-primary transition-colors duration-300">Couture Costumes</Link>
        </nav>

        <button 
          className="md:hidden z-50 relative"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu className="w-6 h-6" />
        </button>

        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-background z-40 flex flex-col items-center justify-center gap-8 text-lg tracking-widest uppercase">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary transition-colors">Home</Link>
            <Link href="/alteration" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary transition-colors">Alteration Requests</Link>
            <Link href="/costume" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary transition-colors">Couture Costumes</Link>
          </div>
        )}
      </header>

      <main className="flex-1 w-full">
        {children}
      </main>

      <footer className="pt-24 pb-8 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto flex flex-col items-center w-full mt-auto bg-background">
        <h2 className="text-2xl tracking-widest uppercase mb-6 text-foreground">Contact Us</h2>
        <div className="flex items-center gap-6 mb-12">
          <a href="https://instagram.com/lscloset.atelier" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Instagram">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="mailto:lsclosetatelier@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Email">
            <Mail className="w-5 h-5" />
          </a>
        </div>
        <div className="w-full h-px bg-white/10 mb-8"></div>
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-widest text-muted-foreground uppercase">
          <p>© {new Date().getFullYear()} L's Closet Atelier. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
            <a href="https://venmo.com/code?user_id=4605407506990469447&created=1779775604.002775&printed=1" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Pay Invoice</a>
          </div>
        </div>
      </footer>
    </div>
  );
}