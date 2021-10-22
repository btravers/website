import * as React from "react"
import PropTypes from "prop-types"

import Section from "./Section"
import useGroupedSkills from "./hooks/useGroupedSkills"
import Animated from "./Animated"

import illustration from "../images/93.svg"

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

const skillPropTypes = {
    name: PropTypes.string.isRequired,
    mark: PropTypes.oneOf([1, 2, 3]).isRequired,
}
Skill.propTypes = skillPropTypes

const SkillSet = ({name, skills}) => (
    <Animated animation="fadeInUp">
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
    </Animated>
)

SkillSet.propTypes = {
    name: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.shape(skillPropTypes)).isRequired,
}

const SkillsSection = () => {
    const groupedSkills = useGroupedSkills()
    return (
        <Section title={{value: "compétences", illustration}}>
            <div
                className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10 print:grid-cols-2 print:gap-3"
            >
                {
                    groupedSkills
                        .map(({title, skills}) => (
                            <SkillSet key={title} name={title} skills={skills}/>
                        ))
                }
            </div>
        </Section>
    )
}

export default SkillsSection