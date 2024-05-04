import MyModal from "../Tools/Modal/Modal";
import ModalExampleCloseIcon from "../Tools/Modal/Modal";
import "./Header.css"
import Login from "./Login";
import React from 'react'
import {Button} from 'semantic-ui-react'
import { Link } from "react-router-dom";


function Header() {
    const [isAuth] = React.useState(true)
    return (
        <>
            <header className="flex flex-row bg-zinc-200 min-h-28 items-center">
                <div className=" basis-2/3">
                    <Link to='/'><div className=" rounded-full bg-red-600 w-20 h-20 ml-28"></div></Link>
                </div>
                <div className=" basis-1/3 text-right mr-64">
                    {isAuth ? <Link to='/profile'><Button>Hello</Button></Link> :<Login /> }
                </div>
            </header>

        </>


    )
}

export default Header;