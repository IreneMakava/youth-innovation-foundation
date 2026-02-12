import { useParams, Link } from "react-router-dom";
import Layout from "../components/Layout";
import { events } from "../data/events";

export default function EventDetail() {
  const { slug } = useParams();
  const event = events.find((e) => e.slug === slug);

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
        {event.images.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {event.images.map((src, i) => (
              <div key={i} className="aspect-[4/3] rounded-lg overflow-hidden bg-gray-100">
                <img
                  src={src}
                  alt={`${event.title} ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
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
