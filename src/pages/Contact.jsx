import Layout from "../components/Layout";

export default function Contact() {
  return (
    <Layout title="Contact">
      <div className="text-gray space-y-4">
        <p>
          <strong className="text-black">Website:</strong>{" "}
          <a href="https://youthinnovationfoundation.or.tz" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
            youthinnovationfoundation.or.tz
          </a>
        </p>
        <p><strong className="text-black">Email:</strong> info@youthinnovationfoundation.or.tz</p>
        <p><strong className="text-black">Phone:</strong> +255 775 878 751</p>
        <p>
          <strong className="text-black">Address:</strong><br />
          P.O. Box 90258, Samora Avenue, Holland House 4th Floor, DSM, Tanzania
        </p>
      </div>
    </Layout>
  );
}
