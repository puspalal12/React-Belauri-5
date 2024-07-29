import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import Navbar from "./components/Navbar";
import Notice from "./components/Notice";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Introduction />
      <Notice />
      <Contact />
      <Footer />
    </div>
  );
}
