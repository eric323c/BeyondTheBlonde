import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [flipped, setFlipped] = useState(false);

  const handleScroll = () => {
    setFlipped(!flipped);
  };

  return (
    <>
      <div className={`section ${flipped ? 'flipped' : ''}`} id="section1">
        <div className="section-background" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?hair-salon')" }}></div>
        <div className="section-content">
          <h1>Beyond the Blonde</h1>
          <button className="navbar-book-now">Book Now</button>
        </div>
      </div>

      <div className="section diagonal-split" id="section2">
        <div className="section-background" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?hair-dresser')" }}></div>
        <div className="section-content">
          <h1>About Us</h1>
          <p>Welcome to Beyond the Blonde. Meet Lexi and learn more about our salon.</p>
        </div>
      </div>

      <div className="section" id="section3">
        <div className="section-background" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?haircut')" }}></div>
        <div className="section-content">
          <h1>Contact Us</h1>
          <p>Get in touch to book an appointment or learn more about our services.</p>
        </div>
      </div>

      <div className="footer">
        <p>&copy; 2024 Beyond the Blonde Hair Studio</p>
      </div>

      <style jsx>{`
        body {
          overflow: hidden;
        }
        .section {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          background-color: #000;
          transition: transform 0.8s ease-in-out;
          transform-style: preserve-3d;
        }
        .section.flipped {
          transform: rotateY(180deg);
        }
        .section-content {
          z-index: 2;
          color: white;
          text-align: center;
        }
        .section-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          z-index: 1;
          opacity: 0.8;
        }
        .diagonal-split {
          transform-origin: left;
          transition: transform 1s ease;
        }
        .footer {
          text-align: center;
          padding: 20px;
          background-color: #111;
          color: white;
        }
        .navbar-book-now {
          background-color: #d4af37;
          padding: 10px 20px;
          border-radius: 30px;
          font-weight: bold;
        }
      `}</style>
    </>
  );
}