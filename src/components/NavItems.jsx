import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/images/logo/logo.png"



const NavItems = () => {
    const [menuToggle, setMenuToggle] = useState(false);
    const [socialToggle, setSocialToggle] = useState(false);
    const [headerFiexd, setHeaderFixed] = useState(false);

    // ading an event listner
    window.addEventListener("scroll", () =>{
        if(window.scrollY>200){
            setHeaderFixed(true)
        }else{
            setHeaderFixed(false)
        }
    }
    )

  return (
    <header className={`header-section style-4 ${
        headerFiexd ? "header-fixed fadeInUp" : ""
      }`} style={{ backgroundColor: 'white' }}>
        {/* header image */}
        <div className='header-bottom'>
            <div className='container'>
                <div className='header-wrapper'>
                    {/* logo */}
                    <div className='logo-search-acte'>
                        <div className='logo'>
                            <Link to="/"><img src={logo} alt="" /></Link>
                        </div>
                    </div>

                    {/*menu items */}
                    <div className='menu-area'>
                        <div className='menu'>
                            <ul className={`lab-ul ${menuToggle ? "active":""}`}>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/shop">Shop</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/contact">Contact Us</Link></li>
                                {menuToggle && (
                                        <li><Link to="/cart">Cart</Link></li>
                                    )}
                            </ul>
                        </div>

                        {/*cart button*/}
                        <Link to="/cart" className="lab-btn me-3 d-none d-md-block">Cart</Link>

                        {/**menu togler */}
                        <div onClick={() => setMenuToggle(!menuToggle)} className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`} >
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </header>
  )
}

export default NavItems