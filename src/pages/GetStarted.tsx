import ImageComponent from "../components/Image";
import ButtonComponent from "../components/Button";
import * as ButtonType from "../utils/buttonType";
import { startedData } from "../utils/constData";

const GetStarted = () => {
    return (
        <div className="grid grid-cols-2 gap-3 pt-10 bg-black">
            <div className="w-100 pt-20 flex flex-col justify-self-center">
                <p className="w-175 text-4xl text-white">{startedData.title}</p>
                <div className="pt-5">
                    <ButtonComponent type={ButtonType.SmallPrimary} title={startedData.buttontext}/>
                </div>
            </div>
            <div className="w-125 ">
                <ImageComponent name={startedData.image} width={startedData.width} height={startedData.height}/>
            </div>
            
        </div>
    )
}

export default GetStarted;