import * as React from "react"
import PropTypes from "prop-types"

import useEducation from "./hooks/useEducation"
import Section from "./Section"
import Location from "./Location"
import Calendar from "./Calendar"
import Animated from "./Animated"

import illustration from "../images/94.svg"

const Experience = ({organization, title, location, start, end}) => (
    <Animated animation="fadeInUp">
        <div className="flex flex-col gap-1">
            <div className="text-xl text-primary-800 font-bold print:text-base print:text-current">{organization}</div>
            <div className="text-lg text-primary-800 print:text-base print:text-current">{title}</div>
            <div className="inline-flex gap-4 md:gap-10 text-gray-500 print:flex print:flex-col print:gap-0 print:text-current">
                <span className="print:hidden">
                    <Location value={location}/>
                </span>
                <Calendar start={start} end={end}/>
            </div>
        </div>
    </Animated>
)

Experience.propTypes = {
    organization: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,
}

const EducationSection = () => {
    const nodes = useEducation()
    return (
        <Section title={{value: "études", illustration}}>
            <div className="max-w-5xl mx-auto w-full flex flex-col gap-12 print:gap-5">
                {
                    nodes.map(({frontmatter: {title, organization, start, end, location}, id}) => (
                        <Experience
                            key={id}
                            organization={organization}
                            title={title}
                            location={location}
                            start={start}
                            end={end}
                        />))
                }
            </div>
        </Section>
    )
}

export default EducationSection