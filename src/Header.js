import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  render(){
    if(!this.props.isAuthed){
    return(
        <div>
          <nav className="navbar navbar-default">
            <h1><Link to="/" id="appName">KnowYourStuff</Link></h1>
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" ><img alt="Logo" src="img/ic_list_black_24dp_2x.png" height="40"/></a>
              </div>
              <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav navbar-right">
                  <li className="navControl"><Link to="/about">About</Link></li>
                  <li className="navControl"><Link to="/signup">Signup</Link></li>
                  <li className="navControl"><Link to='/login'>Login</Link></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      )
    } else { 
      return (
      <div>
        <nav className="navbar navbar-default">
          <h1><Link to="/">KnowYourStuff</Link></h1>
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" ><img alt="Logo" src="img/ic_list_black_24dp_2x.png" height="40"/></a>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav navbar-right">
                <li className="navControl"><Link to="/profile">Profile</Link></li>
                <li className="navControl"><Link to='/inventory'>Inventory</Link></li>
                <li onClick={this.props.handleLogout}className="navControl"><Link to="/logout">Logout</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )}
  }
}

export default Header;
