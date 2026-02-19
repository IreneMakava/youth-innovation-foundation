import Layout from "../components/Layout";
import incubatorVideo from "../assets/projects/incubator.mp4";

export default function Innovations() {
  return (
    <Layout title="Youth Innovations">
      <p className="text-gray leading-relaxed mb-10">
        Showcase of youth-led projects in health, education, agriculture, and more.
      </p>

      <div className="space-y-10">
        <article className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm">
          <div className="aspect-video bg-black">
            <video
              src={incubatorVideo}
              controls
              className="w-full h-full object-contain"
            >
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="p-6">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-3">
              Innovation
            </span>
            <h2 className="text-xl font-bold text-black mb-2">Smart Incubator</h2>
            <p className="text-gray leading-relaxed">
              A youth-led solution supporting innovation and sustainable development in communities.
            </p>
          </div>
        </article>
      </div>
    </Layout>
  );
}
