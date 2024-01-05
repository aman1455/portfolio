import {  Routes, Route} from "react-router-dom";
import Home from "./Home";
import About from "./About.jsx";
import Project from "./Project.jsx";
import Skill from "./Skill.jsx";

function Rout() {
    return ( <>
    
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/project" element={<Project/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/skills" element={<Skill/>}/>
            



        
    </Routes>  
    </> );
}

export default Rout;