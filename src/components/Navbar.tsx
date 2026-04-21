import { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

const links = [
  { href: '#tentang', label: 'Tentang' },
  { href: '#menu', label: 'Menu' },
  { href: '#keunggulan', label: 'Keunggulan' },
  { href: '#cara-pesan', label: 'Cara Pesan' },
  { href: '#kontak', label: 'Kontak' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLink = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-leaf-900/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between">
        <a
          href="#"
          className="flex items-center gap-2 group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-9 h-9 bg-palm-400 rounded-full flex items-center justify-center group-hover:bg-palm-300 transition-colors">
            <Leaf className="w-5 h-5 text-white" />
          </div>
          <span className="font-serif font-bold text-xl text-white tracking-wide">
            Lupis Tiktik
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => handleLink(l.href)}
              className="px-4 py-2 text-white/80 hover:text-white font-sans text-sm font-500 hover:bg-white/10 rounded-lg transition-all duration-200"
            >
              {l.label}
            </button>
          ))}
          <a
            href="https://wa.me/6287756846953"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 px-5 py-2 bg-palm-500 hover:bg-palm-400 text-white font-sans font-600 text-sm rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-palm-500/30"
          >
            Pesan Sekarang
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-leaf-900/98 backdrop-blur-md border-t border-white/10 px-5 py-4 flex flex-col gap-1">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => handleLink(l.href)}
              className="text-left px-4 py-3 text-white/80 hover:text-white font-sans text-base rounded-lg hover:bg-white/10 transition-all"
            >
              {l.label}
            </button>
          ))}
          <a
            href="https://wa.me/6287756846953"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 px-5 py-3 bg-palm-500 hover:bg-palm-400 text-white font-sans font-600 text-base rounded-full text-center transition-colors"
          >
            Pesan Sekarang
          </a>
        </div>
      )}
    </header>
  );
}
