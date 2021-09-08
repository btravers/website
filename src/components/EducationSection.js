import * as React from "react"

import Section from "./Section"
import Education from "./Education"

import illustration from "../images/94.svg"

const education = [
    {
      school: "Institut National des Sciences Appliquées",
      title: "Diplôme d'ingénieur en informatique",
      location: "Rennes, France",
      period: {
        start: new Date(2010, 8),
        end: new Date(2015, 6),
      },
    }
]

const EducationSection = () => (
    <Section title={{ value: "études", illustration }}>
        <div>
            {education.map((e, index) => <Education key={index} {...e} />)}
        </div>
    </Section>
)

export default EducationSection