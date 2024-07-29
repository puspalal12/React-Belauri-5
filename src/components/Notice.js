import { useEffect } from "react";
import "./Notice.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
function Notice() {
  useEffect(()=>{
    AOS.init();
},[])
  return (
    <section>
      <div className="notice-head">
        <a href="">
          <h3>Notices</h3>
        </a>
      </div>
      <div data-aos="fade-up" className="notice-item">
        <ul>
          <li>
            <a
              href="https://belaurimun.gov.np/sites/belaurimun.gov.np/files/field/image/%E0%A4%B0%E0%A4%BE%E0%A4%B7%E0%A5%8D%E0%A4%9F%E0%A5%8D%E0%A4%B0%E0%A4%BF%E0%A4%AF%20%E0%A4%AA%E0%A4%B0%E0%A4%BF%E0%A4%9A%E0%A4%AF%E0%A4%AA%E0%A4%A4%E0%A5%8D%E0%A4%B0%20%E0%A4%B5%E0%A4%BF%E0%A4%B5%E0%A4%B0%E0%A4%A3%20%E0%A4%B8%E0%A4%82%E0%A4%95%E0%A4%B2%E0%A4%A8%20%E0%A4%B8%E0%A4%AE%E0%A5%8D%E0%A4%AC%E0%A4%A8%E0%A5%8D%E0%A4%A7%E0%A5%80%20%E0%A4%B8%E0%A5%82%E0%A4%9A%E0%A4%A8%E0%A4%BE%20%E0%A5%A4.jpg"
              target="_blank"
            >
              Information regarding collection of National Identity Card
              details.
            </a>
          </li>
          <li>
            <a
              href="https://belaurimun.gov.np/sites/belaurimun.gov.np/files/%E0%A4%B8%E0%A5%87%E0%A4%B5%E0%A4%BE%20%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%B5%E0%A4%BE%E0%A4%B9%20%E0%A4%AC%E0%A4%A8%E0%A5%8D%E0%A4%A6%20%E0%A4%B0%E0%A4%B9%E0%A4%A8%E0%A5%87%20%E0%A4%B8%E0%A5%82%E0%A4%9A%E0%A4%A8%E0%A4%BE%20%E0%A5%A4_0.pdf"
              target="_blank"
            >
              Notice that the service flow is closed.
            </a>
          </li>
          <li>
            <a
              href="https://belaurimun.gov.np/sites/belaurimun.gov.np/files/field/image/%E0%A4%95%E0%A4%B0%20%E0%A4%AC%E0%A5%81%E0%A4%9D%E0%A4%BE%E0%A4%89%E0%A4%A8%E0%A5%87%20%E0%A4%B8%E0%A4%AE%E0%A5%8D%E0%A4%AC%E0%A4%A8%E0%A5%8D%E0%A4%A7%E0%A5%80%20%E0%A4%85%E0%A4%A4%E0%A5%8D%E0%A4%AF%E0%A4%A8%E0%A5%8D%E0%A4%A4%20%E0%A4%9C%E0%A4%B0%E0%A5%81%E0%A4%B0%E0%A5%80%20%E0%A4%B8%E0%A5%82%E0%A4%9A%E0%A4%A8%E0%A4%BE.jpg"
              target="_blank"
            >
              Very important information on tax payment.
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
export default Notice;
