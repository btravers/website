import * as React from "react"

import Section from "./Section"
import Header from "./Header"
import LinkedIn from "./icons/LinkedIn"
import GitHub from "./icons/GitHub"

import logo from "../images/logo-large-inverted.svg"
import workingGuyIllustration from "../images/22.svg"
import Animated from "./Animated";

const TitleSection = () => (
    <Section dark>
        <div className="mx-auto w-full flex flex-col">
            <Header/>
            <div
                className="max-w-8xl flex-grow mx-auto grid grid-cols-1 xl:grid-cols-2 items-center print:grid-cols-1 print:items-start print:mx-0">
                <div className="flex flex-col items-center justify-center print:items-start">
                    <img className="mx-3 md:mx-5 lg:mx-10 xl:mx-0 mb-8 max-w-2xl print:hidden" src={logo} alt=""/>
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
                <div>
                    <Animated animation="fadeInRight">
                        <img className="hidden xl:block print:hidden" src={workingGuyIllustration} alt=""/>
                    </Animated>
                </div>
            </div>
        </div>
    </Section>
)

export default TitleSection