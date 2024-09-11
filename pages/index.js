import { useEffect } from 'react';
import Navbar from '../components/Navbar';

export default function Home() {
  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    const options = { threshold: 0.5 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });
  }, []);

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section section">
        <div className="hero-left">
          <img
            src="https://jaylophotos.pixieset.com/download/photo/?username=jaylophotos&key=beyondtheblonde&token=yFxGXEXbVIDIEEIC9s2EG4LAN0DZJYGt7cgQyDqWW2Tw5ICbXd8vbN3yWZ6QTZwXOVypIBXHNYamVFdkR1tnSI5wecMkimruwFVRjgYMdT-LW-3GTyftmY5tTospv8vaN4vuC1LzOKhE352Pa4gweOVvbpV-LqipovkGVKlw8ME"
            alt="Salon"
          />
        </div>
        <div className="hero-right">
          <h1 className="hero-logo">Beyond the Blonde</h1>
          <button className="book-now-btn">Book Now</button>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-section section">
        <div className="about-left">
          <img
            src="https://jaylophotos.pixieset.com/download/photo/?username=jaylophotos&key=beyondtheblonde&token=9Kq5uU-P5sTJYRGS3MDWQXCgBWSE7dR3zOhG_K10VYFxnxIhs_ldJeUNGoQQA-hhvv_aZyTzS8jJceuaxpAOxaS7jiydj0glHPPNkMSTzC8NJGtt15r9jePlAP4aBK-nl50n3VUm3-4tmNC0RgSKwkh5FpewVmNB2a3UJvdKIns"
            alt="Lexie"
          />
        </div>
        <div className="about-right">
          <h2>About Lexie</h2>
          <p>Lexie is a creative stylist offering...</p>
        </div>
      </section>
    </>
  );
}
