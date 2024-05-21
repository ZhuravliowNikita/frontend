import { Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './component/Header/Header'
import Footer from './component/Footer/Footer';
import Main from './component/Main/Main';
import Form from 'component/Form/Form';
import React from "react";
import { useDispatch } from 'react-redux';
import { fetchAuthMe } from 'ReduxSlices/slices/Auth';


function App() {
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(fetchAuthMe());
    }, [dispatch]);

    return (
        <div className=" flex flex-col h-full w-full">
            <Header />

            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/form' element={<Form />} />
            </Routes>

        </div>
    )
}

export default App;