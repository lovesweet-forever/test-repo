import ButtonComponent from "../components/Button";
import ImageComponent from "../components/Image";
import * as ButtonType from '../utils/buttonType';
import { mainData } from "../utils/constData";
import ImageName from '../utils/imageNames'



function MainLayer() {
    return (
            <div className="flex flex-row mt-24">
                <div className="flex-1 flex bg-black justify-end content-center items-center leading-7">
                    <div className="flex flex-col gap-4 content-between w-150 h-91 pr-25">
                        <div className="flex ">
                            <span className="text-white text-base font-bold">
                                {mainData.details}
                            </span>
                        </div >
                        <div className="flex ">
                            <h1 className="text-white text-5xl font-bold tracking-tighter leading-13">
                                {mainData.title}
                            </h1>
                        </div>
                        <div className="flex ">
                            <p className="text-[white] text-lg font-bold leading-7">
                                {mainData.content}
                            </p>
                        </div>
                        <div className="flex  gap-8">
                            <ButtonComponent title="Watch overview" type={ButtonType.BigSecondary}></ButtonComponent>
                            <ButtonComponent title="Book a Demo" type={ButtonType.BigPrimary}></ButtonComponent>
                        </div>
                    </div>
                </div>
                <div className="flex-1 h-bold">
                    <ImageComponent name={ImageName.dashboard} height={688} width={960} ></ImageComponent>
                </div>
            </div>
    )
}

export default MainLayer;