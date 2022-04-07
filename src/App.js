import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import AddRr from './pages/AddRr';
import Rr from './pages/Rr';

function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route exact path='/' element={<Rr />}/>
        <Route path='/addrr' element={<AddRr />} />
        <Route path="/edit-rr/:id" element={<AddRr />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
