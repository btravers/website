import * as React from "react"

import Header from "../components/Header"
import Hero from "../components/Hero"
import Intro from "../components/Intro"
import SkillsSection from "../components/SkillsSection"
import ExperiencesSection from "../components/ExperiencesSection"
import EducationSection from "../components/EducationSection"
import Footer from "../components/Footer"


const IndexPage = () => {
  return (
    <main>
      <title>Benoit TRAVERS</title>

      <div className="h-screen">
          <Header />
          <Hero />
      </div>

      <div className="max-w-screen-lg m-auto flex flex-col gap-48">

        <Intro />

        <SkillsSection />
        <ExperiencesSection />
        <EducationSection />

        <Footer />

      </div>
      
    </main>
  )
}

export default IndexPage
