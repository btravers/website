import * as React from "react"

import EntitledSection from "./EntitledSection"
import Experience from "./Experience"
import useWorkExperience from "./hooks/useWorkExperience"

import illustration from "../images/90.svg"

const ProfessionalExperiencesSection = () => {
  const nodes = useWorkExperience()
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