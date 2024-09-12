import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Beyond the Blonde</title>
        <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet" />
      </Head>
      
      <header className="navbar">
        <nav>
          <div className="navbar-links left-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
          </div>
          <div className="navbar-logo">Beyond the Blonde</div>
          <div className="navbar-links right-links">
            <a href="#experience">Experience</a>
            <a href="#shop">Shop</a>
          </div>
        </nav>
      </header>

      <div className="section" id="home">
        <div className="section-background" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=1672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}></div>
        <div className="section-content">
          <h1 className="logo-text">Beyond the Blonde</h1>
          <button className="book-now">Book Now</button>
        </div>
      </div>
    </>
  );
}
