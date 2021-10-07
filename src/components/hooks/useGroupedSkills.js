import { useStaticQuery, graphql } from "gatsby"

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
    const { allSkillsJson: { group: groupedSkills } } = useStaticQuery(query)
    return groupedSkills
}

export default useGroupedSkills
