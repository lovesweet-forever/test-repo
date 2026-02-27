import ImageComponent from "../components/Image";
import ButtonComponent from "../components/Button";
import * as ButtonType from "../utils/buttonType";
import { integrationData } from "../utils/constData";


const Integration = () => {
    return (
        <div className="grid grid-cols-2 gap-3 h-111 bg-bgcolorprimary">
            <div className="w-full h-111 flex  items-center justify-center">
                <ImageComponent name={integrationData.image} width={integrationData.width} height={integrationData.height} />
            </div>
            <div className="w-100 flex flex-col justify-center ">
                <p className="w-175 text-4xl font-bold pr-20">{integrationData.title}</p>
                <p className="w-142 text-base pt-5">{integrationData.content}</p>
                <div className="pt-5">
                    <ButtonComponent type={ButtonType.SmallSecondary} title={integrationData.buttontext} />
                </div>
            </div>
        </div>
    )
}

export default Integration;