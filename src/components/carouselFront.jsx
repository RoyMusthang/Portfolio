import { useEffect, useState, useRef } from 'react';
import imageThum from "../images/coding.jpg";
import './style.css';

function CarouselFront() {
  const [data, setData] = useState([]);
  const carousel = useRef(null);

  useEffect(() => {
    fetch('http://localhost:3000/static/sheos.json')
      .then((response) => response.json())
      .then(setData);
  }, []);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();

    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  if (!data || !data.length) return null;

  return (
    <div className="container">
      <div className="logo">
        <h2 className="jumbotron-heading text-center titulosVerdes">Projetos Front-end</h2>
      </div>
      <div className="carousel" ref={carousel}>
        {data.map((item) => {
          const { id, name } = item;
          return (
            <div className="item" key={id}>
              <div className="info">
                <span className="name">{name}</span>
              </div>
              <div className="image">
                <img src={imageThum} alt={name} />
              </div>
              <div className="d-flex justify-content-center">
                <a href="#"><button type="button" className="btn btn-sm btn-outline-success">Ver Projeto</button></a>
                <a href="#"><button type="button" className="btn btn-sm btn-outline-primary">Código</button></a>
              </div>
            </div>
          );
        })}
      </div>
      <div className="buttons">
        <button onClick={handleLeftClick}>
          <img src="/static/images/216151_right_chevron_icon.png" alt="Scroll Left" />
        </button>
        <button onClick={handleRightClick}>
          <img src="/static/images/216151_right_chevron_icon.png" alt="Scroll Right" />
        </button>
      </div>

    </div >
  );
}

export default CarouselFront;
