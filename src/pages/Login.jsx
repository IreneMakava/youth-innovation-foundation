import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const STORAGE_KEY = "yif_user";
const MEMBER_ID_KEY = "yif_member_id";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      setError("No account found. Please register first.");
      return;
    }
    const user = JSON.parse(stored);
    if (user.email !== email || user.password !== password) {
      setError("Invalid email or password.");
      return;
    }
    const memberId = localStorage.getItem(MEMBER_ID_KEY);
    if (memberId) {
      navigate("/member");
    } else {
      navigate("/pay");
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-36 sm:pt-40 pb-16 bg-light-gray">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-md p-8 sm:p-10 border border-gray-100">
            <h1 className="text-2xl font-bold text-black mb-2 scroll-mt-28">Log in</h1>
            <p className="text-gray text-sm mb-6">
              Log in to your account. After payment you can access your membership ID here.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-3 rounded-lg bg-red-50 text-accent text-sm">
                  {error}
                </div>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-black mb-1">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-black mb-1">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="••••••••"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-primary text-white font-semibold rounded-lg hover:bg-blue-700 transition"
              >
                Log in
              </button>
            </form>
            <p className="mt-6 text-center text-sm text-gray">
              Don’t have an account?{" "}
              <Link to="/register" className="text-primary font-semibold hover:underline">
                Register
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
