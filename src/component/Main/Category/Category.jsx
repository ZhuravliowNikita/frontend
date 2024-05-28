import "./Category.css"
import { Button, Input } from 'semantic-ui-react'

function Category(props) {

    const Name = props.Name

    return (
        <div className=" w-full">
            <button onClick={props.onClick} className={(props.isActive ? "bg-[#eee] text-[#333]" : "bg-[#545f9d]") + "  text-white text-nowrap px-4 py-1 w-full rounded-lg text-left text-[1.3rem] hover:bg-[#B2B6CB] hover:text-[#2D2D2D]"}>{Name}</button>
        </div>


    )
}

export default Category;