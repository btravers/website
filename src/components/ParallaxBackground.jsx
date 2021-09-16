import * as React from "react"
import PropTypes from "prop-types"

import ParallaxLayer from "./ParallaxLayer"

const symbols = [
    ">", 
    "<", 
    "&",
    "#", 
    "=", 
    "{", 
    "}", 
    "[", 
    "]",
]

const sizes = [
    "3.75rem", 
    "4.5rem", 
    "6rem", 
    "8rem", 
]

const colors = [
    // red
    "#FEF2F2",
    "#FEE2E2",
    "#FECACA",

    // yellow
    "#FFFBEB",
    "#FEF3C7",
    "#FDE68A",

    // green
    "#ECFDF5",
    "#D1FAE5",
    "#A7F3D0",

    // blue
    "#EFF6FF",
    "#DBEAFE",
    "#BFDBFE",

    // indigo
    "#EEF2FF",
    "#E0E7FF",
    "#C7D2FE",

    // purple
    "#F5F3FF",
    "#EDE9FE",
    "#DDD6FE",

    // pink
    "#FDF2F8",
    "#FCE7F3",
    "#FBCFE8",
]

function random(min, max) {
    return Math.floor(Math.random()*(max - min + 1) + min);
}

function getRandomValueFrom(items) {
    return items[Math.floor(Math.random() * items.length)]
}

function repeat(n, fn) {
    return [...Array(n).keys()].map(fn)
}

const parallaxInformations = repeat(3, level => ({ 
    level, 
    symbols: repeat(15, id => ({ 
        id, 
        style: { 
            top: `${random(10, 250)}%`,
            left: `${random(10, 90)}%`,
            fontSize: getRandomValueFrom(sizes),
            color: getRandomValueFrom(colors),
        },
        symbol: getRandomValueFrom(symbols),
    })),
}))

const Symbol = ({ style, children }) => (
    <div 
        className="absolute" 
        style={style}
    >
        {children}
    </div>
)

Symbol.propTypes = {
    style: PropTypes.shape({
        top: PropTypes.string.isRequired,
        left: PropTypes.string.isRequired,
        fontSize: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
    }).isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
}

const ParallaxBackground = () => (
    <div className="relative z-0">
        {parallaxInformations.map(({ level, symbols: symbolInformation }) => (
            <ParallaxLayer key={level} level={level}>
                {symbolInformation.map(({id, style, symbol}) => (
                    <Symbol key={id} style={style}>
                        {symbol}
                    </Symbol>
                ))}
            </ParallaxLayer>
        ))}
    </div>
)

export default ParallaxBackground