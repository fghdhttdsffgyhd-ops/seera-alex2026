import Header from './sections/Header';
import Hero from './sections/Hero';
import Services from './sections/Services';
import About from './sections/About';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background font-cairo overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
