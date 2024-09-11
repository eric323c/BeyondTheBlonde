import { useEffect, useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);

  // Scroll Trigger Animation
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const height = window.innerHeight;
      setActiveSection(Math.floor(scrollY / height));
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Beyond the Blonde</title>
      </Head>
      <header className="navbar">
        <nav>
          <div className="navbar-logo">Beyond the Blonde</div>
          <div className="navbar-links">
            <a href="#section1">Home</a>
            <a href="#section2">About Us</a>
            <a href="#section3">Contact</a>
          </div>
          <button className="navbar-book-now">Book Now</button>
        </nav>
      </header>

      {/* Section 1 */}
      <div className={`section section1 ${activeSection === 0 ? 'in-view' : ''}`}>
        <div className="section-background" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?hair-salon')" }}></div>
        <div className="section-content">
          <h1>Beyond the Blonde</h1>
          <button className="book-now">Book Now</button>
        </div>
      </div>

      {/* Section 2 */}
      <div className={`section section2 ${activeSection === 1 ? 'in-view' : ''}`}>
        <div className="section-background" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?hair-stylist')" }}></div>
        <div className="section-content">
          <h2>About Us</h2>
          <p>Welcome to Beyond the Blonde! We specialize in creating the perfect hair experience.</p>
        </div>
      </div>

      {/* Section 3 */}
      <div className={`section section3 ${activeSection === 2 ? 'in-view' : ''}`}>
        <div className="section-background" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?salon-interior')" }}></div>
        <div className="section-content">
          <h2>Contact Us</h2>
          <p>Get in touch with us to book your next appointment!</p>
        </div>
      </div>
    </>
  );
}