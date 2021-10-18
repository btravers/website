import * as React from "react"

import SEO from "../components/SEO"
import TitleSection from "../components/TitleSection"
import IntroSection from "../components/IntroSection"
import SkillsSection from "../components/SkillsSection"
import WorkExperienceSection from "../components/WorkExperienceSection"
import EducationSection from "../components/EducationSection"
import ContactSection from "../components/ContactSection"
import Footer from "../components/Footer"

import Page from "../components/pdf/Page"
import Portrait from "../components/Portrait"
import ContactPart from "../components/pdf/ContactPart"
import EducationPart from "../components/pdf/EducationPart"
import WorkExperiencePart from "../components/pdf/WorkExperiencePart"

const IndexPage = () => (
    <main>
        <SEO/>
        <div className="bg-grey-50 text-primary-800 print:hidden">
            <TitleSection/>
            <IntroSection/>
            <SkillsSection/>
            <WorkExperienceSection/>
            <EducationSection/>
            <ContactSection/>
            <Footer/>
        </div>
        <div className="hidden print:block">
            <Page first>
                <div className="grid grid-cols-3 items-stretch h-full">
                    <div className="flex flex-col gap-6 pl-16 dark-print">
                        <div className="my-16">
                            <Portrait/>
                        </div>
                        <ContactPart/>
                        <EducationPart/>
                        <SkillsSection/>
                    </div>
                    <div className="col-span-2 flex flex-col gap-8 text-primary-800 px-12 py-10">
                        <TitleSection/>
                        <IntroSection/>
                        <WorkExperiencePart offset={0} size={3}/>
                    </div>
                </div>
            </Page>
            <Page margin>
                <WorkExperiencePart offset={3} size={3}/>
            </Page>
            <Page margin>
                <WorkExperiencePart offset={6}/>
            </Page>
        </div>
    </main>
)

export default IndexPage
