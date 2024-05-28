
import JobForm from "./JobForm/JobForm";
import "./JobForms.css"
import { Button, Input } from 'semantic-ui-react'
import { useDispatch } from "react-redux";
import { moreTask } from "ReduxSlices/slices/Main";

//[{ id: 0, Name: "NodeJS" }, { id: 1, Name: "Express" }, { id: 2, Name: "React" }]

function JobForms(props) {

    const tasks = props.tasks
    const dispatch = useDispatch();

    return (
        <div className=" flex-auto flex flex-col space-y-2 overflow-auto items-center p-4 ">
            {tasks && tasks.map((task) => {
                return <JobForm id={task._id} Name={task.Title} pricePerHour={task.pricePerHour} Skills={task.Skills.map(taskSkill => { return {id: taskSkill._id, Name:taskSkill.Skill.skillName}})} Fullname={task?.Customer?.fullName} />
            })}
            {tasks && tasks.length == 0 && <h1 className="text-white">Nothing here</h1>}
            {tasks && tasks.length !== 0 && tasks.length %10 == 0 && <button onClick={() => dispatch(moreTask())} className="flex-initial w-[120px] text-center bg-white h-fit rounded-lg  p-2 text-[#464343] hover:bg-[#ddd]"> Ще </button>}
        </div>
    )
}

export default JobForms;