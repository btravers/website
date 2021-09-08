import * as React from "react"

import LinkedIn from "./LinkedIn"
import GitHub from "./GitHub"

import logo from "../images/logo-large.svg"
import workingGuyIllustration from "../images/22.svg"

const Hero = () => (
    <div className="h-full max-w-screen-xl mx-auto -mt-20 grid grid-cols-2 items-center">
        <div className="z-10 flex flex-col items-center">
            <img className="mb-8" src={logo} alt="" />
            <h2 className="text-4xl text-center text-primary-800 my-2">développeur full stack senior <br /> basé à Rennes, France</h2>
            <div className="inline-grid grid-cols-2 my-6 gap-5">
                <a href="https://www.linkedin.com/in/btraversfr/" target="_blank" rel="noopener noreferrer">
                    <LinkedIn />
                </a>
                <a href="https://www.github.com/btravers/" target="_blank" rel="noopener noreferrer">
                    <GitHub />
                </a>
            </div>
        </div>
        <img className="z-10" src={workingGuyIllustration} alt="" />
    </div>
)

export default Hero