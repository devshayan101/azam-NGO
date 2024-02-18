import { useRef } from "react";
import { Link } from 'react-router-dom';
import "./Majlisemuhammadi.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Spreading Islamic Teachings",
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "The 'Khalid Technical Team', an essential component of our initiatives, will actively promote our objectives and spread Islamic thoughts and teachings.",
  },
  {
    id: 2,
    title: "Research Department",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Enhancing the reach of Islamic thoughts and teachings and striving to present pure and peaceful Islam to the global community.",
  },
  {
    id: 3,
    title: "Information Technology",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Developing apps and raising awareness against heresy, tailored to the objectives of Sawad-E-Azam.",
    
          
  }
  
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>Join Us</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const KhalidTechnicalTeam = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">

        <h1>Khalid Technical Team</h1>
        
        <motion.div style={{ scaleX }} className="progressBar">
        </motion.div>
        
      </div>
      
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default KhalidTechnicalTeam;
