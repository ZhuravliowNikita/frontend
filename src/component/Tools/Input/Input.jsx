import "./Input.css"

function Input(props) {


    return (

        <div className="flex flex-col text-[24px] text-[#484444] ">
            {props.label}
            <input className=" p-[15px] rounded-md" />
        </div>


    )
}

export default Input;