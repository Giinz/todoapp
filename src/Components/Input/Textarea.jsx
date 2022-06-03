import "./Input.scss"

const Textarea =(props)=>{
    return (
        <div className="Input">
            <span className="Input__label">{props.label}</span>
            <textarea value={props.value} 
            onChange={props.handleValue} 
            placeholder={props.placeholder}
            className="Input__input textarea"/>
        </div>
    )
}
export default Textarea