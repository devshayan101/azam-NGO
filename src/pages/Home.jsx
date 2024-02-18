import Test from "../Test";
import "./home.scss";
// import { useRouteMatch } from "react-router-dom"; 
import Contact from "../components/contact/Contact";
// import Cursor from "../components/cursor/Cursor";
import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";
import Parallax from "../components/parallax/Parallax";
import Portfolio from "../components/portfolio/Portfolio";
import Services from "../components/services/Services";

const Home = () => {
  // let match = useRouteMatch();
  return (
    <div>
      {/* Note: Disable copying from website, and screenshot */}
        {/* <Cursor /> */}
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
        <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
      
    </div>
  );
};

export default Home;
