import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    // Footer section start
    return (
        <div className="footer">
            <Container className="mt-3">
            <div className="row">
                <div className="col-md-5">
                   <h4>Connect With Us</h4>
                   <p>Facebook:www.fb.com</p>
                   <p>Google:www.google.com</p>
                   <p>Youtube:www.youtube.com</p>
                </div>
                <div className="col-md-3">
                  <h5>Main Campus:<br/>220/D, Begum Rokeya Sarani (300 meter North Side of IDB Bhaban),<br/>Dhaka -1207, Bangladesh</h5>
                  <p>Phone: 01713289217</p>
                  <p>Email: admin@entreprenure.com</p>
                  <p>Location: Bannai,Dhaka-1218</p>
                </div>
            </div>
            <div className="copyright">
                <p>Copyright © 2003-2021 Green University of Bangladesh || All rights reserved.</p>
            </div>
            </Container>
        </div>
    );
};

export default Footer;
