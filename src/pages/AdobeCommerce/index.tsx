import { commerceItemData } from "../../utils/constData";
import CommerceItem from "../../components/CommerceItem";
import ButtonComponent from "../../components/Button";
import { SmallSecondary } from "../../utils/buttonType";


const AdobeCommerce = () => {
    return (
        <div className='w-full flex flex-col items-center'>
            <div className='grid grid-cols-3 gap-8'>

            {
                commerceItemData.map((item, index) =>
                    <CommerceItem
                        key={index}
                        icon={item.icon} 
                        title={item.title} 
                        content={item.content}
                    />
                )
            }
            </div>
            <div className='mt-20'>
                <ButtonComponent title={"See all Adobe Commerce resources"} type={SmallSecondary}/>
            </div>
        </div>
    )
};

export default AdobeCommerce;