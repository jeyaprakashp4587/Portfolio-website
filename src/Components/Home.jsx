/** @format */

import React, { useRef } from "react";
import "./Home.css";

export const Home = () => {
  const menu = useRef(null);
  const HandleMenu = () => {
    if (menu.current) {
      menu.current.style.right = '0';
    }
  }
  const HandleClose = () => {
    console.log("fd")
    if (menu.current) {
      menu.current.style.right = "-900px";
    }
  }
  return (
    <div className="home-wrapper">
      {/* header */}
      <header className="container">
        <h2>Prakash.</h2>
        <i id="bars" class="fa fa-bars" aria-hidden="true" onClick={HandleMenu}></i>
        
        <nav ref={menu}>
        <i id="close-menu" class="fa fa-times" aria-hidden="true" onClick={HandleClose}></i>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </nav>
      </header>
      {/* home content */}
      <section className="container">
        <h1>I'm Jeya Prakash</h1>
        <h5>Web Devleoper / App Developer</h5>
        <img
          src="https://i.ibb.co/xmZ17gw/3d-rendering-boy-cap-glasses-with-backpack.png"
          alt="main-img"
        />
        <article>
          <p>Prakash</p>
        </article>
      </section>
      {/* icons */}
    </div>
  );
};
