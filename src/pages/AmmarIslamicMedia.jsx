import { useRef } from "react";
import { Link } from 'react-router-dom';
import "./Majlisemuhammadi.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Islamic Media",
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Another significant group to be established is the 'Ammar Islamic Media'. This platform will address the concerns of the Muslim community, working tirelessly to eliminate hatred and foster peace and brotherhood. This media group will also raise awareness about laws, values, and rights.",
  },
  {
    id: 2,
    title: "News Media",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Works on providing unbiased news from the Islamic world, and also provides information about the Islamic faith and teachings.",
  },
  {
    id: 3,
    title: "Legal Awareness",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Through our Legal Awareness program, we strive to educate and inform individuals about their rights and responsibilities under the law.",
    
          
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

const AmmarIslamicMedia = () => {
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

        <h1>Ammar Islamic Media</h1>
        
        <motion.div style={{ scaleX }} className="progressBar">
        </motion.div>
        
      </div>
      
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default AmmarIslamicMedia;
