import "./Contacts.css"
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ContactCreate from "./ContactCreate/ContactCreate";
import { createContact, fetchContacts } from "ReduxSlices/slices/Profile";
import ContactView from "./ContactView/ContactView";

function Contacts() {

    const user = useSelector(state => state.user.auth.user)
    const [createState, setState] = React.useState(false)
    const [currentContactType, setContactType] = React.useState(null)
    const contacts = useSelector(state => state.profile.contacts)
    const dispatch = useDispatch();

    const OnSubmit = async (params) => {
        await dispatch(createContact({ ...params, Type: currentContactType }))
        await dispatch(fetchContacts({userId: user?._id}));
        setState(false);
    };

    return (
        <div className="flex flex-col items-center max-h-[40rem] space-y-4">

            {contacts && contacts.map(contact => {return <ContactView Type={contact.Type.Name} Value={contact.contactValue} />})}

            {!createState && <button className=" bg-[#eee] p-2 size-[40px] rounded-lg" onClick={() => setState(true)}>+</button>}
            {createState && <ContactCreate setContactType={setContactType} OnSubmit={OnSubmit} onDeclineClick={() => setState(false)} />}
        </div>


    )
}

export default Contacts;