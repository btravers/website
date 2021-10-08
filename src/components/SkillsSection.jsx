import * as React from "react"
import PropTypes from "prop-types"

import EntitledSection from "./EntitledSection"
import useGroupedSkills from "./hooks/useGroupedSkills"

import illustration from "../images/93.svg"

const SkillLevel = ({ level, hilighted }) => (
  <div className={`h-1 w-10 rounded-sm ${hilighted ? "bg-primary-400" : "bg-primary-200"}`} title={level} />
)

SkillLevel.propTypes = {
  level: PropTypes.string.isRequired,
  hilighted: PropTypes.bool.isRequired,
}

const Skill = ({ name, mark }) => (
  <li className="grid grid-cols-2 pt-2 pb-2">
      <div className="text-lg text-primary-800">{name}</div>
      <div className="grid grid-cols-3 gap-1 items-center justify-self-end">
          <SkillLevel level="Débutant" hilighted={mark>0} />
          <SkillLevel level="Intermédiaire" hilighted={mark>1} />
          <SkillLevel level="Confirmé" hilighted={mark>2} />
      </div>
  </li>
)

Skill.propTypes = {
  name: PropTypes.string.isRequired,
  mark: PropTypes.oneOf([1, 2, 3]).isRequired,
}

const SkillSet = ({ name, skills }) => (
  <div>
      <h4 className="text-lg mb-1 text-gray-500">{name}</h4>
      <ul className="divide-y divide-gray-200 divide-solid">
          {
              skills
                  .map(({ name: skill, mark }) => (
                      <Skill key={skill} name={skill} mark={mark} />
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

const SkillsSection = () => {
  const groupedSkills = useGroupedSkills()
  return (
    <EntitledSection title={{ value: "compétences", illustration }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10">
            {
                groupedSkills
                    .map(({ title, skills }) => (
                        <SkillSet key={title} name={title} skills={skills} />
                    ))
            }
        </div>
    </EntitledSection>
  )
}

export default SkillsSection