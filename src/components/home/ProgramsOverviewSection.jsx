import e2 from "../../assets/Events/Events1/E2.jpg";
import e3 from "../../assets/Events/Events1/E3.jpg";
import e4 from "../../assets/Events/Events1/E4.jpg";
import { Link } from "react-router-dom";

const event1Images = [e2, e3, e4];

export default function ProgramsOverviewSection() {
  return (
    <section className="py-16 sm:py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-black text-center mb-4">
          Our Events
        </h2>
        <p className="text-gray text-center max-w-2xl mx-auto mb-12">
          Highlights from our community and partnership activities.
        </p>

        <article className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
            {event1Images.map((src, i) => (
              <div key={i} className="aspect-[4/3] bg-gray-100">
                <img
                  src={src}
                  alt={`Seris Foundation donation event ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="p-6 sm:p-8">
            <p className="text-sm text-primary font-semibold mb-2">1st December 2025</p>
            <h3 className="text-xl sm:text-2xl font-bold text-black mb-4 leading-snug">
              Seris Foundation Donates Medical Equipment to the Mother and Child Ward at Mnazi Mmoja Hospital, Dar es Salaam
            </h3>
            <div className="text-gray leading-relaxed space-y-4">
              <p>
                Seris Foundation donated medical equipment to the Mother and Child Ward at Mnazi Mmoja Hospital in Dar es Salaam on 1st December 2025, as part of its support to the Government's efforts to improve healthcare services in the country.
              </p>
              <p>
                The donation was carried out through a partnership between Seris Foundation and Lions Club International, with both organizations joining efforts to improve the service delivery environment for mothers and children.
              </p>
              <p>
                Seris Foundation, which focuses on empowering youth in the fields of science and technology, continues to establish itself as an important stakeholder in community development through strategic and impactful projects. Through this support, the Foundation aims to enhance the well-being of mothers and children while also supporting national efforts to strengthen the healthcare sector.
              </p>
            </div>
            <Link
              to="/events"
              className="inline-block mt-6 text-primary font-semibold text-sm hover:underline"
            >
              View all events →
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
