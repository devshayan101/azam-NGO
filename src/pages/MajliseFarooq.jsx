import { useRef } from "react";
import { Link } from 'react-router-dom';
import "./Majlisemuhammadi.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Empowering Communities",
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Witness the synergy of 'Abu Musa Darul Qazas' and 'Zulfiqar' Board, two divisions working in harmony to uphold the values of Islamic scholarship and legal advocacy.",
  },
  {
    id: 2,
    title: "Abu Musa Darul Qaza",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "This division aims to establish 'Islamic Darul Qaza' or Islamic panchayats in various locations to resolve interpersonal disputes within society. These panchayats will follow Islamic principles and provide a platform for individuals to seek justice and resolve conflicts in a fair and impartial manner. The goal is to promote peace, harmony, and justice within the community.",
  },
  {
    id: 3,
    title: "Zulfiqar' Board of Justice",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "In cases where disputes cannot be resolved in the Islamic panchayats. 'Zulfiqar' Board of Justice will step in to assist. The team of advocates of Board will work towards facilitating resolutions and ensuring that the rights of individuals are protected. They will guide the parties involved in the dispute through the legal process and provide support in navigating the complexities of the legal system.",
    
          
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

const MajliseFarooq = () => {
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

        <h1>Majlis-e-Farooq</h1>
        
        <motion.div style={{ scaleX }} className="progressBar">
        </motion.div>
        
      </div>
      
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default MajliseFarooq;
