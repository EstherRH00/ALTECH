import {useEffect, useState} from "react";

function useUserList() {


    const [usersFromFile, setUsersFromFile] =useState<{ id: number, name: string , email: string, password: string }[]>([])
    const [allUsers, setAllUsers] =useState<{ id: number, name: string, email: string, password: string  }[]>([])

    const [userList, setUserList] = useState<{ id: number, name: string , email: string, password: string }[]>([])


    useEffect(() => {
        const fetchData = async () => {

            try {
                const response = await fetch('./users.json');
                const aux = await response.json();
                const users = aux.users as { id: number, name: string, email: string, password: string }[]
                setUsersFromFile(users)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const addElement = (name: string, email: string, password: string) => {
        const maxId = Math.max(...allUsers.map((item) => item.id), 0);

        const newElement = {
            id: maxId + 1,
            name: name,
            email: email,
            password: password
        };

        setUserList([...userList, newElement]);
    };

    useEffect(() => {
        setAllUsers([...userList, ...usersFromFile]);
    }, [usersFromFile, userList]);

    return{ allUsers, addElement}
}

export  default useUserList;