import { useState } from "react";

function CaseStudyImage({imagePath}) {
    return (
       <div className="caseStudyImageContainer">
        <img src={imagePath} className="caseStudyImage" />
       </div>
    )
}

export default CaseStudyImage