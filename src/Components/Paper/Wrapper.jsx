import './Wrapper.scss'
const Wrapper = (props)=>{
    return (<div className="paper">
        <div className="container">
        <p className="title">To-Do Application</p>
        <p className="subTitle">Learning the Basics of the IndexedDB API!</p>
        <a href="#" className="link">
            <span className="link__title">View on Github</span>
            <span className="link__icon">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png" alt="" />
            </span>
        </a>
        <p className="submit__Title">Create a New Task</p>
        {props.children}
    </div>
    </div>)
}
export default Wrapper