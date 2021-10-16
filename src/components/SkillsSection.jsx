import * as React from "react"

import EntitledSection from "./EntitledSection"

import illustration from "../images/93.svg"
import Skills from "./Skills";

const SkillsSection = () => (
    <EntitledSection title={{value: "compétences", illustration}}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10">
            <Skills/>
        </div>
    </EntitledSection>
)

export default SkillsSection