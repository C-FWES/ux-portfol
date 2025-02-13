interface CaseStudyImageProps {
    imagePath: string;
  }

function CaseStudyImage({ imagePath }: CaseStudyImageProps) {
    return (
       <div className="caseStudyImageContainer">
        <img src={imagePath} className="caseStudyImage" />
       </div>
    )
}

export default CaseStudyImage