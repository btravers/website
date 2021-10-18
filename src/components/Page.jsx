import React from "react"
import PropTypes from "prop-types"

import * as styles from "./Page.module.css"

const Page = ({margin, children}) => (
    <div className={`${styles.page} ${margin ? "px-28 py-20" : ""}`}>
        {children}
    </div>
)

Page.propTypes = {
    margin: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
}

Page.defaultProps = {
    margin: false,
}

export default Page