
import "./DevelopersInfo.css"
import DeveloperInfo from "./DeveloperInfo/DeveloperInfo";


//[{ id : 0, Name: "JS"},{ if: 1, Name: "React"}, { id: 2, Name: "Express"}]

function DevelopersInfo(props) {
    const developers = props.developers
    return (
        <div className=" flex-auto flex flex-col space-y-2 overflow-auto items-center p-4 ">
            {/* <JobForm className="" Name="Password Manager node.js" Skills={[{ id: 0, Name: "NodeJS" }, { id: 1, Name: "Express" }, { id: 2, Name: "React" }]} Fullname="Enterprice Corp." /> */}
            {developers && developers.map(dev =>{
                return <DeveloperInfo  
                Fullname={dev.fullName}
                ProfilePicture={dev.avatarUrl || process.env.PUBLIC_URL+"/ProfileIMG.png"}
                Price={dev.Profile.pricePerHour}
                Rate={(dev.Profile.Speed + dev.Profile.Quality + dev.Profile.Communication) / 3}
                Skills = {dev.Profile.Skills && dev.Profile.Skills.length > 0 && dev.Profile.Skills.map(profileSkill => { return{id:profileSkill._id, Name:profileSkill.Skill.skillName}})}
                />
            })}
        
            
        </div>
    )
}

export default DevelopersInfo;