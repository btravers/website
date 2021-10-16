import React from "react"
import PropTypes from "prop-types";

import useGroupedSkills from "./hooks/useGroupedSkills";

const SkillLevel = ({level, selected}) => (
    <div className={`h-1 w-10 rounded-sm ${selected ? "bg-primary-400" : "bg-primary-200"}`} title={level}/>
)

SkillLevel.propTypes = {
    level: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
}

const Skill = ({name, mark}) => (
    <li className="grid grid-cols-2 py-2 print:block print:py-0">
        <div className="text-lg text-primary-800 print:text-base print:text-current">{name}</div>
        <div className="grid grid-cols-3 gap-1 items-center justify-self-end print:hidden">
            <SkillLevel level="Débutant" selected={mark > 0}/>
            <SkillLevel level="Intermédiaire" selected={mark > 1}/>
            <SkillLevel level="Confirmé" selected={mark > 2}/>
        </div>
    </li>
)

Skill.propTypes = {
    name: PropTypes.string.isRequired,
    mark: PropTypes.oneOf([1, 2, 3]).isRequired,
}

const SkillSet = ({name, skills}) => (
    <div className="flex flex-col gap-1">
        <h4 className="text-lg text-gray-500 print:text-base print:text-current print:font-bold print-slash-prefix">{name}</h4>
        <ul className="divide-y divide-gray-200 divide-solid print:divide-none">
            {
                skills
                    .map(({name: skill, mark}) => (
                        <Skill key={skill} name={skill} mark={mark}/>
                    ))
            }
        </ul>
    </div>
)

SkillSet.propTypes = {
    name: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        mark: PropTypes.oneOf([1, 2, 3]).isRequired,
    })).isRequired,
}

const Skills = () => {
    const groupedSkills = useGroupedSkills()
    return (
        <>
            {
                groupedSkills
                    .map(({title, skills}) => (
                        <SkillSet key={title} name={title} skills={skills}/>
                    ))
            }
        </>
    )
}

export default Skills