import React from "react"
import PropTypes from "prop-types"

const Part = ({ title, children }) => (
    <div className="divide-y-2 divide-current w-full">
        {title && <h3 className="uppercase text-2xl my-2">{title}</h3>}
        <div className="py-8">
            {children}
        </div>
    </div>
)

Part.propTypes = {
    title: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
}

Part.defaultProps = {
    title: null,
}

export default Part