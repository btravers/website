import * as React from "react"
import PropTypes from 'prop-types'

 const container = {
    display: "flex",
    flexDirection: "row",
    fontFamily: "Roboto",
    fontSize: "60px",
    fontWeight: 300,
    color: "#2B2D42",
    margin: "30px",
}

const containerInverted = {
    color: "#FFF",
}

const bracket = {
    fontSize: "119px",
    fontWeight: 100,
    lineHeight: "100%",
}

const bracketLarge = {
    fontSize: "60px",
    fontWeight: 300,
    lineHeight: "100%",
}

const body = {
    display: "flex",
    flexDirection: "column",
    marginLeft: "0.2em",
    marginRight: "0.2em",
    lineHeight: "100%",
}

const bodyLarge = {
    flexDirection: "row",
}

const bodyElem = {
    marginLeft: "0.1em",
    marginRight: "0.1em",
}

const highlight =  {
    color: "#EF233C",
}

const Logo = ({ large, inverted }) => {
    const conatinerStyle = {
        ...container,
        ...inverted ? containerInverted : {},
    }
    const bodyStyle = {
        ...body,
        ...large ? bodyLarge : {},
    }
    const bracketStyle = {
        ...bracket,
        ...large ? bracketLarge : {},
    }
    return (
        <div style={conatinerStyle}>
            <div style={bracketStyle}>&#123;</div>
            <div style={bodyStyle}>
                <div style={bodyElem}>BΞN<span style={highlight}>.IT</span></div>
                <div style={bodyElem}>TR<span style={highlight}>ΛV</span>ΞRS</div>
            </div>
            <div style={bracketStyle}>&#125;</div>
        </div>
    )
}

Logo.defaultProps = {
    large: false,
    inverted: false,
}


Logo.propTypes = {
    large: PropTypes.bool,
    inverted: PropTypes.bool,
}

export default Logo