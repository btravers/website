import * as React from "react"
import PropTypes from "prop-types"

import Location from "./Location"
import Calendar from "./Calendar"

const Experience = ({ title, company, location, period, description, skills }) => (
    <div>
        <div className="text-xl text-primary-800 font-bold my-1">{company}</div>
        <div className="text-lg text-primary-800 my-1">{title}</div>
        <div className="inline-flex gap-10 text-neutral">
            <Location value={location} />
            <Calendar {...period} />
        </div>
        <div className="text-lg my-3">{description}</div>
        <div className="inline-flex flex-wrap gap-3 my-3">
            {skills.map(skill => <div className="bg-primary-200 text-primary-800 px-2 py-1 rounded">{skill}</div>)}
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