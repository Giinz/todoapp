import "./Input.scss"
const Input = (props)=>{
    return (
    <div className='Input'>
        <span className='Input__label'>{props.label}</span>
        <input type={props.type} 
            value={props.value} 
            onChange={props.handleValue} 
            className= {props.isWarning?'Input__warning':"Input__input"}
            placeholder={props.placeholder}
            ref={props.inputTitle}
            onBlur={props.onBlur}
            />
    </div>
    )
}
export default Input

