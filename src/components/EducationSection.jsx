import * as React from "react"

import Section from "./Section"
import Experience from "./Experience"
import useEducation from "./hooks/useEducation"

import illustration from "../images/94.svg"

const EducationSection = () => {
    const nodes = useEducation()
    return (
        <Section title={{value: "études", illustration}}>
            <div className="max-w-5xl mx-auto w-full">
                {nodes.map(({frontmatter: {title, organization, start, end, location}, id}) => (
                    <Experience
                        key={id}
                        organization={organization}
                        title={title}
                        location={location}
                        start={start}
                        end={end}
                    />))}
            </div>
        </Section>
    )
}

export default EducationSection