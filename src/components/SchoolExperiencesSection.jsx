import * as React from "react"

import EntitledSection from "./EntitledSection"
import Experience from "./Experience"
import useEducation from "./hooks/useEducation"

import illustration from "../images/94.svg"


const SchoolExperiencesSection = () => {
  const nodes = useEducation()
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