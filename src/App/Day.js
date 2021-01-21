import React from 'react'
import PropTypes from 'prop-types'
import format from 'date-fns/format'

const Day = ({ day, list }) => {
	return (
		<div className="date">
			{format(new Date(day), 'eeee, dd LLLL')}
			{list.map((item) => {
				console.log(item);
				return <div className="temp" key={item?.dt}>
				{item?.dt_txt} Temp {item?.main.temp} °C
				</div>
			
			})}
		</div>
	)
}

Day.propTypes = {
	day: PropTypes.string,
	list: PropTypes.array,
}

export default Day
