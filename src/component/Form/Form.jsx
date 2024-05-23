import "./Form.css"
import Input from "component/Tools/Input/Input";
import DropList from "component/Tools/Dropdown/Drop";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { fetchCategories } from "ReduxSlices/slices/Main";
import TextArea from "component/Tools/Textarea/TextArea";
import { useForm } from "react-hook-form";
import { createTask } from "ReduxSlices/slices/Task";

function Form() {

    const categories = useSelector(state => state.main.categories)
    const [currentCategory, setCategory] = React.useState(null)

    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch])

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isValid },
    } = useForm({
        
        mode: "onChange",
    });


    const OnSubmit = async (params) => {
        dispatch(createTask({...params, Category: currentCategory}))
    };

    return (
        <form onSubmit={handleSubmit(OnSubmit)} className=" flex-auto bg-[#D3D7E4]/[0.7] mx-[5rem] mt-[3rem] max-h-[50rem] rounded-lg flex flex-col overflow-clip">
            {categories &&
                <>
                    <div className="flex flex-row items-stretch w-full h-fit p-4 space-x-4">
                        <div className="flex flex-col space-y-4 w-1/2">
                            <Input register={register("Title")} label="Назва" />
                            <DropList onChange={(_, data)=> setCategory(data.value)} label="Категорiя" options={categories.map(category => { return { key: category._id, text: category.Name, value: category._id } })} />
                            <TextArea register={register("Description")} label="Опис" />


                        </div>
                        <div className="flex flex-col w-1/2 space-y-4">
                            {/* <Input label="Скiли" /> */}
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

export default Form;