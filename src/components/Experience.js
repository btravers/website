import * as React from "react"
import PropTypes from "prop-types"

import LocationIcon from "./LocationIcon"
import CalendarIcon from "./CalendarIcon"
import { dateFormatter } from "./date-utils"

const Experience = ({ title, company, location, period: { start, end }, description, skills }) => (
    <div>
        <div className="text-xl font-bold mb-1">{company}</div>
        <div className="text-lg text-gray-800 mb-px">{title}</div>
        <div className="inline-grid grid-cols-2 text-gray-600">
            <div className="inline-grid grid-cols-2">
                <LocationIcon />
                <span>{location}</span>
            </div>
            <div className="inline-grid grid-cols-2">
                <CalendarIcon /> 
                <span>{dateFormatter(start)} - {dateFormatter(end)}</span>
            </div>
        </div>
        <div className="text-lg my-3">{description}</div>
        <div className="flex flex-wrap gap-3 my-3">
            {skills.map(skill => <div className="bg-gray-200 text-gray-700 px-2 py-1 rounded">{skill}</div>)}
        </div>
    </div>
)

Experience.propTypes = {
    title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    period: PropTypes.shape({
        start: PropTypes.instanceOf(Date).isRequired,
        end: PropTypes.instanceOf(Date).isRequired,
    }).isRequired,
    description: PropTypes.string,
    skills: PropTypes.arrayOf(String).isRequired,
}

export default Experience