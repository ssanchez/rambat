/* eslint-disable */
import React, { Component } from 'react'

class Player extends Component {
	render() {
		const {
			image,
			name,
		} = this.props
		return (
			<img alt={name} src={image}></img>
		)
	}
}

export default Player
