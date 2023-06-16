import { Route,Routes } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Students from './Students';
import Error from './Error';
import Nav from './Nav';
import Update from './Update';
import Submit from './Submit';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Students' element={<Students/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Update' element={<Update/>}/>
        <Route path='/Submit' element={<Submit/>}></Route>
        <Route path='/*' element={<Error/>}/> 
      </Routes>
    </div>
  );
}

export default App;