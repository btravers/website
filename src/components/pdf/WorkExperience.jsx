import React from "react"
import PropTypes from "prop-types"
import useWorkExperience from "../hooks/useWorkExperience"

import Part from "./Part"
import CustomizedMDXRenderer from "../CustomizedMDXRenderer"

import * as styles from "./WorkExperience.module.css"

const Experience = ({ title, organization, start, end, body, skills }) => (
    <div className="flex flex-col gap-1 page-break-after">
        <div className="flex gap-1 text-xl">
            <span className="font-bold">{organization}</span>
            /
            <span>{title}</span>
        </div>
        <div className="flex gap-1 text-lg">
            <span>{start}</span>
            -
            <span>{end}</span>
        </div>
        <div className="text-gray-700">
            <CustomizedMDXRenderer>
                {body}
            </CustomizedMDXRenderer>
        </div>
        <div className="flex flex-row gap-2">
            <div className="flex-none">Compétences :</div>
            <ul className={`inline-flex flex-row flex-wrap flex-auto gap-1 ${styles.commaList}`}>
                {
                    skills
                        .map(skill => <li key={skill}>{skill}</li>)
                }
            </ul>
        </div>
    </div>
)

Experience.propTypes = {
    title: PropTypes.string.isRequired,
    organization: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
}

const WorkExperience = ({ offset, size }) => {
    const experience = useWorkExperience()
    return (
        <Part title={offset === 0 ? "expérience" : null}>
            <div className="flex flex-col gap-10">
                {
                    experience
                        .slice(offset, offset + (size || experience.length))
                        .map(({ frontmatter: { title, organization, start, end, location, skills }, body, id }) => (
                            <Experience 
                                key={id} 
                                title={title} 
                                organization={organization} 
                                location={location}
                                start={start}
                                end={end}
                                body={body}
                                skills={skills}
                            />
                        ))
                }
            </div>
        </Part>
    )
}

WorkExperience.propTypes = {
    offset: PropTypes.number.isRequired,
    size: PropTypes.number,
}

WorkExperience.defaultProps = {
    size: null,
}

export default WorkExperience