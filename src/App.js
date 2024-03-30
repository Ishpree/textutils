
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import  React, { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {

  //define states, mode is the where we store the current mode while changeMode is a function that is 
  //called when we want to change the mode, we cannot directly change the state by doing mode="dark"
  const [mode, changeMode] = useState('bg-light');
  const [alert, setAlert]  = useState(null);

  const showAlert = (message, type) =>
  {
    //alert is being set with the help of message and its type
    setAlert({
      msg: message,
      type: type
    })
    setInterval(()=>{
      setAlert(null)},2000
    )
  }
 //gets called when the toggle swtiched is moved right or left
  // const toggleMode = () =>
  // {
  //   if(mode=='dark')
  //   changeMode('light');
  //   document.body.style.backgroundColor='light';
  //   showAlert("Light mode has been enabled", "Success");
  //   }
  //   else{
  //   changeMode('dark');
  //   document.body.style.backgroundColor='#355E3B';
  //   showAlert("Dark mode has been enabled", "Success");
  //   }
  // }

  //to remove the classList that are present so that when we press another button the color changes
  // we have to manually remove this otherwise the we wont be able to switch to another theme
  const remove =() =>
    {
        document.body.classList.remove('bg-success');
        document.body.classList.remove('bg-danger');
        document.body.classList.remove('bg-warning');
        document.body.classList.remove('bg-info');
        document.body.classList.remove('bg-light');
        document.body.classList.remove('bg-dark');

    }

  const toggleMode = (cls) =>
  {
    //remove the mode that is currently present, class does not gets removed on its own when we click 
    //on another button to change the mode
    remove(cls);
    changeMode('bg-'+cls);
    document.body.classList.add('bg-'+cls);
    //to manipulate the title according to the current mode of the document
    document.title= 'textutils -' + cls + ' mode';
    // setInterval(()=>{
    // document.title =  'textutils is amazing';
    // }, 2000)
    // setInterval(()=>{
    // document.title = 'Download textutils Now';}, 1500)
  }
  //All components are returned with this function 
  //Routes have to be included inside the Browser Router Path
  //exact path should be used instead of path because react does partial matching, in our app it does not
  //matter but it might matter in conditions like where there are two paths like
  // /user and /user/component , in both cases /user will open if we dont use exact path
  return (
    <>
    <BrowserRouter>
      <Navbar title="Textutils2" aboutText="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
    <Routes>
      <Route path="/about"  element={<About/>}/>
      <Route path="/" element={<TextForm heading="Enter text to be modified" mode={mode} showAlert={showAlert}/>}/>
    </Routes>
         </div> 
    </BrowserRouter>
    </>
  );
}

export default App;
