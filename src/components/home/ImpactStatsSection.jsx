import client1 from "../../assets/Partners/client1.png";
import client2 from "../../assets/Partners/client2.png";
import client4 from "../../assets/Partners/client4.png";
import client5 from "../../assets/Partners/client5.png";
import client6 from "../../assets/Partners/client6.png";
import client8 from "../../assets/Partners/client8.png";
import partnerExtra from "../../assets/Partners/1 (1).png";

const partnerImages = [client1, client2, client4, client5, client6, client8, partnerExtra];

export default function ImpactStatsSection() {
  return (
    <section className="py-16 sm:py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-black text-center mb-12">
          Our Partners
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center">
          {partnerImages.map((src, i) => (
            <div
              key={i}
              className="flex items-center justify-center opacity-90 hover:opacity-100 transition-opacity duration-300"
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
