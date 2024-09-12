import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Beyond the Blonde</title>
      </Head>
      <header className="navbar">
        <nav>
          <div className="navbar-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
          </div>
          <div className="navbar-logo">Beyond the Blonde</div>
          <div className="navbar-links">
            <a href="#experience">Experience</a>
            <a href="#shop">Shop</a>
          </div>
        </nav>
      </header>

      <div className="section" id="home">
        <div className="section-background" style={{ backgroundImage: "url('https://images.pexels.com/photos/973403/pexels-photo-973403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}></div>
        <div className="section-content">
          <h1 className="logo-text">Beyond the Blonde</h1>
          <button className="book-now">Book Now</button>
        </div>
      </div>
    </>
  );
}
