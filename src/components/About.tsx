import { useIntersection } from "../hooks/useIntersection";
import lupisOri from "../assets/lupis_ori.webp";

export default function About() {
  const { ref, visible } = useIntersection();

  return (
    <section id="tentang" className="py-24 bg-cream-50">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-14 items-center transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-leaf-100 rounded-3xl -z-10" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-palm-100 rounded-2xl -z-10" />
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={lupisOri}
                alt="Lupis tradisional"
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
              <div className="w-12 h-12 bg-leaf-100 rounded-xl flex items-center justify-center text-2xl">
                🌿
              </div>
              <div>
                <p className="font-serif font-700 text-leaf-800 text-sm">
                  100% Alami
                </p>
                <p className="font-sans text-leaf-600 text-xs">
                  Tanpa bahan pengawet
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="inline-block bg-leaf-100 text-leaf-700 font-sans font-600 text-sm px-4 py-1.5 rounded-full mb-4">
              Tentang Kami
            </div>
            <h2 className="font-serif font-800 text-leaf-900 text-4xl leading-tight mb-5">
              Warisan Rasa yang{" "}
              <span className="text-palm-600 italic">Tak Lekang Waktu</span>
            </h2>
            <p className="font-sans text-gray-600 text-base leading-relaxed mb-4">
              Lupis adalah salah satu jajanan pasar tradisional khas Jawa yang
              terbuat dari beras ketan, dibentuk segitiga atau lonjong, lalu
              direbus hingga matang sempurna. Disajikan dengan siram gula merah
              cair yang legit dan taburan kelapa parut segar — setiap gigitan
              adalah perjalanan ke masa kecil yang hangat.
            </p>
            <p className="font-sans text-gray-600 text-base leading-relaxed mb-8">
              Di <strong className="text-leaf-700">Lupis Tiktik</strong>, kami
              menjaga tradisi ini tetap hidup dengan cara yang higienis dan
              modern. Setiap lupis dibuat dari bahan-bahan berkualitas pilihan:
              beras ketan premium, gula merah asli, dan kelapa segar tanpa
              pengawet — disiapkan dengan penuh cinta setiap harinya.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "100%", label: "Bahan Alami" },
                { value: "Fresh", label: "Setiap Hari" },
                { value: "Higienis", label: "Terjamin" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="text-center bg-white rounded-2xl p-4 shadow-sm border border-leaf-100 hover:shadow-md transition-shadow"
                >
                  <p className="font-serif font-800 text-leaf-700 text-xl mb-1">
                    {s.value}
                  </p>
                  <p className="font-sans text-gray-500 text-xs">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
