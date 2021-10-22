import React from "react"
import PropTypes from "prop-types"

import Section from "./Section";
import Animated from "./Animated"

import illustration from "../images/43.svg"

const Input = ({label, type, name}) => (
    <div className="max-w-5xl mx-auto flex flex-col w-full">
        <label className="label" htmlFor={name}>{label}</label>
        <input
            className="input"
            type={type}
            name={name}
            id={name}
            required
        />
    </div>
)

Input.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}

const TextArea = ({label, name}) => (
    <div className="flex flex-col w-full">
        <label className="label" htmlFor={name}>{label}</label>
        <textarea
            className="input h-56"
            name={name}
            id={name}
            required
        />
    </div>
)

TextArea.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}

const ContactFormSection = () => (
    <Section title={{value: "Me contacter", illustration}} dark hideNextButton>
        <Animated animation="fadeInRight">
            <form
                className="max-w-4xl w-full mx-auto px-5 flex flex-col gap-5 items-center"
                method="post"
                action="https://getform.io/f/96ec8850-3156-47da-9b22-cd5eee9ddf7d"
            >
                <Input label="email" type="email" name="email"/>
                <Input label="nom" type="text" name="name"/>
                <TextArea label="message" type="text" name="message"/>
                <div className="flex gap-3 justify-end w-full">
                    <button className="btn bg-secondary text-white" type="submit">Envoyer</button>
                    <input className="btn border border-white bg-primary-800 text-white" type="reset" value="Annuler"/>
                </div>
            </form>
        </Animated>
    </Section>
)

export default ContactFormSection