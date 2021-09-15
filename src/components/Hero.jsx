import * as React from "react"

import LinkedIn from "./LinkedIn"
import GitHub from "./GitHub"

import logo from "../images/logo-large.svg"
import workingGuyIllustration from "../images/22.svg"

const Hero = () => (
    <div className="h-full max-w-screen-xl mx-auto xl:-mt-20 grid grid-cols-1 xl:grid-cols-2 items-center">
        <div className="z-10 flex flex-col items-center">
            <img className="mx-3 md:mx-5 lg:mx-10 xl:mx-0 mb-8 max-w-2xl" src={logo} alt="" />
            <h2 className="text-xl md:text-3xl text-center text-primary-800 my-2">développeur full stack freelance <br /> basé à Rennes, France</h2>
            <div className="inline-grid grid-cols-2 my-6 gap-5">
                <a href="https://www.linkedin.com/in/btraversfr/" target="_blank" rel="noopener noreferrer" aria-label="linkedin">
                    <LinkedIn />
                </a>
                <a href="https://www.github.com/btravers/" target="_blank" rel="noopener noreferrer" aria-label="github">
                    <GitHub />
                </a>
            </div>
        </div>
        <img className="z-10 hidden xl:block" src={workingGuyIllustration} alt="" />
    </div>
)

export default Hero