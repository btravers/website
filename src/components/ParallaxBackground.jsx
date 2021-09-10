import * as React from "react"

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

const RandomSymbol = () => (
    <div 
        className="absolute" 
        style={{ 
            top: `${random(10, 250)}%`,
            left: `${random(10, 90)}%`,
            fontSize: getRandomValueFrom(sizes),
            color: getRandomValueFrom(colors),
        }}
    >
        {getRandomValueFrom(symbols)}
    </div>
)

function repeat(n, fn) {
    return [...Array(n).keys()].map(fn)
}

const ParallaxBackground = () => (
    <div className="z-0">
        {repeat(3, level => (
            <ParallaxLayer key={level} level={level}>
                {repeat(10, i => <RandomSymbol key={i} />)}
            </ParallaxLayer> 
        ))}
    </div>
)

export default ParallaxBackground