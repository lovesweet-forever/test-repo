import {useState} from 'react'
import TabItem from './TabItem'
import type { typeCommerce } from '../../utils/types';
import Tab from '../Tab';

interface propsType {
    content: Array<typeCommerce>
}

const Tabs = (props:propsType) => {
    const [flag, setFlag] = useState<number>(0);

    return (
        <div className='border-b-1 border-gray'>
            <div className='flex flex-row items-center '>
                <div className="  flex flex-row items-center justify-center">
                    {
                        props.content.map((tab, index)=>
                            <TabItem
                                key={index} 
                                index={index} 
                                tabContent={tab} 
                                flg={flag}  
                                onClick={setFlag} 
                            />
                        )
                    }
                </div>
            </div>
            <div>
                <Tab article={props.content[flag]}/>
            </div>
        </div>
    )
}

export default Tabs;