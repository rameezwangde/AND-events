import Header from './components/Header';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import OurServices from './components/OurServices';
import Footer from './components/Footer';

function App() {
  return (
    <main className="min-h-screen font-sans bg-ivory">
      <Header />
      <Hero />
      <OurStory />
      <OurServices />
      <Footer />
    </main>
  );
}

export default App;
