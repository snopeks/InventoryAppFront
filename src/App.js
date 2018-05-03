import React, { Component } from 'react';
import $ from 'jquery-ajax';
import { Route, Link, Redirect, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Signup from './Signup';
import Login from './Login';
import Profile from './Profile';
import Footer from './Footer';
import Header from './Header';
import ErrorPage from './Error';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      id:'', isAuthenticated: false,
    };
    console.log(this.state.path)
    console.log("STATE: ", this.state.id , this.state.isAuthenticated);
    this.handleSignupSubmit = this.handleSignupSubmit.bind(this);


  }
  handleLoginSubmit(username, password, e){
    e.preventDefault();
    console.log("handling login submit")
    console.log(username)
    console.log(password)
    $.ajax({
      method: 'POST',
      url: `http://localhost:3001/login`,
      data: {
        username: username,
        password: password
      }
    })
    .then(res => {
      console.log('res is ', res);
      this.setState({isAuthenticated: true});
      this.props.browserHistory.push('/profile');
    }, err => {
      console.log("we hit an error with login!")
      console.log(err);
      this.props.browserHistory.push('/error')
    });
  }
  handleSignupSubmit(username, password, e){
    e.preventDefault();
    console.log("handling Signup submit")
    console.log(username)
    console.log(password)
    //if password and confirm password match, run the fn
    //try bootstrap validator
    $.ajax({
      method: 'POST',
      url: `localhost:3001/signup`,
      data: {
        username: username,
        password: password
      }
    })
    .then(res => {
      console.log('res is ', res);
      this.setState({isAuthenticated: true});
      this.props.browserHistory.push('/profile');
    }, err => {
      console.log("we hit an error with signup!")
      console.log(err);
    });
  }
  handleLogout(){
    console.log("logging out!");
    this.setState({isAuthenticated: false})
  }

    render() {
      console.log("IS AUTHED in layout", this.state.isAuthenticated)
        return (
          <div>
              <Header
                login={this.handleLoginSubmit.bind(this)}
                signup={this.handleSignupSubmit.bind(this)}
                isAuthed={this.state.isAuthenticated}
                logout={this.handleLogout.bind(this)}
              />
              <main className="container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path='/about' component={About} />
                <Route path='/signup' render={() => <Signup signup={this.handleSignupSubmit}/> }/>
                <Route path='/login' component={Login}/>
                <Route path='/profile' component={Profile} />
                <Route path='/error' component={ErrorPage} />
              </Switch>
              </main>
              <Footer />
          </div>
        )

    }
  }

export default App;



//
