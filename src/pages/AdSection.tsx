
import AdCard from "../components/AdCard";
import ButtonComponent from "../components/Button";
import * as ButtonType from "../utils/buttonType";
import { adverTitle, BrandData } from "../utils/constData";


const AdSection = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center pb-10">
            <div className="w-200 pt-10 pb-10 text-4xl text-center font-bold">{adverTitle}</div>
            <div className="grid grid-cols-4 gap-3 px-40 py-10">
                {
                    BrandData.map((content, index) => 
                        <div>
                            <AdCard key={index} image={content.image} title={content.title} description={content.description} width={276} height={59}/>
                        </div>
                    )
                }
            </div>
            <ButtonComponent type={ButtonType.SmallSecondary} title="Read more Stories"/>
        </div>
    )
}

export default AdSection;
