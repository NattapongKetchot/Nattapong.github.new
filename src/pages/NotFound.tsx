import React from 'react'
import NavScrollExample from '../components/Navbar'
import Container from 'react-bootstrap/Container';
import CarouselMe from '../components/CarouselMe';
import Footer from '../components/Footer';

function NotFound() {
  return (
    <React.Fragment>
        <Container>
            <NavScrollExample />  
        </Container>
        < CarouselMe />
        <Container>
            <section>
            <div className='text-center'>
              <h1>404 NotFound</h1>
            </div>
            <div>
              <img src="" alt="" />
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

export default NotFound