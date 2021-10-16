import React from "react"

import Part from "./Part"
import Skills from "../Skills";

const SkillsPart = () => (
    <Part title="compétences">
        <div className="grid grid-cols-2 gap-3">
            <Skills/>
        </div>
    </Part>
)

export default SkillsPart