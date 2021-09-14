import * as React from "react"
import { useStaticQuery, graphql } from "gatsby";

import EntitledSection from "./EntitledSection"
import ProfessionalExperience from "./ProfessionalExperience"

import illustration from "../images/90.svg"

const query = graphql`
query experiences {
  allMdx(sort: {fields: frontmatter___end, order: DESC}) {
    nodes {
      frontmatter {
        title
        company
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
  const { allMdx: { nodes } } = useStaticQuery(query);
  return (
      <EntitledSection title={{ value: "expériences", illustration }}>
          <div className="flex flex-col gap-12">
              {nodes.map(({ frontmatter: { title, company, start, end, location, skills }, id, body }) => (
                <ProfessionalExperience 
                  key={id}  
                  title={title}
                  company={company}
                  start={start}
                  end={end}
                  location={location}
                  description={body}
                  skills={skills}
                />
              ))}
          </div>
      </EntitledSection>
  )
}

export default ProfessionalExperiencesSection