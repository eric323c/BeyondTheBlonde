import { useEffect, useRef } from 'react';
import Head from 'next/head';

export default function Home() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      sectionsRef.current.forEach((section, index) => {
        const offset = section.offsetTop;
        if (scrollY >= offset - windowHeight / 2 && scrollY < offset + windowHeight / 2) {
          section.classList.add('in-view');
        } else {
          section.classList.remove('in-view');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>Beyond the Blonde</title>
      </Head>
      <header className="navbar">
        <nav>
          <div className="navbar-links">
            <a href="#section1">Home</a>
            <a href="#section2">About</a>
          </div>
          <div className="navbar-logo">Beyond the Blonde</div>
          <div className="navbar-links">
            <a href="#section3">Experience</a>
            <a href="#section4">Shop</a>
          </div>
        </nav>
      </header>

      <div ref={(el) => (sectionsRef.current[0] = el)} className="section section1">
        <div className="section-background" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?hair-salon')" }}></div>
        <div className="section-content">
          <h1>Beyond the Blonde</h1>
          <button className="book-now">Book Now</button>
        </div>
      </div>

      <div ref={(el) => (sectionsRef.current[1] = el)} className="section section2">
        <div className="section-background" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?hair-stylist')" }}></div>
        <div className="section-content">
          <h2>About Us</h2>
          <p>We create a tailored hair experience at Beyond the Blonde.</p>
        </div>
      </div>

      <div ref={(el) => (sectionsRef.current[2] = el)} className="section section3">
        <div className="section-background" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?salon-experience')" }}></div>
        <div className="section-content">
          <h2>Experience</h2>
          <p>Enjoy luxury treatments in a private suite.</p>
        </div>
      </div>

      <div ref={(el) => (sectionsRef.current[3] = el)} className="section section4">
        <div className="section-background" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?salon-shop')" }}></div>
        <div className="section-content">
          <h2>Shop</h2>
          <p>Explore our curated collection of salon products.</p>
        </div>
      </div>
    </>
  );
}