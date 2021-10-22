import * as React from "react"

import SEO from "../components/SEO"
import TitleSection from "../components/TitleSection"
import IntroSection from "../components/IntroSection"
import SkillsSection from "../components/SkillsSection"
import WorkExperienceSection from "../components/WorkExperienceSection"
import EducationSection from "../components/EducationSection"
import ContactFormSection from "../components/ContactFormSection"
import Footer from "../components/Footer"
import Page from "../components/Page"
import Portrait from "../components/Portrait"
import ContactSection from "../components/ContactSection"

const IndexPage = () => (
    <main>
        <SEO/>
        <div className="bg-grey-50 text-primary-800 print:hidden overflow-x-hidden">
            <TitleSection/>
            <IntroSection/>
            <SkillsSection/>
            <WorkExperienceSection/>
            <EducationSection/>
            <ContactFormSection/>
            <Footer/>
        </div>
        <div className="hidden print:block">
            <Page first>
                <div className="grid grid-cols-3 items-stretch h-full">
                    <div className="flex flex-col gap-6 pl-16 dark-print">
                        <div className="my-16">
                            <Portrait/>
                        </div>
                        <ContactSection/>
                        <EducationSection/>
                        <SkillsSection/>
                    </div>
                    <div className="col-span-2 flex flex-col gap-8 text-primary-800 px-12 py-10">
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
    </main>
)

export default IndexPage
