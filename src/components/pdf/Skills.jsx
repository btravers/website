import React from "react"
import PropTypes from "prop-types"

import Part from "./Part"
import useGroupedSkills from "../hooks/useGroupedSkills"

const SkillSet = ({title, skills}) => (
    <div className="flex flex-col gap-1">
        <div className="font-bold">&#47;&#47; {title}</div>
        <ul>
            {
                skills
                    .map(({id, name}) => (
                        <li key={id}>{name}</li>
                    ))
            }
        </ul>
    </div>
)

SkillSet.propTypes = {
    title: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        mark: PropTypes.oneOf([1, 2, 3]).isRequired,
    })).isRequired,
}

const Skills = () => {
    const groupedSkills = useGroupedSkills()
    return (
        <Part title="compétences">
            <div className="grid grid-cols-2 gap-3">
                {
                    groupedSkills
                        .map(({title, skills}) => (
                            <SkillSet key={title} title={title} skills={skills}/>
                        ))
                }
            </div>
        </Part>
    )
}

export default Skills