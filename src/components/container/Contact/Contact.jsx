import React,{ useRef } from 'react';
import "./Contact.scss";
import { contacts } from '../../../Data';
import { socialIcons } from '../../../Data';
import { motion } from 'framer-motion';
import emailjs from "@emailjs/browser"
import Swal from 'sweetalert2';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_YOUR_SERVICE_ID, process.env.REACT_APP_YOUR_TEMPLATE_ID, form.current, process.env.REACT_APP_YOUR_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Message Sent',
            showConfirmButton: false,
            timer: 2000
          })
          e.target.reset();
          
      }, (error) => {
          console.log(error.text);
      });
    };

  return (
    <div className="container" id="contact">
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}} 
        className="title cursor-scale small"
      >
            <span>get in touch</span>
            <h1>Contact Me</h1>
      </motion.div>
      <div className="contact_form">
        <motion.div
          initial={{x: 0, opacity: 0}}
          whileInView={{ x: [-150,0], opacity: 1 }}
          transition={{duration: 1}}
          className='contact_left_container'>
          <h3>Just Say Hi</h3>
          <p className='contact_text'>I am always looking for new opportunities to collaborate with individuals and businesses on exciting projects. If you have a project in mind or need help with your software development needs, I would love to hear from you!!</p>
          {contacts.map(contact => {
            return (
              <div className='contact_left' key={contact.id}>
                <div className="icon">
                  {contact.icon}
                </div>
                <p>{ contact.infoText}</p>
              </div>
            )
          })}
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
        </motion.div>
        <motion.div
          initial={{x: 0, opacity: 0}}
          whileInView={{ x: [150,0], opacity: 1 }}
          transition={{duration: 1}}
          className="contact_right  cursor-scale"
        
        >
          <h3>Get In Touch</h3>
          <form ref={form} onSubmit={sendEmail}>
          <div className="row">
            <input type="text" placeholder='First Name' name='fname'/>
            <input type="text" placeholder='Last name' name='lname'/>
          </div>
          <div className="row">
            <input type="text" placeholder='Phone' name='phone' required/>
            <input type="email" placeholder='Email' name='email' required/>
          </div>
          <div className="row">
            <textarea placeholder='Message' name='message'></textarea>
          </div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{duration: 0.3}}
            className="btn"
          >
            
              <input type="Submit" value="Send" className='alink' />
            
          </motion.div>
          </form>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact