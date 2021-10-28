import * as React from "react"

import Section from "./Section"
import LinkedIn from "./icons/LinkedIn"
import GitHub from "./icons/GitHub"
import Animated from "./Animated"

import logo from "../images/logo-large-inverted.svg"

const TitleSection = () => (
    <Section dark>
        <div
            className="w-full flex items-center print:items-start print:mx-0"
        >
            <Animated animation="fadeIn">
                <div className="flex flex-col gap-3 items-center print:items-start">
                    <img className="max-w-4xl print:hidden" src={logo} alt=""/>
                    <h1 className="text-6xl uppercase hidden print:block">
                        <span className="font-bold">Benoit</span> Travers
                    </h1>
                    <div className="text-xl md:text-3xl text-center print:text-2xl print:uppercase">
                        <h2>développeur full stack freelance</h2>
                    </div>
                    <div className="inline-grid grid-cols-2 gap-5 my-5 print:hidden">
                        <a
                            href="https://www.linkedin.com/in/btraversfr/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="linkedin"
                        >
                            <LinkedIn/>
                        </a>
                        <a
                            href="https://www.github.com/btravers/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="github"
                        >
                            <GitHub/>
                        </a>
                    </div>
                </div>
            </Animated>
        </div>
    </Section>
)

export default TitleSection