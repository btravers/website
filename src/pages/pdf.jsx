import * as React from "react"

import Page from "../components/pdf/Page"
import Portrait from "../components/pdf/Portrait"
import Contact from "../components/pdf/Contact"
import Education from "../components/pdf/Education"
import Intro from "../components/pdf/Intro"
import WorkExperience from "../components/pdf/WorkExperience"
import Skills from "../components/pdf/Skills"

const PdfPage = () => (
    <main>
        <Page first>
            <div className="grid grid-cols-3 items-stretch h-full">
                <div className="flex flex-col gap-6 pl-16 dark">
                    <Portrait />
                    <Contact />
                    <Education />
                    <Skills />
                </div>
                <div className="col-span-2 flex flex-col gap-16 text-primary-800 px-12">
                    <Intro />
                    <WorkExperience offset={0} size={3} />
                </div>
            </div>
        </Page>
        <Page margin>
            <WorkExperience offset={3} size={3} />
        </Page>
        <Page margin>
            <WorkExperience offset={6} />
        </Page>
    </main>
)

export default PdfPage
