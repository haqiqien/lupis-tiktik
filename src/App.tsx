import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Features from './components/Features';
import HowToOrder from './components/HowToOrder';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWA from './components/FloatingWA';

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Features />
      <HowToOrder />
      <Contact />
      <Footer />
      <FloatingWA />
    </div>
  );
}
