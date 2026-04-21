import { ChevronDown, MessageCircle } from "lucide-react";
import lupisOri from "../assets/lupis_background.webp";

export default function Hero() {
  const scrollToMenu = () => {
    document.querySelector("#menu")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${lupisOri})`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-leaf-900/90 via-leaf-800/80 to-palm-900/75" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-palm-300/30"
            style={{
              top: `${20 + i * 13}%`,
              left: `${10 + i * 14}%`,
              animationDelay: `${i * 0.4}s`,
              animation: "float 4s ease-in-out infinite",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div
          className="inline-flex items-center gap-2 bg-palm-500/20 border border-palm-400/40 text-palm-200 text-sm font-sans font-500 px-4 py-2 rounded-full mb-6 backdrop-blur-sm"
          style={{ animation: "fadeIn 0.6s ease-out 0.2s both" }}
        >
          <span className="w-2 h-2 bg-palm-400 rounded-full inline-block" />
          Makanan Tradisional Khas Jawa
        </div>

        <h1
          className="font-serif font-800 text-white leading-tight mb-6"
          style={{
            fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
            lineHeight: "1.15",
            animation: "fadeUp 0.7s ease-out 0.4s both",
          }}
        >
          Lupis Tiktik –{" "}
          <span className="text-palm-300 italic">Manisnya Tradisi,</span>
          <br />
          Nikmatnya Setiap Gigitan
        </h1>

        <p
          className="font-sans text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
          style={{ animation: "fadeUp 0.7s ease-out 0.6s both" }}
        >
          Dibuat fresh setiap hari dari beras ketan pilihan, balutan gula merah
          legit dan kelapa parut segar. Cita rasa autentik yang membawa hangat
          kenangan rumah.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          style={{ animation: "fadeUp 0.7s ease-out 0.8s both" }}
        >
          <a
            href="https://wa.me/6287756846953?text=Halo%20Lupis%20Tiktik!%20Saya%20ingin%20pesan%20lupis."
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-palm-500 hover:bg-palm-400 text-white font-sans font-700 text-base px-8 py-4 rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-palm-500/40 hover:-translate-y-0.5"
          >
            <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Pesan Sekarang via WhatsApp
          </a>
          <button
            onClick={scrollToMenu}
            className="flex items-center gap-2 text-white/70 hover:text-white font-sans font-500 text-base transition-colors duration-200"
          >
            Lihat Menu
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </button>
        </div>
      </div>

      <button
        onClick={scrollToMenu}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/70 transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8 animate-bounce" />
      </button>
    </section>
  );
}
