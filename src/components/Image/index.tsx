
interface propsType  {
    name : any,
    height : number,
    width : number
}

const ImageComponent = (props:propsType) => {

    return (
        <img src={props.name} style={{height:`${props.height}px`, width:`${props.width}px`}}/>
    )   

}
export default ImageComponent;