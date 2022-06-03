import './Button.scss'
const Button=({buttonTitle,handleClick})=>{
    return (

            <button className={(buttonTitle=='Create')?"Button__btn Create":"Button__btn Reset"} type={(buttonTitle=='Create')?"submit":"reset"} onClick={handleClick}>
                {buttonTitle}
            </button>
        
    )
}
export default Button