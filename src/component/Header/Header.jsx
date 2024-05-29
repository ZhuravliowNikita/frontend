import "./Header.css"
import Login from "./Login";
import React from 'react'
import { Button, Container, Divider, Dropdown, DropdownMenu, DropdownItem } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectIsAuth } from "ReduxSlices/slices/Auth";
import { selectIsCustomerMode } from "ReduxSlices/slices/Main";
import { changeToCustomer, changeToDeveloper } from "ReduxSlices/slices/Main";

import { useNavigate } from "react-router-dom";



function Header() {
    const isAuth = useSelector(selectIsAuth);
    const user = useSelector(state => state.user.auth.user)
    const isCustomerMode = useSelector(selectIsCustomerMode);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const OnClickLogout = () => {
        dispatch(logout());
    };

    const OnProfileClick = () => {
        navigate("profile");
    };

    return (
        <>
            <header className="flex-initial flex flex-row min-h-28 items-center border-b border-[#3b52a0] mx-12">
                <div className=" basis-2/3 flex flex-row space-x-9">
                    <Link to='/'><div className=" h-120  text-white text-[36px] font-normal "><b>Sphere of Labor</b></div></Link>
                    <div className="flex flex-row items-center space-x-5 mt-2 ">
                        <Link to='/'><button onClick={() => dispatch(changeToCustomer())} className={"w-full  rounded-md px-3 text-[24px] text-white font-thin text-center align-middle " + (isCustomerMode && "bg-[#587CDA]")}>Замовники</button></Link>
                        <div className="text-white  text-[2rem] font-thin h-full text-center align-middle">|</div>
                        <Link to='/'> <button onClick={() => dispatch(changeToDeveloper())} className={"w-full rounded-md px-3 text-white text-[24px] font-thin text-center align-middle " + (!(isCustomerMode) && "bg-[#587CDA]")}>Фрiлансери</button></Link>
                    </div>
                </div>
                <div className=" flex justify-end basis-1/3 text-right">
                    {isAuth ?
                        <>
                            <div className="justify-self-end flex flex-col items-center pr-4">
                                <button
                                    onClick={OnProfileClick}
                                    className="items-center w-12 h-12 bg-[#fff] transition ease-in-out delay-15 hover:scale-110 active:bg-zinc-400 hover:bg-[#eee] duration-200 text-violet-500  rounded-full border-2 border-white"
                                >
                                    <img
                                        className=" max-h-[40px] m-auto"
                                        src={process.env.PUBLIC_URL + "/ProfileIMG.png"}
                                        alt=""
                                    />
                                </button>
                                <Dropdown
                                    className=" text-white"
                                    text={user.fullName}
                                    pointing="top right"
                                >
                                    <DropdownMenu>
                                        <DropdownItem
                                            onClick={OnProfileClick}
                                            icon="user"
                                            text="Профіль"
                                        />
                                        <DropdownItem
                                            icon="sign-out"
                                            onClick={OnClickLogout}
                                            style={{
                                                color: "red",
                                                textDecoration: "none",
                                            }}
                                            text="Вийти за аккаунту"
                                        />
                                    </DropdownMenu>
                                </Dropdown>
                            </div>
                        </>
                        :
                        <Login />}

                </div>

            </header>

        </>


    )
}

export default Header;