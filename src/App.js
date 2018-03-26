/* eslint react/no-unused-state:0 no-console:0 */
import React, { Component } from 'react'
import styled from 'react-emotion'
import loadCharacter from './loadData'
import './App.css'

const Arena = styled('div')`
	display: flex;
	justify-content: space-evenly;
`

function getRandomCharacter() {
	const min = 1
	const max = 394
	return Math.floor(Math.random() * (max - min + 1)) + min
}

class App extends Component {
	state = {
		combatant1: null,
		combatant2: null,
	}

	componentWillMount() {
		this.loadCombatants()
	}

	loadCombatants = async () => {
		try {
			const combatant1 = await loadCharacter(getRandomCharacter())
			const combatant2 = await loadCharacter(getRandomCharacter())

			this.setState({
				combatant1,
				combatant2,
			})
		} catch (ex) {
			console.error('doh!')
		}
	}

	render() {
		const { combatant1, combatant2 } = this.state
		return (
			<div>
				<div>
					<p className='script'><span>presenting:</span></p>
					<p className='shadow text1'>Rick &amp; Morty</p>
					<p className='shadow text3'>BATTLE</p>

					<Arena>
						{combatant1 && <img alt={combatant1.name} src={combatant1.image} />}
						<p className='shadow text1'>VS</p>
						{combatant2 && <img alt={combatant2.name} src={combatant2.image} />}
					</Arena>

					<p className='script'><span>2018</span></p>
				</div>
			</div>
		)
	}
}

export default App
