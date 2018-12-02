import PropTypes from 'prop-types'
import React from 'react'
import './header.css'
import logo from '../images/logo.png'
import hamburger from '../images/hamburger.png'
import search from '../images/search.png'

const Header = ({ siteTitle }) => (
  <div className="header">
    <nav>
      <ul className="mobileMenu">
        <li><img className="icon" src={hamburger} alt="main menu" /></li>
        <li><a href="/"><img className="logo" src={logo} alt="spa tec logo" /></a></li>
        <li><img className="icon" src={search} alt="search" /></li>
      </ul>
      <ul className="navigation">
        <li><a href="/"><img className="logo" src={logo} alt="spa tec logo" /></a></li>
        <li><a href="/">Service</a></li>
        <li><a href="/">Hot Tubs</a></li>
        <li><a href="/">Whirlpools</a></li>
        <li><a href="/">Saunas</a></li>
        <li><a href="/">Swimming Pools</a></li>
      </ul>
    </nav>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
