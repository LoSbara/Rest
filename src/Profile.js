import React, {useState, useEffect} from'react';
import './App.css';

function Profile() {
  return (
    <div className="Profile">
      <div className="container">
        <div className="row">
            <div className="column">
                <div className="title">
                    Benvenuto Utente in PROFILE
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

export default Profile;
