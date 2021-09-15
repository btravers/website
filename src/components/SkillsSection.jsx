import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import EntitledSection from "./EntitledSection"
import SkillSet from "./SkillSet"

import illustration from "../images/93.svg"

const query = graphql`
  query skills {
    allSkillsJson {
      group(field: category) {
        nodes {
          id
          name
          mark
        }
        fieldValue
      }
    }
  }
`

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

const SkillsSection = () => {
  const { allSkillsJson: { group: groupedSkills } } = useStaticQuery(query)
  return (
    <EntitledSection title={{ value: "compétences", illustration }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10">
            {groupTitles
              .map(({ group, title }) => ({ title, skills: groupedSkills.find(({ fieldValue }) => fieldValue === group).nodes }))
              .map(({ title, skills }) => <SkillSet key={title} name={title} skills={skills} />)}
        </div>
    </EntitledSection>
  )
}

export default SkillsSection