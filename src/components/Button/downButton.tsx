interface IButton {
    title: string,
    type: string,
    style: string,
    xborder?:string
}

function DownButton(props: IButton) {
    return (
        <button className={`h-full px-3 ${props.xborder}`} >
            <div className={`h-full content-center ${props.type}`}>
                <a className={`${props.style}`} href="">{props.title}</a>
            </div>
        </button>
    )
}
export default DownButton;