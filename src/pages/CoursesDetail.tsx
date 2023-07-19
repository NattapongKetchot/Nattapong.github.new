import React, { Fragment } from 'react'
import { useParams} from "react-router-dom";
import { useEffect, useState, } from 'react'
import axios from 'axios';
import ReactPlayer from 'react-player'
import NavScrollExample from '../components/Navbar'
import Container from 'react-bootstrap/Container';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons'



interface Item {
    id: string;
    category: string;
    name: string;
    description: string;
    Video : string;
    isWatched: boolean;
  }

function CoursesDetail() {
    let { id } = useParams();

    const [data, setData] = useState<Item>(
        {
            id: '',
            category: '',
            name: '',
            description: '',
            Video: '',
            isWatched: false
          }
    );
  useEffect(() => {
    axios.get (`https://febc-final-project-api-3.thepoczy2013.repl.co/courses/${id}`)
      .then(response => {
        setData(response.data);
        console.log(data)
      })
      .catch(error => {
        console.log(error);
      });
  }, []);


    const localStorageItems = localStorage.getItem(`Watched${data.id}`)
    console.log(localStorageItems=="true")


    const [IsWatched, setIsWatched] = useState<boolean>(localStorageItems=="true");
    // ฟังชั้นเก็บค่าหลังดูแล้ว 
    const Watched = () => {
      setIsWatched(true)
      SetStorage()
    }

    console.log(IsWatched)

    
    const SetStorage = () => {
        const key: string = `Watched${id}`;
        const value: string = 'true';
        localStorage.setItem(key, value);
        console.log(key,value)
      }

  return (
    <React.Fragment>
      <Container>
            <NavScrollExample />  
      </Container>
      <Container className='marginFooter'>
        <section>
        <div className='text-center'>
          <h1>{data.name}</h1>
        </div>
        <div className='d-flex justify-content-center mt-5'>
          <ReactPlayer url={data.Video} onEnded={Watched} controls />
        </div>
        <div className='d-flex justify-content-center mt-5'>
          <div onClick={Watched} >
            <span className='button-CompletedTheCourse'>Course Completed</span>
          </div>
        </div>
        <div className='text-center mt-5'>
          <p>{data.description}</p>
        </div>
        <div className='mt-5'>
              {localStorageItems == 'true'  ? (
                <Fragment>
                  <div className='d-flex justify-content-center'>
                    <h1>Congratulations</h1>
                  </div>
                  <div className='d-flex justify-content-center'>
                  <FontAwesomeIcon icon={faSquareCheck} beat size="2xl" style={{color: "#70d60a",}} />
                  </div>
                </Fragment>
              ) : (''
              )}
        </div>
        <div className='d-flex justify-content-center mt-5'>
          <div>
            <a href="/Courses">
              <span className='button-back'>Back</span>
            </a>
          </div>
        </div>
        </section>
      </Container>
      <footer className='mt-5 footerMe  main-bg-color'>
          <Container>
            <Footer />
          </Container>
        </footer>
    </React.Fragment>
  )
}

export default CoursesDetail