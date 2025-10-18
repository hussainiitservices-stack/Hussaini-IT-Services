import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AnnouncementBar from "./components/AnnouncementBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import ContactForm from "./pages/ContactForm";


function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <AnnouncementBar />
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
