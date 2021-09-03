import * as React from "react"
import PropTypes from "prop-types"

const container = {
    display: "flex",
    flexDirection: "row",
    fontFamily: "Roboto",
    fontSize: "60px",
    fontWeight: 300,
    color: "#2B2D42",
    margin: "30px",
    padding: "10px",
}

const containerInverted = {
    color: "#FFF",
}

const body = {
    marginLeft: "0.2em",
    marginRight: "0.2em",
}

const highlight =  {
    color: "#EF233C",
}

const ShortLogo = ({ inverted }) => {
    const containerStyle = {
        ...container,
        ...inverted ? containerInverted : {},
    }
    return (
        <div style={containerStyle}>
            <div>&#123;</div>
                <div style={body}>
                    <span style={highlight}>ΛV</span>
                </div>
            <div>&#125;</div>
        </div>
    )
}

ShortLogo.defaultProps = {
    inverted: false,
}


ShortLogo.propTypes = {
    inverted: PropTypes.bool,
}

export default ShortLogo;