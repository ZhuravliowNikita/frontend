import { Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './component/Header/Header'
import Footer from './component/Footer/Footer';
import Main from './component/Main/Main';



function App() {
    return (
        <div className=' h-screen'>
            <Header />
            <Routes>
                <Route path='/' element={<Main />} />
            </Routes>
            <Footer className='mt-auto' />
        </div>
    )
}

export default App;