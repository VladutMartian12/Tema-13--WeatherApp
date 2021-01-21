import React, { useState } from 'react'
import PropTypes from 'prop-types'

const SelectLocation = ({ onSelect }) => {
	const [searchValue, setSearchValue] = useState('')

	const onChange = (event) => {
		event.preventDefault()
		setSearchValue(event.target.value)
	}

	const onSubmit = (event) => {
		event.preventDefault()
		onSelect(searchValue)
	}

	return (
		<div className="buttControl">
			<form onSubmit={onSubmit}>
				<input className="cityName"
					type="text"
					value={searchValue}
					onChange={onChange}
					placeholder="Cauta localitate"
				/>
				</form>
				<input className="buttonSearch" type="submit" value="Cauta" />
			</div>
	)
}

SelectLocation.propTypes = {
	onSelect: PropTypes.func,
}

SelectLocation.defaultProps = {
	onSelect: () => {},
}

export default SelectLocation
