import ButtonComponent from "../components/Button";
import { MidSecondary } from "../utils/buttonType";
import { learnMoreData } from "../utils/constData";
import ImageNames from "../utils/imageNames";


function LearnMoreLayer() {
    return (

                <div className="flex justify-center w-300 h-118 m-auto py-10  ">
                    <div className={`w-full h-full bg-cover rounded-2xl py-10 pl-10`} style={{ backgroundImage: `url(${ImageNames.handsome})` }}>
                        <div className="flex flex-col h-76 w-115">
                            <h1 className="text-textsecondary text-3xl font-semibold">{learnMoreData.title}</h1>
                            <p className="text-textsecondary text-lg mt-4 ">{learnMoreData.content}</p>
                            <div className="flex mt-6">
                                <ButtonComponent title="Learn more" type={MidSecondary}></ButtonComponent>
                            </div>
                            <p className="text-textsecondary text-sm  mt-4 ">{learnMoreData.explain[0]}
                                <a href="">
                                    <span className="font-bold underline underline-offset-1" >
                                        {learnMoreData.explain[1]}
                                    </span>
                                </a>{learnMoreData.explain[2]}
                                <a href="/blog/drive-conversions-and-lower-costs-with-adobe-commerce-as-a-cloud-service">
                                    <span className="font-bold underline underline-offset-1" >
                                        {learnMoreData.explain[3]}
                                    </span>
                                </a>.
                            </p>
                        </div>
                </div>
            </div>
    )
}
export default LearnMoreLayer;