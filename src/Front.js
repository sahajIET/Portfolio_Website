import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { gsap, CSSPlugin, Expo } from "gsap";
gsap.registerPlugin(CSSPlugin);

function Front() {
  
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const count = setInterval(() => {
      setCounter((counter) =>
        counter < 100
          ? counter + 1
          : (clearInterval(count), setCounter(100), reveal())
      );
    }, 25);
  }, []);

  const reveal = () => {
    const t1 = gsap.timeline({
      onComplete: () => {
        console.log("completed");
      },
    });
    t1.to(".follow", {
      width: "100%",
      ease: Expo.easeInOut,
      duration: 1.2,
      delay: 0.7,
    })
      .to(".hide", { opacity: 0, duration: 0.3 })
      .to(".hide", { display: "none", duration: 0.3 })
      .to(".follow", {
        height: "100%",
        ease: Expo.easeInOut,
        duration: 0.7,
        delay: 0.5,
      }).to(".load",{
        opacity:0
      }).to(".follow",{
        opacity:0
      })
      .to(".content", { width: "100%", ease: Expo.easeInOut, duration: 0.7 })
      
  };

  return (
    <AppContainer>
      <Loading className="load">
        <Follow className="follow"></Follow>
        <ProgressBar
          className="hide"
          id="progress-bar"
          style={{ width: counter + "%" }}
        ></ProgressBar>
        <Count id="count" className="hide">
          {counter}%
        </Count>
      </Loading>

    </AppContainer>
  );
}

export default Front;




const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;
const Loading = styled.div`
  height: 100%;
  width: 100%;
  background-color: #121212;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  z-index:0
`;
const Follow = styled.div`
  position: absolute;
  background-color: #246df5;
  height: 2px;
  width: 0;
  left: 0;
  z-index: 0;
`;

const ProgressBar = styled.div`
  position: absolute;
  left: 0;
  background-color: #fff;
  height: 2px;
  width: 0;
  transition: 0.4s ease-out;
`;

const Count = styled.p`
  position: absolute;
  font-size: 100px;
  color: #fff;
  transform: translateY(-15px);
  font-weight: 500;
  
`;