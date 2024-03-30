import react from 'react'
import PropTypes from 'prop-types'
import {Link } from 'react-router-dom'

export default function Navbar(props)
{
   
  return(
    // the mode of the navbar can be set using the current mode which is props.mode, the current state of the title can 
    //brough here using props.title and so on, ps: we removed the toggle switch so we have fixed the color of the navbar to dark

    ////Link tag and to are used to add the link to various navigation options without page reloading
    // instead of anchor tag and href tag
    <nav className={`navbar navbar-expand-lg navbar-dark bg-dark`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About">{props.aboutText}</Link>
        </li>
      </ul>
      <div>
      <button type="button" class="btn btn-success mx-2" onClick={()=>props.toggleMode('success')}></button>
      <button type="button" class="btn btn-danger mx-2" onClick={()=>props.toggleMode('danger')}></button>
      <button type="button" class="btn btn-warning mx-2" onClick={()=>props.toggleMode('warning')}></button>
      <button type="button" class="btn btn-info mx-2" onClick={()=>props.toggleMode('info')}></button>
      <button type="button" class="btn btn-light mx-2" onClick={()=>props.toggleMode('light')}></button>
      <button type="button" class="btn btn-dark mx-2" onClick={()=>props.toggleMode('dark')}></button>
      </div>
     {/* <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
     <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" style={{backgroundColor: props.mode=='dark'?'#9DC183':'white'}} onClick={props.toggleMode}/>
    <label className="form-check-label" Htmlfor="flexSwitchCheckDefault">Enable Dark Mode</label>
    </div> */}
    </div>
  </div>
</nav>
// to change the colour of the text 'Enable Dark Mode', according to the theme of the nav bar we
//use the props.mode==light?'dark':'light', so the color of the text should be opposite to the current state
//of the color of the nav bar 
)
}

Navbar.propTypes = {
    title: PropTypes.string,
    aboutText: PropTypes.string
}
Navbar.defaultProps={
    title: "default",
    aboutText: "Ishpreet"
}

