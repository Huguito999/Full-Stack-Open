
const Buttons = (props) =>{
    console.log(props)
    return(
        <div>
           <button onClick={props.handleClick}>{props.text}</button>
        </div>
    )
}
export default Buttons