import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar(props) {
  return (
    <>
<nav className={`navbar navbar-expand-lg bg-${props.mode} style={color:"secondary"}` }>
     <div className="container-fluid">
     <Link className="navbar-brand" to="/">TextEditor</Link>
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"></span>
     </button>
     <div className="collapse navbar-collapse" id="navbarSupportedContent">
     <ul className="navbar-nav ms-0 mb-2 mb-lg-0">
         <li className="nav-item">
           <Link className="nav-link active" aria-current="page" to="/">Home</Link>
         </li>
         <li className="nav-item">
           <Link className="nav-link" to="/About">About</Link>
         </li>
       </ul>
       
     </div>
     <button type="button" className="btn btn-outline-success mx-2">Green</button>

     <button type="button" className="btn btn-outline-danger mx-2" onClick={props.ToggleRed}>Red</button>
     <div className="form-check form-switch text-primary">
  <input className="form-check-input"  type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.ToggleMode}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Color Change</label>
</div>
   </div>
 </nav>
     </>
  )
}

