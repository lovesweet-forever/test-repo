
import AdCard from "../components/AdCard";
import ButtonComponent from "../components/Button";
import * as ButtonType from "../utils/buttonType";
import { BrandData } from "../utils/constData";


const AdSection = () => {
    return (
        <div className="w-full flex justify-center items-center">
            <div className="w-200 pt-10 pb-10 text-4xl text-center font-bold">Adobe drives global sales for top brands.</div>
            <div className="grid grid-cols-4 gap-3 p-40">
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
