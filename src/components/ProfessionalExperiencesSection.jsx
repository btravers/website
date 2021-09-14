import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import EntitledSection from "./EntitledSection"
import Experience from "./Experience"

import illustration from "../images/90.svg"

const query = graphql`
query experiences {
  allMdx(
    sort: {fields: frontmatter___end, order: DESC}
    filter: {fileAbsolutePath: {regex: "/(experiences)/.*\\.mdx$/"}}
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

const ProfessionalExperiencesSection = () => {
  const { allMdx: { nodes } } = useStaticQuery(query)
  return (
      <EntitledSection title={{ value: "expériences", illustration }}>
          <div className="flex flex-col gap-12">
              {nodes.map(({ frontmatter: { title, organization, start, end, location, skills }, id, body }) => (
                <Experience 
                  key={id}  
                  title={title}
                  organization={organization}
                  start={start}
                  end={end}
                  location={location}
                  body={body}
                  skills={skills}
                />
              ))}
          </div>
      </EntitledSection>
  )
}

export default ProfessionalExperiencesSection