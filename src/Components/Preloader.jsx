import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import "./Preloader.css";

const Preloader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        return oldProgress + 2;
      });
    }, 100);
  }, []);

  return (
    <div className="loader">
      <div className="logo-wrapper">
        <img src={logo} alt="logo" className="logo" />
        <div className="circle"></div>
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <p className="progress-text text-gray-700">{progress}%</p>

      <div className="loading-text">
        {"Loading".split("").map((letter, index) => (
          <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Preloader;
