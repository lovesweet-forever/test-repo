import ImageComponent from "./Image"
import type { useCardType } from "../utils/types"

const UseCard = (props: useCardType) => {
    return (
        <div className="h-32.5 w-145.5 grid grid-cols-5">
            <div className="flex justify-center  items center">
                <ImageComponent name={props.image} width={props.width} height={props.height}/>
            </div>
            <div className="p-2 col-span-4 border border-bordersecondary content-center">
                <p className="font-bold text-[18px]">{props.title}</p>
                <p className="text-[14px]">{props.description}</p>
            </div>
        </div>
    )
}

export default UseCard;