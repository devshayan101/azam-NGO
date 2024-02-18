import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Link } from 'react-router-dom';
const items = [
  {
    id: 1,
    title: "Majlise Muhammadiﷺ",
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Sawaad-E-Azam NGO's foundation lies in the 'Majlise Muhammadi', an assembly composed of experienced and knowledgeable Islamic scholars and saints. The primary goals of this assembly are: 1. Conducting modern research on Islamic jurisprudence for all four schools of thought - Hanafi, Shafi'i, Maliki, and Hanbali, and also to rectify distorted historical narratives. 2. Addressing theological issues within the Muslim community in accordance with Ahle Sunnat principles.Establishing connections between different Masjids. 3. Compiling a contemporary encyclopedia and rediscovering forgotten Islamic sciences, arts, and subjects. 4. Endeavoring to resolve interpersonal disagreements among the Ahle Sunnat and unifying them based on fundamental Islamic principles, while promoting unity among aimma and ulama (Islamic leaders and scholars). 5. Promoting and practicing the teachings of Sufi saints of Islam. ",
    link:"/majlise-muhammadi"
  },
  {
    id: 2,
    title: "Khalid Technical Team",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "The 'Khalid Technical Team', an essential component of our initiatives, will actively promote our objectives and spread Islamic thoughts and teachings through Sawad-E-Azam websites and social media platforms. This team will strive to present a pure and peaceful Islam to the global community. They will share the writings of respected scholars and the research conducted by Sawad-E-Azam scholars in a modern and accessible manner. Furthermore, the team will raise awareness against heresy and develop apps for Android, iOS, Windows, etc., in line with the objectives of Sawade Azam. Separate teams will manage activities related to both genders.",
    link:"/khalid-technical-team"
  },
  {
    id: 3,
    title: "Al-Ahad Baytul Maal",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Sawad-E-Azam 'Al-Ahad Baitul Maal' aims to provide financial assistance to those in need, specifically the 'Sawade Azam' community. This institution will be established in multiple locations, and it consists of three divisions: 'House of Wealth', 'Donations', 'Businesses alliances', and 'Agricultural collaboration'.     The primary focus of these divisions is to address the financial needs of 'Sawade Azam' and support their goals. Additionally, the institution intends to empower individuals by helping them initiate their own businesses and assisting with expenses related to education, marriage, and healthcare.",
    link:"/al-ahad-baytul-maal"
          
  },
  {
    id: 4,
    title: "Ammar Islamic Media",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "Another significant group to be established is the 'Ammar Islamic Media'. This platform will address the concerns of the Muslim community, working tirelessly to eliminate hatred and foster peace and brotherhood. This media group will also raise awareness about laws, values, and rights.",
    link:"/ammar-islamic-media"
  },
  {
    id: 5,
    title: "Majlise Farooq",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "The Majlise Farooq is composed of two divisions, with one being responsible for the administration of Islamic Scholars will be called ‘Abu Musa Darul Qazas’, while the other 'Zulfiqar' Board oversees the operations concerning lawyers and advocates.",
    link:"/majlise-farooq"
  },
  {
    id: 6,
    title: "Sunnat Tijarat Assembly",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "Additionally, our plans include the formation of the 'Sunnat Tijarat Assembly', which consists of two sections: 'Siddeeq Board' 'Zunnoorain Platform'. Siddeeq Board': The aim of this section is to identify and provide employment opportunities for unemployed individuals with talents or skills. For those lacking such skills, the assembly will offer training in their respective areas of interest before providing employment. 'Zunnoorain Platform': We will establish the 'Zunnoorain' platform, fostering connections among merchants and businessmen involved in our initiatives. This interconnected network of businesses will promote growth and collaboration, strengthening trade within the community. ",
    link:"/sunnat-tijarat-assembly"
  },
  {
    id: 7,
    title: "Sunnat Tababat Assembly",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "To address healthcare needs, the 'Sunnat Tababat Assembly' will be established. This assembly will focus on establishing health research centers and constructing hospitals. These facilities will ensure the presence of separate sections with male and female doctors to cater to both genders. Additionally, specialized birthing centers with female doctors will be established. The assembly will actively engage in researching emerging diseases and developing corresponding treatments and medications.",
    link:"/sunnat-tababat-assembly"
  },
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
            <Link to={item.link}><button>Learn more</button></Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
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
        <h1>Programs of Sawad-E-Azam</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
        
      </div>
      
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
