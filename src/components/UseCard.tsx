import ImageComponent from "./Image"
import type { useCardType } from "../utils/types"

const UseCard = (props: useCardType) => {
    return (
        <div className="h-32 w-145 grid grid-cols-5 ">
            <div className="flex justify-center items-center">
                <ImageComponent name={props.image} width={props.width} height={props.height}/>
            </div>
            <div className="col-span-4 border p-2 border-bordersecondary content-center">
                <p className="font-bold text-lg">{props.title}</p>
                <p className="text-sm">{props.description}</p>
            </div>
        </div>
    )
}

export default UseCard;