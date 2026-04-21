import { Sun, ShieldCheck, Leaf, Smile } from 'lucide-react';
import { useIntersection } from '../hooks/useIntersection';

const features = [
  {
    icon: Sun,
    title: 'Dibuat Fresh Setiap Hari',
    desc: 'Lupis kami dibuat segar setiap pagi hari. Tidak ada produk kemarin — pastikan Anda mendapatkan yang terbaik.',
    color: 'bg-palm-100 text-palm-600',
  },
  {
    icon: ShieldCheck,
    title: 'Tanpa Bahan Pengawet',
    desc: 'Proses pembuatan 100% alami tanpa bahan pengawet, pewarna buatan, atau bahan kimia tambahan.',
    color: 'bg-leaf-100 text-leaf-600',
  },
  {
    icon: Leaf,
    title: 'Rasa Autentik Tradisional',
    desc: 'Menggunakan resep turun-temurun dengan gula merah asli dan kelapa parut segar dari sumber terpercaya.',
    color: 'bg-leaf-100 text-leaf-700',
  },
  {
    icon: Smile,
    title: 'Harga Terjangkau',
    desc: 'Cita rasa premium dengan harga yang ramah di kantong. Cocok untuk semua kalangan dan semua momen.',
    color: 'bg-palm-100 text-palm-700',
  },
];

export default function Features() {
  const { ref, visible } = useIntersection();

  return (
    <section id="keunggulan" className="py-24 bg-leaf-900 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-leaf-800/50 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-palm-900/30 rounded-full translate-x-1/4 translate-y-1/4" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <div className="inline-block bg-white/10 text-leaf-200 font-sans font-600 text-sm px-4 py-1.5 rounded-full mb-4">
            Keunggulan Kami
          </div>
          <h2 className="font-serif font-800 text-white text-4xl leading-tight mb-4">
            Kenapa Pilih{' '}
            <span className="text-palm-300 italic">Lupis Tiktik?</span>
          </h2>
          <p className="font-sans text-white/60 text-base max-w-lg mx-auto leading-relaxed">
            Kami berkomitmen menghadirkan pengalaman kuliner tradisional yang
            tidak hanya lezat, tetapi juga aman dan menyehatkan.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div
                  className={`w-12 h-12 ${f.color} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-700 text-white text-lg mb-3">
                  {f.title}
                </h3>
                <p className="font-sans text-white/60 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
