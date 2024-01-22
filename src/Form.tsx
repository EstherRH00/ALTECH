import {useEffect, useState} from "react";
import useUserList from "./UseUserList";
import {useNavigate} from "react-router-dom";
import profilePage, {ProfilePageProps} from "./ProfilePage";


const Form: React.FC<ProfilePageProps> = ({addElem}: ProfilePageProps) => {

    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({"name": "", "email": "", "password": ""})

    return (
        <div className="flex justify-center w-5/6">
            {
                showModal ? (<>
                            <div
                                className='justify-center backdrop-blur-sm items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-red-800 focus:outline-none'>
                                <div className='relative w-full sm:w-auto mx-4 sm:mx-auto sm:max-w-2xl lg:max-w-3xl'>
                                    <div
                                        className='outline-10 outline-red-800 rounded-lg shadow-lg relative flex flex-col bg-gray-800 outline-none focus:outline-none text-white'>
                                        <label>Information provided: </label>
                                        <label>Name: {formValues.name}:</label>
                                        <label>Email: {formValues.email}:</label>
                                        <label>Password: {formValues.password}:</label>
                                        <button onClick={() => {
                                            addElem(formValues.name, formValues.email, formValues.password);
                                            navigate('/home')
                                        }}>Submit
                                        </button>
                                        <button onClick={() => {
                                            setShowModal(false)
                                        }}>Cancel
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
                        </>

                    ) :
                    null
            }

            <form
                className="m-5 p-5"
                onSubmit={(e: React.SyntheticEvent) => {
                    e.preventDefault();
                    const target = e.target as typeof e.target & {
                        email: { value: string };
                        name: { value: string };
                        password: { value: string };
                    };

                    setFormValues({"name": target.name.value, "email": target.email.value, "password": target.password.value})
                    setShowModal(true);
                }}
            >
                <p className="text-3xl">Information to create new user:</p>

                <div>
                    <label className="text-lg">
                        Name:
                    </label>
                </div>
                <div>
                    <input className="px-3" type="name" name="name" placeholder="name"/>

                </div>
                <div>
                    <label className="text-lg">
                        Email:
                    </label>
                </div>
                <div>
                    <input className="px-3" type="email" name="email" placeholder="email"/>
                </div>
                <div>
                    <label className="text-lg">
                        Password:
                    </label>
                </div>
                <div>
                    <input className="px-3" type="password" name="password" placeholder="password"/>

                </div>
                <div>
                    <input className="text-xl border-black border-2 p-3 m-3" type="submit" value="Submit"/>
                </div>
            </form>
        </div>
    );
}

export default Form;