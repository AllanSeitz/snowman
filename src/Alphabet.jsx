import React, { Component } from 'react'
import LetterButton from './LetterButton.jsx'

class Alphabet extends Component {
  render() {
    const letters = [
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z'
    ]
    return (
      <ul className="letterButtons">
        {letters.map(letter => {
          return (
            <li key={letter}>
              <LetterButton
                letter={letter}
                letterChosen={this.props.letterChosen}
                disabled={this.props.lettersChosen.includes(letter)}
              />
            </li>
          )
        })}
      </ul>
    )
  }
}

export default Alphabet
