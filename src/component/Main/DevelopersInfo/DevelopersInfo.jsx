
import "./DevelopersInfo.css"
import DeveloperInfo from "./DeveloperInfo/DeveloperInfo";


//

function DevelopersInfo() {
    
    return (
        <div className=" flex-auto flex flex-col space-y-2 overflow-auto items-center p-4 ">
            {/* <JobForm className="" Name="Password Manager node.js" Skills={[{ id: 0, Name: "NodeJS" }, { id: 1, Name: "Express" }, { id: 2, Name: "React" }]} Fullname="Enterprice Corp." /> */}
            <DeveloperInfo className="" Fullname="Гандон Виталий Гандонович"  ProfilePicture={"https://m.economictimes.com/thumb/msid-102703009,width-1600,height-900,resizemode-4,imgsize-16886/starting-naruto-check-where-to-begin-how-to-watch-heres-your-complete-guide-to-iconic-ninja-series.jpg"} Price="5" Rate="2"  Skills = {[{ id : 0, Name: "JS"},{ if: 1, Name: "React"}, { id: 2, Name: "Express"}]}/>
            <DeveloperInfo className="" Fullname="Гандон Виталий Гандонович"  ProfilePicture={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHbqVG8EW5nI6QeWeYSMiV6--vY9LMcptY5LHUaSC7w&s"} Price="5" Rate="3" />
            <DeveloperInfo className="" Fullname="Гандон Виталий Гандонович"  ProfilePicture={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHbqVG8EW5nI6QeWeYSMiV6--vY9LMcptY5LHUaSC7w&s"} Price="5" Rate="1" />
            <DeveloperInfo className="" Fullname="Гандон Виталий Гандонович"  ProfilePicture={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHbqVG8EW5nI6QeWeYSMiV6--vY9LMcptY5LHUaSC7w&s"} Price="5" Rate="4" />
            <DeveloperInfo className="" Fullname="Гандон Виталий Гандонович"  ProfilePicture={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHbqVG8EW5nI6QeWeYSMiV6--vY9LMcptY5LHUaSC7w&s"} Price="5" />
            <DeveloperInfo className="" Fullname="Гандон Виталий Гандонович"  ProfilePicture={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHbqVG8EW5nI6QeWeYSMiV6--vY9LMcptY5LHUaSC7w&s"} Price="5" />
            <DeveloperInfo className="" Fullname="Гандон Виталий Гандонович"  ProfilePicture={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHbqVG8EW5nI6QeWeYSMiV6--vY9LMcptY5LHUaSC7w&s"} Price="5" />
            <DeveloperInfo className="" Fullname="Гандон Виталий Гандонович"  ProfilePicture={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHbqVG8EW5nI6QeWeYSMiV6--vY9LMcptY5LHUaSC7w&s"} Price="5" />
            <DeveloperInfo className="" Fullname="Гандон Виталий Гандонович"  ProfilePicture={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHbqVG8EW5nI6QeWeYSMiV6--vY9LMcptY5LHUaSC7w&s"} Price="5" />
            
        </div>
    )
}

export default DevelopersInfo;