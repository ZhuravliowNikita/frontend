
import JobForm from "./JobForm/JobForm";
import "./JobForms.css"
import { Button, Input } from 'semantic-ui-react'

//[{ id: 0, Name: "NodeJS" }, { id: 1, Name: "Express" }, { id: 2, Name: "React" }]

function JobForms(props) {

    const tasks = props.tasks

    return (
        <div className=" flex-auto flex flex-col space-y-2 overflow-auto items-center p-4 ">
            {tasks && tasks.map((task) => {
                return <JobForm Name={task.Title} pricePerHour={task.pricePerHour} Skills={task.Skills.map(taskSkill => { return {id: taskSkill._id, Name:taskSkill.Skill.skillName}})} Fullname={task?.Customer?.fullName} />
            })}
        </div>
    )
}

export default JobForms;