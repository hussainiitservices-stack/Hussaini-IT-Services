import AnnouncementBar from "./AnnouncementBar";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <AnnouncementBar />
      <Header />
      
      {/* Main Content */}
      <main className="w-full">
        {children}
      </main>
      
      <Footer />
    </div>
  );
}