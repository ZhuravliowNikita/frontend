
import "./DevelopersInfo.css"
import DeveloperInfo from "./DeveloperInfo/DeveloperInfo";


//

function DevelopersInfo() {
    
    return (
        <div className=" flex-auto flex flex-col space-y-2 overflow-auto items-center p-4 ">
            {/* <JobForm className="" Name="Password Manager node.js" Skills={[{ id: 0, Name: "NodeJS" }, { id: 1, Name: "Express" }, { id: 2, Name: "React" }]} Fullname="Enterprice Corp." /> */}
            <DeveloperInfo  Fullname="Сергеев Андрей Викторович"  ProfilePicture={"https://m.economictimes.com/thumb/msid-102703009,width-1600,height-900,resizemode-4,imgsize-16886/starting-naruto-check-where-to-begin-how-to-watch-heres-your-complete-guide-to-iconic-ninja-series.jpg" || process.env.PUBLIC_URL+"/ProfileIMG.png"} Price="5" Rate="2"  Skills = {[{ id : 0, Name: "JS"},{ if: 1, Name: "React"}, { id: 2, Name: "Express"}]}/>
            
        </div>
    )
}

export default DevelopersInfo;