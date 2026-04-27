import Hero from './sections/Hero';
import Services from './sections/Services';
import About from './sections/About';
import WhyUs from './sections/WhyUs';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <Services />
      <About />
      <WhyUs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
