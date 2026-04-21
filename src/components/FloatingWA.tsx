import { MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function FloatingWA() {
  const [show, setShow] = useState(false);
  const [pulse, setPulse] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 800);
    const pulseTimer = setTimeout(() => setPulse(false), 4000);
    return () => {
      clearTimeout(timer);
      clearTimeout(pulseTimer);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <div className="relative group">
        {pulse && (
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-40" />
        )}
        <a
          href="https://wa.me/6287756846953?text=Halo%20Lupis%20Tiktik!%20Saya%20ingin%20pesan%20lupis."
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-400 text-white rounded-full shadow-2xl shadow-green-500/40 transition-all duration-300 hover:scale-110"
          aria-label="Chat WhatsApp"
        >
          <MessageCircle className="w-7 h-7" />
        </a>
        <div className="absolute bottom-full right-0 mb-3 whitespace-nowrap bg-gray-900 text-white font-sans text-xs font-500 px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Pesan via WhatsApp
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900" />
        </div>
      </div>
    </div>
  );
}
