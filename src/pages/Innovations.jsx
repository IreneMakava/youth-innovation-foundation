import { Link } from "react-router-dom";
import Layout from "../components/Layout";

export default function Innovations() {
  return (
    <Layout title="Youth Innovations">
      <p className="text-gray leading-relaxed mb-6">
        Showcase of youth-led projects in health, education, agriculture, and more.
      </p>
      <Link
        to="/#smart-incubator"
        className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-blue-700 transition"
      >
        Explore Smart Incubator project →
      </Link>
    </Layout>
  );
}
