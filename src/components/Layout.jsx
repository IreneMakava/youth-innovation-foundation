import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children, title }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-48 sm:pt-56 lg:pt-64 pb-16 bg-light-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {title && (
            <h1 className="text-3xl font-bold text-black mb-6">{title}</h1>
          )}
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
