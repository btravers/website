import React from "react"
import PropTypes from "prop-types"

import Part from "./Part"
import useGroupedSkills from "../hooks/useGroupedSkills"

const groupTitles = [
    {
      group: 'language',
      title: 'Langages',
    },
    {
      group: 'backend',
      title: 'Backend',
    },
    {
      group: 'frontend',
      title: 'Frontend',
    },
    {
      group: 'data',
      title: 'Données',
    },
    {
      group: 'other',
      title: 'Autres',
    },
]

const SkillSet = ({ title, skills }) => (
    <div className="flex flex-col gap-1">
        <div className="font-bold">&#47;&#47; {title}</div>
        <ul>
            {
                skills
                    .sort(({ mark: m1 }, { mark: m2 }) => m2 - m1)
                    .map(({ id, name }) => <li key={id}>{name}</li>)
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
                    groupTitles
                        .map(({ group, title }) => ({ title, skills: groupedSkills.find(({ fieldValue }) => fieldValue === group).nodes }))
                        .map(({ title, skills }) => <SkillSet key={title} title={title} skills={skills} />)
                }
            </div>
        </Part>
    )
}

export default Skills