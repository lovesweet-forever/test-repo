import Accordion from "../components/Accordian";
import AccordionLayer from "./accordianlayer";
import AdobeCommerce from "./AdobeCommerce";
import AdSection from "./AdSection";
import BreadCrumbs from "./breadCrumbs";
import GetStarted from "./GetStarted";
import Integration from "./Integration";
import MainLayer from "./mainLayer";
import RegisterLayer from "./registerLayer";
import Report from "./Report";
import UseCases from "./UseCases";

function Body(){
    return(
        <>
            <BreadCrumbs></BreadCrumbs>
            <MainLayer></MainLayer>
            <RegisterLayer></RegisterLayer>
            <UseCases></UseCases>
            <Report></Report>
            <AdSection></AdSection>
            <AdobeCommerce></AdobeCommerce>
            <Integration></Integration>
            <AccordionLayer></AccordionLayer>
            <GetStarted></GetStarted>
        </>
    )
}
export default Body;