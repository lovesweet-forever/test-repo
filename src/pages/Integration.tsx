import ImageComponent from "../components/Image";
import type { integrationType } from "../utils/types";
import ButtonComponent from "../components/Button";
import * as ButtonType from "../utils/buttonType";


const Integration = (props:integrationType) => {
    return (
        <div className="grid grid-cols-2 gap-3 pt-10 bg-bgcolorprimary">
            <div className="w-125 h-74 justify-self-center pl-30 ">
                <ImageComponent name={props.image} width={props.width} height={props.height}/>
            </div>
            <div className="w-100 flex flex-col ">
                <p className="w-175 text-4xl font-bold pr-20">{props.title}</p>
                <p className="w-142 text-base pt-5">{props.content}</p>
                <ButtonComponent type={ButtonType.SmallSecondary} title={props.buttontext}/>
            </div>
        </div>
    )
}

export default Integration;