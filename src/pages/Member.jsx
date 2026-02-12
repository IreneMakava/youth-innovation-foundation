import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const STORAGE_KEY = "yif_user";
const MEMBER_ID_KEY = "yif_member_id";

export default function Member() {
  const [user, setUser] = useState(null);
  const [memberId, setMemberId] = useState("");

  useEffect(() => {
    const u = localStorage.getItem(STORAGE_KEY);
    const id = localStorage.getItem(MEMBER_ID_KEY);
    if (u) setUser(JSON.parse(u));
    if (id) setMemberId(id);
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-28 pb-16 bg-light-gray">
        <div className="max-w-lg mx-auto px-4">
          <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100 text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-black mb-2">You’re a member</h1>
            {user && (
              <p className="text-gray mb-4">
                Hello, <span className="font-semibold text-black">{user.name}</span>
              </p>
            )}
            {memberId ? (
              <>
                <p className="text-sm text-gray mb-2">Your membership ID</p>
                <p className="text-2xl font-mono font-bold text-primary tracking-wider mb-6">
                  {memberId}
                </p>
                <p className="text-sm text-gray mb-6">
                  Use this ID for events, programs, and partner benefits. Keep it safe.
                </p>
              </>
            ) : (
              <p className="text-gray mb-6">
                Complete payment to receive your membership ID.
              </p>
            )}
            <Link
              to="/"
              className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-blue-700 transition"
            >
              Back to home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
