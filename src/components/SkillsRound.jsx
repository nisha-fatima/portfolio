import React, {useState} from 'react';
import Circle from 'react-circle';
import html from '../assets/images/html.png';
import css from '../assets/images/css.png';
import bootstrap from '../assets/images/bootstrap.png';
import js from '../assets/images/js.png';
import es6 from '../assets/images/es6.png';
import reactjs from '../assets/images/react.png';
import reduxjs from '../assets/images/redux.png';
import reactnative from '../assets/images/react.png';
import firebase from '../assets/images/firebase.png';
// import materialui from '../assets/images/materialui.png';
// import nodejs from '../assets/images/nodejs.png';
// import express from '../assets/images/express.png';
// import mongodb from '../assets/images/mongodb.png';

export default function SkillsRound() {

  const [htmlValue, setHtmlValue] = useState("0");
  const [cssValue, setCssValue] = useState("0");
  const [bootstrapValue, setBootstrapValue] = useState("0");
  const [jsValue, setJsValue] = useState("0");
  const [es6Value, setEs6Value] = useState("0");
  const [reactValue, setReactValue] = useState("0");
  const [reduxValue, setReduxValue] = useState("0");
  const [reactNativeValue, setReactNativeValue] = useState("0");
  const [firebaseValue, setFirebaseValue] = useState("0");


  const data = [
  {
    text: "HTML5",
    percentage: htmlValue,
    src: html,
    alt: "Html" 
  },
  {
    text : "CSS3",
    percentage: cssValue,
    src: css,
    alt: "Css"
  },
  {
    text: "Bootstrap",
    percentage: bootstrapValue,
    src: bootstrap,
    alt: "Bootstrap"   
  },
  {
    text : "JavaScript",
    percentage: jsValue,
    src: js,
    alt: "JavaScript"
  },
  {
    text : "ES6",
    percentage: es6Value,
    src: es6,
    alt: "ES6"
  },
  {
    text : "React Js",
    percentage: reactValue,
    src: reactjs,
    alt: "React Js"
  },
  {
    text : "Redux Js",
    percentage: reduxValue,
    src: reduxjs,
    alt: "Redux js"
  },
  {
    text : "React Native",
    percentage: reactNativeValue,
    src: reactnative,
    alt: "React Native"
  },
  {
    text : "Firebase",
    percentage: firebaseValue,
    src: firebase,
    alt: "Firebase"
  },
]

  const scrollDetected = () => {
    console.log(window.scrollY)
    if (window.scrollY >= 1600){
      setHtmlValue("90")
      setCssValue("90")
      setBootstrapValue("80")
      setJsValue("75")
      setEs6Value("75")
      setReactValue("80")
      setReduxValue("70")
      setReactNativeValue("40")
      setFirebaseValue("90")
    }
    if (window.scrollY < 1600){
      setHtmlValue("0")
      setCssValue("0")
      setBootstrapValue("0")
      setJsValue("0")
      setEs6Value("0")
      setReactValue("0")
      setReduxValue("0")
      setReactNativeValue("0")
      setFirebaseValue("0")
    }
  }

  window.addEventListener("scroll", scrollDetected)

    return (
        <>
        {
         data.map ((data, index)=> {
          return (
            <div style = {{textAlign: "center", color: "#ffffff", width: "300px"}} key={index}>
                <Circle
                    width="430px"
                    animate={true} // Boolean: Animated/Static progress
                    animationDuration="10s" // String: Length of animation
                    size="110" // String: Defines the size of the circle.
                    lineWidth="35" // String: Defines the thickness of the circle's stroke.
                    progress={data.percentage} // String: Update to change the progress and percentage.
                    progressColor="#ace340" // String: Color of "progress" portion of circle.
                    bgColor="#345655" // String: Color of "empty" portion of circle.
                    textColor="#b8b8c7"
                    percentSpacing={10}
                    roundedStroke={true}
                    showPercentage={true}
                    showPercentageSymbol={true}
                />
                  <h3>
                    <img src={data.src} alt={data.alt} width="20px" height="20px" style={{marginRight: "10px"}} />
                    {data.text}
                  </h3>
                  <br />
            </div>
        )
      })
    }
            
    </>
    )
}
