import React from "react"
import PropTypes from "prop-types"

import Section from "./Section"
import SectionTitle from "./SectionTitle"

const EntitledSection = ({title, dark, hideNextButton, children}) => (
    <Section dark={dark} hideNextButton={hideNextButton}>
        <div className="flex flex-col w-full">
            <SectionTitle value={title.value} illustration={title.illustration}/>
            <div className="container max-w-5xl mx-auto py-10 px-5">
                {children}
            </div>
        </div>
    </Section>
)

EntitledSection.propTypes = {
    title: PropTypes.shape({
        value: PropTypes.string.isRequired,
        illustration: PropTypes.string.isRequired,
    }).isRequired,
    dark: PropTypes.bool,
    hideNextButton: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
}

EntitledSection.defaultProps = {
    dark: false,
    hideNextButton: false,
}

export default EntitledSection