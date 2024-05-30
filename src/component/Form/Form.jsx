import "./Form.css"
import Input from "component/Tools/Input/Input";
import DropList from "component/Tools/Dropdown/Drop";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import TextArea from "component/Tools/Textarea/TextArea";
import { useForm } from "react-hook-form";
import { createTask, fetchDevelopersRecomendation } from "ReduxSlices/slices/Task";
import FormCreate from "./FormCreate/FormCreate";
import FormView from "./FormView/FormView";
import FormEdit from "./FormEdit/FormEdit"
import { Loader } from "semantic-ui-react";
import {  fetchSkillsByCategory, fetchCategories} from "ReduxSlices/slices/Task";

function Form() {

    const task = useSelector(state => state.task)
    const currentCategory = useSelector( state => state.task.currentCategory)
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(fetchCategories());
        dispatch(fetchSkillsByCategory(currentCategory))
        dispatch(fetchDevelopersRecomendation(task?.currentForm?._id))
    }, [currentCategory, task?.currentForm?._id])

    const switchRender = (state) => {
        
        switch (state) {
            case task.states.create:
                return <FormCreate />
            case task.states.view:
                return <FormView />
            case task.states.edit:
                return <FormEdit />
            default:
                return "get back"

        }
    }

    return (
        <>
            {task.loading && task.categories
                ?
                <div className=" flex-auto bg-[#D3D7E4]/[0.7] mx-[5rem] mt-[3rem] max-h-[50rem] rounded-lg flex flex-col overflow-clip"><Loader>Loading</Loader></div>
                :
                switchRender(task.currentState)
            }
        </>
    )
}

export default Form;