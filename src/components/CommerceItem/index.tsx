interface propsType {
    icon:any,
    title:string,
    content:string
}

const CommerceItem = (props:propsType) => {

    return (
        <div id="ResourceItem" className="max-w-[355px] bg-gray-100">
            <div className="flex flex-col justify-center grid gap-3 p-5 ">
                <img src={props.icon} className="w-[50px] h-[50px]"/>
                <p className="text-sm">{props.title}</p>
                <p className="text-lg font-bold">{props.content}</p>
            </div>
        </div>
    )

}

export default CommerceItem;