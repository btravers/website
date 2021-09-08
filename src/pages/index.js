import * as React from "react"

import Header from "../components/Header"
import Hero from "../components/Hero"
import Intro from "../components/Intro"
import SkillsSection from "../components/SkillsSection"
import ExperiencesSection from "../components/ExperiencesSection"
import EducationSection from "../components/EducationSection"
import Footer from "../components/Footer"
import ParallaxBackground from "../components/ParallaxBackground"

const IndexPage = () => {
  return (
    <main className="parallax bg-gray-50">
      <title>Benoit TRAVERS</title>

      <div className="z-10 h-screen">
          <Header />
          <Hero />
      </div>

      <div className="z-10 max-w-screen-lg m-auto flex flex-col gap-48">

        <Intro />

        <SkillsSection />
        <ExperiencesSection />
        <EducationSection />

        <Footer />

      </div>

      <ParallaxBackground />
      
    </main>
  )
}

export default IndexPage
