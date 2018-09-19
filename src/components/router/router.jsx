import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import { LandingPage, LogIn } from '../../views'
class MyRoutes extends React.Component {
  state = {
      auth: false
    }


  authorize = () => {
    this.setState({
      auth: !this.state.auth
    })
  }

  logInFactory = () => {
    return(
      <LogIn authorize={this.authorize} />
    )
  }

  unAuthRouting = () => {
    return(
    <div>
        <Button style={{backgroundColor:'#edc7b7'}}>Home</Button>
        <Link to="/login"> <Button style={{backgroundColor:'#ac3b61'}}>Log-In</Button> </Link>
        <Link to="/signup"> <Button style={{backgroundColor:'#123c69', color:'white'}}> SignUp</Button> </Link>
      <hr/>
      <Route exact path="/" component={LandingPage} />
      <Route path="/login" render={this.logInFactory} />
    </div>
      )
  }

  authRouting = () => {
    return(
      <div>Now we loged in!
      <LandingPage />
      </div>
      )
  }


  render = () => {
  return(
    <React.Fragment>
    <Router>
    {this.state.auth ? this.authRouting() : this.unAuthRouting()}
    </Router>
    </React.Fragment>
    )
  }
}

export default MyRoutes