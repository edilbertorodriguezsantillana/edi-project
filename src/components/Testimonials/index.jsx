import { testimonialsArray } from "../../data";
import Testimonial from "./Testimonial";

const Testimonials = ({ title }) => {
  return (
    <section className="contenedor testimoniales">
      <h2 className="testimoniales__heading">{title}</h2>

      <div className="testimoniales__grid">
        {testimonialsArray.map(({ id, ...testimonial }) => (
          <Testimonial key={id} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
