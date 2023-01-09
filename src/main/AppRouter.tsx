import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Navigations from "../components/Navifations";
import HomePage from "../pages/HomePage";
import Login from "../pages/LoginPage";

const AppRouter = () => {
    return <Router>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    </Router>
}

export default AppRouter