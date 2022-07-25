import React, {useState, useEffect} from'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import './App.css';
import Home from "./Home";
import Profile from "./Profile";
import Search from "./Search";

function Name({name}) {
  if (name.name == null) {
    return "Ciao a tutti";
  } else {
    return "Ciao " + name.name;
  }
}

function App() {
  const [post, setPost] = useState([]);
   useEffect(() => {
      fetch('http://127.0.0.1:5000/hello/giacomo')
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
            setPost(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path="/Home" ><Home /></Route>
        <Route path="/Profile"><Profile /></Route>
        <Route path="/Search"><Search /></Route>
      </Switch>
    </Router>
      <div className="container">
        <div className="row">
            <div className="column">
                <div className="title">
                    Benvenuto Utente
                </div>
                <div className="text">
                    <Name name={post} />
                </div>
                <div className="row">
                    <button type="button" className="btn btn-primary">Button</button> 
                    <button type="button" className="btn btn-secondary">Secondary</button> 
                    <button type="button" className="btn btn-success">Success</button> 
                    <button type="button" className="btn btn-info">Info</button> 
                    <button type="button" className="btn btn-warning">Warning</button> 
                    <button type="button" className="btn btn-danger">Danger</button> 
                    <button type="button" className="btn btn-link">Link</button>
                </div>
                <div className="row">
                    <button type="button" className="btn btn-outline-primary">Button</button>
                    <button type="button" className="btn btn-outline-secondary">Secondary</button>
                    <button type="button" className="btn btn-outline-success">Success</button>
                    <button type="button" className="btn btn-outline-info">Info</button>
                    <button type="button" className="btn btn-outline-warning">Warning</button>
                    <button type="button" className="btn btn-outline-danger">Danger</button>
                    <button type="button" className="btn btn-outline-link">Link</button>
                </div>
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Profile</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Messages</a>
                    </li>
                    <li className="nav-item dropdown ml-md-auto">
                        <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown">Dropdown link</a>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item" href="#">Action</a> 
                            <a className="dropdown-item" href="#">Another action</a> 
                            <a className="dropdown-item" href="#">Something else here</a>
                            <div className="dropdown-divider"></div> 
                            <a className="dropdown-item" href="#">Separated link</a>
                        </div>
                    </li>
                </ul>
                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown">
                        Action
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item disabled" href="#">Action</a> 
                        <a className="dropdown-item" href="#">Another action</a> 
                        <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>
            </div>
            <div className="col-md-12">
                <div id="card-1107">
                    <div className="card">
                        <div className="card-header">
                             <a className="card-link collapsed" data-toggle="collapse" data-parent="#card-1107" href="#card-element-223408">Ricetta numero #1</a>
                        </div>
                        <div id="card-element-223408" className="collapse">
                            <div className="card-body">
                                <button type="button" className="btn btn-outline-primary">
                                    Add Ingridient
                                </button>
                                <div className="ingridients"></div>
                                <div className="col-md-12">
                                    <p className="text">Descrizione</p>
                                    <p>
                                        Tutto su sta ricetta
                                    </p>
                                    <p>
                                        <a className="btn" href="#">View details »</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                             <a className="card-link collapsed" data-toggle="collapse" data-parent="#card-1107" href="#card-element-681504">Ricetta numero #2</a>
                        </div>
                        <div id="card-element-681504" className="collapse">
                            <button type="button" className="btn btn-outline-primary">
                                Add Ingridient
                            </button>
                            <div className="ingridients"></div>
                            <div className="col-md-12">
                                <p className="text">Descrizione</p>
                                <p>
                                    Tutto su sta ricetta
                                </p>
                                <p>
                                    <a className="btn" href="#">View details »</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}

export default App;
