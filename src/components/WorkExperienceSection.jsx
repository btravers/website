import * as React from "react"
import PropTypes from "prop-types"

import useWorkExperience from "./hooks/useWorkExperience"

import Section from "./Section"
import Location from "./Location";
import Calendar from "./Calendar";
import CustomizedMDXRenderer from "./CustomizedMDXRenderer"

import illustration from "../images/90.svg"

const Experience = ({organization, title, location, start, end, skills, body}) => (
    <div>
        <div className="text-xl text-primary-800 font-bold my-1">{organization}</div>
        <div className="text-lg text-primary-800 my-1">{title}</div>
        <div className="inline-flex gap-4 md:gap-10 text-gray-500">
            <Location value={location}/>
            <Calendar start={start} end={end}/>
        </div>
        <CustomizedMDXRenderer>{body}</CustomizedMDXRenderer>
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

const WorkExperienceSection = () => {
    const nodes = useWorkExperience()
    return (
        <Section title={{value: "expériences", illustration}}>
            <div className="max-w-5xl mx-auto flex flex-col gap-12">
                {nodes.map(({frontmatter: {title, organization, start, end, location, skills}, id, body}) => (
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
                ))}
            </div>
        </Section>
    )
}

export default WorkExperienceSection