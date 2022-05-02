import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'//Importing The "Link" For the Router.

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.modeType} bg-${props.modeType}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            {/* We Use Router For Rander The Page Without Loding Thats Y We Change The "a" ancore Tag into a "Link" and "href" into The "to" */}
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            {/* We Use Router For Rander The Page Without Loding Thats Y We Change The "a" ancore Tag into a "Link" and "href" into The "to" */}
                            <Link className="nav-link" to="/about">{props.aboutText}</Link>
                        </li>
                    </ul>
                    {/* <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-primary" type="submit">Search</button>
                        
                    </form> */}
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" onClick={props.toggleModefun} role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string,
    aboutText: PropTypes.string
}