import "./Job.scss"
import Input from "../Input/Input"
const Job =({title,deadline,description,handleDelete,handleOpenModal,checkboxValue,handleCheckbox})=>{
    return(
        <div className="Output">
            <div className={checkboxValue?"Output__header Output__header__done":"Output__header"}>
                <p>{title}</p>
                <div>
                    <span className="Deadline">{deadline==''?'':('Deadline:'+' '+deadline)}</span>
                    <button className="delete" onClick={handleDelete}>X</button>
                </div>
            </div>
            <div className={checkboxValue?"Output__body Output__body__done":"Output__body"}>
                <p>{description}</p>
                <div className="Options">
                    <button className="Edit Button__btn" onClick={handleOpenModal}>Edit</button>
                    <label >
                        <input type="checkbox" checked={checkboxValue} onChange={handleCheckbox}/>
                        Done
                    </label>
                </div>
            </div>
        </div>
    )
}
export default Job