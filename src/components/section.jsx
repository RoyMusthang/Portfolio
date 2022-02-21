import imagePerfil from '../images/perfil.png';

function Section() {
  return (
    <>
      <section class="jumbotron text-center corPrimaria">
        <div class="container">
          <img class="foto-perfil" src={imagePerfil} alt="foto de perfil" />
          <p>
            <a href="#" class="btn btn-dark my-2">Contato</a>
          </p>
          <a href="https://www.linkedin.com/in/nobreakh/" target="_blank"><i class="icones fab fa-linkedin"></i></a>
          <a href="https://github.com/RoyMusthang" target="_blank"><i class="icones fab fa-github"></i></a>
          <a href="https://www.instagram.com/musthangr/" target="_blank"><i class="icones fab fa-instagram"></i></a>
        </div>
      </section>
    </>
  );
}

export default Section;
