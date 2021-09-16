import React from "react"
import PropTypes from "prop-types"

const Arrow = ({ onClick }) => (
    <svg className="cursor-pointer animate-bounce fill-current w-6 h-6 m-5" onClick={onClick} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <polygon points="9 16.172 2.929 10.101 1.515 11.515 10 20 10.707 19.293 18.485 11.515 17.071 10.101 11 16.172 11 0 9 0"/>
    </svg>
)

Arrow.propTypes = {
    onClick: PropTypes.func.isRequired,
}

export default Arrow