import Layout from "../components/Layout";

const programs = [
  {
    title: "Innovation Challenges",
    description: "Competitions and hackathons that invite young innovators to propose and prototype solutions to real community problems. Winners receive recognition, mentorship, and pathways to funding.",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  },
  {
    title: "Mentorship Programs",
    description: "Pairing youth with industry experts and experienced innovators for guidance on technical skills, business development, and navigating the innovation ecosystem.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  },
  {
    title: "Training & Workshops",
    description: "Hands-on sessions in coding, product design, entrepreneurship, and science communication—equipping youth with the skills to turn ideas into impact.",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  },
  {
    title: "Funding Support",
    description: "Grants and seed funding for promising youth-led projects that demonstrate potential for community impact, plus support to access larger funding and partnership opportunities.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
];

export default function Programs() {
  return (
    <Layout title="Programs">
      <p className="text-gray leading-relaxed mb-10">
        We run initiatives that identify, support, and scale youth-led science and technology solutions. Explore our mission, vision, and core programs below.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-black mb-3">Our Vision</h2>
          <p className="text-gray leading-relaxed">
            To be the leading platform for advancing science and technology innovations that drive sustainable community development.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
          <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
            <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-black mb-3">Our Mission</h2>
          <p className="text-gray leading-relaxed">
            To identify, support, and scale impactful youth-led science and technology solutions that address community needs through innovation, partnerships, and capacity building.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-black mb-6">Our Programs</h2>
      <div className="space-y-8">
        {programs.map((program) => (
          <div
            key={program.title}
            className="bg-white rounded-xl shadow-md p-8 border border-gray-100 flex flex-col sm:flex-row gap-6 items-start"
          >
            <div className="shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
              <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={program.icon} />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-bold text-black mb-2">{program.title}</h2>
              <p className="text-gray leading-relaxed">{program.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
