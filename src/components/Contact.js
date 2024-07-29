import { useEffect } from "react";
import './Contact.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <section>
      <h3 id='con-title'>Contact Us</h3>
      <div className="contact-us">

        <div data-aos="fade-up" className="contact-address">

          <p>10400 Bhakunda</p>
          <p>Belauri, Sudurpashchim, 10406</p>
          <p>Email: belaurimunward5@gmail.com</p>
          <p>Phone: 9810101011</p>
        </div>
        <div data-aos="fade-down" className="contact-form">
          <h2>Send Us a Message</h2>
          <form >
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <label>
              Email:
              <input type="email" name="email" />
            </label>
            <label>
              Message:
              <textarea name="message"></textarea>
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
