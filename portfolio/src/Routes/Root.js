import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";


export default function Root(){
    const box = {display:'flex', flexDirection:'column', height:'100vh', justifyContent:'center'}

    return(
        <div style={box}>
            <Navbar />
            <Outlet />
        </div>
    )
}