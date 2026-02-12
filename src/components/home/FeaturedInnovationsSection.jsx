import { Link } from "react-router-dom";
import incubatorVideo from "../../assets/projects/incubator.mp4";

export default function FeaturedInnovationsSection() {
  return (
    <section id="smart-incubator" className="py-16 sm:py-20 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-black text-center mb-4">
          Youth-Led Innovations Making Impact
        </h2>
        <p className="text-gray text-center max-w-2xl mx-auto mb-12">
          See how young innovators are using science and technology to solve real community challenges.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <article className="bg-light-gray rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition">
            <div className="aspect-video bg-black">
              <video
                src={incubatorVideo}
                controls
                className="w-full h-full object-contain"
                poster=""
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="p-6">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-3">
                Innovation
              </span>
              <h3 className="text-xl font-bold text-black mb-2">Smart Incubator</h3>
              <p className="text-gray leading-relaxed mb-4">
                A youth-led solution supporting innovation and sustainable development in communities.
              </p>
              <Link
                to="/#smart-incubator"
                className="text-primary font-semibold text-sm hover:underline"
              >
                Watch video above ↑
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
