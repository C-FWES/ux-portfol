import { useNavigate } from "react-router-dom";

function Navigation() {

    const navigate = useNavigate();

    const goToHome = () => {
        navigate("/");
    }

    const goToAbout = () => {
        navigate("/about");
    }

    const goToContact = () => {
        navigate("/contact");
    }

    return (
        <div className="navigationContainer">
            <p className="navigationElement" onClick={goToHome}>WESLEY OU, &nbsp; </p>
            <p className="navigationElement" onClick={goToAbout}>ABOUT, &nbsp; </p>
            <p className="navigationElement" onClick={goToContact}>CONTACT</p>
        </div>
    )
}

export default Navigation