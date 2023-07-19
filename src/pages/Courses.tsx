import React, { useEffect } from 'react'
import NavScrollExample from '../components/Navbar'
import Container from 'react-bootstrap/Container';
import AllCourses from '../components/AllCourses';
import Footer from '../components/Footer';

function Courses() {
  useEffect (() => {
    console.log('Courses')
  })
  return (
    <React.Fragment>
        <Container>
            <NavScrollExample />  
        </Container>
        <Container className='marginFooter'>
            <section className='test-h'>
            <AllCourses />
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

export default Courses