import * as React from "react"

import Section from "./Section"
import Portrait from "./Portrait"
import CustomizedMDXRenderer from "./CustomizedMDXRenderer"
import useIntro from "./hooks/useIntro"

const Intro = () => {
    const intro = useIntro()
    return (
        <Section>
            <div
                className="container max-w-6xl xl:divide-x-2 grid gap-8 xl:grid-cols-3 items-center mx-auto my-10 px-5">
                <div className="mx-auto">
                    <Portrait/>
                </div>
                <div className="text-lg xl:col-span-2 xl:pl-8">
                    <CustomizedMDXRenderer>
                        {intro.body}
                    </CustomizedMDXRenderer>
                </div>
            </div>
        </Section>
    )
}

export default Intro