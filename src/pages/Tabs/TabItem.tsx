import type { typeCommerce } from '../../utils/types'

type propsType = {
    key:number, 
    index:number, 
    tabContent:typeCommerce, 
    flg:number,
    onClick:any
}

const TabItem = (props : propsType) => {
    
    return (
        <div>
            <div className={`font-bold text-lg border-gray ${ props.flg === props.index ? 'text-black border-x-1 border-t-1 rounded-t-md':'text-gray border-b-1' }  pt-6 px-8 pb-4`}
                onClick={() => props.onClick(props.index)}
            >
                {props.tabContent.tabItem}
            </div>
        </div>
    )
}

export default TabItem;
