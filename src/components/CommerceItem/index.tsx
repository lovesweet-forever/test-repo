import ImageComponent from "../Image"

interface propsType {
    icon:any,
    title:string,
    content:string
}

const CommerceItem = (props:propsType) => {

    return (
        <div id="ResourceItem" className="max-w-[355px] bg-gray-100">
            <div className="flex flex-col justify-center grid gap-3 p-5 ">
                <ImageComponent name={props.icon} height={50} width={50}/>
                <p className="text-sm">{props.title}</p>
                <p className="text-lg font-bold">{props.content}</p>
            </div>
        </div>
    )

}

export default CommerceItem;