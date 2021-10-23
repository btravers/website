import React from "react"

import Page from "./Page"
import Portrait from "./Portrait"
import ContactSection from "./ContactSection"
import EducationSection from "./EducationSection"
import SkillsSection from "./SkillsSection"
import TitleSection from "./TitleSection"
import IntroSection from "./IntroSection"
import WorkExperienceSection from "./WorkExperienceSection"

const PrintLayout = () => (
    <div className="hidden print:block">
        <Page first>
            <div className="grid grid-cols-3 items-stretch h-full">
                <div className="flex flex-col gap-3 pl-16 dark-print">
                    <div className="my-10">
                        <Portrait/>
                    </div>
                    <ContactSection/>
                    <EducationSection/>
                    <SkillsSection/>
                </div>
                <div className="col-span-2 flex flex-col gap-4 text-color-1-800 px-12 py-8">
                    <TitleSection/>
                    <IntroSection/>
                    <WorkExperienceSection offset={0} size={3}/>
                </div>
            </div>
        </Page>
        <Page margin>
            <WorkExperienceSection offset={3} size={3}/>
        </Page>
        <Page margin>
            <WorkExperienceSection offset={6}/>
        </Page>
    </div>
)

export default PrintLayout
