import  React, { useState , useEffect } from 'react'
import {useNavigate} from "react-router-dom";

const Sidebar = () => {
    const navigate = useNavigate();
    return (<div className="h-full w-full bg-gray-700">
        <button className="p-2 text-white text-xl" onClick={() => navigate('/home')}>Home</button>
        <br/>
        <button className="p-2 text-white text-xl" onClick={() => navigate('/profile')}>Profile</button>

    </div>)

}
export default Sidebar