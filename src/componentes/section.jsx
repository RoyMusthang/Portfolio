import imagePerfil from '../images/perfil.png';

function Section() {
  const links = [
    "https://www.linkedin.com/in/nobreakh/",

  ]
  return (
    <section className=" text-center corPrimaria">
      <div className="container">
        <img
          className="foto-perfil"
          src={imagePerfil}
          alt="imagem de perfil"
        />
        <h1 className="jumbotron-heading textoBranco">
          Josué
        </h1>
        <p className="lead textoBranco">
          fullstack developer
        </p>
        <p>
          <a href={links[0]} className="btn btn-dark my-2">Contato</a>
        </p>
        <a href="https://www.linkedin.com/in/nobreakh/">
          <i class="icones fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/RoyMusthang">
          <i class="icones fab fa-github"></i>
        </a>
        <a href="https://www.instagram.com/no_breakh/">
          <i class="icones fab fa-instagram"></i>
        </a>
      </div>
    </section>
  );
}

export default Section;
