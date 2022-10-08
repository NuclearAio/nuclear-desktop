import React from 'react';
import {Routes, Route} from 'react-router-dom';

import TitleProvider from './context/page-title/TitleProvider';
import AuthProvider from './context/auth/AuthProvider';

import WindowContainer from './components/WindowContainer';
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import Inventory from "./pages/Inventory"
import Profiles from "./pages/Profiles";
import Bot from "./pages/Bot";
import Proxies from "./pages/Proxies";
import Cards from "./pages/Cards";
import Settings from "./pages/Settings";
import Login from "./pages/Login"

import PrivateRoute from "./pages/PrivateRoute"

const App: React.FC = () => {
  return (
    <div className='text-text-color draggable '>
      <AuthProvider>
      <TitleProvider>
      <WindowContainer>
        <Routes>
          <Route path='dashboard'  element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
          <Route path='reports' element={<PrivateRoute><Reports/></PrivateRoute>}/>
          <Route path='inventory' element={<PrivateRoute><Inventory/></PrivateRoute>}/>
          <Route path='profiles' element={<PrivateRoute><Profiles/></PrivateRoute>}/>
          <Route path='bot' element={<PrivateRoute><Bot/></PrivateRoute>}/>
          <Route path='proxies' element={<PrivateRoute><Proxies/></PrivateRoute>}/>
          <Route path='cards' element={<PrivateRoute><Cards/></PrivateRoute>}/>
          <Route path='reports' element={<PrivateRoute><Reports/></PrivateRoute>}/>
          <Route path='settings' element={<PrivateRoute><Settings/></PrivateRoute>}/>
          <Route path='Login' element={<Login/>}/>
        </Routes>
      </WindowContainer>
      </TitleProvider>
      </AuthProvider>
      
    </div>
  )
}

export default App;
