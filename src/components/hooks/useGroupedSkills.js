import {useStaticQuery, graphql} from "gatsby"

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

function useGroupedSkills() {
    const {allSkillsJson: {group: groupedSkills}} = useStaticQuery(query)
    return groupTitles
        .map(({group, title}) => ({
            title,
            skills: groupedSkills
                .find(({fieldValue}) => fieldValue === group)
                .nodes
                .sort(({mark: m1}, {mark: m2}) => m2 - m1)
        }))
}

export default useGroupedSkills
