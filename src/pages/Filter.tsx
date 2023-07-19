import { useEffect, useState, } from 'react'
import { Link } from 'react-router-dom';
import React from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import NavScrollExample from '../components/Navbar'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Footer from '../components/Footer';

interface Item {
  id: number;
  category: string;
  name: string;
  description: string;
  image :string
}


const Filter = () => {
  const [input, setInput] = useState('');
  const [data, setData] = useState<Item[]>([]);
  const [filteredItems, setFilteredItems] = useState<Item[]>([]);

  useEffect(() => {
    axios.get('https://febc-final-project-api-3.thepoczy2013.repl.co/courses')
      .then(response => {
        setData(response.data);
        console.log(data)
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleClick = () => {
    const filteredData: Item[] = data.filter((item) =>
    item.category.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredItems(filteredData);
  };

  console.log(filteredItems)
    
  return (
    <React.Fragment>
        <Container>
            <NavScrollExample />  
        </Container>
        <Container>
        <section className='test-h'>
            <div className="d-flex">
                    <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    onChange={handleInputChange}
                    />
                    <Button variant="outline-success" onClick={handleClick}>Search</Button>
            </div>
            <Row className='mt-5'>
                {filteredItems.map ((item) =>(
                    <Col md={3} key={item.id}>
                        <img src={item.image} alt="img" width={300} />
                        <h2>{item.category}</h2>
                        <h5>{item.name}</h5>
                        <span>{item.description}</span>
                        <div className='d-flex justify-content-center'>
                  <Link to={`/Courses/CoursesDetail/${item.id}`}>
                  <Button variant="primary">
                    Join
                  </Button>
                  </Link>
                </div>
                    </Col>
                ))}
            </Row>
        </section> 
        </Container>
        <footer className='mt-5 footerMe fixed-bottom'>
          <Container>
            <Footer />
          </Container>
        </footer>
    </React.Fragment>
    
  )
}

export default Filter