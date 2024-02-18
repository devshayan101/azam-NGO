import { useRef } from "react";
import { Link } from 'react-router-dom';
import "./Majlisemuhammadi.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Ignite Your Business",
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Welcome to the Sunnat Tijarat Assembly, where we are dedicated to igniting your business and fueling your entrepreneurial spirit. Our assembly is a hub of commerce and innovation, providing a platform for individuals and organizations to connect, collaborate, and thrive in the global business landscape.Join our vibrant community of business leaders, industry experts, and aspiring entrepreneurs who share a common goal: to unlock the full potential of their businesses. Through workshops, seminars, and mentorship programs, we provide you with the knowledge, skills, and guidance to navigate the ever-evolving business landscape and achieve sustainable growth. Ignite your business and embark on a journey of growth, innovation, and success with Sunnat Tijarat Assembly. Together, let's shape the future of commerce and create a thriving global Islamic business community.As a member of the Sunnat Tijarat Assembly, you will not only gain access to a supportive community, but also to exclusive resources tailored to the needs of Islamic businesses. Our platform offers up-to-date market insights, industry trends, and expert advice to help you stay ahead of the competition. Join us today and be part of a movement that is revolutionizing the way Islamic businesses operate and succeed.",
  },
  {
    id: 2,
    title: "Siddeeq Board",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "The aim of this section is to identify and provide employment opportunities for unemployed individuals with talents or skills. For those lacking such skills, the assembly will offer training in their respective areas of interest before providing employment.",
  },
  {
    id: 3,
    title: "Zunnoorain Platform",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "We will establish the 'Zunnoorain' platform, fostering connections among merchants and businessmen involved in our initiatives. This interconnected network of businesses will promote growth and collaboration, strengthening trade within the community.",
    
          
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

const SunnatTijaratAssembly = () => {
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

        <h1>Sunnat Tijarat Assembly</h1>
        
        <motion.div style={{ scaleX }} className="progressBar">
        </motion.div>
        
      </div>
      
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default SunnatTijaratAssembly;
