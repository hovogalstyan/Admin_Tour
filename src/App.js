import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Profile from "./pages/Profile";
import Login from "./pages/Login";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Login/>}/>
                <Route path={'/profile'} element={<Profile/>}/>
                <Route path={'*'} element={<Profile/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
