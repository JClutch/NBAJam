import React, { Component } from 'react';
import { Header } from 'semantic-ui-react'
import PicksGrid from '../components/PicksGrid.jsx'


class LandingPage extends Component {
	state = {
		test: 'loop',
	}

	render() {
		return(
		<div>
		<Header as='h1' textAlign='center' > First Header </Header>
		<PicksGrid />
		</div>)
	}
}


export default LandingPage