// eslint-disable-next-line
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { animate } from 'framer-motion';
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { navLinks } from '../../Data';
import { socialIcons } from '../../Data';
import "./Navbar.scss";
import cur from "../../cursor"
import logo2 from "../../assets/final_logo_circle.png"
//variable to handle the flickering as animation in mobile view
let x=1;
//variable to handle the menu background in mobile view
let y=1;
//variable to handle the resizing and show navbar when gets shrinked or enlarged
let z=window.innerWidth>800?1:-1;
const Navbar = () => {
    
    cur();
    

    const [scroll, setScroll] = useState(false);
    //solution to counter flashing of navbar in mobile view.
    //used as an animation just like presenting the weakness as your Strongest point.
    const [toggle, setToggle] = useState(useRef(window.innerWidth).current <= 800?(true&& (x===1 ? setTimeout(() => {
        x=2;y=2;
        setToggle(false);
    }, 3000): x=2) ):false);
    // if( useRef(window.innerWidth).current < 800 )
    //     setToggle(true);
    
    const menuVariants = {
        hidden: {
           
            scale: 0
        },
        visible: {
            scale: 50,
            transition: {
                type: "tween",
                duration: 0.5,
            }
        }
    }
    const navLinkVariants = {
        hidden: {
            display: "none",
            opacity: 0
        },
        visible: {
            opacity: 1,
            y: -30,
            transition: {
                delay: 0.7
            }
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 20)
        })
    },[])
  return (
      <motion.div
          initial={{ y: -25 }}
          animate={{ y: -5 }}
          transition={{duration: 0.5}}
          className={scroll ? "header active" : "header"}>
          <div className="Nav_container">
          <a href='#home'>
              <div className="logo">
                 <img src={logo2} alt="Sahaj Logo" /> 
                    
              </div>
              </a>
              <ul
                      className="nav_links cursor-scale small"
                   >
                  {navLinks.map((navlink,index) => {
                      return <li key={index}><a href={`#${navlink}`}>{navlink}</a></li>
                  })}
              </ul>
              <div className="social_icons cursor-scale small" >
                  {socialIcons.map((socialIcon,index) => {
                  return (
                      <div key={index}>
                      <a href={socialIcon.url} target="_blank" rel="noreferrer noopener">
                          {socialIcon.icon}
                          </a>  
                      </div>
                  )
              })}
              </div>
              <div className="menu cursor-scale small" >
                  <HiMenuAlt4 onClick={() => {setToggle(true); 
                    z=-1;
                  
                  } }  />
              </div>
              
              <motion.div className="closeMenu cursor-scale small"
                          variants={menuVariants}
                          initial="hidden" animate= {toggle ?"visible": "hidden"}
                          style={{background:y===1?"#246df5":"#000"}}
                          
                      >
              </motion.div>
              
          <motion.div
                  variants={navLinkVariants}
                  animate={toggle ? "visible" : "hidden"}
                  className="menuX cursor-scale small" style={{display:z===1?"none":"flex"}}
              >
                  <HiX onClick={() => setToggle(false)}
                    
                  />
                  {navLinks.map((navlink,index) => {
                      return <li
                          key={index}><a
                         
                          href={`#${navlink}`} onClick={() => setToggle(false)}>{navlink}</a></li>
                  })}
              </motion.div>
          </div>
    </motion.div>
  )
}

export default Navbar