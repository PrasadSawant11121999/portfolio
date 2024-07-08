import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from '../components/Navbar';
import Footer from '../components/Footer';//propic
import profileImage from '../asset/propic.jpg';
import { Container, Row, Col } from 'react-bootstrap';
const Resume = () => {

  return (
    <div>
      <NavigationBar />
      <Container className="py-5">
        <div className="w3-light">
          <div className="w3-content w3-margin-top" style={{ maxWidth: "1400px" }}>
            <div className="w3-row-padding">
              {/* Left Column */}
              <div className="w3-third">
                <div className="w3-white w3-text-grey w3-card-4">
                  <div className="w3-display-container">
                    <img src={profileImage} style={{ width: "100%" }} alt="Avatar" />
                    <div className="w3-display-bottomleft w3-container w3-text-black">
                      <h2 style={{ color: "white" }}>Prasad R Sawant</h2>
                    </div>
                  </div>
                  <div className="w3-container">
                    <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>Data Scientist</p>
                    <p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>Kudal, Maharashtra, IN</p>
                    <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>prasad11121999@gmail.com</p>
                    <p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>+91 78209 23701</p>
                    <hr />
                    <p className="w3-large"><b><i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Skills</b></p>
                    <p>Statistics and mathematics</p>
                    <div className="w3-light-grey w3-round-xlarge w3-small">
                      <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{ width: "95%" }}>95%</div>
                    </div>
                    <p>Sql</p>
                    <div className="w3-light-grey w3-round-xlarge w3-small">
                      <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{ width: "80%" }}>
                        <div className="w3-center w3-text-white">80%</div>
                      </div>
                    </div>
                    <p>Python</p>
                    <div className="w3-light-grey w3-round-xlarge w3-small">
                      <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{ width: "75%" }}>75%</div>
                    </div>
                    <p>Power BI</p>
                    <div className="w3-light-grey w3-round-xlarge w3-small">
                      <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{ width: "50%" }}>50%</div>
                    </div>
                    <br />
                    <p className="w3-large w3-text-theme"><b><i className="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>Languages</b></p>
                    <p>English</p>
                    <div className="w3-light-grey w3-round-xlarge">
                      <div className="w3-round-xlarge w3-teal" style={{ height: "24px", width: "100%" }}></div>
                    </div>
                    <p>Spanish</p>
                    <div className="w3-light-grey w3-round-xlarge">
                      <div className="w3-round-xlarge w3-teal" style={{ height: "24px", width: "55%" }}></div>
                    </div>
                    <p>German</p>
                    <div className="w3-light-grey w3-round-xlarge">
                      <div className="w3-round-xlarge w3-teal" style={{ height: "24px", width: "25%" }}></div>
                    </div>
                    <br />
                  </div>
                </div>
                <br />
              </div>

              {/* Right Column */}
              <div className="w3-twothird">
                <div className="w3-container w3-card w3-white w3-margin-bottom">
                  <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Work Experience</h2>
                  <div className="w3-container">
                    <h5 className="w3-opacity"><b>Front End Developer / w3schools.com</b></h5>
                    <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>Jan 2015 - <span className="w3-tag w3-teal w3-round">Current</span></h6>
                    <p>Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>
                    <hr />
                  </div>
                  <div className="w3-container">
                    <h5 className="w3-opacity"><b>Web Developer / something.com</b></h5>
                    <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>Mar 2012 - Dec 2014</h6>
                    <p>Consectetur adipisicing elit. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>
                    <hr />
                  </div>
                  <div className="w3-container">
                    <h5 className="w3-opacity"><b>Graphic Designer / designsomething.com</b></h5>
                    <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>Jun 2010 - Mar 2012</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p><br />
                  </div>
                </div>

                <div className="w3-container w3-card w3-white">
                  <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Education</h2>
                  <div className="w3-container">
                    <h5 className="w3-opacity"><b>W3Schools.com</b></h5>
                    <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>Forever</h6>
                    <p>Web Development! All I need to know in one place</p>
                    <hr />
                  </div>
                  <div className="w3-container">
                    <h5 className="w3-opacity"><b>London Business School</b></h5>
                    <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>2013 - 2015</h6>
                    <p>Master Degree</p>
                    <hr />
                  </div>
                  <div className="w3-container">
                    <h5 className="w3-opacity"><b>School of Coding</b></h5>
                    <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>2010 - 2013</h6>
                    <p>Bachelor Degree</p><br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer
          <footer className="w3-container w3-teal w3-center w3-margin-top">
            <p>Find me on social media.</p>
            <i className="fa fa-facebook-official w3-hover-opacity"></i>
            <i className="fa fa-instagram w3-hover-opacity"></i>
            <i className="fa fa-snapchat w3-hover-opacity"></i>
            <i className="fa fa-pinterest-p w3-hover-opacity"></i>
            <i className="fa fa-twitter w3-hover-opacity"></i>
            <i className="fa fa-linkedin w3-hover-opacity"></i>
            <p className="w3-small">This website was made with W3Schools Spaces. Make your own free website today!</p>
            <a className="w3-button w3-round-xxlarge w3-small w3-light-grey w3-margin-bottom" href="https://www.w3schools.com/spaces" target="_blank" rel="noopener noreferrer">Start now</a>
          </footer> */}
        </div>
       </Container>
      <Footer />
    </div>
  );
};

export default Resume;