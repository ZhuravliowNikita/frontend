import DropList from "../Tools/Dropdown/Drop";
import JobForm from "./JobForm/JobForm";
import "./Main.css"
import { Input } from 'semantic-ui-react'
const options = [
    { key: 'angular', text: 'Angular', value: 'angular' },
    { key: 'css', text: 'CSS', value: 'css' },
    { key: 'design', text: 'Graphic Design', value: 'design' },
    { key: 'ember', text: 'Ember', value: 'ember' },
    { key: 'html', text: 'HTML', value: 'html' },
    { key: 'ia', text: 'Information Architecture', value: 'ia' },
    { key: 'javascript', text: 'Javascript', value: 'javascript' },
    { key: 'mech', text: 'Mechanical Engineering', value: 'mech' },
    { key: 'meteor', text: 'Meteor', value: 'meteor' },
    { key: 'node', text: 'NodeJS', value: 'node' },
    { key: 'plumbing', text: 'Plumbing', value: 'plumbing' },
    { key: 'python', text: 'Python', value: 'python' },
    { key: 'rails', text: 'Rails', value: 'rails' },
    { key: 'react', text: 'React', value: 'react' },
    { key: 'repair', text: 'Kitchen Repair', value: 'repair' },
    { key: 'ruby', text: 'Ruby', value: 'ruby' },
    { key: 'ui', text: 'UI Design', value: 'ui' },
    { key: 'ux', text: 'User Experience', value: 'ux' },
]

function Main() {
    return (
        <div className="h-full w-full m-auto">
            <div className=" flex flex-row h-full w-full items-center justify-self-center mt-auto">
                <div className=" flex flex-col h-full basis-1/3 bg-zinc-200 p-4">
                    <Input icon={{ name: 'search', circular: true, link: true }}
                        placeholder='Search...' />
                    <DropList options={options} />
                </div>

                <div className=" basis-2/3 flex flex-col space-y-2 h-full p-6 ">
                    <JobForm />
                    <JobForm />
                    <JobForm />
                    <JobForm />
                    <JobForm />
                    <JobForm />
                    <JobForm />
                    <JobForm />
                    <JobForm />
                    <JobForm />
                    <JobForm />
                    <JobForm />


                </div>
            </div>
        </div>


    )
}

export default Main;