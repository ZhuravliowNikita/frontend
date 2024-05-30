import DropList from "component/Tools/Dropdown/Drop";
import "./ContactView.css"
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import Input from "component/Tools/Input/Input";
import React from "react";


function ContactView(props) {

    


    return (
        <div className=" flex flex-row w-full items-center space-x-3 text-[24px] border-2 rounded-lg p-2">

            <div className=" grow flex flex-row items-center space-x-2">{props.Type}</div>
            <div className="grow">{props.Value}</div>
            <div><button onClick={props.onDeclineClick} className=" bg-[#d35047] text-white px-2 w-fit rounded-lg">✎</button></div>

        </div>


    )
}

export default ContactView;