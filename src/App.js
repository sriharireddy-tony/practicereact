
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './header';
import Comp1 from './comp1';
import Comp2 from './comp2';

function App() {
  return (
    <div>
     <Router>
      <Routes>
        <Route path="/admin" element={<Header />} >
        <Route path="Comp1" element={<Comp1 />}></Route>
        <Route path="Comp2" element={<Comp2 />}></Route>
     </Route>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
