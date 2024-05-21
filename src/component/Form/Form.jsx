import "./Form.css"
import Input from "component/Tools/Input/Input";
import DropList from "component/Tools/Dropdown/Drop";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { fetchCategories } from "ReduxSlices/slices/Main";
import TextArea from "component/Tools/Textarea/TextArea";

function Form() {

    const categories = useSelector(state => state.main.categories)

    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch])

    return (
        <div className=" flex-auto bg-[#D3D7E4]/[0.7] mx-[5rem] mt-[3rem] max-h-[50rem] rounded-lg flex flex-col overflow-clip">
            <div className="flex flex-row items-stretch w-full h-fit p-4 space-x-4">
                <div className="flex flex-col space-y-4 w-1/2">
                    <Input label="Назва" />
                    {categories && <DropList label="Категорiя" options={categories.map(category => { return { key: category._id, text: category.Name, value: category.Name } })} />}
                    <TextArea label="Опис" />
                    <Input label="Скiли" />


                </div>
                <div className="flex flex-col w-1/2 space-y-4">
                    <Input label="Цiна" />
                    <Input label="Статус" />
                    <Input label="Виконавець" />
                </div>
            </div>
            <div className=" grid grid-flow-row content-end w-full h-full justify-items-end p-4">
                <button className="bg-[#587CDA] text-white px-4 py-4 w-fit rounded-md text-[1.5rem] hover:bg-white hover:text-[#2D2D2D] ">Створити</button>

            </div>

        </div>


    )
}

export default Form;