import * as React from "react"

import SectionTitle from "./SectionTitle"

const Section = ({ title, children }) => (
    <div className="z-10 my-10 backdrop-filter backdrop-blur-sm">
        <SectionTitle {...title} />
        {children}
    </div>
)

export default Section