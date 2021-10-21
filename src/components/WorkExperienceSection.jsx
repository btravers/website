import * as React from "react"
import PropTypes from "prop-types"

import useWorkExperience from "./hooks/useWorkExperience"

import Section from "./Section"
import Location from "./Location";
import Calendar from "./Calendar";
import CustomizedMDXRenderer from "./CustomizedMDXRenderer"

import illustration from "../images/90.svg"

const Experience = ({organization, title, location, start, end, skills, body}) => (
    <div className="flex flex-col gap-1">
        <div className="flex flex-col gap-1 text-primary-800 print:flex-row">
            <div className="text-xl font-bold">{organization}</div>
            <span className="hidden print:block">/</span>
            <div className="text-lg">{title}</div>
        </div>
        <div className="inline-flex gap-4 md:gap-10 text-gray-500">
            <span className="print:hidden">
                <Location value={location}/>
            </span>
            <Calendar start={start} end={end}/>
        </div>
        <div className="text-gray-600">
            <CustomizedMDXRenderer>{body}</CustomizedMDXRenderer>
        </div>
        <div className="inline-flex flex-wrap gap-3 my-3">
            {
                skills.map(skill => (
                    <div
                        key={skill}
                        className="bg-primary-200 text-primary-800 px-2 py-1 rounded"
                    >
                        {skill}
                    </div>
                ))}
        </div>
    </div>
)

Experience.propTypes = {
    organization: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    body: PropTypes.string.isRequired,
}

const WorkExperienceSection = ({offset, size}) => {
    const nodes = useWorkExperience()
    return (
        <Section title={offset === 0 ? {value: "expériences", illustration} : null}>
            <div className="max-w-5xl mx-auto flex flex-col gap-12 print:gap-9">
                {
                    nodes
                        .slice(offset, offset + (size || nodes.length))
                        .map(({frontmatter: {title, organization, start, end, location, skills}, id, body}) => (
                            <Experience
                                key={id}
                                title={title}
                                organization={organization}
                                start={start}
                                end={end}
                                location={location}
                                body={body}
                                skills={skills}
                            />
                        ))
                }
            </div>
        </Section>
    )
}

WorkExperienceSection.defaultProps = {
    offset: 0,
    size: null,
}

WorkExperienceSection.propTypes = {
    offset: PropTypes.number,
    size: PropTypes.number,
}

export default WorkExperienceSection