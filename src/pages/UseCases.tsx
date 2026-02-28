import UseCard from "../components/UseCard";
import { useCardData, usecaseTitle } from "../utils/constData";

const UseCases = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <div className="w-200 text-4xl pt-10 pb-10 text-center font-bold">{usecaseTitle}</div>
            <div className="grid grid-cols-2 gap-3">
                {
                    useCardData.map((content,index) => 
                        <div>
                            <UseCard key={index} image={content.image} title={content.title} description={content.description} width={115} height={130}/>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default UseCases;