import { BrowserRouter , Routes , Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import Home from './pages/Home';
import Filter from './pages/Filter'
import CoursesDetail from './pages/CoursesDetail';
import Courses from './pages/Courses';
import About from './pages/About';


function App() {


  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Filter' element={<Filter />} />
      <Route path='Courses/CoursesDetail/:id' element={<CoursesDetail />} />
      <Route path='/Courses' element={<Courses />} />
      <Route path='/About' element={<About />} />
    </Routes>
  )
}

function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}

export default WrappedApp
