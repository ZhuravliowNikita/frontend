


function JobForm(props) {

    const Name = props.Name
    const Skills = props.Skills
    const Fullname = props.Fullname

    return (
        <div className="flex-auto w-full bg-white h-fit rounded-lg flex flex-col p-2 space-y-4 text-[#464343]">
            <div className=" text-[20px] font-semibold">{Name}</div>
            <div className="flex flex-row w-full">
                <div className="w-full flex flex-row space-x-3 ">{Skills && Object.values(Skills).map(skill => { return <div className=" bg-[#C8C8C8] rounded-md px-2 text-center">{skill.Name}</div> })}</div>
                <div className=" w-full text-right">{Fullname}</div>
            </div>

        </div>
    )
}





export default JobForm;