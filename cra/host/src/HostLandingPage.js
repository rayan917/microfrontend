import FooterShared from "../../sharedComponents/src/Footer";
import HeaderShared from "../../sharedComponents/src/Header";
import FileUpload from "./FileUpload";


const HostLandingPage = ({ title }) => {
  return (
    <div>
      <HeaderShared />
      <h1>Bienvenue sur la page d'accueil de l'hôte</h1>
      <p>param : {title}</p>
      <FileUpload/>
      <FooterShared />
    </div>
  );
};

export default HostLandingPage;
