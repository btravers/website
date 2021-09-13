import * as React from "react"
import PropTypes from "prop-types"
import markdownit from "markdown-it"

import Experience from "./Experience"

const md = markdownit({
    breaks: true,
    html: true,
})

const ProfessionalExperience = ({ company, title, location, period, description, skills }) => (
    <Experience 
        organisation={company}
        title={title}
        location={location}
        period={period}
    >
        {/* eslint-disable-next-line react/no-danger */}
        <div className="markdown" dangerouslySetInnerHTML={{__html: md.render(description)}} />
        <div className="inline-flex flex-wrap gap-3 my-3">
            {skills.map(skill => <div key={skill} className="bg-primary-200 text-primary-800 px-2 py-1 rounded">{skill}</div>)}
        </div>
    </Experience>
)

ProfessionalExperience.propTypes = {
    title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    period: PropTypes.shape({
        start: PropTypes.instanceOf(Date).isRequired,
        end: PropTypes.instanceOf(Date).isRequired,
    }).isRequired,
    description: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(String).isRequired,
}

export default ProfessionalExperience