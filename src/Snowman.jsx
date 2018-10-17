import React, { Component } from 'react'
import snowman_0 from './snowman/step_0.png'
import snowman_1 from './snowman/step_1.png'
import snowman_2 from './snowman/step_2.png'
import snowman_3 from './snowman/step_3.png'
import snowman_4 from './snowman/step_4.png'
import snowman_5 from './snowman/step_5.png'
import snowman_6 from './snowman/step_6.png'
import snowman_7 from './snowman/step_7.png'

class Snowman extends Component {
	constructor(props) {
		super(props)
		this.snowmen = [
			snowman_0,
			snowman_1,
			snowman_2,
			snowman_3,
			snowman_4,
			snowman_5,
			snowman_6,
			snowman_7
		]
	}
	render() {
		return <img src={this.snowmen[this.props.correctGuessCount]} />
	}
}

export default Snowman
