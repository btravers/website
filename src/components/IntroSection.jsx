import * as React from "react"

import Section from "./Section"
import Portrait from "./Portrait"
import CustomizedMDXRenderer from "./CustomizedMDXRenderer"
import Animated from "./Animated"

import useIntro from "./hooks/useIntro"

const IntroSection = () => {
    const intro = useIntro()
    return (
        <Section>
            <div
                className="max-w-6xl mx-auto w-full xl:divide-x-2 grid gap-8 xl:grid-cols-3 items-center mx-auto my-10 px-5 print:text-gray-700 print:my-0 print:px-0"
            >
                <div className="mx-auto print:hidden">
                    <Animated animation="fadeInLeft">
                        <Portrait/>
                    </Animated>
                </div>
                <div className="text-lg text-gray-600 xl:col-span-2 xl:pl-8 print:text-base">
                    <Animated animation="fadeIn">
                        <CustomizedMDXRenderer>
                            {intro.body}
                        </CustomizedMDXRenderer>
                    </Animated>
                </div>
            </div>
        </Section>
    )
}

export default IntroSection