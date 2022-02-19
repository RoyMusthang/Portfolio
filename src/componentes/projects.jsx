import '../componentes/style.css';
import imageThum from "../images/coding.jpg";
const tryhackme = [
  "https://tryhackme.com/badge/727839"
];

function Projects() {
  return (
    <div>
      <div className="album py-5 bg-light" id="projetos">
        <div className="container">
          <h2 className="jumbotron-heading text-center titulosVerdes">Projetos</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="card mb-4 box-shadow">
                <img className="card-img-top" src={imageThum} alt="Thumbnail [100%x225]" />
                <div className="card-body">
                  <p className="card-text">Este é um projeto que desenvolvi usando</p>
                  <ul>
                    <li>Java Script</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>GIT & GitHub</li>
                    <li>Python</li>
                  </ul>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <a href="#"><button type="button" className="btn btn-sm btn-outline-success">Ver Projeto</button></a>
                      <a href="#"><button type="button" className="btn btn-sm btn-outline-primary">Código</button></a>
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
      <img src={tryhackme[0]} />
      <section className="jumbotron text-center corPrimaria" id="sobre-mim">
        <div className="container">
          <h2 className="jumbotron-heading titulosBrancos">Sobre mim </h2>
          <p className="textoBranco">Sou apaixonado por Tecnologia, desenvolvimento e marcas que
            trabalhem para contribuir com uma melhor interação digital. Estudo
            Desenvolvimento Web na Trybe, uma escola que ensina a programar, a
            aprender e a trabalhar. Trabalho e acredito em ações que possam gerar
            um impacto positivo na vida das pessoas.</p>
        </div>
      </section>
      <section id="contato">
        <div>
          <div className="container-fluid">
            <h3 className="text-center titulosVerdes">Disponivél para oportunidades</h3>
            <a href="maito:josuevitorp.lobo@gmail.com"><h4 className="text-center">josuevitorp.lobo@gmail.com</h4></a>
          </div>
        </div>
      </section>
      <footer className="text-center corSecundaria textoFooter">
        <p className="textoBranco">
          Todos os direitos reservados, Josué Lobo.
        </p>
      </footer>
    </div>
  );
}

export default Projects;
