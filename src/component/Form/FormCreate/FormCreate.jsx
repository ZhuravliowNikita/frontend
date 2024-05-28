import "./FormCreate.css"
import Input from "component/Tools/Input/Input";
import DropList from "component/Tools/Dropdown/Drop";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { fetchCategories } from "ReduxSlices/slices/Main";
import TextArea from "component/Tools/Textarea/TextArea";
import { useForm } from "react-hook-form";
import { createTask, changeState, fetchSkillsByCategory, setSkills, setCategory } from "ReduxSlices/slices/Task";
import { Dropdown } from "semantic-ui-react";

function FormCreate() {

    const categories = useSelector(state => state.main.categories)
    const skills = useSelector(state => state.task.skills)
    const task = useSelector(state => state.task)
    const currentCategory = useSelector( state => state.task.currentCategory)
    const currentSkills = useSelector( state => state.task.currentSkills)

    const dispatch = useDispatch();


    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isValid },
    } = useForm({

        mode: "onChange",
    });


    const OnSubmit = async (params) => {
        await dispatch(createTask({ ...params, Category: currentCategory, Skills: currentSkills }))
        await dispatch(changeState(task.states.view));
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
                                    <Dropdown onChange={(_, data) => { dispatch(setSkills(data.value));}} fluid multiple selection options={skills.map(skill => { return { key: skill._id, text: skill.skillName, value: skill._id } })} />
                                </div>
                            }


                        </div>
                        <div className="flex flex-col w-1/2 space-y-4">
                            <TextArea register={register("Description")} label="Опис" />

                            <Input register={register("PricePerHour")} type="number" label="Цiна" />
                        </div>
                    </div>
                    <div className=" grid grid-flow-row content-end w-full h-full justify-items-end p-4">
                        <button className="bg-[#587CDA] text-white px-4 py-4 w-fit rounded-md text-[1.5rem] hover:bg-white hover:text-[#2D2D2D] ">Створити</button>

                    </div>
                </>
            }
        </form>


    )
}

export default FormCreate;