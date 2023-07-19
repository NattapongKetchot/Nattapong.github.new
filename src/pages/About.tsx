import React from 'react'
import NavScrollExample from '../components/Navbar'
import Container from 'react-bootstrap/Container';
import Footer from '../components/Footer';
import ProfileImg from '../assets/img/Profile.jpg'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

function About() {
  return (
    <React.Fragment>
        <Container>
            <NavScrollExample />  
        </Container>
        <Container>
            <section>
                <div className='text-center mt-5'>
                    <img src={ProfileImg} alt="ProfileImg" width={250} /></div>
                <div className='text-center mt-5'>
                    <h1>Nattapong Ketchot</h1>
                </div>
                <Row className='mt-5'>
                <Col md={4}>
                    <h3>Profile</h3>
                    <span>Age: 24</span> <br />
                    <span>Nationality: Thai</span><br />
                    <span>Sex: Male</span><br />
                    <span>Birthday: November 6, 1998</span><br />
                </Col>
                <Col md={4}>
                    <h3>Contact</h3>
                    <span>Email: thepoczy2013@gmail.com</span><br />
                    <span>Tel: 0958698904</span><br />
                </Col>
                <Col md={4}>
                    <h3>Education</h3>
                    <span>Bachelor of Business Administration : General Management</span><br />
                    <span>Valaya Alongkorn Rajabphat University - Pathumthani, 2021</span>
                </Col>
                </Row>
            </section> 
        </Container>
        <footer className='footerMe fixed-bottom main-bg-color'>
          <Container>
            <Footer />
          </Container>
        </footer>
    </React.Fragment>
  )
}

export default About