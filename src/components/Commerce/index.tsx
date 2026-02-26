import {useState} from 'react'
import CommerceArticle from './CommerceArticle';
import Tabs from '../Tabs';
import {commerceData} from '../../utils/constDatas'

const Commerce = () => {
    const [flag, setFlag] = useState<number>(0);

    return (
        <div className='border-b-1 border-gray'>
            <div className='flex flex-row justify-center'>
                <Tabs content={commerceData} flag={flag} setFlag={setFlag}/>
            </div>
            <div>
                <CommerceArticle article={commerceData[flag]}/>
            </div>
        </div>
    )
}

export default Commerce;