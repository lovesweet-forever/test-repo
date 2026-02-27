import ImageComponent from "../components/Image";
import ButtonComponent from "../components/Button";
import * as ButtonType from "../utils/buttonType";
import { reportData } from "../utils/constData";


const Report = () => {
    return (
        <div className="grid grid-cols-2 gap-x-20 gap-y-3 h-105">
            <div className="w-full h-105 flex  items-center justify-end">
                <ImageComponent name={reportData.image} width={reportData.width} height={reportData.height} />
            </div>
            <div className="w-100 flex flex-col justify-center ">
                <p className="w-175 text-4xl font-bold pr-20">{reportData.title}</p>
                <p className="w-142 text-base pt-5">{reportData.content}</p>
                <div className="pt-5">
                    <ButtonComponent type={ButtonType.SmallSecondary} title={reportData.buttontext} />
                </div>
            </div>
        </div>
    )
}

export default Report;