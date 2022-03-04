import './css/Home.css';
import imagePerfil from '../images/royMin.png'
import TypeAnimation from 'react-type-animation';

function Home() {
  return (
    <section className="about" id="about">
      <div className="max-width">
        <h2 className="title">Web Developer Full Stack</h2>
        <div className="about-content">
          <div className="column left">
            <img src={imagePerfil} alt="Imagem de perfil" />
          </div>
          <div className="column right">
            <div className="text">
              I'm a
              <TypeAnimation
                cursor={true}
                sequence={[
                  'web developer', 1000,
                  'CTF player', 1000,
                  'good communicator', 1000,
                  'self-learner', 1000,
                ]}
                wrapper="span"
                repeat={Infinity}
              ></TypeAnimation></div>
            <p>I'm passionate about technology, development and
              companies that work to contribute to a better digital
              transformation. I study Web Development at Trybe,
              a school that teaches programming, learning and working.
              I work and believe in actions that can generate a positive impact on people's lives.</p>
            <a href="https://www.linkedin.com/in/nobreakh" target={'_blank'}>LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
    // </div>

  );
}

export default Home;
