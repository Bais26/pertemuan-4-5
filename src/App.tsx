import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Counter from './Counter';
import Greeting from './Greeting';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Counter />} />
        <Route path='/greeting/:name' element={<Greeting/>} />
      </Routes>
    </Router>
  )
}

export default App
