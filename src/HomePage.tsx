import {useNavigate} from 'react-router-dom'
import React from "react";
import Header from "./Header";
import UserList from "./UserList";
import userList from "./UserList";
import Sidebar from "./Sidebar";

export interface HomePageProps {
    userList: { id: number, name: string, email: string, password: string }[]
}

const HomePage: React.FC<HomePageProps> = ({
                                               userList
                                           }: HomePageProps) => {
    return (

        <div className="flex w-full">

            <div className="w-1/6">
                <Sidebar/>
            </div>
            <div className="w-5/6">
                <Header initial_counter={10}/>
                <UserList userList={userList}/>
            </div>
        </div>
    );
}

export default HomePage