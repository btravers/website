import * as React from "react"

import Section from "./Section"

const Intro = () => (
    <Section>
        <div className="flex flex-col gap-6 text-lg">
            <p>
                Avec plus de 6 ans d&apos;expérience en développement logiciel, j&apos;ai été amené à évoluer dans des contextes riches et variés :
                <ul className="list-disc list-inside pl-8">
                    <li className="my-2">étude de faisabilité à travers la réalisation de PoC pour le compte Ouest-France,</li>
                    <li className="my-2">réalisation complète d&apos;une solution SaaS partant d&apos;une feuille blanche et répondant au besoin exprimé par Cinquième de Couv,</li>
                    <li className="my-2">développement puis maintient en condition opérationnelle d&apos;applications soumises à de forts traffics pour le compte de Ouest-France.</li>
                </ul>
            </p>
            <p>Du backend au frontend, j&apos;aime répondre à des problématiques complexes, en concevant puis en développant les solutions les plus simples possible.</p>
            <p>En parallèle, je suis également formateur sur les technologies que j&apos;utilise au quotidien : Git, React, Java, JavaScript, etc.</p>
            <p>Aujourd&apos;hui, après plus de 6 années passées dans le monde du service, je propose mes services en tant que développeur freelance sur la région rennaise et à Paris.</p>
        </div>
    </Section>
)

export default Intro