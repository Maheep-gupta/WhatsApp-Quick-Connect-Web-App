import React from 'react'
import logo from './whatsAapLogo.png'

function Navbar() {
    return (
        <>
            <nav className="navbar border-bottom border-body rounded-4" data-bs-theme="dark" style={{backgroundColor:"#272829"}}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src={logo} alt="Logo" width="50" height="35" className="d-inline-block align-text-top"/>
                        WhatsApp Quick Connect 
                    </a>
                </div>
            </nav>
        </>
    )
}

export default Navbar