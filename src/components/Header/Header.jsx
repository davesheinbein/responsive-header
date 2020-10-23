import React from 'react'
import SidebarButton from '../SidebarButton/SidebarButton'
import './style/Header.css'

const Header = props => (
<header className="header">
    <nav className="header__navigation">
        <div className="header__toggle-button">
            <SidebarButton sidebarClickHandler={props.sidebarClickHandler} />
        </div>
        <div className="header__logo">
            <a href="/">THE LOGO</a>
        </div>
        <div className="spacer" />
        <div className="header__navigationItems">
            <ul>
                <li>
                    <a href="/">Products</a>
                </li>
                <li>
                    <a href="/">Users</a>
                </li>
            </ul>
        </div>
    </nav>
</header>
)

export default Header