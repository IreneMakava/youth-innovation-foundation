const projects = [
  {
    id: 1,
    title: "Community Health Monitoring App",
    category: "Health",
    description: "A mobile solution that helps local health workers track and report community health data in real time.",
    image: null,
  },
  {
    id: 2,
    title: "Smart Agriculture Kit",
    category: "Agriculture",
    description: "Low-cost sensors and SMS alerts for smallholder farmers to optimize irrigation and reduce crop loss.",
    image: null,
  },
  {
    id: 3,
    title: "Digital Literacy Platform",
    category: "Education",
    description: "Free, offline-first learning modules for schools in low-connectivity areas.",
    image: null,
  },
];

export default function FeaturedInnovationsSection() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-black text-center mb-4">
          Youth-Led Innovations Making Impact
        </h2>
        <p className="text-gray text-center max-w-2xl mx-auto mb-12">
          See how young innovators are using science and technology to solve real community challenges.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="bg-light-gray rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition group"
            >
              <div className="aspect-video bg-gray-200 flex items-center justify-center text-gray">
                {project.image ? (
                  <img src={project.image} alt="" className="w-full h-full object-cover" />
                ) : (
                  <span className="text-sm">Project image</span>
                )}
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-3">
                  {project.category}
                </span>
                <h3 className="text-lg font-bold text-black mb-2 group-hover:text-primary transition">
                  {project.title}
                </h3>
                <p className="text-gray text-sm leading-relaxed mb-4">{project.description}</p>
                <a
                  href="/innovations"
                  className="text-primary font-semibold text-sm hover:underline"
                >
                  Learn More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
