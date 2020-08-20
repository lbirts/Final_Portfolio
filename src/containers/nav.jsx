import React, {useState, useEffect} from "react"
import './nav.css'

import Popup from 'reactjs-popup'
import { NavHashLink as NavLink } from 'react-router-hash-link';
import ReactTooltip from 'react-tooltip'

import Hamburger from '../components/hamburger'
import Logo from '../assets/Logo.png'
 
function Nav(props) {

  const [navClass, setNavClass] = useState("nav-bar")
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  function handleToggle() {
    setIsOpen(!isOpen)
  }

  function handleScroll() {
    if (window.scrollY > 10) {
      setNavClass("nav-bar floatingNav")
    } else {
      setNavClass("nav-bar")
    }
  }

  return (
    <div id="" className={navClass} style={isOpen ? {zIndex: "3"} : null}>
        <a href="/#"><img src={Logo} className="logo" alt="Logo"/></a>
        <div className="nav-items">
            <NavLink smooth to="/#about" className="item">About</NavLink>
            <NavLink smooth to="/#portfolio" className="item">Portfolio</NavLink>
            <NavLink smooth to="/#contact" className="item">Contact</NavLink>
            <a href="https://medium.com/@birtslauren" target="_blank" rel="noopener noreferrer" className="item">Blog</a>
        </div>
          <div className="ham" onClick={() => handleToggle()} style={{ position: "relative" }}>
            <div
              className={`hamburger-top ${isOpen ? "active" : ""}`}
            />
            <div
              className={`hamburger-center ${isOpen ? "active" : ""}`}
            />
            <div
              className={`hamburger-bottom ${isOpen ? "active" : ""}`}
            />
          </div>
        <Popup
          open={isOpen}
          modal
          closeOnDocumentClick={false}
          contentStyle={{background: "#1e2448", border: "none"}}
          overlayStyle={{ background: "#1e2448"}}
        >
            <div className="popout">
            <ul className="nav-list">
              <li className="list-item">
                <a href="/#" onClick={() => handleToggle()}>Home</a>
              </li>
              <li className="list-item">
                <NavLink smooth to="/#about" onClick={() => handleToggle()}>About</NavLink>
              </li>
              <li className="list-item">
                <NavLink smooth to="/#portfolio" onClick={() => handleToggle()}>Portfolio</NavLink>
              </li>
              <li className="list-item">
                <NavLink smooth to="/#contact" onClick={() => handleToggle()}>Contact</NavLink>
              </li>
              <li className="list-item">
                <a smooth href="https://medium.com/@birtslauren" target="_blank" rel="noopener noreferrer" onClick={() => handleToggle()}>Blog</a>
              </li>
            </ul>
            </div>
          
        </Popup>
        <ReactTooltip effect="solid"/>
        <div className="email add-on">
          <a href="mailto:birtslauren@gmail.com" target="_blank" rel="noopener noreferrer" className="mail" aria-label="email" data-tip="email" data-place="left" >birtslauren@gmail.com</a>
          <div className="mail-line"></div>
        </div>
        <div className="social add-on">
          <a href="https://github.com/lbirts" target="_blank" rel="noopener noreferrer" aria-label="Github" data-tip="Github" data-place="right">
            <i className="fa fa-github social-i"></i>
          </a>
          <a href="https://linkedin.com/lauren-birts" target="_blank" rel="noopener noreferrer" aria-label="Linkedin" data-tip="Linkedin" data-place="right">
            <i className="fa fa-linkedin social-i"></i>
          </a>
          <a href="https://twitter.com/codeLo" target="_blank" rel="noopener noreferrer" aria-label="Twitter" data-tip="Twitter" data-place="right">
            <i className="fa fa-twitter social-i"></i>
          </a>
          <a href="https://medium.com/@birtslauren" target="_blank" rel="noopener noreferrer" aria-label="Medium" data-tip="Medium" data-place="right">
            <i className="fa fa-medium social-i"></i>
          </a>
          <div className="social-line"></div>
        </div>
    </div>
  )
}
 
export default Nav;