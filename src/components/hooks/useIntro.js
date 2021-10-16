import {useStaticQuery, graphql} from "gatsby"

const query = graphql`
  query intro {
    allMdx(
      filter: {fileAbsolutePath: {regex: "/intro\\.mdx$/"}}
    ) {
      nodes {
        body
      }
    }
  }
`

function useIntro() {
    const {allMdx: {nodes}} = useStaticQuery(query)
    return nodes[0]
}

export default useIntro
