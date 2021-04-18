import React from "react";
import Slider from "react-slick";
import imagen1 from "../../../imagenes/carousel/aMeOfrQ.png";
import imagen2 from "../../../imagenes/carousel/TryHackMe_OSCP.png";
import imagen3 from "../../../imagenes/carousel/defensive_security.png";
import imagen4 from "../../../imagenes/carousel/ijlQ3wZ.jpg";
import imagen5 from "../../../imagenes/carousel/web.jpg";

export default function Principal() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <div className="container containerCarousel">
      <Slider {...settings}>
        <div className="contenedorSlides">
          <div className="imagenSlide">
            <img className="imagenSlides" src={imagen3} alt="First slide" />
            <button type="button" className="botonSlides">
              <div>
                Enroll in Path
              </div>
            </button>
          </div>
        </div>
        <div className="contenedorSlides">
          <img className="imagenSlides" src={imagen1} alt="First slide" />
          <button type="button" className="botonSlides">
            <div>
              Enroll in Path
            </div>
          </button>
        </div>
        <div className="contenedorSlides">
          <img className="imagenSlides" src={imagen2} alt="First slide" />
          <button type="button" className="botonSlides">
            <div>
              Enroll in Path
            </div>
          </button>
        </div>
        <div className="contenedorSlides">
          <img className="imagenSlides" src={imagen4} alt="First slide" />
          <button type="button" className="botonSlides">
            <div>
              Enroll in Path
            </div>
          </button>
        </div>
        <div className="contenedorSlides">
          <img className="imagenSlides" src={imagen5} alt="First slide" />
          <button type="button" className="botonSlides">
            <div>
              Enroll in Path
            </div>
          </button>
        </div>
      </Slider>
    </div>
  );
}
