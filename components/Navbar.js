import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Beyond the Blonde</h1>
      </div>
      <ul className="nav-links">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <button className="book-now">Book Now</button>
        </li>
      </ul>
    </nav>
  );
}
