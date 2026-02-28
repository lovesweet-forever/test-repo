import { useState } from 'react'
import TabItem from './TabItem'
import type { typeCommerce } from '../../utils/types';
import Tab from '../../components/Tab';
import { commerceData, TabsTitle } from '../../utils/constData';

const Tabs = () => {
    const [flag, setFlag] = useState<number>(0);

    return (
        <div className='flex w-full items-center flex-col '>
            <div className="w-200 text-4xl pt-10 pb-10 text-center font-bold">{TabsTitle}</div>
            <div className='border-b border-gray'>
                <div className='flex flex-row items-center '>
                    <div className="  flex flex-row items-center justify-center">
                        {
                            commerceData.map((tab, index) =>
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
                    <Tab article={commerceData[flag]} />
                </div>
            </div>
        </div>
    )
}

export default Tabs;