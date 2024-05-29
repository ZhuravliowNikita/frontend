import "./FormEdit.css"
import Input from "component/Tools/Input/Input";
import DropList from "component/Tools/Dropdown/Drop";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import TextArea from "component/Tools/Textarea/TextArea";
import { useForm } from "react-hook-form";
import { changeState, updateTask, fetchSkillsByCategory, fetchCategories, setSkills, setCategory, deleteTask } from "ReduxSlices/slices/Task";
import { Dropdown } from "semantic-ui-react";

function FormEdit() {

    const currentForm = useSelector(state => state.task.currentForm)
    const currentCategory = useSelector(state => state.task.currentCategory)

    const dispatch = useDispatch();


    const states = useSelector(state => state.task.states)
    const categories = useSelector(state => state.task.categories)
    const skills = useSelector(state => state.task.skills)
    const currentSkills = useSelector(state => state.task.currentSkills)


    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isValid },
    } = useForm({
        defaultValues: {
            Title: currentForm.Title,
            Description: currentForm.Description,
            PricePerHour: currentForm.pricePerHour,
            Deadline: new Date(currentForm.Deadline).toLocaleDateString("en-US")
        },
        mode: "onChange",
    });



    const OnSubmit = async (params) => {
        await dispatch(updateTask({ id: currentForm._id, ...params, Category: currentCategory, Skills: currentSkills }))
        await dispatch(changeState(states.view));
    };

    return (
        <form onSubmit={handleSubmit(OnSubmit)} className=" flex-auto bg-[#D3D7E4]/[0.7] mx-[5rem] mt-[3rem] max-h-[50rem] rounded-lg flex flex-col overflow-clip">
            {categories &&
                <>
                    <div className="flex flex-row items-stretch w-full h-fit p-4 space-x-4">
                        <div className="flex flex-col space-y-4 w-1/2">
                            <Input register={register("Title")} label="Назва" />
                            <DropList defaultValue={currentCategory} onChange={(_, data) => { dispatch(setCategory(data.value)); dispatch(fetchSkillsByCategory(data.value)) }} label="Категорiя" options={categories.map(category => { return { key: category._id, text: category.Name, value: category._id } })} />
                            {skills &&
                                <div className="flex flex-col text-[24px] text-[#484444]">
                                    Скiли
                                    <Dropdown defaultValue={currentSkills} onChange={(_, data) => { dispatch(setSkills(data.value)); }} fluid multiple selection options={skills.map(skill => { return { key: skill._id, text: skill.skillName, value: skill._id } })} />
                                </div>
                            }


                        </div>
                        <div className="flex flex-col w-1/2 space-y-4">
                            <TextArea register={register("Description")} label="Опис" />

                            <Input register={register("PricePerHour")} type="number" label="Цiна" />
                            <Input register={register("Deadline", { valueAsDate: true, onChange: (event) => console.log(event)})} type="date" label="Виконати до" />
                        </div>
                    </div>
                    <div className=" flex flex-row justify-end items-end w-full h-full p-4">
                        <div className="w-fit h-fit space-x-3">
                            <button onClick={async () => await dispatch(deleteTask(currentForm._id))} className=" bg-[#da5869] px-8 py-3  rounded-md text-[1.5rem] hover:bg-white hover:text-[#2D2D2D] text-white">Видалити</button>
                            <button onClick={async () => await dispatch(changeState(states.view))} className=" bg-yellow-400 text-black px-8 py-3  rounded-md text-[1.5rem] hover:bg-white hover:text-[#2D2D2D] ">Вiдмiнити</button>
                            <button className="bg-[#587CDA] text-white px-8 py-3  rounded-md text-[1.5rem] hover:bg-white hover:text-[#2D2D2D] ">Зберегти</button>
                        </div>


                    </div>
                </>
            }
        </form>


    )
}

export default FormEdit;