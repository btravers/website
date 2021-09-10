import * as React from "react"
import PropTypes from "prop-types"

const Section = ({ children }) => (
    <div className="z-10 my-10 p-5 backdrop-filter backdrop-blur-sm">
        {children}
    </div>
)

Section.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
}

export default Section