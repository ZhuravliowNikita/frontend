import MyModal from "../Tools/Modal/Modal";
import ModalExampleCloseIcon from "../Tools/Modal/Modal";
import "./Header.css"
import Login from "./Login";
import React from 'react'
import { Button, Container, Divider } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectIsAuth } from "ReduxSlices/slices/Auth";
import { selectIsCustomerMode } from "ReduxSlices/slices/Main";
import { changeToCustomer, changeToDeveloper } from "ReduxSlices/slices/Main";


function Header() {
    const isAuth = useSelector(selectIsAuth);
    const isCustomerMode = useSelector(selectIsCustomerMode);
    const dispatch = useDispatch();
    return (
        <>
            <header className="flex-initial flex flex-row min-h-28 items-center border-b border-[#3b52a0]">
                <div className=" basis-2/3 flex flex-row space-x-9">
                    <Link to='/'><div className=" h-120 ml-12 text-white text-[36px] font-normal "><b>Sphere of Labor</b></div></Link>
                    <div className="flex flex-row items-center space-x-5 mt-2 ">
                        <button onClick={() => dispatch(changeToCustomer())} className={"w-full  rounded-md px-3 text-[24px] text-white font-thin text-center align-middle " + (isCustomerMode && "bg-[#587CDA]")}>Замовники</button>
                        <div className="text-white  text-[2rem] font-thin h-full text-center align-middle">|</div>
                        <button onClick={() => dispatch(changeToDeveloper())} className={"w-full rounded-md px-3 text-white text-[24px] font-thin text-center align-middle " + (!(isCustomerMode) && "bg-[#587CDA]")}>Фрiлансери</button>
                    </div>
                </div>
                <div className=" basis-1/3 text-right mr-64 ">
                    {isAuth ?
                        <>
                            <Link to='/profile'>
                                <Button>Hello</Button>
                            </Link>
                            <Button onClick={() => dispatch(logout())}>logout</Button>
                        </>
                        :
                        <Login />}

                </div>

            </header>

        </>


    )
}

export default Header;