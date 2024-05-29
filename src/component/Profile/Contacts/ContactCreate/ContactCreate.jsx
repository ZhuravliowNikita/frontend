import DropList from "component/Tools/Dropdown/Drop";
import "./ContactCreate.css"
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import Input  from "component/Tools/Input/Input";
import React from "react";


function ContactCreate(props) {

    const contactTypes = useSelector(state => state.profile.contactTypes)
    

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isValid },
    } = useForm({

        mode: "onChange",
    });

   

    return (
        <form  className=" flex flex-row w-full items-center space-x-3">
            
            <div className=" w-1/2 flex flex-row items-center space-x-2"><div className=" text-[24px]">Тип </div> <div className="w-full"><DropList onChange={(_, data) => { props.setContactType(data.value) }} label="" options={contactTypes.map(type => { return { key: type._id, text: type.Name, value: type._id } })} /></div></div>
            <div className="w-1/2"><Input register={register("Value")} label="" /></div>
            <div><button onClick={props.onDeclineClick} className=" bg-[#d35047] text-white p-2 size-[40px] rounded-lg">x</button></div>
            <div><button onClick={handleSubmit(props.OnSubmit)} className=" bg-[#82bb40] text-white p-2 size-[40px] rounded-lg">✓</button></div>
        </form>


    )
}

export default ContactCreate;