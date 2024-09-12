// pages/index.js

import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import styles from '../styles/index.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Beyond the Blonde</title>
        <meta name="description" content="Beyond the Blonde - Hair Studio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="navbar">
        <nav>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li className="logo"><a href="#home">Beyond the Blonde</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#shop">Shop</a></li>
          </ul>
        </nav>
      </header>

      <section className="section hero-section" id="home">
        <div className="hero-content">
          <h1 className="hero-title">Beyond the Blonde</h1>
          <button className="book-now">Book Now</button>
        </div>
      </section>
    </>
  );
}
