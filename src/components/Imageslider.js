import "./Imageslider.css";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import img5 from "../images/img5.jpg";
import { useEffect, useState } from "react";

const Imageslider = () => {
  const [slider, setSlider] = useState(0);
  const data = [img1, img2, img3, img4, img5];

  const forward = () => {
    setSlider(slider === data.length - 1 ? 0 : slider + 1);
  };
  const backward = () => {
    setSlider(slider === 0 ? data.length - 1 : slider - 1);
  };

  useEffect(() => {
    const sliderClear = setInterval(() => {
      forward();
    }, 3000);
    return () => clearInterval(sliderClear);
  }),
    [slider];
  return (
    <>
      <div className="slider">
        <div className="slider-img">
          <img src={data[slider]} alt="" />
        </div>
        <div className="btn">
          <button onClick={backward}>
            <i class="fa fa-arrow-left"></i>
          </button>
          <button onClick={forward}>
            <i class="fa fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </>
  );
};
export default Imageslider;
