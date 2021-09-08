import * as React from "react"

import ParallaxLayer from "../components/ParallaxLayer"

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
    "6xl", 
    "7xl", 
    "8xl", 
    "9xl", 
]

const colors = [
    "green", 
    "indigo",
    "blue",
    "yellow",
    "purple",
    "red",
]

const colorVariants = [
    50,
    100,
    200,
]

function random(min, max) {
    return Math.floor(Math.random()*(max - min + 1) + min);
}

function getRandomValueFrom(items) {
    return items[Math.floor(Math.random() * items.length)]
}

function generateSize() {
    return `text-${getRandomValueFrom(sizes)}`
}

function generateColor() {
    return `text-${getRandomValueFrom(colors)}-${getRandomValueFrom(colorVariants)}`
}

const RandomSymbol = () => (
    <div 
        className={`absolute ${generateColor()} ${generateSize()}`} 
        style={{ 
            top: `${random(10, 200)}%`,
            left: `${random(10, 90)}%`,
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