import ImageComponent from "../components/Image";
import ButtonComponent from "../components/Button";
import * as ButtonType from "../utils/buttonType";
import type { startedType } from "../utils/types";

const GetStarted = (props: startedType) => {
    return (
        <div className="grid grid-cols-2 gap-3 pt-10 bg-black">
            <div className="w-100 pt-20 flex flex-col justify-self-center">
                <p className="w-175 text-4xl text-white">{props.title}</p>
                <ButtonComponent type={ButtonType.SmallPrimary} title={props.buttontext}/>
            </div>
            <div className="w-125 ">
                <ImageComponent name={props.image} width={props.width} height={props.height}/>
            </div>
            
        </div>
    )
}

export default GetStarted;