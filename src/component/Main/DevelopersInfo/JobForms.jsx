
import DeveloperInfo from "../DeveloperInfo";
import JobForm from "./JobForm/JobForm";
import "./DevelopersInfo.css"
import { Button, Input } from 'semantic-ui-react'

//Skills = {[{ id : 0, Name: "JS"},{ if: 1, Name: "React"}, { id: 2, Name: "Express"}]}

function DevelopersInfo() {

    return (
        <div className=" flex-auto flex flex-col space-y-2 overflow-auto items-center p-4 ">
            {/* <JobForm className="" Name="Password Manager node.js" Skills={[{ id: 0, Name: "NodeJS" }, { id: 1, Name: "Express" }, { id: 2, Name: "React" }]} Fullname="Enterprice Corp." /> */}
            <DeveloperInfo className="" Fullname="Гандон Виталий Гандонович"  ProfilePicture="%PUBLIC_URL%/secret.png" />
        </div>
    )
}

export default DevelopersInfo;