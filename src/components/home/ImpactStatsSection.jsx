import client1 from "../../assets/Partners/client1.png";
import client2 from "../../assets/Partners/client2.png";
import client3 from "../../assets/Partners/client3.png";
import client4 from "../../assets/Partners/client4.png";
import client6 from "../../assets/Partners/client6.png";
import client8 from "../../assets/Partners/client8.png";

const partnerImages = [client1, client2, client3, client4, client6, client8];

export default function ImpactStatsSection() {
  return (
    <section className="py-16 sm:py-20 bg-light-gray overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-black text-center mb-12">
          Our Partners
        </h2>
        <div className="relative">
          <div
            className="flex gap-12 md:gap-16 items-center"
            style={{
              animation: "partnerScroll 35s linear infinite",
              width: "max-content",
            }}
          >
            {[...partnerImages, ...partnerImages].map((src, i) => (
              <div
                key={i}
                className="flex items-center justify-center shrink-0 opacity-90 hover:opacity-100 transition-opacity"
              >
                <img
                  src={src}
                  alt={`Partner ${(i % partnerImages.length) + 1}`}
                  className="max-h-16 sm:max-h-20 md:max-h-28 lg:max-h-36 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes partnerScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
