import * as React from "react"

import SectionTitle from "./SectionTitle"

const Section = ({ title, children }) => (
    <div className="my-10">
        <SectionTitle {...title} />
        {children}
    </div>
)

export default Section