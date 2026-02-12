export default function CallToActionBanner() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-primary to-blue-800 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Ready to Transform Your Community?
        </h2>
        <p className="text-blue-100 text-lg mb-8">
          Join hundreds of youth innovators creating science and technology solutions for sustainable development.
        </p>
        <a
          href="/get-involved"
          className="inline-block px-10 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-red-700 transition shadow-lg"
        >
          Apply Now
        </a>
      </div>
    </section>
  );
}
