import { useState } from "react";

function ContactList() {
    return (
        <div className="projectListContainer">
            <a href="mailto:w24ou@uwaterloo.ca"><p className="projectListElement">W24OU@UWATERLOO.CA</p></a>
            <a href=""><p className="projectListElement">RESUME</p></a>
            <a href="https://www.linkedin.com/in/wesleyou/" target="blank"><p className="projectListElement">LINKEDIN</p></a>
            <a href="https://github.com/C-FWES" target="blank"><p className="projectListElement">GITHUB</p></a>
        </div>
    )
}

export default ContactList