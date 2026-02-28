import { useState } from "react";
import Accordion from "../components/Accordian";
import {AccordionData, AccordionTitle} from "../utils/constData";


function AccordionLayer() {
    const [flag, setFlag] = useState([false, false, false, false, false, false, false, false]);
    const handleChange = (e: React.MouseEvent<HTMLButtonElement>) => {
        setFlag(flag.map((p, i) => i === Number(e.currentTarget.id) ? p = !p : p));
    }
    return (
            <div className="flex  flex-col content-center items-center py-14 mb-1">
                <div className="flex w-250 justify-center">
                    <h1 className="text-3xl text-textsecondary font-bold">
                        {AccordionTitle}
                    </h1>
                </div>
                <div className="flex w-250 pt-8">
                    <div className="flex flex-col w-full border-t border-borderprimary">
                        {
                            AccordionData.map((p, i) => <Accordion id={i} title={p.title} selected={flag[i]} content={p.content} onclick={handleChange}></Accordion>)
                        }
                    </div>
                </div>
            </div>
    )
}
export default AccordionLayer;