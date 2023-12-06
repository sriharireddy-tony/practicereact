
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './header';
import Comp1 from './comp1';
import Comp2 from './comp2';
import Comp3 from './comp3';
import Comp4 from './comp4';

function App() {
  return (
    <div>
     <Router>
      <Routes>
        <Route path="/admin" element={<Header />} >
        <Route path="Comp1" element={<Comp1 />}></Route>
        <Route path="Comp2" element={<Comp2 />}></Route>
        <Route path="Comp3" element={<Comp3 />}></Route>
        <Route path="Comp4" element={<Comp4 />}></Route>
     </Route>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
