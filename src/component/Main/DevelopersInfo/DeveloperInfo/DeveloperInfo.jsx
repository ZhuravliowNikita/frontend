
import { Rating } from "semantic-ui-react"

function DeveloperInfo(props) {

    const Price = props.Price
    const Skills = props.Skills
    const Fullname = props.Fullname
    const Rate = props.Rate
    const ProfilePicture = props.ProfilePicture
    console.log(ProfilePicture)
    return (
        <div className="flex flex-col flex-initial w-full h-fit bg-white  rounded-lg px-4 py-2 hover:bg-[#999] hover:text-white">
            <div className="flex flex-row items-start h-fit  overflow-clip w-full">
                <div className=" flex space-x-4 h-fit">
                    <div className=" w-[150px] h-fit"><img className="rounded-sm w-full" src={ProfilePicture} alt="profile picture" /></div>
                    <div className="flex flex-col w-fit h-fit">
                        <div className="text-[18px] text-[#4E4C4C] truncate max-w-[35rem]">{Fullname}</div>
                        <div className=""><Rating defaultRating={+Rate} maxRating={5} disabled /></div>
                    </div>
                </div>
                <div className="w-full text-end text-[#4E4C4C] text-[32px] font-bold ">{Price}$</div>
            </div>
            <div className="w-full   flex items-end flex-row space-x-3 py-2 ">{Skills && Object.values(Skills).map(skill => { return <div className=" bg-[#C8C8C8] rounded-md px-2 text-center">{skill.Name}</div> })}</div>
        </div>
    )
}





export default DeveloperInfo;