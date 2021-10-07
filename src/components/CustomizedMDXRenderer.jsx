import React from "react"
import PropTypes from "prop-types"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

const CustomizedMDXRenderer = ({ components, children }) => (
    <MDXProvider components={components}>
        <MDXRenderer>{children}</MDXRenderer>
    </MDXProvider>
)

CustomizedMDXRenderer.propTypes = {
    components: PropTypes.shape({
        ul: PropTypes.func.isRequired, 
        li: PropTypes.func.isRequired, 
        p: PropTypes.func.isRequired, 
        h3: PropTypes.func.isRequired,
    }).isRequired,
    children: PropTypes.string.isRequired,
}

export default CustomizedMDXRenderer
