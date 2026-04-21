import { Leaf, MapPin, Phone, Heart } from 'lucide-react';

const navLinks = [
  { href: '#tentang', label: 'Tentang Kami' },
  { href: '#menu', label: 'Menu' },
  { href: '#keunggulan', label: 'Keunggulan' },
  { href: '#cara-pesan', label: 'Cara Pesan' },
  { href: '#kontak', label: 'Kontak' },
];

export default function Footer() {
  const handleLink = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-leaf-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-palm-400 rounded-full flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="font-serif font-800 text-xl text-white">
                Lupis Tiktik
              </span>
            </div>
            <p className="font-sans text-white/60 text-sm leading-relaxed max-w-xs">
              Menjaga warisan kuliner tradisional Jawa dengan cinta, kebersihan,
              dan kualitas terbaik setiap harinya.
            </p>
          </div>

          <div>
            <h4 className="font-serif font-700 text-white text-base mb-4">
              Navigasi
            </h4>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => handleLink(l.href)}
                    className="font-sans text-white/60 hover:text-palm-300 text-sm transition-colors duration-200"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-700 text-white text-base mb-4">
              Hubungi Kami
            </h4>
            <div className="space-y-3">
              <div className="flex gap-3 items-start">
                <MapPin className="w-4 h-4 text-palm-400 mt-0.5 flex-shrink-0" />
                <p className="font-sans text-white/60 text-sm leading-relaxed">
                  Jl Surya III, Jebres, Surakarta,
                  <br />
                  Jawa Tengah, Indonesia
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <Phone className="w-4 h-4 text-palm-400 flex-shrink-0" />
                <a
                  href="https://wa.me/6287756846953"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-white/60 hover:text-palm-300 text-sm transition-colors"
                >
                  087756846953
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-white/40 text-xs">
            © {new Date().getFullYear()} Lupis Tiktik. All rights reserved.
          </p>
          <p className="font-sans text-white/40 text-xs flex items-center gap-1">
            Dibuat dengan <Heart className="w-3 h-3 text-palm-400 fill-palm-400" /> dari Surakarta
          </p>
        </div>
      </div>
    </footer>
  );
}
