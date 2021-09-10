import * as React from "react"
import PropTypes from "prop-types"

import Section from "./Section"
import SectionTitle from "./SectionTitle"

const EntitledSection = ({ title: { value, illustration }, children }) => (
    <Section>
        <SectionTitle value={value} illustration={illustration} />
        {children}
    </Section>
)

EntitledSection.propTypes = {
    title: PropTypes.shape({
        value: PropTypes.string.isRequired,
        illustration: PropTypes.string.isRequired,
    }).isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
}

export default EntitledSection