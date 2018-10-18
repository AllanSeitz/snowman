import React, { Component } from 'react'

class WordDisplay extends Component {
	render() {
		return (
			<ul className="randomWord">
				{this.props.randomWord.split('').map((letter, index) => {
					return (
						<li key={index}>
							{this.props.lettersChosen.includes(letter) ? letter : ' '}
						</li>
					)
				})}
			</ul>
		)
	}
}

export default WordDisplay
