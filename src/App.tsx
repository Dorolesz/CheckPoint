import './App.css';

function App() {
  return (
    <>
      <nav>
        <ul>
          <li><a href="#home">CheckPoint</a></li>
          <li><a href="#about">Rólunk</a></li>
          <li><a href="#contact">Kapcsolat</a></li>
        </ul>
      </nav>
      <h1>Üdvözöljük a CheckPoint oldalán!</h1>
      <section id="home">
        <h2>Home</h2>
        <p>Welcome to the CheckPoint system. This system is designed to help manage school entries efficiently and effectively.</p>
      </section>
      <section id="about">
        <h2>Rólunk</h2>
        <p>The CheckPoint system allows schools to track student entries and exits, ensuring a secure and organized environment.</p>
      </section>
      <section id="contact">
        <h2>Kapcsolat</h2>
        <p>For more information about the CheckPoint system, please contact us at info@checkpoint.com.</p>
      </section>
    </>
  );
}

export default App;