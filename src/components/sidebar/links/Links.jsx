import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  // const items = ["Homepage", "Services", "Portfolio", "Contact", "About"];
  const items = [{
    id: 1,
    title: "Homepage",
    path:"/"},{
    id:2,
    title:"Majlise Muhammadiﷺ",
    path:"/majlise-muhammadi"},{
    id:3,
    title:"Khalid Technical Team",
    path:"/khalid-technical-team"},{
    id:4,
    title:"Al-Ahad Baytul Maal",
    path:"/al-ahad-baytul-maal"},{
    id:5,
    title:"Ammar Islamic Media",
    path:"/ammar-islamic-media"},{
    id:6,
    title:"Majlise Farooq",
    path:"/majlise-farooq"},{
    id:7,
    title:"Sunnat Tijarat Assembly",
    path:"/sunnat-tijarat-assembly"},{
    id:8,
    title:"Sunnat Tababat Assembly",
    path:"/sunnat-tababat-assembly"
    }] 
  return (
    <motion.div className="links" variants={variants}>
                
       
      {items.map((item) => (
        <motion.a
          href={`${item.path}`}
          key={item.id}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {item.title}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
