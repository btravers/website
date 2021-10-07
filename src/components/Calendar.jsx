import * as React from "react"
import PropTypes from "prop-types"

import CalendarIcon from "./icons/CalendarIcon"

const Calendar = ({ start, end }) => (
    <div className="inline-flex gap-2 items-center">
        <CalendarIcon /> 
        <span>{start} - {end}</span>
    </div>
)

Calendar.propTypes = {
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,
}

export default Calendar