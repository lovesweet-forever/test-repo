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
                    <button id={`${props.id}`} className="flex w-full py-[24px] pl-[16px] pr-[32px] border-b-[1px] border-[solid] border-[#909090]" onClick={props.onclick}>
                        <span className="text-[16px] text-[#2c2c2c] font-[600]">{props.title}</span>
                    </button>
                </div>
            </>
        )
    else
        return (
            <>
                <div className="flex flex-col accordion_container">
                    <button id={`${props.id}`} className="flex w-full py-[24px] pl-[16px] pr-[32px] border-l-[2px] border-[solid] border-[#3b63fb]" onClick={props.onclick}>
                        <span className="text-[16px] text-[#2c2c2c] font-[600]">{props.title}</span>
                    </button>
                    <div className="flex w-full p-[16px] border-b-[1px] border-[solid] border-[#909090]">
                        <p className="font-[500] text-[14px] text-[#2c2c2c]">
                            {props.content}
                        </p>
                    </div>
                </div>
            </>
        )
}
export default Accordion;