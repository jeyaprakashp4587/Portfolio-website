/** @format */
import "./skills.css";
import React, { useEffect } from "react";

const Skills = () => {
  // flaoting icons
  const icon = document.getElementsByClassName("io");
  useEffect(() => {
    if (icon.length > 0) {
      for (let i = 0; i < icon.length; i++) {
        setTimeout(
          (index) => {
            icon[index].classList.add("animation-icon");
          },
          300 * i,
          i
        );
      }
    }
  }, []);

  return (
    <div className="skills-wrapper">
      <div className="skills container">
        <i class="fa-brands io fa-html5" style={{ color: "#e34f22" }}></i>
        <i class="fa-brands io fa-css3-alt" style={{ color: "#2469ee" }}></i>
        <i class="fa-brands io fa-js" style={{ color: "#fad23f" }}></i>
        <i class="fa-brands io fa-react" style={{ color: "#73dae8" }}></i>
        <i class="fa-brands io fa-bootstrap" style={{ color: "#512295" }}></i>
        <i class="fa-brands io fa-node" style={{ color: "#8fc748" }}></i>
        <i class="fa-brands io fa-php" style={{ color: "#505a95" }}></i>
      </div>
    </div>
  );
};

export default Skills;
