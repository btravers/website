import * as React from "react"
import { v4 as uuidv4 } from "uuid"

import EntitledSection from "./EntitledSection"
import SchoolExperience from "./SchoolExperience"

import illustration from "../images/94.svg"

const experiences = [
    {
      id: uuidv4(),
      school: "Institut National des Sciences Appliquées",
      title: "Diplôme d'ingénieur en informatique",
      location: "Rennes, France",
      period: {
        start: new Date(2010, 8),
        end: new Date(2015, 6),
      },
    }
]

const SchoolExperiencesSection = () => (
    <EntitledSection title={{ value: "études", illustration }}>
        <div>
            {experiences.map(({id, school, title, location, period}) => (
              <SchoolExperience 
                key={id} 
                school={school}
                title={title}
                location={location}
                period={period}
              />))}
        </div>
    </EntitledSection>
)

export default SchoolExperiencesSection