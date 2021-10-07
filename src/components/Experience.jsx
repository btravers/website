import * as React from "react"
import PropTypes from "prop-types"

import Location from "./Location"
import Calendar from "./Calendar"
import CustomizedMDXRenderer from "./CustomizedMDXRenderer"

/* eslint-disable react/jsx-props-no-spreading, jsx-a11y/heading-has-content */
const ul = props => <ul className="list-disc list-inside pl-8" {...props} />
const li = props => <li className="my-2" {...props} />
const p = props => <p className="my-2" {...props} />
const h3 = props => <h3 className="text-lg mt-3 mb-2" {...props} />
/* eslint-enable react/jsx-props-no-spreading, jsx-a11y/heading-has-content */

const components = { ul, li, p, h3 }

const Experience = ({ organization, title, location, start, end, skills, body }) => (
    <div>
        <div className="text-xl text-primary-800 font-bold my-1">{organization}</div>
        <div className="text-lg text-primary-800 my-1">{title}</div>
        <div className="inline-flex gap-4 md:gap-10 text-gray-500">
            <Location value={location} />
            <Calendar start={start} end={end} />
        </div>
        {body && <CustomizedMDXRenderer components={components}>{body}</CustomizedMDXRenderer>}
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