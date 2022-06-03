import { useState, useRef } from "react";
import { titleData, deadlineData } from "./data/inputValue";
import Wrapper from "./Components/Paper/Wrapper";
import Input from "./Components/Input/Input";
import Button from "./Components/Button/Button";
import Textarea from "./Components/Input/Textarea";
import Job from "./Components/Job/Job";
import Modal from "./Components/Modal/Modal";
function App() {
  const [title,setTitle]=useState('')
  const [deadline,setDeadline]=useState('')
  const [description,setDescription]=useState('')
  const [jobs,setJobs]=useState([])
  const [show,setShow] = useState(false)
  const [currentTitle,setCurrentTitle]=useState('')
  const [currentDeadline,setCurrentDeadline]=useState('')
  const [currentDescription,setCurrentDescription]=useState('')
  const [currentIndex,setCurrentIndex]=useState(0)
  const [currentIsDone,setCurrentIsDone]=useState(false)
  const [isWarning,setIsWarning] = useState(false)
  const inputTitle = useRef(null);
  const handleSubmit =()=>{
    if(title===''){
      return warning()
    }
    else{
      setJobs(prev => { return [...prev,{title:title,deadline:deadline,description:description,isDone:currentIsDone}]})
      setDeadline('')
      setDescription('')
      setTitle('')
    }
  }
  const onBlur =()=>{
    setIsWarning(false)
  }
  const warning =()=>{
    setIsWarning(true)
    inputTitle.current.focus()
  }
  const handleReset =()=>{
    setDeadline('')
    setDescription('')
    setTitle('')
  }
  const handleDelete =(id)=>{
    const remainJobs=jobs.filter((item,index)=>index!==id)
    setJobs(remainJobs)
  }
  const handleOpen = (e)=>{
    setShow(true)
    jobs.map((item,index)=>{
      if(index !==e) return
      setCurrentTitle(item.title)
      setCurrentDeadline(item.deadline)
      setCurrentDescription(item.description)
      setCurrentIndex(e)
      setCurrentIsDone(item.isDone)
    })
  }
  const handleClose = ()=>{
    setShow(false)
  }
  const handleEditJob = (id)=>{
    const jobsEdited = [...jobs]
    const currentIndexJob = jobsEdited.findIndex((item,index)=>index==id)
    jobsEdited[currentIndexJob]={title:currentTitle,deadline:currentDeadline,description:currentDescription,isDone:currentIsDone}
    setJobs(jobsEdited)

    handleClose()
  }
  const handleCheckbox = (e,id)=>{
    const jobsEdited = [...jobs]
    const currentIndexJob = jobsEdited.findIndex((item,index)=>index==id)
    if(e.target.checked){
      jobsEdited[currentIndexJob].isDone = true;
      setJobs(jobsEdited)
    }
    else{
      jobsEdited[currentIndexJob].isDone = false;
      setJobs(jobsEdited)
    }
    setCurrentIsDone(jobsEdited[currentIndexJob].isDone)
  }     
  return (
    <Wrapper>
      <Input 
            label={titleData.label}
            type={titleData.type}
            value={title}
            handleValue={(e)=>{ setIsWarning(false)
              setTitle(e.target.value)}}
            placeholder={titleData.placeHolder}
            inputTitle ={inputTitle}
            isWarning ={isWarning}
            onBlur={onBlur}
            />
      <p className="WarningMessage" style={{display:(isWarning?'block':'none')}}>Please fill out this field!</p>
      <Input label={deadlineData.label}
            type={deadlineData.type}
            value={deadline}
            handleValue={(e)=>setDeadline(e.target.value)}/>
      <Textarea label={'Description'}
            placeholder={'Finish reading the tutorial and leave feedback!'}
            value={description}
            handleValue={(e)=>setDescription(e.target.value)}/>
      <div className="button__container">
        <Button buttonTitle={'Create'} handleClick={handleSubmit}/>
        <Button buttonTitle={'Reset'} handleClick={handleReset}/>
      </div>
      <div className="Task">
        {jobs.map((item,index)=>{
          return <Job title={item.title} 
          deadline={item.deadline} 
          description={item.description} 
          key={index}
          handleDelete={()=>handleDelete(index)}
          handleOpenModal={()=>handleOpen(index)}
          checkboxValue = {item.isDone}
          handleCheckbox ={(e)=>handleCheckbox(e,index)}
          />
        })}
      </div>
        <Modal titleValue={currentTitle}
               handleTitle={(e)=>setCurrentTitle(e.target.value)}
               handleDeadline={(e)=>setCurrentDeadline(e.target.value)}
               handleDescription={(e)=>setCurrentDescription(e.target.value)}
               descriptionValue={currentDescription}
               deadlineValue={currentDeadline}
               show={show}
               handleCloseModal={handleClose}
               handleEditJob={()=>handleEditJob(currentIndex)}
               isChecked = {currentIsDone}
               handleCheckbox ={(e)=>handleCheckbox(e,currentIndex)}
      />
    </Wrapper>
  );
}

export default App;
