import {useStaticQuery, graphql} from "gatsby"

const query = graphql`
  query schools {
    allMdx(
      sort: {fields: frontmatter___end, order: DESC}
      filter: {fileAbsolutePath: {regex: "/schools/.*\\.mdx$/"}}
    ) {
      nodes {
        frontmatter {
          title
          organization
          location
          start(formatString: "MMM YYYY", locale: "fr")
          end(formatString: "MMM YYYY", locale: "fr")
          skills
        }
        id
        body
      }
    }
  }
`

function useEducation() {
    const {allMdx: {nodes}} = useStaticQuery(query)
    return nodes
}

export default useEducation