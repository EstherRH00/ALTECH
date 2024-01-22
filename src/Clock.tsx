import  React, { useState , useEffect } from 'react'

const Clock = () => {

    var [date,setDate] = useState(new Date());
const [running, setRunning] = useState(true);

    useEffect(() => {
        if(running){
            var timer = setInterval(()=>setDate(new Date()), 1000 )
            return function cleanup() {
                clearInterval(timer)
            }
        }

    });

    return(
        <div className="flex">
        <p className='text-lg text-red-600 m-3 p-3'> Time : {date.toLocaleTimeString()}</p>
        <button  className='text-lg text-red-600 border-red-600 border-2 p-3 m-3' onClick={() => setRunning(!running)}>{running? 'Stop' : 'Restart'}</button>
        </div>
    )
}

export default Clock