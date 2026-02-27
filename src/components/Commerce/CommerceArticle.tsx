import type { typeCommerce } from '../../types/types'
import ButtonComponent from '../Button'
import { SmallSecondary } from '../../utils/buttonType'

interface propsType {
    article:typeCommerce
}

const CommerceArticle = (props:propsType) => {
    return (
        <div className=' w-full flex justify-center items-center py-10' >
            <div className=' w-full py-3 grid grid-cols-2'>
                <div className='flex justify-end pr-7 pt-10'>
                    <div id="tab-video" className='w-[500px] h-[375px]'>
                        <img src={props.article.picture}/>
                    </div>
                </div>
                <div className='flex justify-start pl-5'>
                    <div id="tab-article" className='w-[660px]  grid gap-5 text-textsecondary'>
                        <p className='text-4xl font-bold'>{props.article.title}</p>
                        <p className='text-[18px] '>{props.article.smmary}</p>
                        <ul className='text-[18px] list-disc pl-5'>
                            {
                                props.article.articleItems.map((article,index)=>
                                    <li key={index}>{article}</li>
                                )
                            }
                        </ul>
                        <div>
                            <ButtonComponent title={props.article.buttonTitle} type={SmallSecondary}></ButtonComponent>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CommerceArticle;