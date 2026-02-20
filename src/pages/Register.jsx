import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const STORAGE_KEY = "yif_user";

const HEAR_ABOUT_OPTIONS = [
  "Select option",
  "Social media",
  "Website",
  "Friend or colleague",
  "Event",
  "Other",
];

export default function Register() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [error, setError] = useState("");

  // Step 1: Personal Information
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [educationLevel, setEducationLevel] = useState("");
  const [course, setCourse] = useState("");

  // Step 2: Contact Information
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [hearAbout, setHearAbout] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  // Step 3: Identification and Address
  const [nidaNumber, setNidaNumber] = useState("");
  const [country, setCountry] = useState("");
  const [nationality, setNationality] = useState("");
  const [address, setAddress] = useState("");

  // Step 4: Membership and Security (Member Skills only)
  const [memberSkills, setMemberSkills] = useState("");

  const fullName = [firstName, middleName, lastName].filter(Boolean).join(" ");

  const handleNext = (e) => {
    e.preventDefault();
    setError("");
    if (step === 1) {
      if (!firstName.trim() || !lastName.trim()) {
        setError("First name and Last name are required.");
        return;
      }
      if (!gender) {
        setError("Please select gender.");
        return;
      }
      if (!dateOfBirth) {
        setError("Date of birth is required.");
        return;
      }
      if (!educationLevel || !course.trim()) {
        setError("Education level and Course are required.");
        return;
      }
      setStep(2);
    } else if (step === 2) {
      if (!email.trim()) {
        setError("Email is required.");
        return;
      }
      if (!phone.trim()) {
        setError("Phone number is required.");
        return;
      }
      if (password !== confirm) {
        setError("Passwords do not match.");
        return;
      }
      if (password.length < 6) {
        setError("Password must be at least 6 characters.");
        return;
      }
      setStep(3);
    } else if (step === 3) {
      if (!nidaNumber.trim()) {
        setError("NIDA number is required.");
        return;
      }
      if (!country.trim() || !nationality.trim()) {
        setError("Country and Nationality are required.");
        return;
      }
      if (!address.trim()) {
        setError("Address is required.");
        return;
      }
      setStep(4);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    const user = {
      name: fullName || `${firstName} ${lastName}`,
      email,
      password,
      phone,
      hearAbout,
      nidaNumber,
      country,
      nationality,
      address,
      memberSkills,
      firstName,
      middleName,
      lastName,
      gender,
      dateOfBirth,
      educationLevel,
      course,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    navigate("/pay");
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-36 sm:pt-40 pb-16 bg-light-gray">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-md p-8 sm:p-10 border border-gray-100">
            <h1 className="text-2xl font-bold text-black mb-1 scroll-mt-28">Apply Now</h1>
            <p className="text-gray text-sm mb-6">
              Create an account. After registration you'll pay to get your membership ID.
            </p>

            {/* Step indicator */}
            <div className="flex gap-2 mb-6">
              {[1, 2, 3, 4].map((s) => (
                <div
                  key={s}
                  className={`h-1 flex-1 rounded-full ${s <= step ? "bg-primary" : "bg-gray-200"}`}
                  aria-hidden
                />
              ))}
            </div>

            <form
              onSubmit={step < 4 ? handleNext : handleSubmit}
              className="space-y-5"
            >
              {error && (
                <div className="p-3 rounded-lg bg-red-50 text-accent text-sm">
                  {error}
                </div>
              )}

              {/* Step 1: Personal Information */}
              {step === 1 && (
                <>
                  <h2 className="text-lg font-bold text-black border-b border-gray-100 pb-2">
                    Personal Information
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-black mb-1">
                        First Name <span className="text-accent">*</span>
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        required
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary"
                        placeholder="First name"
                      />
                    </div>
                    <div>
                      <label htmlFor="middleName" className="block text-sm font-medium text-black mb-1">
                        Middle Name
                      </label>
                      <input
                        id="middleName"
                        type="text"
                        value={middleName}
                        onChange={(e) => setMiddleName(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary"
                        placeholder="Middle name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-black mb-1">
                        Last Name <span className="text-accent">*</span>
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        required
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary"
                        placeholder="Last name"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="gender" className="block text-sm font-medium text-black mb-1">
                        Gender <span className="text-accent">*</span>
                      </label>
                      <select
                        id="gender"
                        required
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary bg-white"
                      >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="dateOfBirth" className="block text-sm font-medium text-black mb-1">
                        Date of Birth <span className="text-accent">*</span>
                      </label>
                      <input
                        id="dateOfBirth"
                        type="date"
                        required
                        value={dateOfBirth}
                        onChange={(e) => setDateOfBirth(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="educationLevel" className="block text-sm font-medium text-black mb-1">
                        Education Level <span className="text-accent">*</span>
                      </label>
                      <select
                        id="educationLevel"
                        required
                        value={educationLevel}
                        onChange={(e) => setEducationLevel(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary bg-white"
                      >
                        <option value="">Select Education Level</option>
                        <option value="Secondary">Secondary</option>
                        <option value="Diploma">Diploma</option>
                        <option value="Bachelor">Bachelor</option>
                        <option value="Master">Master</option>
                        <option value="PhD">PhD</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="course" className="block text-sm font-medium text-black mb-1">
                        Course <span className="text-accent">*</span>
                      </label>
                      <input
                        id="course"
                        type="text"
                        required
                        value={course}
                        onChange={(e) => setCourse(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary"
                        placeholder="e.g. Computer Science"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end pt-2">
                    <button
                      type="submit"
                      className="px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-red-700 transition"
                    >
                      Next
                    </button>
                  </div>
                </>
              )}

              {/* Step 2: Contact Information */}
              {step === 2 && (
                <>
                  <h2 className="text-lg font-bold text-black border-b border-gray-100 pb-2">
                    Contact Information
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-black mb-1">
                        Email Address <span className="text-accent">*</span>
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
                      <label htmlFor="phone" className="block text-sm font-medium text-black mb-1">
                        Phone Number <span className="text-accent">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary"
                        placeholder="+255123456789"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="hearAbout" className="block text-sm font-medium text-black mb-1">
                      How did you hear about us?
                    </label>
                    <select
                      id="hearAbout"
                      value={hearAbout}
                      onChange={(e) => setHearAbout(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary bg-white"
                    >
                      {HEAR_ABOUT_OPTIONS.map((opt) => (
                        <option key={opt} value={opt === "Select option" ? "" : opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="password" className="block text-sm font-medium text-black mb-1">
                        Password <span className="text-accent">*</span>
                      </label>
                      <input
                        id="password"
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary"
                        placeholder="••••••••"
                        minLength={6}
                      />
                    </div>
                    <div>
                      <label htmlFor="confirm" className="block text-sm font-medium text-black mb-1">
                        Confirm password <span className="text-accent">*</span>
                      </label>
                      <input
                        id="confirm"
                        type="password"
                        required
                        value={confirm}
                        onChange={(e) => setConfirm(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary"
                        placeholder="••••••••"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-6 py-3 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-600 transition"
                    >
                      Previous
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-red-700 transition"
                    >
                      Next
                    </button>
                  </div>
                </>
              )}

              {/* Step 3: Identification and Address */}
              {step === 3 && (
                <>
                  <h2 className="text-lg font-bold text-black border-b border-gray-100 pb-2">
                    Identification and Address
                  </h2>
                  <div>
                    <label htmlFor="nidaNumber" className="block text-sm font-medium text-black mb-1">
                      NIDA Number <span className="text-accent">*</span>
                    </label>
                    <input
                      id="nidaNumber"
                      type="text"
                      required
                      value={nidaNumber}
                      onChange={(e) => setNidaNumber(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="20041112-12345-67890-12"
                    />
                    <p className="mt-1 text-xs text-gray">Format: YYYYMMDD-XXXXX-XXXXX-XX</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-black mb-1">
                        Country <span className="text-accent">*</span>
                      </label>
                      <input
                        id="country"
                        type="text"
                        required
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary"
                        placeholder="e.g. Tanzania"
                      />
                    </div>
                    <div>
                      <label htmlFor="nationality" className="block text-sm font-medium text-black mb-1">
                        Nationality <span className="text-accent">*</span>
                      </label>
                      <input
                        id="nationality"
                        type="text"
                        required
                        value={nationality}
                        onChange={(e) => setNationality(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary"
                        placeholder="e.g. Tanzanian"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-black mb-1">
                      Address <span className="text-accent">*</span>
                    </label>
                    <textarea
                      id="address"
                      required
                      rows={3}
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary resize-none"
                      placeholder="Full address"
                    />
                  </div>
                  <div className="flex justify-between pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-6 py-3 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-600 transition"
                    >
                      Previous
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-red-700 transition"
                    >
                      Next
                    </button>
                  </div>
                </>
              )}

              {/* Step 4: Membership and Security (Member Skills only) */}
              {step === 4 && (
                <>
                  <h2 className="text-lg font-bold text-black border-b border-gray-100 pb-2 mb-4">
                    Membership and Security
                  </h2>
                  <div className="pt-1">
                    <label htmlFor="memberSkills" className="block text-sm font-medium text-black mb-2">
                      Member Skills
                    </label>
                    <textarea
                      id="memberSkills"
                      rows={4}
                      value={memberSkills}
                      onChange={(e) => setMemberSkills(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary resize-y min-h-[100px]"
                      placeholder="e.g., Web Development, Graphic Design"
                    />
                  </div>
                  <div className="flex justify-between pt-6">
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="px-6 py-3 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-600 transition"
                    >
                      Previous
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-red-700 transition"
                    >
                      Register
                    </button>
                  </div>
                </>
              )}
            </form>

            <p className="mt-6 text-center text-sm text-gray">
              Already have an account?{" "}
              <Link to="/login" className="text-primary font-semibold hover:underline">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
