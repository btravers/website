import * as React from "react"
import PropTypes from "prop-types"

import LocationIcon from "./LocationIcon"
import CalendarIcon from "./CalendarIcon"
import { dateFormatter } from "./date-utils"

const Education = ({ school, title, location, period: { start, end } }) => (
    <div>
        <div className="text-xl text-primary-800 font-bold mb-1">{school}</div>
        <div className="text-lg text-primary-800 mb-px">{title}</div>
        <div className="inline-grid grid-cols-2 text-neutral">
            <div className="inline-grid grid-cols-2">
                <LocationIcon />
                <span>{location}</span>
            </div>
            <div className="inline-grid grid-cols-2">
                <CalendarIcon /> 
                <span>{dateFormatter(start)} - {dateFormatter(end)}</span>
            </div>
        </div>
    </div>
)

Education.propTypes = {
    title: PropTypes.string.isRequired,
    school: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    period: PropTypes.shape({
        start: PropTypes.instanceOf(Date).isRequired,
        end: PropTypes.instanceOf(Date).isRequired,
    }).isRequired,
}


export default Education