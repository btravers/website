import * as React from "react"
import PropTypes from "prop-types"

import LocationIcon from "./icons/LocationIcon"
import CalendarIcon from "./icons/CalendarIcon"
import CustomizedMDXRenderer from "./CustomizedMDXRenderer"

const Location = ({ value }) => (
    <div className="inline-flex gap-2 items-center">
        <LocationIcon />
        <span>{value}</span>
    </div>
)

Location.propTypes = {
    value: PropTypes.string.isRequired,
}

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


const Experience = ({ organization, title, location, start, end, skills, body }) => (
    <div>
        <div className="text-xl text-primary-800 font-bold my-1">{organization}</div>
        <div className="text-lg text-primary-800 my-1">{title}</div>
        <div className="inline-flex gap-4 md:gap-10 text-gray-500">
            <Location value={location} />
            <Calendar start={start} end={end} />
        </div>
        {body && <CustomizedMDXRenderer>{body}</CustomizedMDXRenderer>}
        {skills && <div className="inline-flex flex-wrap gap-3 my-3">
            {skills.map(skill => <div key={skill} className="bg-primary-200 text-primary-800 px-2 py-1 rounded">{skill}</div>)}
        </div>}
    </div>
)

Experience.defaultProps = {
    skills: null,
    body: null,
}

Experience.propTypes = {
    organization: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string),
    body: PropTypes.string,
}

export default Experience