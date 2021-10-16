import * as React from "react"

import Section from "./Section"
import Header from "./Header"
import LinkedIn from "./icons/LinkedIn"
import GitHub from "./icons/GitHub"

import logo from "../images/logo-large-inverted.svg"
import workingGuyIllustration from "../images/22.svg"

const Hero = () => (
    <Section dark>
        <div className="w-full flex flex-col">
            <Header/>
            <div className="h-full container mx-auto grid grid-cols-1 xl:grid-cols-2 items-center">
                <div className="flex flex-col items-center justify-center">
                    <img className="mx-3 md:mx-5 lg:mx-10 xl:mx-0 mb-8 max-w-2xl" src={logo} alt=""/>
                    <h2 className="text-xl md:text-3xl text-center my-2">développeur full stack freelance <br/> basé à
                        Rennes, France</h2>
                    <div className="inline-grid grid-cols-2 my-6 gap-5">
                        <a href="https://www.linkedin.com/in/btraversfr/" target="_blank" rel="noopener noreferrer"
                           aria-label="linkedin">
                            <LinkedIn/>
                        </a>
                        <a href="https://www.github.com/btravers/" target="_blank" rel="noopener noreferrer"
                           aria-label="github">
                            <GitHub/>
                        </a>
                    </div>
                </div>
                <img className="hidden xl:block" src={workingGuyIllustration} alt=""/>
            </div>
        </div>
    </Section>
)

export default Hero