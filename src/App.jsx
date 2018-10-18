import React, { Component } from 'react'
import './App.css'
import Words from './Words.json'
import WordDisplay from './WordDisplay'
import Snowman from './Snowman'
import Alphabet from './Alphabet'

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			correctGuessCount: 0,
			lettersChosen: [],
			randomWord: Words[Math.floor(Math.random() * Words.length)]
		}
	}
	correctGuessCount = () => {
		return this.state.randomWord.split('').filter((letter, index) => {
			return this.state.lettersChosen.includes(letter)
		}).length
	}

	letterChosen = letter => {
		this.state.lettersChosen.push(letter)
		this.setState({
			lettersChosen: this.state.lettersChosen
		})
	}
	newGame = () => {
		this.setState({
			lettersChosen: [],
			secretWord: [],
			randomWord: Words[Math.floor(Math.random() * Words.length)]
		})
	}

	render() {
		return (
			<main>
				<header>Snow Man</header>
				<Snowman correctGuessCount={this.correctGuessCount()} />
				<WordDisplay
					randomWord={this.state.randomWord}
					lettersChosen={this.state.lettersChosen}
				/>
				<Alphabet
					letterChosen={this.letterChosen}
					lettersChosen={this.state.lettersChosen}
				/>
				<button className="new" onClick={this.newGame}>
					new game
				</button>
			</main>
		)
	}
}

export default App
