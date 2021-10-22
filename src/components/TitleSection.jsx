import * as React from "react"

import Section from "./Section"
import LinkedIn from "./icons/LinkedIn"
import GitHub from "./icons/GitHub"
import Animated from "./Animated"

import logo from "../images/logo-large-inverted.svg"
import workingGuyIllustration from "../images/22.svg"

const TitleSection = () => (
    <Section dark>
        <div className="mx-auto w-full flex flex-col">
            <div
                className="max-w-8xl flex-grow mx-auto grid grid-cols-1 xl:grid-cols-2 items-center print:grid-cols-1 print:items-start print:mx-0"
            >
                <Animated animation="fadeIn">
                    <div className="flex flex-col items-center justify-center print:items-start">
                        <img className="mb-8 print:hidden" src={logo} alt=""/>
                        <h1 className="text-6xl uppercase hidden print:block">
                            <span className="font-bold">Benoit</span> Travers
                        </h1>
                        <div className="text-xl md:text-3xl text-center my-2 print:text-2xl print:uppercase">
                            <h2>développeur full stack freelance</h2>
                            <div className="print:hidden">basé à Rennes, France</div>
                        </div>
                        <div className="inline-grid grid-cols-2 my-6 gap-5 print:hidden">
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
                </Animated>
                <div className="hidden xl:block print:hidden">
                    <Animated animation="fadeInRight">
                        <img src={workingGuyIllustration} alt=""/>
                    </Animated>
                </div>
            </div>
        </div>
    </Section>
)

export default TitleSection