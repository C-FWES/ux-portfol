import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProjectList() {

    const navigate = useNavigate()

    const goToCaseStudy1 = () => {
        navigate('/casestudy1')
    }

    return (
        <div className="projectListContainer">
            <p className="projectListElement" onClick={goToCaseStudy1}>QUEST 2.0</p>
            <p className="projectListElement">MOCKMATCH</p>
            <p className="projectListElement">PLANTOGRAM</p>
        </div>
    )
}

export default ProjectList