import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import CompaniesMarquee from '@/components/CompaniesMarquee';
import Services from '@/components/Services';
import Jobs from '@/components/Jobs';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <CompaniesMarquee />
      <Services />
      <Jobs />
      <Contact />
      <Footer />
    </main>
  );
}
