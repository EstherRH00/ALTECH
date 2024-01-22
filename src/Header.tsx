import {useState} from "react";
import Clock from "./Clock";

interface HeaderProps {
    initial_counter: number
}
const Header: React.FC<HeaderProps> = ({initial_counter
                                       }: HeaderProps) => {

    const [count, useCount] = useState(initial_counter);

    return (
        <div className='w-full bg-gray-800'>
            <div className='grid grid-cols-3 content-center h-14 '>
                <h1 className='text-2xl text-red-600 m-3 p-3'>My React App.</h1>
                <div className='justify-end'>
                    <p className='text-lg text-red-600 m-3 p-3'>Counter: {count}</p>
                </div>
                <Clock/>
            </div>
        </div>
    )
}

export default Header