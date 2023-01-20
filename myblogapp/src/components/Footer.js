import React from 'react'
import Logo from '../images/Logo.png'

const Footer = () => {
  return (
    <footer>
        <img src={Logo} alt='logo'></img>
        <span>Made with <b>React.js</b></span>
    </footer>
  )
}

export default Footer