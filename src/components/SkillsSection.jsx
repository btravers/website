import * as React from "react"

import Section from "./Section"

import illustration from "../images/93.svg"
import Skills from "./Skills";

const SkillsSection = () => (
    <Section title={{value: "compétences", illustration}}>
        <div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10">
            <Skills/>
        </div>
    </Section>
)

export default SkillsSection