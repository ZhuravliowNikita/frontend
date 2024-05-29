import { Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './component/Header/Header'
import Main from './component/Main/Main';
import Form from 'component/Form/Form';
import Profile from "component/Profile/Profile"
import React from "react";
import { useDispatch } from 'react-redux';
import { fetchAuthMe } from 'ReduxSlices/slices/Auth';
import { fetchContactType } from "ReduxSlices/slices/Profile"


function App() {
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(fetchAuthMe());
        dispatch(fetchContactType());
    }, [dispatch]);

    return (
        <div className=" flex flex-col h-full w-full">
            <Header />

            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/form' element={<Form />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>

        </div>
    )
}

export default App;