import * as React from "react"

import SkillSet from "../components/SkillSet"
import SectionTitle from "../components/SectionTitle"

import logo from "../images/logo.svg"
import logoLarge from "../images/logo-large.svg"
import githubIcon from "../images/github.svg"
import linkedinIcon from "../images/linkedin.svg"
import workingGuyIllustration from "../images/22.svg"

const skillSets = [
  {
    name: "Langages",
    skills: [
      {
        name: "Java",
        mark: 3, 
        wanted: true,
      },
      {
        name: "Kotlin",
        mark: 3, 
        wanted: true,
      },
      {
        name: "JavaScript",
        mark: 3, 
        wanted: true,
      },
      {
        name: "TypeScript",
        mark: 2, 
        wanted: true,
      },
      {
        name: "Spring boot",
        mark: 3, 
        wanted: true,
      },
    ],
  },

  {
    name: "Backend",
    skills: [
      {
        name: "Spring boot",
        mark: 3, 
        wanted: true,
      },
      {
        name: "Node.js",
        mark: 2, 
        wanted: true,
      },
    ],
  },

  {
    name: "Données",
    skills: [
      {
        name: "PostgreSQL",
        mark: 3, 
        wanted: false,
      },
      {
        name: "Elasticsearch",
        mark: 3, 
        wanted: false,
      },
      {
        name: "MongoDB",
        mark: 2, 
        wanted: false,
      },
      {
        name: "Apache Kafka",
        mark: 3, 
        wanted: false,
      },
      {
        name: "RabbitMQ",
        mark: 3, 
        wanted: false,
      },
    ],
  },

  {
    name: "Frontend",
    skills: [
      {
        name: "React",
        mark: 3, 
        wanted: false,
      },
    ],
  },

  {
    name: "Autres",
    skills: [
      {
        name: "Docker",
        mark: 3, 
        wanted: false,
      },
      {
        name: "Kubernetes",
        mark: 3, 
        wanted: false,
      },
      {
        name: "Git",
        mark: 3, 
        wanted: false,
      },
      {
        name: "Gitlab CI/CD",
        mark: 3, 
        wanted: false,
      },
      {
        name: "Keycloak",
        mark: 2, 
        wanted: false,
      },
    ],
  },
]

const IndexPage = () => {
  return (
    <main>
      <title>Benoit TRAVERS</title>

      <div>
        <img className="h-8 m-6 ml-20" src={logoLarge} alt="logo" />
      </div>

      <div className="max-w-screen-xl m-auto">

        <div className="grid grid-cols-2">
          <div>
            <img src={logo} alt="logo" />
            <h2 className="text-4xl mt-2 mb-3">développeur full stack sénior <br /> basé à Rennes</h2>
            <div className="inline-grid grid-cols-2 mt-6 mb-8">
              <a href="https://www.linkedin.com/in/btraversfr/" target="_blank" rel="noopener noreferrer">
                <img className="h-10 m-2" src={linkedinIcon} alt="linkedin" />
              </a>
              <a href="https://www.github.com/btravers/" target="_blank" rel="noopener noreferrer">
                <img className="h-10 m-2" src={githubIcon} alt="github" />
              </a>
            </div>
          </div>
          <img className="" src={workingGuyIllustration} alt="working guy illustration" />
        </div>

        <div>
          <SectionTitle value="compétences" />

          <div className="grid grid-cols-2 gap-4">
            {skillSets.map(skillSet => <SkillSet {...skillSet} />)}
          </div>
        </div>

        <div>
          <SectionTitle value="expériences" />
        </div>

        <div>
          <SectionTitle value="études" />
        </div>

        <div className="flex flex-col items-center w-full">
          <div>Handcrafted with ❤️ by me</div>
          <div>Using <a href="https://www.gatsbyjs.com/" target="_blank" rel="noopener noreferrer">Gatsby</a> + <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">tailwindcss</a></div>
          <div>Source code on <a href="https://www.github.com/btravers/website/" target="_blank" rel="noopener noreferrer">GitHub</a></div>
        </div>

      </div>
      
    </main>
  )
}

export default IndexPage
