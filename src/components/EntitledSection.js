import * as React from "react"

import Section from "./Section"
import SectionTitle from "./SectionTitle"

const EntitledSection = ({ title, children }) => (
    <Section>
        <SectionTitle {...title} />
        {children}
    </Section>
)

export default EntitledSection