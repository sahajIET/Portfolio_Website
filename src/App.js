import React from 'react'
import "./App.css"
import About from './components/container/About/About'
import Contact from './components/container/Contact/Contact'
import Footer from './components/container/Footer/Footer'
import Home from './components/container/Home/Home'
import Portfolio from './components/container/Portfolio/Portfolio'
import Skills from './components/container/Skills/Skills'
import Navbar from './components/Navbar/Navbar'
import gsap from 'gsap'
const App = () => {

  var cursor = document.querySelector('.cursor'),
  cursorScale = document.querySelectorAll('.cursor-scale'),
  mouseX = 0,
  mouseY = 0

gsap.to({}, 0.016, {
  repeat: -1,

  onRepeat: function () {
      gsap.set(cursor, {
          css: {
              left: mouseX,
              top: mouseY
          }
      })
  }
});

window.addEventListener("mousemove", function (e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
  console.log("me toh chlra hu");
});

cursorScale.forEach(link => {
  link.addEventListener('mouseleave', () => {
      cursor.classList.remove('grow');
      cursor.classList.remove('grow-small');
  });
  link.addEventListener('mousemove', () => {
      cursor.classList.add('grow');
      if(link.classList.contains('small')){
          cursor.classList.remove('grow');
          cursor.classList.add('grow-small');
      }
  });
});


  return (
    <div>
          
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Portfolio />
          <Contact />
          <Footer />
      
    </div>
    
  )
}

export default App
