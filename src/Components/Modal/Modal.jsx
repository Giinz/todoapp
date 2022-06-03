import Input from "../Input/Input"
import Textarea from "../Input/Textarea"
import './Modal.scss'
function Modal(prop){
    
    return (
    <div className="modal" style={{display:(prop.show?'block':'none')}}>
        <div className="modalContent">
            <button className="modalClose" onClick={prop.handleCloseModal}>x</button>
            <Input label="Title" type="text" value={prop.titleValue} handleValue={prop.handleTitle} className="Input__input" />
            <Textarea value={prop.descriptionValue} handleValue={prop.handleDescription}/>
            <Input label="Deadline" type="date" value={prop.deadlineValue} handleValue={prop.handleDeadline} className="Input__input" />
            <div className="modalOptions">
                <label className="modalCheckbox">
                    <input type="checkbox" checked={prop.isChecked} onChange={prop.handleCheckbox}/>   Done
                </label>
                <button className="Change" onClick={prop.handleEditJob}  >Save Changes</button>
            </div>
        </div>
    </div>
    )
}
export default Modal