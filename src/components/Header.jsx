import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div>
        <div className="row">
                  <div className="l-constrained-9 group">
                    <img className="air-freight" src="/images/air-freight.png" alt="" width={40} height={40} />
                    <p className="denso">Denso</p>
                    <div className="rectangle-21-holder group">
                      <img className="text-3" src="/images/image.png" alt="" width={18} height={18} title="" />
                      <p className="search">Search</p>
                    </div>
                    <p className="text-2">demo@gmail.com</p>
                    <img className="email" src="/images/email.png" alt="" width={16} height={12} />
                    <p className="text">Call Us : +01 1234567890</p>
                    <img className="telephone-symbol-button" src="/images/telephone-symbol-button.png" alt="" width={16} height={16} />
                  </div>
                </div>
                <div className="row-5">
                  <div className="l-constrained-10 group">
                    <div className="wrapper-10 flexed">
                      <ul className="nav-ul ul-one">
                        <li>
                            <NavLink to="/">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">
                                About
                            </NavLink>
                        </li>
                        <li>
                        <NavLink to="/transport">
                              Transport
                            </NavLink>
                        </li>
                        <li>
                        <NavLink to="/news">
                                News
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/client">     
                            Clients
                                </NavLink>    
                        </li>
                      </ul>
                      <ul className="nav-ul ul-two">
                        <li>Login</li>
                        <li>Register</li>
                      </ul>
                    </div>
                  </div>
                </div>
    </div>
  )
}

export default Header