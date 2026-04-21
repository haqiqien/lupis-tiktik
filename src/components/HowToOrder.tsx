import { MessageCircle, ShoppingBasket, MapPin, CreditCard } from 'lucide-react';
import { useIntersection } from '../hooks/useIntersection';

const steps = [
  {
    step: '01',
    icon: MessageCircle,
    title: 'Hubungi WhatsApp',
    desc: 'Kirim pesan ke nomor WhatsApp kami. Kami siap membantu Anda memilih menu yang paling sesuai.',
  },
  {
    step: '02',
    icon: ShoppingBasket,
    title: 'Pilih Jumlah Pesanan',
    desc: 'Tentukan jumlah dan jenis lupis yang Anda inginkan. Tersedia berbagai pilihan porsi untuk kebutuhan Anda.',
  },
  {
    step: '03',
    icon: MapPin,
    title: 'Tentukan Lokasi Pengiriman',
    desc: 'Beritahu alamat pengiriman Anda. Kami melayani area Surakarta dan sekitarnya.',
  },
  {
    step: '04',
    icon: CreditCard,
    title: 'Konfirmasi Pembayaran',
    desc: 'Lakukan pembayaran sesuai instruksi dan lupis segar kami segera disiapkan untuk Anda.',
  },
];

export default function HowToOrder() {
  const { ref, visible } = useIntersection();

  return (
    <section id="cara-pesan" className="py-24 bg-cream-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="inline-block bg-leaf-100 text-leaf-700 font-sans font-600 text-sm px-4 py-1.5 rounded-full mb-4">
            Cara Pemesanan
          </div>
          <h2 className="font-serif font-800 text-leaf-900 text-4xl leading-tight mb-4">
            Mudah Dipesan,{' '}
            <span className="text-palm-600 italic">Cepat Sampai</span>
          </h2>
          <p className="font-sans text-gray-500 text-base max-w-lg mx-auto leading-relaxed">
            Hanya 4 langkah mudah untuk menikmati lupis segar langsung di rumah Anda.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.step}
                className="relative bg-white rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-3 z-10 w-6 h-0.5 bg-leaf-200" />
                )}
                <div className="flex items-start gap-4 mb-4">
                  <span className="font-serif font-800 text-5xl text-leaf-100 leading-none select-none group-hover:text-leaf-200 transition-colors">
                    {s.step}
                  </span>
                  <div className="w-11 h-11 bg-leaf-700 group-hover:bg-palm-500 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <h3 className="font-serif font-700 text-leaf-900 text-lg mb-2">
                  {s.title}
                </h3>
                <p className="font-sans text-gray-500 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <a
            href="https://wa.me/6287756846953?text=Halo%20Lupis%20Tiktik!%20Saya%20ingin%20memesan%20lupis."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-leaf-700 hover:bg-leaf-600 text-white font-sans font-700 text-base px-10 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-leaf-700/30 hover:-translate-y-0.5"
          >
            <MessageCircle className="w-5 h-5" />
            Mulai Pesan Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}
