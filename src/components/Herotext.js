import "./Herotext.css";
import React, { useEffect } from 'react'
import chairperson from "../images/chairperson.jpg";
import meyer from "../images/meyer.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';
function Herotext() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <div  className="neta">
        <h3>Public Representatives</h3>
      </div>
      <div className="hero-main">
        <div data-aos="fade-left" className="netaname">
          <img className="mayor" src={meyer} alt="" />
          <div className="name">
            <strong>
              <p>Potilal Chaudhary</p>
            </strong>
            <p>Mayor</p>
            <p>9809876543</p>
          </div>
        </div>

        <div data-aos="fade-right" className="netaname">
          <img className="mayor" src={chairperson} alt="" />
          <div className="name">
            <strong>
              <p>Lal Bahadur Chaudhary</p>
            </strong>
            <p>Chairperson</p>
            <p>98123456789</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Herotext;
