import Tab from '../Tab'
import type { typeCommerce } from '../../types/types';

interface propsType {
    content: Array<typeCommerce>
    flag:number,
    setFlag:any
}

const Tabs = (props:propsType) => {

    return (
        <div className=" flex flex-row items-center justify-center">
            {
                props.content.map((tab, index)=>
                    <Tab
                        key={index} 
                        index={index} 
                        tabContent={tab} 
                        flg={props.flag}  
                        onClick={props.setFlag} 
                    />
                )
            }
        </div>
    )
}

export default Tabs;