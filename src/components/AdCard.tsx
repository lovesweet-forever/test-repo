import ImageComponent from "./Image"
import type { useCardType } from "../utils/types"

const AdCard = (props:useCardType) => {
    return (
        <div className="w-full h-45 grid grid-cols-1 gap-y-1 ">
            <div className="">
                <ImageComponent name={props.image} width={props.width} height={props.height}/>
            </div>
            
            <div className="text-lg font-bold pl-3">{props.title}</div>
            <div className="w-88 text-lg font-bold pl-3">{props.description}</div>
        </div>
    )
}

export default AdCard;