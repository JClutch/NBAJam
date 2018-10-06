import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
//need google token

const responseGoogle = (response) => {
	console.log(response);
  }

class LogIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		}
		this.verifyLogIn = this.verifyLogIn.bind(this)
		this.inputEntry = this.inputEntry.bind(this)
		
	}

	verifyLogIn(){
		console.log(this.state)
		this.props.authorize()
	}

	inputEntry(e){
		console.log('what is e.target on change', e.target, e.target.value, e.target.name)
		const payload = {}
		payload[e.target.name] = e.target.value
		this.setState(payload)
	}



	render(){
		return(
			<div style={{width:'100%', position: 'fixed'}}>
			<div style={{position: 'relative', marginLeft: 'auto', marginRight: 'auto'}}>
			<GoogleLogin
    clientId="287688423683-ugqpnkkdp0jvojk0j2psq42jq527dhru.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
            />
			</div>
			</div>
			)
		}
}



export default LogIn

{/* <input type="text" name="username" value={this.state.username} placeholder="username" onChange={(e)=>this.inputEntry(e)} />
<input type="password" name="password" value={this.state.password} placeholder="password" onChange={(e)=>this.inputEntry(e)} />
<button onClick={this.verifyLogIn}> Log In Now </button> */}