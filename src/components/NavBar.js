// import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {

    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">NewsMonkey</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end text-white bg-dark" tabIndex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbar2Label">Menu</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/business">Business</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/entertainment">Entertainment</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/health">Health</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/science">Science</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/sports">Sports</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/technology">Technology</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )

}

export default NavBar