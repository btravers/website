import * as React from "react"
import PropTypes from "prop-types"

import CalendarIcon from "./CalendarIcon"

const Calendar = ({ start, end }) => (
    <div className="inline-flex gap-2">
        <CalendarIcon /> 
        <span>{start} - {end}</span>
    </div>
)

Calendar.propTypes = {
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,
}

export default Calendar