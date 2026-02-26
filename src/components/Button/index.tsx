interface IButton {
    title: string,
    type: string
}

function ButtonComponent(props: IButton) {
    return (
        <button className={`${props.type} rounded-full`} >
            {props.title}
        </button>
    )
}
export default ButtonComponent;