import Layout from "../components/Layout";
import { Link } from "react-router-dom";

export default function GetInvolved() {
  return (
    <Layout title="Get Involved">
      <p className="text-gray leading-relaxed mb-6">
        Join as a youth innovator, mentor, partner, or donor. Application forms and ways to contribute.
      </p>
      <Link
        to="/register"
        className="inline-block px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-red-700 transition"
      >
        Register & apply
      </Link>
    </Layout>
  );
}
