import './App.css'
import Card from './components/Card';
import Login from './components/Login'
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Doctors from './components/Doctors';
function App() {


  return (
    <div className=''>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
      
       
      </Routes>
      <Routes>
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/doctors' element={<Doctors/>} />
      
      </Routes>
        </BrowserRouter>
     
    </div>
  )
}

export default App
