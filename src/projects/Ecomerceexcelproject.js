import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from '../components/Navbar';
import { Container } from 'react-bootstrap';
import './projects.css';

const Ecomerceexcelproject = () => {
    return (
        <div>
            <NavigationBar />
            <Container className="py-5 project-body">
                <div className="container-custom" style={{ display: 'block' }}>
                <iframe frameborder="0" scrolling="no" src="https://onedrive.live.com/embed?resid=335AFB6F0C9B8281%21156&authkey=%21ALS0nxHlBD6KHqo&em=2&Item='Sales-Profit%20Summary%20Report'!A1%3AL20&wdHideGridlines=True&wdInConfigurator=True&wdInConfigurator=True"></iframe>
                </div>
            </Container>
        </div>
    );
};

export default Ecomerceexcelproject;
