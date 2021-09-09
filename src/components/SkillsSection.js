import * as React from "react"

import EntitledSection from "./EntitledSection"
import SkillSet from "./SkillSet"

import illustration from "../images/421.svg"

const skillSets = [
    {
      name: "Langages",
      skills: [
        {
          name: "Java",
          mark: 3, 
        },
        {
          name: "Kotlin",
          mark: 3, 
        },
        {
          name: "JavaScript",
          mark: 3, 
        },
        {
          name: "TypeScript",
          mark: 2, 
        },
      ],
    },
  
    {
      name: "Backend",
      skills: [
        {
          name: "Spring Boot",
          mark: 3, 
        },
        {
          name: "Node.js",
          mark: 2, 
        },
      ],
    },
  
    {
      name: "Données",
      skills: [
        {
          name: "PostgreSQL",
          mark: 3, 
        },
        {
          name: "Elasticsearch",
          mark: 3, 
        },
        {
          name: "MongoDB",
          mark: 2, 
        },
        {
          name: "Apache Kafka",
          mark: 3, 
        },
        {
          name: "RabbitMQ",
          mark: 3, 
        },
      ],
    },
  
    {
      name: "Frontend",
      skills: [
        {
          name: "React.js",
          mark: 3, 
        },
      ],
    },
  
    {
      name: "Autres",
      skills: [
        {
          name: "Docker",
          mark: 3, 
        },
        {
          name: "Kubernetes",
          mark: 3, 
        },
        {
          name: "Git",
          mark: 3, 
        },
        {
          name: "Gitlab CI/CD",
          mark: 3, 
        },
        {
          name: "Keycloak",
          mark: 2, 
        },
      ],
    },
]

const SkillsSection = () => (
    <EntitledSection title={{ value: "compétences", illustration }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10">
            {skillSets.map((skillSet, index) => <SkillSet key={index} {...skillSet} />)}
        </div>
    </EntitledSection>
)

export default SkillsSection