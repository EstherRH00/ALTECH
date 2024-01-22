import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from "./HomePage";
import ProfilePage from "./ProfilePage";
import useUserList from "./UseUserList";
import Sidebar from "./Sidebar";

function App() {

    const { allUsers, addElement} = useUserList()
  return (
<div className="h-full w-full bg-gray-200">
      <Router>
        <Routes>
          <Route path='/home' element={<HomePage userList ={allUsers}/>} />
          <Route path='/profile' element={<ProfilePage addElem={addElement}/>} />
        </Routes>
      </Router></div>

  );
}

export default App;
