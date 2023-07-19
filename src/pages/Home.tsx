import React from 'react'
import NavScrollExample from '../components/Navbar'
import Container from 'react-bootstrap/Container';
import CarouselMe from '../components/CarouselMe';
import Footer from '../components/Footer';



const home = () => {
  return (
    <React.Fragment>
        <Container>
            <NavScrollExample />  
        </Container>
        < CarouselMe />
        <Container>
            <section>
            <div className='text-center'>
            <h1 >Welcome To My Website</h1>
            </div>
            <div className='mt-5 text-center'>
            <span className='fs-5'>This is a learning place for developers. <br />
                Let's start learning together here.
                </span>
            </div>
            <div className='text-center mt-5'>
                <a href="Courses">
                <span className='fs-3 GetStarted-btn main-bg-color'>Get Started</span>
                </a>
            </div>
            </section> 
        </Container>
        <footer className='footerMe mt-5 main-bg-color'>
          <Container>
            <Footer />
          </Container>
        </footer>
    </React.Fragment>
  )
}

export default home