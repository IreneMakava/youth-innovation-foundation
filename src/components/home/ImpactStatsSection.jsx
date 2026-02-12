const partnerModules = import.meta.glob("../assets/Partners/*.png", { eager: true });
const partnerImages = Object.values(partnerModules).map((m) => m.default);

export default function ImpactStatsSection() {
  return (
    <section className="py-16 sm:py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center">
          {partnerImages.map((src, i) => (
            <div
              key={i}
              className="flex items-center justify-center grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition-all duration-300"
            >
              <img
                src={src}
                alt={`Partner ${i + 1}`}
                className="max-h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
