import AdobeCommerce from "./AdobeCommerce";
import AdSection from "./AdSection";
import BreadCrumbs from "./breadCrumbs";
import GetStarted from "./GetStarted";
import Integration from "./Integration";
import RegisterLayer from "./registerLayer";
import Report from "./Report";
import UseCases from "./UseCases";

function Body(){
    return(
        <>
            <BreadCrumbs></BreadCrumbs>
            <RegisterLayer></RegisterLayer>
            <UseCases></UseCases>
            <Report></Report>
            <AdSection></AdSection>
            <AdobeCommerce></AdobeCommerce>
            <Integration></Integration>
            <GetStarted></GetStarted>
        </>
    )
}
export default Body;