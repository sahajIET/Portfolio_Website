import React from 'react'
import "./About.scss";
import gsap from 'gsap';
import { motion } from 'framer-motion';
import { bios } from '../../../Data';
import portfolio from "../../../assets/portfolio.jpg"
const About = () => {


 


  return (
    <div className="container " id='about'>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="title cursor-scale small">
        <span>Who Am I?</span>
        <h1>About Me</h1>
      </motion.div>

      <div className="about_container">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="about_left">
          <motion.img src={portfolio}
            whileHover={{ y: -48, x: -55 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        <motion.div className="about_right"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >

          <p>I am a developer with proficiency in various programming languages such as Java, C/C++, Javascript (ES5/ES6).
           I am skilled in building dynamic and responsive user interfaces using front-end technologies such as React.Js, HTML5, and CSS3. 
           <br /><br />
           In addition to front-end development, I am skilled in back-end technologies and databases including Node.js, Express, MongoDB, MySQL and Restful APIs.
           <br /><br />
           I am always eager to learn and continuously improve my skills and to build high-quality software that is not only functional, but also well-architected and easy to maintain.
           <br /> <br />
           I take pride in solving complex problems in innovative ways and believe that my passion for development, combined with my technical skills, make me a valuable asset to any team.
           </p>
          {/* {bios.map(bio => {
            return (
              <div className="bio" key={bio.id}>
                <span className='bioKey'>{bio.icon}{bio.key}</span>
                <span className='bioValue'>{bio.value}</span>
              </div>
            )
          })} */}
          <br />
          <div style={{textAlign:'center'}}>
          <motion.a href='https://drive.google.com/file/d/1yjUh8U69Hrs3pWWn2H6VO3fguoR1vxIs/view?usp=share_link' download
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className='cursor-scale small'
          >
            Get Resume
          </motion.a>
          </div>
        </motion.div>

      </div>

    </div>
  )
}

export default About