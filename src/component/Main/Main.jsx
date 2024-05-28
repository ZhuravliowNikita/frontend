import "./Main.css"
import { Button, Header, Portal, Segment } from 'semantic-ui-react'

import Category from "./Category/Category";
import JobForms from "./JobForms/JobForms";
import DevelopersInfo from "./DevelopersInfo/DevelopersInfo";
import { selectIsCustomerMode } from "ReduxSlices/slices/Main";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { fetchCategories, fetchTasks, fetchDevelopers, setCategory } from "ReduxSlices/slices/Main";
import { Link } from "react-router-dom";
import { selectIsAuth } from "ReduxSlices/slices/Auth";
import {changeState } from "ReduxSlices/slices/Task";




function Main() {
    
    
    const [open, setOpen] = React.useState(false)

    const isCustomerMode = useSelector(selectIsCustomerMode);
    const isAuth = useSelector(selectIsAuth);
    const categories = useSelector(state => state.main.categories)
    const tasks = useSelector(state => state.main.tasks)
    const currentPageTask = useSelector(state => state.main.currentPageTask)
    const developers = useSelector(state => state.main.developers)
    const currentPageDevs = useSelector(state => state.main.currentPageDevs)
    const task = useSelector(state => state.task)
    const currentCategory = useSelector(state => state.main.currentCategory)
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchCategories());
        dispatch(fetchTasks({page: currentPageTask, Category: currentCategory}));
        dispatch(fetchDevelopers(currentPageDevs));
    }, [dispatch, currentPageTask, currentPageDevs, currentCategory])

    return (
        <div className="flex-auto bg-[#D3D7E4]/[0.2] mx-[5rem] mt-[3rem] max-h-[70rem] rounded-lg flex flex-row ">
            <Portal onClose={() => setOpen(false)} open={open}>
                <div
                className="flex-auto flex flex-col bg-white space-y-4 p-4 rounded-lg relative bottom-[99%] w-[200px] m-auto border-2"
                >
                    <Header as={"h1"}>Помилка</Header>
                    <h3>Ви не авторизованi.</h3>
                    <Button
                        content='Ok'
                        color="blue"
                        onClick={() => setOpen(false)}
                    />
                </div>
            </Portal>
            <div className="flex flex-col w-fit m-4 px-4 items-center overflow-auto">
                {isAuth ?
                    <Link to="/form" >
                        <button onClick={async() => await dispatch(changeState(task.states.create))} className="bg-[#5BB0FF] text-white px-4 py-4 w-full rounded-xl text-[1.5rem] sticky top-0 hover:bg-white hover:text-[#2D2D2D] ">Додати замовлення</button>
                    </Link>
                    :
                    <button onClick={() => setOpen(true)} className="bg-[#5BB0FF] text-white px-4 py-4 w-full rounded-xl text-[1.5rem] sticky top-0 hover:bg-white hover:text-[#2D2D2D] ">Додати замовлення</button>
                }
                <div className=" w-fit flex flex-col space-y-4 my-4 items-center">
                    <div onClick={() => dispatch(setCategory(null))} className="text-white text-nowrap text-[1.5rem] bg-[#545f9d] hover:bg-[#fff] hover:text-[#333] rounded-lg p-4">Все заказы/фрилансеры</div>
                    {categories &&
                        categories.map(category => {
                            return <Category isActive={currentCategory == category._id} onClick={() => dispatch(setCategory(category._id))} Name={category.Name} />
                        })
                    }
                </div>
            </div>

            {isCustomerMode ?
                <JobForms tasks={tasks} />
                :
                <DevelopersInfo developers={developers} />
            }

        </div>


    )
}

export default Main;