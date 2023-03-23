import React from 'react';
import "./Footer.scss"
import { socialIcons } from '../../../Data';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity:
          1
      }}
      transition={{duration: 1.5}}
      className='footer'
    >
      <div className="copyright">
        <p><span>Sahaj Bagherwal</span></p>
        <p>Copyright &copy;{new Date().getFullYear()} All rights reserved.</p>
      </div>
      <div className="followMe">
        <h4>Follow Me</h4>
        <div className="stick"></div>
        <div className="social_icons cursor-scale small">
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
      </div>
    </motion.div>
  )
}

export default Footer