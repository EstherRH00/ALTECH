import {useEffect, useState} from "react";
import useUserList from "./UseUserList";
import {useNavigate} from "react-router-dom";
import {HomePageProps} from "./HomePage";


const UserList: React.FC<HomePageProps> = ({
                                               userList
                                           }: HomePageProps) => {

    const navigate = useNavigate()

    return (
        <div className='w-full bg-gray-200 flex justify-center align-center'>
            <div>
                <label className="text-xl text-color-black p-3">Registered users</label>
                <ul className="list-disc w-full m-3 p-3">
                    {userList.map((user) => <li key={user.id}>{user.name}</li>)}
                </ul>
                <br/>
                <button className="p-3 m-3 border-red-600 border-2"
                        onClick={() => {
                            navigate('/profile')
                        }}
                >
                    Add user
                </button>
            </div>
        </div>
    )
}

export default UserList