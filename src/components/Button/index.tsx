
interface IButton  {
    title : string,
    type : string
}

function ButtonComponent(props:IButton){
    console.log(props)
    return(
       <button className={`${props.type} rounded-full`} >
                {props.title}
        </button> 
    )
}
export default ButtonComponent;