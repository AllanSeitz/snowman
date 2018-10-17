import React, { Component } from 'react'

class LetterButton extends Component {
	state = {}
	_letterChoice = event => {
		this.props.letterChosen(this.props.letter)
	}
	render() {
		return (
			<button disabled={this.props.disabled} onClick={this._letterChoice}>
				{this.props.letter}
			</button>
		)
	}
}

export default LetterButton
