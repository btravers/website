import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import EntitledSection from "./EntitledSection"
import Experience from "./Experience"

import illustration from "../images/94.svg"

const query = graphql`
  query schools {
    allMdx(
      sort: {fields: frontmatter___end, order: DESC}
      filter: {fileAbsolutePath: {regex: "/(schools)/.*\\.mdx$/"}}
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

const SchoolExperiencesSection = () => {
  const { allMdx: { nodes } } = useStaticQuery(query)
  return (
    <EntitledSection title={{ value: "études", illustration }}>
        <div>
            {nodes.map(({ frontmatter: { title, organization, start, end, location }, id }) => (
              <Experience 
                key={id} 
                organization={organization}
                title={title}
                location={location}
                start={start}
                end={end}
              />))}
        </div>
    </EntitledSection>
  )
}

export default SchoolExperiencesSection