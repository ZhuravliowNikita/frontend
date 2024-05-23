import "./TextArea.css"

function TextArea(props) {


    return (

        <div className="flex flex-col text-[24px] text-[#484444] ">
            {props.label}
            <textarea {...props.register} style={{resize:"none"}} maxLength={15000} className=" h-[22rem] p-[15px] text-[16px] rounded-md" />
        </div>


    )
}

export default TextArea;