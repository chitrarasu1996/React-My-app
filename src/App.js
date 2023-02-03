import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Login from './Components/Login';
// import Login from './Components/Login';
import{BrowserRouter,Routes,Route} from "react-router-dom"
import Registor from './Components/Register';
import Home from './Components/Home';
function App() {
  const currentLocation=window.location.href.split("/")[3];

  return (
   
    <div className="App">
    
     {currentLocation !== "login"&& currentLocation !=="register"&& < Header/>}
   
<Routes>

  <Route path='/' element={<Home/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path='/register' element={<Registor/>}/>
  {/* <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path="/registor"  element={<Registor/>}/>
     */}
 
   </Routes>
     <Footer/>
    
    </div>
    
  );
}

export default App;
