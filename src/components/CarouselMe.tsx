import Carousel from 'react-bootstrap/Carousel';
import hongkong from '../assets/hongkong.jpg'
function CarouselMe() {
  return (
    <Carousel className='mb-5' style={{width: '100%'}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={hongkong}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={hongkong}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={hongkong}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselMe;