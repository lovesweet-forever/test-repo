import Accordion from "../components/Accordian";
import AccordionLayer from "./accordianlayer";
import AdobeCommerce from "./AdobeCommerce";
import AdSection from "./AdSection";
import BreadCrumbs from "./breadCrumbs";
import Contact from "./Contact";
import GetStarted from "./GetStarted";
import Integration from "./Integration";
import LearnMoreLayer from "./learnMoreLayer";
import MainLayer from "./mainLayer";
import RegisterLayer from "./registerLayer";
import Report from "./Report";
import Tabs from "./Tabs";
import UseCases from "./UseCases";

function Body(){
    return(
        <>
            <BreadCrumbs></BreadCrumbs>
            <MainLayer></MainLayer>
            <RegisterLayer></RegisterLayer>
            <LearnMoreLayer></LearnMoreLayer>
            <Tabs></Tabs>
            <UseCases></UseCases>
            <Report></Report>
            <AdSection></AdSection>
            <AdobeCommerce></AdobeCommerce>
            <Integration></Integration>
            <AccordionLayer></AccordionLayer>
            <Contact></Contact>
            <GetStarted></GetStarted>
        </>
    )
}
export default Body;