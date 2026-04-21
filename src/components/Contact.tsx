import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';
import { useIntersection } from '../hooks/useIntersection';

export default function Contact() {
  const { ref, visible } = useIntersection();

  return (
    <section id="kontak" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="inline-block bg-palm-100 text-palm-700 font-sans font-600 text-sm px-4 py-1.5 rounded-full mb-4">
            Kontak & Lokasi
          </div>
          <h2 className="font-serif font-800 text-leaf-900 text-4xl leading-tight mb-4">
            Temukan Kami di{' '}
            <span className="text-palm-600 italic">Surakarta</span>
          </h2>
          <p className="font-sans text-gray-500 text-base max-w-lg mx-auto leading-relaxed">
            Kami siap menerima pesanan dan menjawab pertanyaan Anda setiap hari.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-10 items-start transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="space-y-6">
            <div className="flex gap-5 p-6 bg-cream-50 rounded-2xl hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-leaf-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-leaf-600" />
              </div>
              <div>
                <h3 className="font-serif font-700 text-leaf-900 text-base mb-1">
                  Alamat
                </h3>
                <p className="font-sans text-gray-600 text-sm leading-relaxed">
                  Jl Surya III, Jebres,
                  <br />
                  Surakarta, Jawa Tengah,
                  <br />
                  Indonesia
                </p>
              </div>
            </div>

            <div className="flex gap-5 p-6 bg-cream-50 rounded-2xl hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-leaf-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-leaf-600" />
              </div>
              <div>
                <h3 className="font-serif font-700 text-leaf-900 text-base mb-1">
                  WhatsApp
                </h3>
                <p className="font-sans text-gray-600 text-sm mb-3">
                  087756846953
                </p>
                <a
                  href="https://wa.me/6287756846953"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-leaf-700 hover:bg-leaf-600 text-white font-sans font-600 text-sm px-5 py-2.5 rounded-xl transition-colors duration-200"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat Sekarang
                </a>
              </div>
            </div>

            <div className="flex gap-5 p-6 bg-cream-50 rounded-2xl hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-leaf-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-leaf-600" />
              </div>
              <div>
                <h3 className="font-serif font-700 text-leaf-900 text-base mb-1">
                  Jam Layanan
                </h3>
                <div className="font-sans text-gray-600 text-sm space-y-1">
                  <p>Senin – Sabtu: 07.00 – 18.00 WIB</p>
                  <p>Minggu: 07.00 – 14.00 WIB</p>
                  <p className="text-leaf-600 font-600">Pesan minimal H-1</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-leaf-900 rounded-3xl overflow-hidden shadow-2xl">
              <div className="bg-leaf-800 px-6 py-4 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 bg-leaf-700/60 rounded-full px-4 py-1 text-leaf-300 text-xs font-sans text-center">
                  Lupis Tiktik – Surakarta
                </div>
              </div>
              <div className="p-8 text-center">
                <div className="w-20 h-20 bg-palm-500/20 rounded-full flex items-center justify-center mx-auto mb-5">
                  <MapPin className="w-10 h-10 text-palm-400" />
                </div>
                <h3 className="font-serif font-700 text-white text-xl mb-2">
                  Lupis Tiktik
                </h3>
                <p className="font-sans text-white/60 text-sm mb-6 leading-relaxed">
                  Jl Surya III, Jebres, Surakarta
                  <br />
                  Jawa Tengah, Indonesia
                </p>
                <a
                  href="https://maps.google.com/?q=Jl+Surya+III+Jebres+Surakarta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-palm-500 hover:bg-palm-400 text-white font-sans font-600 text-sm px-6 py-3 rounded-xl transition-colors mb-8"
                >
                  <MapPin className="w-4 h-4" />
                  Buka di Google Maps
                </a>
                <div className="border-t border-white/10 pt-6 grid grid-cols-2 gap-4 text-left">
                  <div>
                    <p className="font-sans text-white/40 text-xs mb-1">Kota</p>
                    <p className="font-sans text-white text-sm font-600">Surakarta</p>
                  </div>
                  <div>
                    <p className="font-sans text-white/40 text-xs mb-1">Kecamatan</p>
                    <p className="font-sans text-white text-sm font-600">Jebres</p>
                  </div>
                  <div>
                    <p className="font-sans text-white/40 text-xs mb-1">Provinsi</p>
                    <p className="font-sans text-white text-sm font-600">Jawa Tengah</p>
                  </div>
                  <div>
                    <p className="font-sans text-white/40 text-xs mb-1">Kontak</p>
                    <p className="font-sans text-white text-sm font-600">0877-5684-6953</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
