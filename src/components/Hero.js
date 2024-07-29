import "./Hero.css";
import Herotext from "./Herotext";
import Imageslider from "./Imageslider";
function Hero() {
  return (
    <>
      <section>
        <div className="hero">
          <div className="hero-image">
            <Imageslider />
          </div>
          <div className="hero-text">
            <Herotext />
          </div>
        </div>
      </section>
    </>
  );
}
export default Hero;
