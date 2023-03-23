import React, { useState } from 'react'
import "./Skills.scss";
import { icons } from '../../../Data';
import { experiences } from '../../../Data';
import { finishes } from '../../../Data';
import { motion } from 'framer-motion';
import { certificates } from '../../../Data';
import { FiEye} from "react-icons/fi";
import v from "../../../assets/earth.mp4"
const Skills = () => {
  const [active, setActive] = useState(1)
  return (
    <div className="container vgb" id="skills">
    
      <div className='overlay'></div>
      <video autoPlay loop muted>
        <source src={v} type="video/mp4"/>
      </video>
      <div>
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}}  
        className="title cursor-scale small"
      >
        <span>What I Expert?</span>
        <h1>Skills</h1>
      </motion.div>
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}}
        className="select"
      >
        <button
          onClick={() => setActive(1)}
          className={active === 1 ? "active" : ""}>Skills</button>
        <button
          onClick={() => setActive(2)}
          className={active === 2 ? "active" : ""}
        >Certificates</button>
        {/* <button
          onClick={() => setActive(2)}
          className={active === 2 ? "active" : ""}
        >Experiences</button> */}
      </motion.div>
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}}
        className="skills"
      >
        {active === 1 && icons.map((icon, index) => {
          return (
            <div key={index} className="tools" >
              <img src={icon.img} alt="img"/>
            </div>
          )
        })}
      </motion.div>
      <motion.div
        initial={{x: 0 ,opacity: 0}}
          whileInView={{ y: [-50,0], opacity: 1 }}
        transition={{ duration: 1 }}
        exit={{opacity: 0, y: -50}}
        className="certImages"
      >
        {active === 2 && certificates.map((certificate) => {
          return (
            <div className="certImage"
             key={certificate.id}
            >
              <img src={certificate.img} alt="certImg" />
              <motion.div
                initial={{opacity: 0}}
                whileHover={{ opacity: [0, 1] }}
                transition={{duration: 0.3 , ease: "easeInOut"}}
                className='hoverLayerCert'
              >
                  
                {/* <motion.a href='#'
                whileInView={{scale: [0,1]}}
                 whileHover={{scale: [1, 1.1]}}
                 transition={{duration: 0.3}}
                >
                </motion.a> */}
                  
                <motion.a href="https://drive.google.com/file/d/1ZB0b5MUoLXHNEd6iagCevL1jKvS4mSbX/view?usp=sharing"
                whileInView={{scale: [0,1]}}
                 whileHover={{scale: [1, 1.1]}}
                 transition={{duration: 0.3}}
                >
                  <FiEye />
                </motion.a>
                
              </motion.div>
              <br />
              <br />
              <div style={{textAlign:'center'}} className="verify">
                  <motion.a href="https://www.credly.com/badges/1fcd7cbf-9c8a-48c4-b5ab-54eae2ba0906?source=linked_in_profile"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    Verify
                  </motion.a>
               </div>
            </div>
          )
        })}
      </motion.div>
      {/* <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}}
        className="experiencs"
      >
        {active === 2 && experiences.map(experience => {
          return (
            <div className="experience" key={experience.id}>
              <span>{experience.year}</span>
              <div className="position">
                <h3>{experience.position}</h3>
                <p>{experience.company}</p>
              </div>
            </div>
          )
        })}
        </motion.div> */}
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}}
        className="finishes_container"
      >
        {finishes.map(finish => {
        return (
          <div className='finishes' key={finish.id}>
            <div className='number'>{finish.number}</div>
            <h4 className='item_name'>{finish.itemName }</h4>
          </div>
          )
        })}
      </motion.div>
      </div>
      </div>
      
      
      
    
    
  )
}

export default Skills