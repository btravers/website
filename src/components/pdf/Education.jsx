import React from "react"
import PropTypes from "prop-types"

import Part from "./Part"
import useEducation from "../hooks/useEducation"

const Experience = ({title, organization, location, start, end}) => (
    <div className="flex flex-col gap-1">
        <div className="font-bold">{title}</div>
        <div>{organization}</div>
        <div>{location}</div>
        <div className="flex gap-1">
            <span>{start}</span>
            -
            <span>{end}</span>
        </div>
    </div>
)

Experience.propTypes = {
    title: PropTypes.string.isRequired,
    organization: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,
}

const Education = () => {
    const education = useEducation()
    return (
        <Part title="éducation">
            {
                education
                    .map(({frontmatter: {title, organization, start, end, location}, id}) => (
                        <Experience
                            key={id}
                            title={title}
                            organization={organization}
                            location={location}
                            start={start}
                            end={end}
                        />
                    ))
            }
        </Part>
    )
}

export default Education