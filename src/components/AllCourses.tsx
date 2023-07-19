import { Fragment, useEffect, useState, } from 'react'
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons'




interface Item {
  id: string;
  category: string;
  name: string;
  description: string;
  image :string
  isWatched: string
}


const AllCourses = () => {

  const [courses, setCourses] = useState<Item[]>([]);
  // apiข้อมูล
  useEffect(() => {
    console.log('useEffect')
    const fetchData = async () => { 
        const response = await axios.get('https://febc-final-project-api-3.thepoczy2013.repl.co/courses');
        setCourses(response.data);
    };

    fetchData();
  }, []);


  if (courses.length) {
    // เซตค่าเริ่มต้นlocalStorageในการดูvideo
    courses.forEach((courses, index) => {
      console.log("Default",courses.id);
        const key: string = `Watched${courses.id}`;
        const value: string = `false`;
        const localStorageItems = localStorage.getItem(`Watched${courses.id}`)
        courses.isWatched = localStorageItems || "false"
        console.log(localStorageItems)
        if (!localStorageItems) {
          localStorage.setItem(key, value);
        }
    });
  }


  return (
    <Fragment>
    <Row className='mt-5'>
        {courses.map ((item) =>(
            <Col md={3} key={item.id} className='text-center'>
                <img src={item.image} alt="img" width={300} />
                <h2>{item.category}</h2>
                <span>{item.description}</span> <br />
                <div className='d-flex justify-content-center'>
                  <Link to={`CoursesDetail/${item.id}`}>
                  <Button variant="primary">
                    Join
                  </Button>
                  </Link>
                </div>
                {item.isWatched == "true" ? (
                <Fragment>
                  <div className='d-flex justify-content-center'>
                  <FontAwesomeIcon icon={faSquareCheck} beat size="2xl" style={{color: "#70d60a",}} />
                  </div>
                </Fragment>
              ) : (''
              )}
            </Col>
        ))}
    </Row>
    </Fragment>
    
  )
}

export default AllCourses