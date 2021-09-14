import * as React from "react"
import PropTypes from "prop-types"
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Experience from "./Experience"

const ProfessionalExperience = ({ company, title, location, start, end, description, skills }) => (
    <Experience organisation={company} title={title} location={location} start={start} end={end}>
        <MDXRenderer>
            {description}
        </MDXRenderer>
        <div className="inline-flex flex-wrap gap-3 my-3">
            {skills.map(skill => <div key={skill} className="bg-primary-200 text-primary-800 px-2 py-1 rounded">{skill}</div>)}
        </div>
    </Experience>
)

ProfessionalExperience.propTypes = {
    title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(String).isRequired,
}

export default ProfessionalExperience