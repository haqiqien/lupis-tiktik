import { MessageCircle, Star } from "lucide-react";
import { useIntersection } from "../hooks/useIntersection";
import lupisOri from "../assets/lupis_ori.png";
import lupisKeluarga from "../assets/lupis_keluarga.png";

const products = [
  {
    id: 1,
    name: "Lupis Original",
    desc: "Beras ketan pilihan dengan gula merah cair yang legit dan kelapa parut segar. Tekstur lembut, rasa autentik dan memuaskan.",
    badge: "Best Seller",
    tags: ["Lembut", "Legit", "Autentik"],
    image: lupisOri,
  },
  {
    id: 2,
    name: "Lupis Porsi Keluarga",
    desc: "Paket hemat untuk keluarga atau acara spesial. Lupis original dalam porsi besar — cocok untuk arisan, syukuran, atau oleh-oleh.",
    badge: "Favorit",
    tags: ["Porsi Besar", "Hemat", "Spesial"],
    image: lupisKeluarga,
  },
];

export default function Menu() {
  const { ref, visible } = useIntersection();

  return (
    <section id="menu" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="inline-block bg-palm-100 text-palm-700 font-sans font-600 text-sm px-4 py-1.5 rounded-full mb-4">
            Menu Kami
          </div>
          <h2 className="font-serif font-800 text-leaf-900 text-4xl leading-tight mb-4">
            Pilihan <span className="text-palm-600 italic">Lupis Segar</span>{" "}
            Kami
          </h2>
          <p className="font-sans text-gray-500 text-base max-w-lg mx-auto leading-relaxed">
            Dibuat dari resep turun-temurun dengan sentuhan kebersihan dan
            kualitas terjamin setiap harinya.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-8 max-w-3xl mx-auto transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {products.map((p, i) => (
            <div
              key={p.id}
              className="group bg-cream-50 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative overflow-hidden h-52">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-leaf-900/40 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-palm-500 text-white font-sans font-600 text-xs px-3 py-1 rounded-full">
                    {p.badge}
                  </span>
                </div>
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 rounded-full px-2 py-1">
                  <Star className="w-3 h-3 fill-palm-400 text-palm-400" />
                  <span className="font-sans font-600 text-xs text-gray-700">
                    5.0
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-serif font-700 text-leaf-900 text-xl mb-2">
                  {p.name}
                </h3>
                <p className="font-sans text-gray-500 text-sm leading-relaxed mb-4">
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-leaf-100 text-leaf-700 font-sans text-xs font-600 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={`https://wa.me/6287756846953?text=Halo%20Lupis%20Tiktik!%20Saya%20ingin%20pesan%20${encodeURIComponent(p.name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-leaf-700 hover:bg-leaf-600 text-white font-sans font-600 text-sm py-3 rounded-xl transition-colors duration-200"
                >
                  <MessageCircle className="w-4 h-4" />
                  Pesan via WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="font-sans text-gray-500 text-sm">
            Ingin porsi khusus atau pertanyaan lain?{" "}
            <a
              href="https://wa.me/6287756846953"
              target="_blank"
              rel="noopener noreferrer"
              className="text-palm-600 font-600 hover:underline"
            >
              Hubungi kami langsung
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
