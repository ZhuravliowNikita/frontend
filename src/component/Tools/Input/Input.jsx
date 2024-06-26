import "./Input.css"

function Input(props) {


    return (

        <div className="flex flex-col text-[24px] text-[#484444] ">
            {props.label}
            <input {...props.register} type={props.type || "string"} className=" p-[15px] rounded-md border-2" />
        </div>


    )
}

export default Input;