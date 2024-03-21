import React from 'react';
import img1 from './Images/img1.jpg';
import img2 from './Images/img2.jpg';
import img3 from './Images/img3.jpg';
import img4 from './Images/img4.jpg';
import logo1 from './Images/mod.jpg';

function Home() {
  return (
    <div className="main">
      <div className="navbar">
        <div className="icon">

        <div className="logo1">
        <img src={logo1} alt="My logo" style={{ width: '150px', height: 'auto' }}></img>
       

            </div>
          
        </div>

        <div className="para">
          <h1 className="heading">AUTO MOBILE ACCESSORIES</h1>
        </div>

        <div className="slidershow middle">
          <div className="slides">
            <input type="radio" name="r" id="r1" />
            <input type="radio" name="r" id="r2" />
            <input type="radio" name="r" id="r3" />

            <div className="slide s1">
              <img src={img3} alt="" />
            </div>

            <div className="slide">
              <img src={img2} alt="" />
            </div>

            <div className="slide">
              <img src={img1} alt="" />
            </div>
          </div>
        </div>

        <div className="navigation">
          <label htmlFor="r1" className="radio"></label>
          <label htmlFor="r2" className="radio"></label>
          <label htmlFor="r3" className="radio"></label>
        </div>

        <div className="description">
          <p>
            Since the time of the first wheel spin, man has been inventing, improving, and modifying vehicles. The automobile industry has been growing and turned into a treasured object these days.
            Your vehicle is a part of your life, traveling to and forth in this fast-paced world, you spend a lot of time in your vehicle, and with its help, you can spend your time efficiently. The exterior of your vehicle should have a sturdy body kit and great wheels, as the internal machinery of your car, to move smoothly so you ensure that it is comfortable and attractive.
            Whether it’s supplying accessories or fixing them for your vehicle, ModifyMe has everything you need for maintaining your car, van, or bike; from body kits to alloy wheels, we got a selection of choices that would suit your personal preference and vehicles.
          </p>
          <br/><br/>
          
        </div>
        <div className="bttn">
      <a href="login.html" className="btn">LOGIN</a>
         </div>
      </div>
    </div>
  );
}

export default Home;
