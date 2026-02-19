import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "../components/Layout";
import { events } from "../data/events";

export default function EventDetail() {
  const { slug } = useParams();
  const event = events.find((e) => e.slug === slug);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    setSlideIndex(0);
  }, [slug]);

  if (!event) {
    return (
      <Layout title="Event not found">
        <p className="text-gray">This event could not be found.</p>
        <Link to="/events" className="text-primary font-semibold hover:underline mt-4 inline-block">
          ← Back to events
        </Link>
      </Layout>
    );
  }

  const images = event.images || [];
  const goPrev = () => setSlideIndex((i) => (i <= 0 ? images.length - 1 : i - 1));
  const goNext = () => setSlideIndex((i) => (i >= images.length - 1 ? 0 : i + 1));

  return (
    <Layout>
      <Link
        to="/events"
        className="inline-flex items-center gap-1 text-primary font-semibold hover:underline mb-6"
      >
        ← Back to events
      </Link>
      <article className="max-w-4xl">
        <p className="text-sm text-primary font-semibold mb-2">{event.date}</p>
        <h1 className="text-2xl sm:text-3xl font-bold text-black mb-6 leading-tight">
          {event.title}
        </h1>
        {images.length > 0 && (
          <div className="relative rounded-xl overflow-hidden bg-gray-100 mb-8">
            <div className="aspect-[4/3] sm:aspect-video relative">
              <img
                key={slideIndex}
                src={images[slideIndex]}
                alt={`${event.title} – image ${slideIndex + 1} of ${images.length}`}
                className="w-full h-full object-contain"
              />
            </div>
            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={goPrev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition"
                  aria-label="Previous image"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition"
                  aria-label="Next image"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setSlideIndex(i)}
                      className={`w-2 h-2 rounded-full transition ${
                        i === slideIndex ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80"
                      }`}
                      aria-label={`Go to image ${i + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}
        <div className="text-gray leading-relaxed space-y-4">
          {event.description.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </article>
    </Layout>
  );
}
