import { useRef } from "react";
import "./services.scss";
import { Link } from 'react-router-dom';
import { motion} from "framer-motion";
// import { motion, useInView } from "framer-motion";
const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  // const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      {/* <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div> */}
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/hero2.jpg" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Programs</motion.b> of
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>Sawad-E-Azam</motion.b> NGO.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="textContainer" variants={variants}>
        <p>
          Sawad-E-Azam aims to establish a global Islamic community to promote Islamic sciences, arts, and culture, while also advocating for peace, unity, and justice. 
         <br/> The NGO consists of several sections. 
        </p>
        </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Majlise Muhammadiﷺ</h2>
          <p>
            It has four sections: <br/><br/>
            1. <b>Bazme As&apos;haabe Suffa</b>—Research & Jurisprudence<br/>
            2. <b>Mur&apos;taza Ali Board</b>—Educational Infrastructure<br/>
            3. <b>Ahle Bayt</b>— Spiritual Centres<br/>
            4. <b>Al-Huda Community.</b><br/>
          </p>
          <Link to="/majlise-muhammadi"><button>Go</button></Link>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Khalid Technical Team</h2>
          <p>
            It has two sections: <br/><br/>
            1. Research Department <br/>
            2. Downloads <br/>
          </p>
          <Link to="/khalid-technical-team"><button>Go</button></Link>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Al-Ahad Baytul Maal</h2>
          <p>
          It has two sections:<br/><br/>
            1. House of Wealth<br/>
            2. Donations<br/>
            3. Business Alliances<br/>
            4. Agricultural Collaboration<br/>
          </p>
          <Link to="/al-ahad-baytul-maal"><button>Go</button></Link>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Ammar Islamic Media</h2>
          <p>
            It has two sections: <br/><br/>
            1. News <br/>
            2. Legal Awareness <br/>
          </p>
          <Link to="/ammar-islamic-media"><button>Go</button></Link>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Majlise Farooq</h2>
          <p>
            It has two sections: <br/><br/>
            1. Abu Musa Da&apos;rul Qazas (Islamic Panchayat) <br/>
            2. Zulfiqar Board of Justice <br/>
          </p>
          <Link to="/majlise-farooq"><button>Go</button></Link>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Sunnat Tijarat Assembly</h2>
          <p>
            It has two sections: <br/><br/>
            1. Siddeeq Board <br/>
            2. Zoonnoorain Platform <br/>
          </p>
          <Link to="/sunnat-tijarat-assembly"><button>Go</button></Link>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Sunnat Tababat Assembly</h2>
          <p>
            It has two sections: <br/><br/>
            1. Research Department <br/>
            2. Infrastructure Department <br/>
          </p>
          <Link to="/sunnat-tijarat-assembly"><button>Go</button></Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
