import "./navbar.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import { SignedIn, SignedOut, SignOutButton, SignInButton, UserButton } from "@clerk/clerk-react";
import { Drawer, FloatButton } from "antd";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          
        <img  className="logo" src="/logo-dark-green-removebg-preview.png" alt="SAWAD-E-AZAM" / >
          
        </motion.span>
        <div className="social-wraper">
          <div className="social">
            
            <div className="user-button">

              {/* Sign-in button when not logged in and sign-out button when logged in */}
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

            </div>
            <a href="#">
              <img src="/facebook.png" alt="" />
            </a>
            <a href="#">
              <img src="/instagram.png" alt="" />
            </a>
            <a href="#">
              <img src="/youtube.png" alt="" />
            </a>

            <SignedOut>
              <div style={{ width:'2rem', height: 50 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div> 
            </SignedOut>

            <FloatButton
              description="Apply"
              onClick={() => setOpen(true)}
              style={{ width: 80, height: 50, top: 25, right: 24 }}
            />
            <Drawer
              title="Survey"
              placement="right"
              onClose={() => setOpen(false)}
              open={open}
              size="large"
            >
              <iframe
                title="Survey"
                src="https://docs.google.com/forms/d/e/1FAIpQLSf3W8fl2-KCkQg1a4uNO1TRFLCm2XrunTPBFr2x_ozXiB34UQ/viewform?embedded=true"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                style={{ width: "100%", height: "calc(100% - 3px)" }}
              >
                Loading…
              </iframe>
            </Drawer>
            </div>

            {/* User profile icon is displayed after login */}
          <SignedIn>
            <UserButton/> 
            <div style={{ width:'3rem', height: 50 }}></div> 

          </SignedIn>
          
          
      </div>
    </div>
    </div>
  );
};

export default Navbar;
