import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProjectList() {

    const navigate = useNavigate()

    const goToCaseStudy1 = () => {
        navigate('/casestudy1')
    }

    const goToCaseStudy2 = () => {
        navigate('/casestudy2')
    }

    const goToCaseStudy3 = () => {
        navigate('/casestudy3')
    }

    return (
        <div className="projectListContainer">
            <p className="projectListElement" onClick={goToCaseStudy1}>QUEST 2.0</p>
            <p className="projectListElement" onClick={goToCaseStudy2}>MOCKMATCH</p>
            <p className="projectListElement"  onClick={goToCaseStudy3}>PLANTOGRAM</p>
        </div>
    )
}

export default ProjectList