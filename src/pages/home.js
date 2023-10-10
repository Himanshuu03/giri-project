
import React from "react";
import ContactForm from "./form";
import { NavLink } from "react-router-dom";

class Home extends React.Component{
    render(){
        return(
            <div>
            <div className="bg">
              <div className="col">
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
                <div className="row-4">
                  <div className="l-constrained-8">
                    <div className="row-14 group">
                      <div className="rectangle-22" />
                      <div className="col-30">
                        <p className="text-5">AUTOS &amp;<br />TRANSPORTATION</p>
                        <p className="text-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
                        <div className="rectangle-23-holder">
                          Contact Us
                        </div>
                      </div>
                      <div className="col-2">
                        <p className="text-8">Professional Services</p>
                        <p className="text-9">Get your transport quote</p>
                        <div className="rectangle-27-holder">
                          Location
                        </div>
                        <div className="rectangle-27-copy-holder">
                          To destination
                        </div>
                        <div className="rectangle-27-copy-2-holder">
                          Email
                        </div>
                        <div className="rectangle-27-copy-3-holder">
                          Contact Number
                        </div>
                        <div className="rectangle-28-holder">
                          Get Now quote
                        </div>
                      </div>
                    </div>
                    <p className="text-13">01/02</p>
                  </div>
                </div>
              </div>
              <div className="l-constrained">
                <p className="text-14">Welcome to Denso Transport</p>
                <div className="rounded-rectangle-1-copy-2" />
                <p className="text-15">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</p>
                <p className="services">Services</p>
                <div className="rounded-rectangle-1" />
                <p className="text-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                <div className="wrapper-12">
                  <div className="ellipse-2" />
                  <div className="ellipse-2-copy" />
                  <div className="ellipse-2-copy-2" />
                  <div className="ellipse-2-copy-3" />
                  <div className="ellipse-2-copy-4" />
                  <div className="icon-services group">
                    <img src="/images/air-freight_2.png" alt="" width={48} height={48} />
                    <img className="cargo-ship" src="/images/cargo-ship.png" alt="" width={48} height={30} />
                    <img className="delivery-truck" src="/images/delivery-truck.png" alt="" width={48} height={33} />
                    <img src="/images/package.png" alt="" width={44} height={48} />
                    <img src="/images/shield_3.png" alt="" width={45} height={53} />
                  </div>
                </div>
                <div className="row-13 group">
                  <p className="text-17">FLY ANYWHERE</p>
                  <p className="text-18">Cargo service</p>
                  <p className="text-19">COURIER SERVICES</p>
                  <p className="text-20">BOX STORAGE</p>
                  <p className="text-21">100% <span className="text-style">safe</span></p>
                </div>
                <div className="rectangle-25-holder">
                  Read More
                </div>
              </div>
              <div className="col-3">
                <div className="l-constrained-4">
                  <p className="text-23">About transport</p>
                  <div className="rounded-rectangle-1-copy" />
                  <p className="text-24">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
                  <div className="rectangle-25-copy-holder">
                    Read More
                  </div>
                </div>
              </div>
              <div className="l-constrained-2">
                <p className="text-26">LATEST NEWS AND EVENTS</p>
                <div className="rounded-rectangle-1-copy-3" />
                <div className="row-11 match-height group">
                  <div className="col-27">
                    <img className="rectangle-30" src="/images/rectangle_30.png" alt="" />
                    <div className="col-7">
                      <p className="text-27">01</p>
                      <p className="sep">Sep</p>
                    </div>
                    <div className="col-4">
                      <p className="text-28">LIBERALISATION OF AIR CARGO INDUSTRY</p>
                      <p className="text-29">ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ion ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute</p>
                    </div>
                  </div>
                  <div className="col-28">
                    <img className="rectangle-30-copy" src="/images/rectangle_30_copy.png" alt="" />
                    <div className="col-8">
                      <p className="text-30">02</p>
                      <p className="sep-2">Sep</p>
                    </div>
                    <div className="col-5">
                      <p className="text-31">NEW WAREHOUSE NOW OPERATIONAL</p>
                      <p className="text-32">ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ion ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute</p>
                    </div>
                  </div>
                  <div className="col-29">
                    <img className="rectangle-30-copy-2" src="/images/rectangle_30_copy_2.png" alt="" />
                    <div className="col-9">
                      <p className="text-33">03</p>
                      <p className="sep-3">Sep</p>
                    </div>
                    <div className="col-6">
                      <p className="text-34">New trucks arriving</p>
                      <p className="text-35">ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ion ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute</p>
                    </div>
                  </div>
                </div>
                <div className="rectangle-31-holder">
                  Read More
                </div>
              </div>
              <div className="rectangle-32-holder">
                <div className="col-12">
                  <div className="l-constrained-11">
                    <p className="testimonial">Testimonial</p>
                    <div className="rounded-rectangle-1-copy-4" />
                    <div className="row-6 group">
                      <div className="rectangle-35-holder">
                        <img className="keyboard-right-arrow-button-2" src="/images/keyboard-right-arrow-butt_3.png" alt="" width={8} height={12} />
                      </div>
                      <div className="rectangle-33-holder group">
                        <img className="rectangle-34" src="/images/rectangle_34.jpg" alt="" />
                        <p className="consectetur">Consectetur</p>
                        <p className="text-37">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
                      </div>
                      <div className="rectangle-33-copy-holder group">
                        <img className="rectangle-34-copy" src="/images/rectangle_34_copy.jpg" alt="" />
                        <p className="text-38">Consectetur</p>
                        <p className="text-39">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
                      </div>
                      <div className="rectangle-35-copy-holder">
                        <img className="keyboard-right-arrow-button-2-2" src="/images/keyboard-right-arrow-butt_4.png" alt="" width={8} height={12} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="l-constrained-3">
                <p className="text-40">Request a call back</p>
                <div className="rounded-rectangle-1-copy-5" />
            
                <ContactForm/>
              </div>
              <div className="row-2">
                <div className="l-constrained-6 group">
                  <div className="rectangle-15-holder">
                    <img className="text-42" src="/images/image_2.png" alt="" width={13} height={18} title="" />
                  </div>
                  <p className="text-43">Call Now</p>
                  <p className="text-44">+01 123467890</p>
                  <div className="rectangle-15-copy-2-holder">
                    <img className="maps-and-flags" src="/images/maps-and-flags.png" alt="" width={14} height={18} />
                  </div>
                  <p className="location-2">Location</p>
                  <p className="text-46">demo@gmail.com</p>
                  <div className="rectangle-15-copy-holder">
                    <img className="text-45" src="/images/image_3.png" alt="" width={20} height={14} title="" />
                  </div>
                </div>
              </div>
              <div className="row-3">
                <div className="l-constrained-5 group">
                  <div className="col-22">
                    <p className="denso-2">Denso</p>
                    <p className="text-47">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</p>
                    <div className="social-icons group">
                      <img src="/images/facebook-logo-button.png" alt="" width={33} height={33} />
                      <img src="/images/twitter-logo-button.png" alt="" width={33} height={32} />
                      <img src="/images/linkedin-logo-button.png" alt="" width={33} height={32} />
                      <img src="/images/instagram-logo.png" alt="" width={33} height={33} />
                    </div>
                  </div>
                  <div className="shape-6" />
                  <div className="col-23">
                    <p className="information">Information</p>
                    <p className="text-48">There are many variations of passages of Lorem Ipsum available, but the majority have</p>
                  </div>
                  <div className="col-24">
                    <p className="text-49">Helpful Links</p>
                    <p className="text-50">There are many variations of passages of Lorem Ipsum available, but the majority have</p>
                  </div>
                  <div className="col-25">
                    <p className="supported">Supported</p>
                    <p className="text-51">There are many variations of passages of Lorem Ipsum available, but the majority have</p>
                  </div>
                </div>
              </div>
              <div className="rectangle-13-holder">
                <div className="l-constrained-7">
                  © 2019 All Rights Reserved. Free html Templates
                </div>
              </div>
            </div>
            <div className="ellipse-1-holder">
              <img className="keyboard-right-arrow-button-1" src="/images/keyboard-right-arrow-butt.png" alt="" width={10} height={15} />
            </div>
            <div className="ellipse-1-copy-holder">
              <img className="keyboard-right-arrow-button-1-copy" src="/images/keyboard-right-arrow-butt_2.png" alt="" width={10} height={15} />
            </div>
          </div>

        );
    }
}


export default Home;
