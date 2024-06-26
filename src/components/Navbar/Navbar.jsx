import React, {useEffect, useState} from 'react'
import './Navbar.css'
import logo from '../../assets/logo1.png'
import { Link } from 'react-scroll';
import menu_icon from '../../assets/menu-icon.png'

const navbar = () => {
  /* Onclick on menu navigate to section */
  const [sticky, setSticky] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  },[]);
  /* Display humbergericon on click hide menu bar */
  const [mobileMenu, setMobileMenu] = useState(false);
  const toogleMenu = ()=>{
    mobileMenu? setMobileMenu(false):setMobileMenu(true);
  }

  return (
    <nav className={`container ${sticky? 'dark-nav':''}`}>
      <img src={logo} alt="" className='logo'/>
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li> <Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li> <Link to='program' smooth={true} offset={-260} duration={500}>Services</Link></li>
        <li> <Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link></li>
        <li> <Link to='campus' smooth={true} offset={-260} duration={500}>Gallery</Link></li>
        <li> <Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
        <li> <Link to='contact' smooth={true} offset={-260} duration={500}><button className='btn'>Contact Us</button></Link></li>
      </ul>
      <img src={menu_icon} alt="" className='menu_icon nav_contact_box' onClick={toogleMenu}/>
    </nav>
  )
}

export default navbar
