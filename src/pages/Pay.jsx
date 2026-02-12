import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const STORAGE_KEY = "yif_user";
const MEMBER_ID_KEY = "yif_member_id";

function generateMemberId() {
  const prefix = "YIF";
  const year = new Date().getFullYear();
  const random = Math.random().toString(36).slice(2, 10).toUpperCase();
  return `${prefix}-${year}-${random}`;
}

export default function Pay() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [amount, setAmount] = useState("50000");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      navigate("/register");
      return;
    }
    setUser(JSON.parse(stored));
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!cardNumber.trim() || cardNumber.replace(/\s/g, "").length < 12) {
      setError("Please enter a valid card number.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      const memberId = generateMemberId();
      localStorage.setItem(MEMBER_ID_KEY, memberId);
      setLoading(false);
      navigate("/member");
    }, 1500);
  };

  if (!user) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen pt-28 pb-16 bg-light-gray flex items-center justify-center">
          <p className="text-gray">Redirecting...</p>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-28 pb-16 bg-light-gray">
        <div className="max-w-lg mx-auto px-4">
          <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
            <h1 className="text-2xl font-bold text-black mb-2">Complete your membership</h1>
            <p className="text-gray text-sm mb-6">
              Pay once to receive your Youth Innovation Foundation membership ID. You can use it for events and programs.
            </p>
            <div className="mb-6 p-4 rounded-lg bg-light-gray">
              <p className="text-sm text-gray">Membership fee</p>
              <p className="text-xl font-bold text-black">TZS {Number(amount).toLocaleString()}</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-3 rounded-lg bg-red-50 text-accent text-sm">
                  {error}
                </div>
              )}
              <div>
                <label className="block text-sm font-medium text-black mb-1">Amount (TZS)</label>
                <select
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary"
                >
                  <option value="25000">25,000</option>
                  <option value="50000">50,000</option>
                  <option value="100000">100,000</option>
                  <option value="200000">200,000</option>
                </select>
              </div>
              <div>
                <label htmlFor="card" className="block text-sm font-medium text-black mb-1">
                  Card number
                </label>
                <input
                  id="card"
                  type="text"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, "").slice(0, 16))}
                  placeholder="1234 5678 9012 3456"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary"
                  maxLength={19}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="expiry" className="block text-sm font-medium text-black mb-1">
                    Expiry (MM/YY)
                  </label>
                  <input
                    id="expiry"
                    type="text"
                    value={expiry}
                    onChange={(e) => {
                      const v = e.target.value.replace(/\D/g, "").slice(0, 4);
                      if (v.length >= 2) setExpiry(`${v.slice(0, 2)}/${v.slice(2)}`);
                      else setExpiry(v);
                    }}
                    placeholder="MM/YY"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="cvv" className="block text-sm font-medium text-black mb-1">
                    CVV
                  </label>
                  <input
                    id="cvv"
                    type="text"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value.replace(/\D/g, "").slice(0, 4))}
                    placeholder="123"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-accent text-white font-semibold rounded-lg hover:bg-red-700 transition disabled:opacity-70"
              >
                {loading ? "Processing…" : "Pay & get my ID"}
              </button>
            </form>
            <p className="mt-4 text-center text-xs text-gray">
              This is a demo. No real payment is processed. Your membership ID will be generated after you submit.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
