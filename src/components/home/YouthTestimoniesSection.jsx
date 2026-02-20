import { testimonies } from "../../data/testimonies";

export default function YouthTestimoniesSection() {
  return (
    <section id="testimonies" className="py-16 sm:py-20 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-black text-center mb-4">
          Youth Testimonies
        </h2>
        <p className="text-gray text-center max-w-2xl mx-auto mb-12">
          Hear from young innovators who have been part of our programs and are making a difference in their communities.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonies.map(({ id, quote, name, role, program }) => (
            <article
              key={id}
              className="bg-light-gray rounded-xl shadow-md p-6 sm:p-8 border border-gray-100 hover:shadow-lg transition flex flex-col"
            >
              <div className="flex-1">
                <span className="inline-block text-primary text-4xl sm:text-5xl font-serif leading-none mb-4">"</span>
                <p className="text-gray leading-relaxed mb-6">
                  {quote}
                </p>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <p className="font-bold text-black">{name}</p>
                <p className="text-sm text-gray">{role}</p>
                <span className="inline-block mt-1 px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded">
                  {program}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
