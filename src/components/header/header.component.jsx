import React from 'react';
import './header.styles.css'
import { ReactComponent as NavLogo } from '../../aseets/nav-logo.svg';
import { HashLink } from 'react-router-hash-link';

const Header = () => {

    return (



        <nav className="navbar sticky-top mb-3">
            <div className="container">
                <span className="navbar-brand">

                    <NavLogo style={{ width: '30px', height: '30px' }} />
                    <span style={{ color: 'white', fontWeight: '700' }}> Business</span>
                </span>
                <div className="d-flex justify-content-evenly">
                    <ul className="nav d-flex justify-content-evenly">

                        <li className="nav-item">
                            <HashLink activeStyle={{ borderBottom: '1px solid white' }} className="nav-link" style={{ color: 'white' }} to="#top">About</HashLink>
                        </li>
                        <li className="nav-item">
                            <HashLink className="nav-link" style={{ color: 'white' }} to="/page#features">Features</HashLink>
                        </li>
                        <li className="nav-item">
                            <HashLink className="nav-link" style={{ color: 'white' }} to="/page#services">Service</HashLink>
                        </li>
                        <li className="nav-item">
                            <HashLink className="nav-link" style={{ color: 'white' }} to="/page#product">Product</HashLink>
                        </li>

                        <li className="nav-item">
                            <HashLink className="btn btn-light" to="/page#contact">Contact Us</HashLink>
                        </li>

                    </ul>
                </div>

            </div>

        </nav>
    )
}

export default Header;