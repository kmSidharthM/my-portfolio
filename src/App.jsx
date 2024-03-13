import About from './About'
import Intro from './Intro'
import { Link, NavLink, Route, Routes} from 'react-router-dom'
import Projects from './Projects'
import Contact from './Contact'
import logo from './assets/Sidharth.png'


function App() {
  return (
    <div className='app'>
      
      <nav>
        <img className='logo' src={logo} alt="name logo" width={110}/>
        <NavLink className="nav-item" to="/">Home</NavLink>
        <NavLink className="nav-item" to="/about">About</NavLink>
        <NavLink className="nav-item" to="/projects">Projects</NavLink>
        <NavLink className="nav-item" to="/contact">Contact</NavLink>
      </nav>
      
      <Routes>
        <Route path='/' element={<Intro />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    </div>
  )
}

export default App
