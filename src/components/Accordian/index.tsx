interface IAccordion {
    id: number,
    title: string,
    selected: boolean,
    onclick: any,
    content: string
}

function Accordion(props: IAccordion) {
    if (props.selected === false)
        return (
            <>
                <div className="flex accordion_container">
                    <button id={`${props.id}`} className="flex w-full py-6 pl-4 pr-8 border-b border-borderprimary" onClick={props.onclick}>
                        <span className="text-4 text-textsecondary font-semibold">{props.title}</span>
                    </button>
                </div>
            </>
        )
    else
        return (
            <>
                <div className="flex flex-col accordion_container">
                    <button id={`${props.id}`} className="flex w-full py-6 pl-4 pr-8 border-l-2  border-buttonprimary" onClick={props.onclick}>
                        <span className="text-4 text-textsecondary font-semibold">{props.title}</span>
                    </button>
                    <div className="flex w-full p-4 border-b  border-borderprimary">
                        <p className="font-medium text-sm text-textsecondary">
                            {props.content}
                        </p>
                    </div>
                </div>
            </>
        )
}
export default Accordion;