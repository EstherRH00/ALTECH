import { useNavigate } from 'react-router-dom'
import React from "react";
import Header from "./Header";
import Form from "./Form";
import Sidebar from "./Sidebar";

export interface ProfilePageProps{
    addElem: any
}

const ProfilePage: React.FC<ProfilePageProps> = ({addElem}: ProfilePageProps) => {
    return (<div className="flex w-full">
        <div className="w-1/6">
        <Sidebar/>
    </div>
    <div className="w-5/6">
        <Form addElem={addElem}/>
    </div></div>
    );
}

export default ProfilePage