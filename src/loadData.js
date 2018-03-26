const getObjectFromJson = (response) => response.json()

const throwIfNotOk = (response) => {
	if (!response.ok) {
		throw Error(response.statusText)
	}
	return response
}

const loadCharacter = (randomId) => {
	const url = `https://rickandmortyapi.com/api/character/${randomId}`
	return fetch(url)
		.then(throwIfNotOk)
		.then(getObjectFromJson)
}

export default loadCharacter
