import React from 'react';
import k from'./App.module.css';
import Zagolovok from './components/Header/Zagolovok';
import NavBar from './components/navBar/navBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Routes, Route} from 'react-router-dom';





const App = () => {
  return (
    <BrowserRouter>
    <div className={k.appwrapper}>
      <Zagolovok />
      <NavBar />
      <div className={k.content}>
      <Routes>
      <Route path='/dialogs' element={<Dialogs/>}/>
      <Route path="/profile" element={<Profile/>}/>

      </Routes>

      {/* <Dialogs /> */}
      {/* <Profile /> */}
      </div>
    </div>
    </BrowserRouter>
  );
}



export default App;
