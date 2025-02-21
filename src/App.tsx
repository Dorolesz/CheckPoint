import { BrowserRouter, Router, NavLink } from 'react-router-dom';

function App() {
  return (
    <Router>
      <>
        <header>
          <BrowserRouter>
          <nav className='nav bg-dark p-2'>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li>
                  <NavLink className="nav-link text-white" to="/">
                  CheckPoint
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">Rólunk</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">Kapcsolat</NavLink>
                </li>
              </ul>
            </div>
          </nav>
          </BrowserRouter>
        </header>

        <main>
          <section className="hero-section" id="home">
            <div className="hero-overlay">
              <h1>Üdvözöljük a CheckPoint oldalán!</h1>
              <h2>Home</h2>
              <p className="welcom-text">Welcome to the CheckPoint system. This system is designed to help manage school entries efficiently and effectively.</p>
            </div>
          </section>
          <section id="about">
            <h2>Rólunk</h2>
            <p>The CheckPoint system allows schools to track student entries and exits, ensuring a secure and organized environment.</p>
          </section>
          <section id="contact">
            <h2>Kapcsolat</h2>
            <p>For more information about the CheckPoint system, please contact us at info@checkpoint.com.</p>
          </section>
        </main>
        <footer>
          <p>&copy; 2024 CheckPoint. Minden jog fenntartva</p>
        </footer>
      </>
    </Router>
  );
}

export default App;