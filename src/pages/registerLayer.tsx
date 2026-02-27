import ButtonComponent from "../components/Button";
import ImageComponent from "../components/Image";
import { MidPrimary } from "../utils/buttonType";
import { registerData } from "../utils/constData";
import ImageNames from "../utils/imageNames";

function RegisterLayer() {
    return(
            <div className="flex bg-bgcolorsecondary  content-center justify-center h-26">
                <div className="flex items-center justify-center">
                    <div className="h-14 mr-6">
                        <ImageComponent name={ImageNames.white_logo} width={200} height={56}></ImageComponent>
                    </div>
                    <div className="h-14 content-center">
                        <span className="text-[white] font-bold tracking-tight text-[24px] mr-6">{registerData.title}</span>
                    </div>
                    <div className="h-14 content-center">
                        <span className="text-[white] font-bold tracking-tight text-[18px] mr-6">{registerData.content} </span>
                    </div>
                    <div className="h-14 content-center">
                        <ButtonComponent title="Register now"  type={MidPrimary}></ButtonComponent>
                    </div>
                </div>
            </div>
    )
}

export default RegisterLayer;