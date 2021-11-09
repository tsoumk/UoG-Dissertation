import React from 'react';
// import { Button, Container, Nav, Navbar } from 'react-bootstrap';
// import { useHistory } from "react-router-dom";


const Footer = () => {
    return (
        <footer class="mainfooter" role="contentinfo">
            <div class="footer-middle">
            <div class="container">
                <div class="row">
                <div class="col-md-3 col-sm-6">
                    <div class="footer-pad">
                        <h4 style={{color: "white"}}>Bank Your Way</h4>
                        <ul class="list-unstyled">
                            <li>Bank online</li>
                            <li>Use the app</li>
                            <li>Give us a call</li>
                            <li>Use our ATMs</li>
                            <li>Come to a branch</li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="footer-pad">
                    <h4  style={{color: "white"}}>Contact Us</h4>
                    <ul class="list-unstyled">
                        <li>Useful contact details</li>
                        <li>Fill in our contact form</li>
                        <li>Make a complaint</li>
                        <li>Book an appointment</li>
                    </ul>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="footer-pad">
                    <h4 style={{color: "white"}}>Help</h4>
                    <ul class="list-unstyled">
                        <li>Lost or stolen card</li>
                        <li>Forgotten or locked credentials</li>
                        <li>Card retained at ATM</li>
                        <li>Suspicious transaction</li>
                        <li>IBAN calculator</li>

                    </ul>
                    </div>
                </div>
                    <div class="col-md-3">
                        <h4 style={{color: "white"}}>Follow Us</h4>
                        <ul class="social-network social-circle">
                        <li><a href="https://www.facebook.com/UofGlasgow/" class="icoFacebook" title="Facebook"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="https://www.linkedin.com/school/university-of-glasgow/" class="icoLinkedin" title="Linkedin"><i class="fa fa-linkedin"></i></a></li>
                        </ul>				
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 copy">
                        <p class="text-center">&copy; Copyright 2021 - University of Glasgow.  All rights reserved.</p>
                    </div>
                </div>


            </div>
            </div>
        </footer>
    )
}

export default Footer