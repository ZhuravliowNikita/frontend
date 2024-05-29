import "./FormView.css"
import Input from "component/Tools/Input/Input";
import DropList from "component/Tools/Dropdown/Drop";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { fetchCategories } from "ReduxSlices/slices/Main";
import TextArea from "component/Tools/Textarea/TextArea";
import { useForm } from "react-hook-form";
import { changeState, applyTask, assignTask } from "ReduxSlices/slices/Task";
import { Rating } from "semantic-ui-react";

function FormView() {

    const task = useSelector(state => state.task)
    const currentForm = useSelector(state => state.task.currentForm)
    const user = useSelector(state => state.user.auth.user)
    const dispatch = useDispatch();
    let Skills = currentForm?.Skills.map(taskSkill => { return { id: taskSkill._id, Name: taskSkill.Skill.skillName } }) || null;
    let Devs = null;
    if (currentForm?.Devs) {
        Devs = currentForm?.Devs.map(taskDev => {
            return {
                id: taskDev.Dev._id,
                Fullname: taskDev.Dev.fullName,
                ProfilePicture: taskDev.Dev.avatarUrl || process.env.PUBLIC_URL + "/ProfileIMG.png",
                Price: taskDev.Dev.Profile.pricePerHour,
                Rate: (taskDev.Dev.Profile.Speed + taskDev.Dev.Profile.Quality + taskDev.Dev.Profile.Communication) / 3,
                Skills: taskDev.Dev.Profile.Skills && taskDev.Dev.Profile.Skills.length > 0 && taskDev.Dev.Profile.Skills.map(profileSkill => { return { id: profileSkill._id, Name: profileSkill.Skill.skillName } })
            }
        })
    }

    return (
        <div className=" flex flex-col  overflow-auto max-h-[100rem] py-5">
            <div className=" flex-auto bg-[#D3D7E4]/[0.7] mx-[5rem] mt-[3rem] min-h-[30rem] max-h-[50rem] rounded-lg flex flex-col overflow-auto">
                <div className="flex flex-row">
                    <div className=" flex flex-row space-x-4">
                        <div className="  text-[36px] font-bold px-4 text-nowrap ">{currentForm?.Title}</div>
                        <div className=" w-fit flex justify-start "><div className={"w-fit text-[20px] text-[#fff] text-nowrap text-center p-1 rounded-xl h-fit font-bold justify-end mr-8 mt-3 " + (currentForm?.Status?.statusName === "Відкрита" ? "bg-[#4e6fdc]" : (currentForm?.Status?.statusName === "В розробці" ? "bg-orange-600" : "bg-green-700"))}>{currentForm?.Status?.statusName}</div></div>
                    </div>
                    <div className=" w-full  text-right justify-self-end items-center text-[32px] font-bold px-4">{currentForm?.pricePerHour}$</div>

                </div>

                <div className=" text-white p-4 space-x-4 w-full flex flex-row text-[24px]">
                    <div className=" bg-[#363d65] rounded-md px-2">{currentForm?.Category?.Name}</div>
                    {Skills && Object.values(Skills).map(skill => { return <div className=" bg-[#888] rounded-md px-2" >{skill.Name}</div> })}
                    <div className="grow text-[26px] text-[#222] text-nowrap font-bold text-right">Виконати до: {new Date(currentForm?.Deadline).toLocaleDateString("en-US")}</div>
                </div>

                <div className=" text-[24px] text-wrap break-words w-2/3 px-4 overflow-y-auto h-[6500px] ">{currentForm?.Description}

                </div>

                <div className="flex flex-row m-4 ">
                    <div className=" h-fit justify-end text-[36px] opacity-70 mt-4"> {currentForm?.Customer?.fullName}</div>
                    <div className="flex w-full justify-end ">
                        {user && currentForm?.Customer._id == user._id && <button onClick={async () => await dispatch(changeState(task.states.edit))} className="bg-[#5BB0FF] text-white px-4 py-4 w-fit rounded-xl text-[1.5rem] sticky top-0 hover:bg-white hover:text-[#2D2D2D] align-bottom justify-end ">Редагувати</button>}
                        {user && user.isDeveloper && currentForm?.Customer._id !== user._id && <button onClick={async () => await dispatch(applyTask({ Task: currentForm._id }))} className="bg-[#5BB0FF] text-white px-4 py-4 w-fit rounded-xl text-[1.5rem] sticky top-0 hover:bg-white hover:text-[#2D2D2D] align-bottom justify-end ">Додати заявку</button>}
                    </div>
                </div>


            </div>
            <div className=" flex-initial bg-[#D3D7E4]/[0.7] mx-[5rem] mt-[3rem] min-h-[30rem] max-h-[50rem] rounded-lg flex flex-col overflow-auto w-1/2">
                <div className=" w-fit text-[36px] font-bold px-4 ">{currentForm?.Developer? "Developer" :"Заявки розробникiв"}</div>
                <div className="flex-auto flex flex-col space-y-5 ">
                    {!currentForm?.Developer && Devs && Devs.map((dev) => {
                        return (
                            <div className="flex flex-row bg-[#edebeb] rounded-lg mx-2 p-2 max-h-[50rem]">
                                <div className="w-[180px]"><img className="rounded-sm w-full" src={dev.ProfilePicture} alt="profile picture" /></div>
                                <div className="flex flex-col">
                                    <div className=" text-[36px] text-nowrap">{dev.Fullname}</div>
                                    <div className=" text-[20px]"><Rating defaultRating={dev.Rate} maxRating={5} disabled /></div>
                                </div>
                                <div className="grow flex flex-col  text-right ">
                                    <div className="   justify-self-end items-center text-[32px] font-bold">{dev.Price}$</div>
                                    <div className="grow self-end flex flex-col justify-end">{user && currentForm?.Customer._id == user._id && <button onClick={async () => { await dispatch(assignTask({ _id: currentForm._id, Developer: dev.id })) }} className="bg-[#5BB0FF] text-white px-2 py-2 w-fit h-fit rounded-xl text-[1.5rem] hover:bg-white hover:text-[#2D2D2D] ">Вибрати розробника</button>}</div>
                                </div>

                            </div>)
                    })}
                    {currentForm?.Developer &&
                        <div className="flex flex-row bg-[#edebeb] rounded-lg mx-2 p-2 max-h-[50rem]">
                            <div className="w-[180px]"><img className="rounded-sm w-full" src={currentForm?.Developer.avatarUrl || process.env.PUBLIC_URL + "/ProfileIMG.png"} alt="profile picture" /></div>
                            <div className="flex flex-col">
                                <div className=" text-[36px] text-nowrap">{currentForm?.Developer.fullName}</div>
                                <div className=" text-[20px]"><Rating defaultRating={(currentForm?.Developer.Profile.Speed + currentForm?.Developer.Profile.Quality + currentForm?.Developer.Profile.Communication) /3} maxRating={5} disabled /></div>
                            </div>
                            <div className="grow flex flex-col  text-right ">
                                <div className="   justify-self-end items-center text-[32px] font-bold">{currentForm?.Developer.Profile.pricePerHour}$</div>
                            </div>

                        </div>
                    }


                </div>
            </div>

        </div>



    )
}

export default FormView;