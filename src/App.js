import './App.css';

function App() {
  return (
    <div>
  <header className="my-info">
    <h1>Connor<br />Van Brocklin</h1>
    <nav>
      <ul>
        <li>
          <a href="#my-projects">My Projects</a>
        </li>
        <li>
          <a href="#about-me">About Me</a>
        </li>
        <li>
          <a href="#contact-info">Contact Info</a>
        </li>
      </ul>
    </nav>
  </header>
  {/* My Projects Start */}
  <section id="my-projects" className="work container-l">
    <h2>My Projects:</h2>
    <ul className="projects">
      <div className="row">
        <li className="col">
          <img src="https://media.istockphoto.com/photos/red-green-and-blue-picture-id119562112?b=1&k=20&m=119562112&s=170667a&w=0&h=hex3OcI3MCuF3j3huKqaqbM_QdP-VY4a00r2K7jTwe8=" alt="bucket" />
          <a href>Work in Progress</a>
        </li>
      </div>
      <div className="row">
        <li className="col">
          <img src="./Assets/images/Horiseon.jpg" alt="Horiseon" />
          <a href="https://connor-vb.github.io/horiseon-challenge/">Horiseon</a>
        </li>
        <li className="col">
          <img src="./Assets/images/travel.jpg" alt="Travel Hub" />
          <a href="https://connor-vb.github.io/Travel-Hub/">Travel Hub</a>
        </li>
        <li className="col">
          <img src="./Assets/images/passgen.jpg" alt="password-generator" />
          <a href="https://connor-vb.github.io/Password-generator/">Password Generator</a>
        </li>
        <li className="col">
          <img src="./Assets/images/scheduler.jpg" alt="work-day-scheduler" />
          <a href="https://connor-vb.github.io/work-day-scheduler/">Work Day Scheduler</a>
        </li>
      </div>
      <div className="row">
        <li className="col">
          <img src="./Assets/images/Cop-or-Not.jpeg" alt="Cop or Not" />
          <a href="https://connor-vb.github.io/Cop-or-Not/">Cop or Not</a>
        </li>
        <li className="col">
          <img src="https://user-images.githubusercontent.com/90352499/156491989-1005f130-1965-46a7-9542-66cfbb60b246.png" alt="Swap Buddy" />
          <a href="https://swap-buddy.herokuapp.com/">Swap Buddy</a>
        </li>
        <li className="col">
          <img src="https://media.istockphoto.com/photos/red-green-and-blue-picture-id119562112?b=1&k=20&m=119562112&s=170667a&w=0&h=hex3OcI3MCuF3j3huKqaqbM_QdP-VY4a00r2K7jTwe8=" alt="bucket" />
          <a href>Work in Progress</a>
        </li>
        <li className="col">
          <img src="https://media.istockphoto.com/photos/red-green-and-blue-picture-id119562112?b=1&k=20&m=119562112&s=170667a&w=0&h=hex3OcI3MCuF3j3huKqaqbM_QdP-VY4a00r2K7jTwe8=" alt="bucket" />
          <a href>Work in Progress</a>
        </li>
      </div>
    </ul>
  </section>
  {/* About Me Starts */}
  <section id="about-me" className="intro">
    <h2>About Me:</h2>
    <p>Hi my name is Connor Van Brocklin, I'm currently 22 and I just started my coding journey with the UC Berkeley Extension Bootcamp on September 8th of 2021.</p>
  </section>
  {/* Contact Section */}
  <footer id="contact-info" className="contact">
    <h2>Contact Info:</h2>
    <address>
      Mobile: (925)785-8490
      <br />
      Email: <a href="cvanbrock@gmail.com">cvanbrock@gmail.com</a>
      <br />
      GitHub: <a href="https://github.com/Connor-vb">Connor-vb</a>
    </address>
  </footer>
</div>

  );
}

export default App;
