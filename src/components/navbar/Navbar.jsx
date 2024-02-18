import "./navbar.scss";
import { motion } from "framer-motion";
import { SignedIn, SignedOut, SignOutButton, SignInButton } from "@clerk/clerk-react";
const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          
        <img  className="logo" src="/logo-dark-green-removebg-preview.png" alt="SAWAD-E-AZAM" / >
          
        </motion.span>
        <div className="social">
        <SignedIn>
          <SignOutButton>
            <button>Sign out</button>
          </SignOutButton>
        </SignedIn>
        <SignedOut>
          <SignInButton>
            <button>Sign in</button>
          </SignInButton>
        </SignedOut>
          <a href="#">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="#">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="#">
            <img src="/youtube.png" alt="" />
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
