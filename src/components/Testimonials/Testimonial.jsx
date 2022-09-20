import starsImage from "../../img/estrellas.png";
import testimonialImage from "../../img/testimonial1.jpg";

const Testimonial = ({ autor, quote }) => {
  return (
    <div className="testimonial">
      <header className="testimonial__header">
        <div className="testimonial__imagen">
          <img src={testimonialImage} alt="testimonial" />
        </div>

        <div className="testimonial__informacion">
          <p className="testimonial__autor">{autor}</p>
          <img
            className="testimonial__calificacion"
            src={starsImage}
            alt="imagen estrellas"
          />
        </div>
      </header>

      <blockquote className="testimonial__texto">{quote}</blockquote>
    </div>
  );
};

export default Testimonial;
