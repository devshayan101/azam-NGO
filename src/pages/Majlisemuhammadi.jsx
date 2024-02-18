import { useRef} from "react";
import { Link } from 'react-router-dom';
import "./Majlisemuhammadi.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Parallax from "../components/parallax/Parallax";
const items = [
  {
    id: 1,
    title: "Majlise Muhammadiﷺ",
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Sawaad-E-Azam NGO's foundation lies in the 'Majlise Muhammadi', an assembly composed of experienced and knowledgeable Islamic scholars and saints. The primary goals of this assembly are: 1. Conducting modern research on Islamic jurisprudence for all four schools of thought - Hanafi, Shafi'i, Maliki, and Hanbali, and also to rectify distorted historical narratives. 2. Addressing theological issues within the Muslim community in accordance with Ahle Sunnat principles.Establishing connections between different Masjids. 3. Compiling a contemporary encyclopedia and rediscovering forgotten Islamic sciences, arts, and subjects. 4. Endeavoring to resolve interpersonal disagreements among the Ahle Sunnat and unifying them based on fundamental Islamic principles, while promoting unity among aimma and ulama (Islamic leaders and scholars). 5. Promoting and practicing the teachings of Sufi saints of Islam. Sections to be established under 'Majlise Muhammadi ﷺ include • 'Bazme As'haabe Suffa', • 'Mur’taza Ali Board’, • 'Ahle Bayt Spiritual Centres' and • ‘Al-Huda Community’.  ",
  },
  {
    id: 2,
    title: "Bazme As'haabe Suffa",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "As part of the 'Majlise Muhammadi', 'Bazme As'haabe Suffa' will be established. This group will develop a Sawad-E-Azam syllabus for schools and Madrasas, incorporating modern educational practices and adapting to changing circumstances. The syllabus will cover both religious and secular education, employing contemporary teaching methodologies. Additionally, the group will actively engage in programs focused on skill development for students and youth.",
  },
  {
    id: 3,
    title: "Mur’taza Ali Board",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: " Furthermore, under the 'Majlise Muhammadi', the 'Mur’taza Ali Board’ will be established. This division will oversee the organization and establishment of schools, colleges, and educational centers worldwide, implementing an updated curriculum. These institutions will uphold Islamic teachings and values while providing separate sections for both genders. The 'Mur’taza Ali' section will also promote self-defence training and incorporate specialized sections with highly skilled and professional instructors.",
    
          
  },
  {
    id: 4,
    title: "Ahle Bayt Spiritual Centres",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "To cater to the spiritual needs of believers, 'Ahle Bayt Spiritual Centres' will be established worldwide under the 'Majlise Muhammadi'. These centers will accommodate individuals from various spiritual lineages, such as Qadri, Chishti, Naqshbandi, and others. The purpose of these centers will be to facilitate spiritual practices, including tazkiya (purification) and tasfiya (refinement), among others.",
  },
  {
    id: 5,
    title: "Al-Huda Community",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc:"• Professional educators in various fields will assemble in the 'Al-Huda Community'. • Equipping students with the necessary abilities, guidelines, and resources to excel in exams such as I.A.S, I.P.S, PSC, I.I.T, and Medical, etc.• Instilling in their minds the inclination to devise career development plans, cultivate a spirit of inquiry, and foster a love for learning.• Motivating young individuals to actively participate in social and community services. Nurturing and preparing young people for engaging in various sports activities.",
  }
  
];

const Single = ({ item }) => {
  const ref = useRef();

  
  console.log("ref:",ref)
  const { scrollYProgress } = useScroll({
    target: ref,
  });
console.log("scrollYProgress:",scrollYProgress);
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

const Majlisemuhammadi = () => {
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
    <>  

        <Parallax />
      <div className="portfolio" ref={ref}>
        <div className="progress">

          <h1>Majlis-e-Muhammadi</h1>
          
          <motion.div style={{ scaleX }} className="progressBar">
          </motion.div>
          
        </div>
        
        {items.map((item) => (
          <Single item={item} key={item.id} />
        ))}
      </div>
    </>
  );
};

export default Majlisemuhammadi;
