import * as React from "react"
import { v4 as uuidv4 } from "uuid"

import EntitledSection from "./EntitledSection"
import Experience from "./Experience"

import illustration from "../images/90.svg"

const experiences = [
  {
    id: uuidv4(),
    title: "Consultant / Formateur développement logiciel",
    company: "Zenika",
    location: "Rennes, France",
    period: {
      start: new Date(2015, 0),
      end: new Date(2021, 7),
    },
    description: 
`
Formateur Java, Javascript, React.js, Git.
`,
    skills: ["Kotlin", "Java", "Spring Boot", "JavaScript", "React.js", "Elasticsearch", "PostgreSQL", "RabbitMQ", "Kafka", "Kubernetes", "Docker"],
  },

  {
    id: uuidv4(),
      title: "Développeur backend",
      company: "Enky by Leroy Merlin",
      location: "Lille, France",
      period: {
        start: new Date(2021, 1),
        end: new Date(2021, 7),
      },
      description: 
`
Enki est la solution de domotique développée par Leroy Merlin.

### Mission et tâches principales :

* Développement des briques pour le pilotage des ampoules connectées avec Amazon Alexa
* Maintenance et évolution du backend Enki
`,
      skills: ["Java", "Spring Boot", "Vert.x", "JavaScript", "MongoDB", "RabbitMQ", "Amazon Alexa", "Docker"],
  },

  {
    id: uuidv4(),
    title: "Lead développeur backend",
    company: "MGDIS",
    location: "Vannes, France",
    period: {
      start: new Date(2020, 11),
      end: new Date(2021, 0),
    },
    description: 
`
MGDIS développe une plateforme permettant la mise en relation des parties à la recherche de subventions pour le financement d'un projet et les financeurs potentiellement concernés. 

### Mission et tâches principales :

* Conception et développement de la solution
* Mise en place de l'intégration continue ainsi que du déploiement continu
* Encadrement d'un profil junior
`,
    skills: ["Java", "Spring Boot", "Apache Camel", "Kafka", "MongoDB", "Kubernetes", "Gitlab CI/CD", "Gherkin"],
  },

  {
    id: uuidv4(),
    title: "Développeur backend",
    company: "Lacroix city",
    location: "Nantes, France",
    period: {
      start: new Date(2020, 9),
      end: new Date(2020, 11),
    },
    description: 
`
Refonte d'une application de traitement de données « Smart City ».

### Mission et tâches principales :

* Élaboration d'une architecture de traitement d'évènements en temps réel provenant de capteurs bluetooth
* Rétro-engineering et refonte de batchs d'intégration de ces évènements pour produire des métriques complexes (temps de parcours, débit de véhicules, détection de congestion)
`,
    skills: ["Java", "Spring Boot", "Apache Camel", "Kafka", "Elasticsearch", "MySQL", "Kubernetes", "Gitlab CI/CD"],
  },

  {
    id: uuidv4(),
    title: "Développeur backend",
    company: "ARIADNEXT",
    location: "Rennes, France",
    period: {
      start: new Date(2020, 2),
      end: new Date(2020, 9),
    },
    description: 
`
IDECYS est un service de délégations, permettant aux organisations de donner des droits à des personnes tierces de la représenter pour réaliser des actions en son nom.

### Mission et tâches principales :

* Développement et configuration d'un workflow d'enregistrement et d'authentification s'appuyant sur Keycloak
* Développpement d'une application d'administration de compte basé sur Keycloak
`,
    skills: ["Java", "Keycloak", "OAuth 2.0", "OpenID Connect", "Spring Boot", "React", "TypeScript", "React.js", "Cypress"],
  },

  {
    id: uuidv4(),
    title: "Lead développeur backend",
    company: "Ouest-France",
    location: "Rennes, France",
    period: {
      start: new Date(2018, 0),
      end: new Date(2019, 8),
    },
    description: 
`
Ouest-France développe une plateforme pour l'hébergement des sites web du groupe SIPA dont le site principal est celui de Ouest-France. 

Cette nouvelle plateforme est consituée principalement de trois briques :

* le CMS agnostique faisant l'orchestration des requêtes entrantes
* les Block Providers fournissant des blocs de contenu à utiliser sur la plateforme, dont le principal étant le Block Provider Editorial, responsable de tous les contenus éditoriaux du groupe SIPA (articles, taxonomie et médias)
* le Page-Builder utilisé pour configurer les blocs dans les pages des sites web
  
### Mission et tâches principales :
  
* Preuve de concept : Génération statique des contenus éditoriaux du groupe SIPA à afficher sur la plateforme
  * Conception et développement d'un système réactif capable de construire toutes les vues matérialisées représentant les listes d'articles du site Ouest-France lors de la création / modification / suppression de contenus éditoriaux (Kafka, Kafka Streams, Java)
* Développement du Block Provider Editorial
  * Architecture micro-service, CQRS, vue matérialisée, dénormalisation de la données optimisée pour les lectures (Kotlin, Spring Boot, Webflux, Elasticsearch, RabbitMQ, JUnit)
  * Configuration des déploiements Helm des applicatifs, Intégration continue, déploiement continu en environnement de qualification (Docker, Kubernetes, Helm, Gitlab CI/CD, Selenium)
  * Monitoring des applicatifs en environnement de qualification et de production (Spring Boot Actuator, Micrometer, Spring Boot Admin, Prometheus, Grafana, EFK)
  * Optimisation des temps de réponse et des consommations CPU / mémoire des applicatifs
`,
    skills: ["Kotlin", "Java", "Spring Boot", "Spring Webflux", "Elasticsearch", "RabbitMQ", "PostgreSQL", "Kubernetes", "Docker", "Prometheus", "Grafana", "Kafka"],
  },

  {
    id: uuidv4(),
    title: "Développeur big data",
    company: "Pages Jaunes", 
    location: "Rennes, France",
    period: {
      start: new Date(2017, 0),
      end: new Date(2017, 6),
    },
    description: 
`
L'équipe audience est en charge de la collecte de la données relative à l'audience des sites web et des applications mobiles de Pages Jaunes.

### Mission et tâches principales :

* Migration des chaînes de collecte de données écrites en Pig vers une chaîne de collecte unifiée basée sur Spark streamming
* Mise en place de tests d'intégration de la collecte de la donnée avec l'écosystème Pages Jaunes
* Développement et industrialisation d'outils d'aide à la supervision de la collecte de la donnée
* Suivi et maintenance des applications de l'équipe audience
`,
    skills: ["Spark", "Scala", "Elasticsearch", "Hadoop", "Kafka", "Java", "JavaScript", "React.js", "Redux"],
  },

  {
    id: uuidv4(),
    title: "Développeur full stack",
    company: "Cinquième de Couv", 
    location: "Rennes, France",
    period: {
      start: new Date(2016, 3),
      end: new Date(2017, 0),
    },
    description: 
`
Cinquième de Couv est une application de conception et d'édition de documents publicitaires (magazines, dépliants, ...) destinée au grand public.

L'application est décomposée en 3 modules techniques :

* Application publique de conception et d'édition de documents
* Génération PDF haute qualité pour le service d'impression
* Interface d'administratioon et de conception de modèles de documents

### Mission et tâches principales :

* Conception et développement du produit Cinquième de Couv en environnement agile
* Développement du frontend avec React.js / Redux
* Développement d'une API REST en Java / Spring Boot utilisant une base de données MongoDB
* Développement de micro services techniques en Node.js
`,
    skills: ["Java", "Spring Boot", "Apache Camel", "JWT", "MongoDB", "JavaScript", "Node.js", "React.js", "Redux", "Docker"],
  },
]

const ExperiencesSection = () => (
    <EntitledSection title={{ value: "expériences", illustration }}>
        <div className="flex flex-col gap-12">
            {experiences.map(({ id, title, company, location, period, description, skills }) => (
              <Experience 
                key={id}  
                title={title}
                company={company}
                location={location}
                period={period}
                description={description}
                skills={skills}
              />
            ))}
        </div>
    </EntitledSection>
)

export default ExperiencesSection