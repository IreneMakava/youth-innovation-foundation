import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout title="About Us">
      <p className="text-gray leading-relaxed mb-12">
        Youth Innovation Foundation identifies, supports, and scales youth-led science and technology solutions for community development.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
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
    </Layout>
  );
}
