import "./FormView.css"
import Input from "component/Tools/Input/Input";
import DropList from "component/Tools/Dropdown/Drop";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { fetchCategories } from "ReduxSlices/slices/Main";
import TextArea from "component/Tools/Textarea/TextArea";
import { useForm } from "react-hook-form";
import { createTask, changeState } from "ReduxSlices/slices/Task";

function FormView() {

    const task = useSelector(state => state.task)
    const currentForm = useSelector(state => state.task.currentForm)
    const user = useSelector(state => state.user.auth.user)
    const dispatch = useDispatch();
    let Skills = currentForm?.Skills.map(taskSkill => { return { id: taskSkill._id, Name: taskSkill.Skill.skillName } }) || null;


    return (
        <div className=" flex-auto bg-[#D3D7E4]/[0.7] mx-[5rem] mt-[3rem] max-h-[50rem] rounded-lg flex flex-col overflow-auto">
            <div className="flex flex-row">
                <div className=" flex flex-row space-x-4">
                    <div className="  text-[36px] font-bold px-4 text-nowrap ">{currentForm?.Title}</div>
                    <div className=" w-fit flex justify-start "><div className={"w-fit text-[20px] text-[#fff] text-center p-1 rounded-xl h-fit font-bold justify-end mr-8 mt-3 " + (currentForm?.Status?.statusName === "Відкрита" ? "bg-[#4e6fdc]" : (currentForm?.Status?.statusName === "В розробці" ? "bg-orange-600" : "bg-green-700"))}>{currentForm?.Status?.statusName}</div></div>
                </div>
                <div className=" w-full  text-right justify-self-end items-center text-[32px] font-bold px-4">{currentForm?.pricePerHour}$</div>

            </div>
            <div className="  text-white   text-center space-x-4 w-fit m-4 flex flex-row text-[24px]">
                <div className=" bg-[#363d65] rounded-md px-2">{currentForm?.Category?.Name}</div>
                {Skills && Object.values(Skills).map(skill => { return <div className=" bg-[#888] rounded-md px-2" >{skill.Name}</div> })}
            </div>

            <div className=" text-[24px] text-wrap break-words w-2/3 px-4 overflow-y-auto h-[6500px] ">{currentForm?.Description}

            </div>

            <div className="flex flex-row m-4 ">
                <div className=" h-fit justify-end text-[36px] opacity-70 mt-4"> {currentForm?.Customer?.fullName}</div>
                <div className="flex w-full justify-end ">{user && currentForm?.Customer._id == user._id && <button onClick={async() => await dispatch(changeState(task.states.edit))} className="bg-[#5BB0FF] text-white px-4 py-4 w-fit rounded-xl text-[1.5rem] sticky top-0 hover:bg-white hover:text-[#2D2D2D] align-bottom justify-end ">Редагувати</button>}</div>
            </div>


        </div>


    )
}

export default FormView;