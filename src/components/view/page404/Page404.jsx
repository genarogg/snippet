import React, { useState, useEffect } from "react";

import "./style/style.css";

const Page404 = () => {
  const [xAxis, setXAxis] = useState(0);
  const [yAxis, setYAxis] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const pageX = window.innerWidth;
      const pageY = window.innerHeight;
      const mouseY = event.clientY;
      const mouseX = event.clientX;

      setYAxis(((pageY / 2 - mouseY) / pageY) * 300);
      setXAxis((mouseX / pageX - 1) * 100);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  
  return (
    <div className="glosh404">
      <div className="box">
        <div className="box__ghost">
          <div className="symbol"></div>
          <div className="symbol"></div>
          <div className="symbol"></div>
          <div className="symbol"></div>
          <div className="symbol"></div>
          <div className="symbol"></div>

          <div className="box__ghost-container">
            <div
              className="box__ghost-eyes"
              style={{ transform: `translate(${xAxis}%, -${yAxis}%)` }}
            >
              <div className="box__eye-left"></div>
              <div className="box__eye-right"></div>
            </div>
            <div className="box__ghost-bottom">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="box__ghost-shadow"></div>
        </div>

        <div className="box__description">
          <div className="box__description-container">
            <div className="box__description-title">¡Vaya!</div>
            <div className="box__description-text">
              Parece que no pudimos encontrar la página que estabas buscando.
            </div>
          </div>

          <a
            onClick={() => window.history.back()}
            target="_blank"
            className="box__button"
          >
            Regresar
          </a>
        </div>
      </div>
    </div>
  );
};

export default Page404;
