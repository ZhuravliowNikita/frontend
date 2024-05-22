import "./Main.css"
import { Button, Input } from 'semantic-ui-react'

import Category from "./Category/Category";
import JobForms from "./JobForms/JobForms";
import DevelopersInfo from "./DevelopersInfo/DevelopersInfo";
import { selectIsCustomerMode } from "ReduxSlices/slices/Main";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { fetchCategories } from "ReduxSlices/slices/Main";
import { Link } from "react-router-dom";

function Main() {

    const isCustomerMode = useSelector(selectIsCustomerMode);
    const categories = useSelector(state => state.main.categories)
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch])

    return (
        <div className="flex-auto bg-[#D3D7E4]/[0.2] mx-[5rem] mt-[3rem] max-h-[70rem] rounded-lg flex flex-row ">

            <div className="flex flex-col w-fit m-4 px-4 items-center overflow-auto">
                <Link to = "/form">
                    <button className="bg-[#5BB0FF] text-white px-4 py-4 w-full rounded-xl text-[1.5rem] sticky top-0 hover:bg-white hover:text-[#2D2D2D] ">Додати замовлення</button>
                </Link>
                <div className=" w-fit flex flex-col space-y-4 my-4 items-center">
                    <div className="text-white text-nowrap text-[1.5rem]">Все заказы/фрилансеры</div>
                    {categories &&
                        categories.map(category => {
                            return <Category Name={category.Name} />
                        })
                    }
                </div>
            </div>

            {isCustomerMode ?
                <JobForms />
                :
                <DevelopersInfo />
            }

        </div>


    )
}

export default Main;