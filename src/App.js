import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import Team from "./pages/Team";
import Projects from "./pages/Projects";
import Calendar from "./pages/Calendar";
import Documents from "./pages/Documents";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/Team'} element={<Team/>}/>
                <Route path={'/Projects'} element={<Projects/>}/>
                <Route path={'/Calendar'} element={<Calendar/>}/>
                <Route path={'/Documents'} element={<Documents/>}/>
                <Route path={'*'} element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
