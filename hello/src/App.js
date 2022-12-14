import * as React from 'react' ;
import './index.css';
import Employees from './pages/Employees'
import Header from './components/Header'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Customers from './pages/Customers';

function App() {
  return ( 
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path = '/employees' element = { <Employees/> }/>
          <Route path = '/customers' element = { <Customers/> } />
        </Routes>
      </Header>
    </BrowserRouter>
  );
}
export default App;