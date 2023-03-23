import React, { useEffect, useState } from 'react';
import "./Portfolio.scss"
import { workNavs } from "../../../Data";
import { workImages } from '../../../Data';
import {FiGithub, FiEye} from "react-icons/fi"
import { motion } from 'framer-motion';

const Portfolio = () => {
  const [tab, setTab] = useState({ name: "all" });
  const [works,setWorks] = useState([])
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (tab.name === "all") {
      setWorks(workImages)
    } else {
      const newWork = workImages.filter(workImage => {
        return workImage.category.toLowerCase() === tab.name;

      })
      setWorks(newWork)
    }
  }, [tab])
  
  const activeTab = (e,index) => {
    setTab({ name: e.target.textContent.toLowerCase() });
    setActive(index)
  }

  return (
    <div className="container" id="portfolio">
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}}
        className="title cursor-scale small"
      
      >
            <span>My Work</span>
            <h1>Awesome Projects</h1>
      </motion.div>
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}}
        className="buttons"
      >
        {workNavs.map((workNav ,index) => {
          return (
            <button
              onClick={(e) => activeTab(e, index)}
              className={`${active === index ? "active" : ""}`}
              key={index}>{workNav}</button>
          )
        })}
      </motion.div>
      <motion.div
        initial={{x: 0 ,opacity: 0}}
          whileInView={{ x: [-250,0], opacity: 1 }}
        transition={{ duration: 1 }}
        exit={{opacity: 0, y: -50}}
        className="workImages"
      >
        {works.map((work) => {
          return (
            <div className="workImage"
             key={work.id}
            >
              
              <img src={work.img} alt="workImg" />
              <br />
              
              <div style={{margin:"3%"}}>
              {window.innerWidth<800 && <div style={{textAlign:'center'}} className="verify">
                  {<motion.a href={work.hub}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    target="_blank" rel="noreferrer noopener"
                    style={{margin:"5px"}}
                  >Github
                    
                  </motion.a>}
                         
                  {work.url!=="#" && <motion.a href={work.url}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    target="_blank" rel="noreferrer noopener"
                  >
                    Website
                  </motion.a>}
                  
               </div>}
               </div>
              <motion.div
                initial={{opacity: 0}}
                whileHover={{ opacity: [0, 1] }}
                transition={{duration: 0.3 , ease: "easeInOut"}}
                className='hoverLayer'
              >
                  
                <motion.a href={work.hub}
                whileInView={{scale: [0,1]}}
                 whileHover={{scale: [1, 1.1]}}
                 transition={{duration: 0.3}}
                 target="_blank" rel="noreferrer noopener"
                >
                  <FiGithub />
                </motion.a>
                  

                 { work.url !== "#" &&
                <motion.a href={work.url}
                whileInView={{scale: [0,1]}}
                 whileHover={{scale: [1, 1.1]}}
                 transition={{duration: 0.3}}
                 target="_blank" rel="noreferrer noopener"
                >
                  <FiEye />
                </motion.a>}
              </motion.div>
            </div>
          )
        })}
      </motion.div>
      <motion.div
        initial={{x: 0 ,opacity: 0}}
          whileInView={{ x: [250,0], opacity: 1 }}
          transition={{duration: 1}}
        className="talk  cursor-scale"
      >
        <div className="talk_left">
          <h3>so let's talk about <br /> <span>your next projects</span></h3>
        </div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{duration: 0.3}}
          className="talk_right">
          <a href="#contact"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>
      
    </div>
  )
}

export default Portfolio