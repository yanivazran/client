import logo from './logo.svg';
import './App.css';
import './styles.css'
import React from "react";

// We use Route in order to define the different routes of our application
import {  Route, Routes } from "react-router-dom";

// We import all  Mongo Db components we need in our app

import RecordList from "./components/mongoComponents/recordList";
import Edit from "./components/mongoComponents/edit";
import Create from "./components/mongoComponents/create";



// We import all  HubSpot components we need in our app

import HubspotRecordList from "./components/hubspotComponents/recordList";
import HubspotInstaller from './components/hubspotComponents/install';

// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
import MongoApi from './components/mongoComponents/mongoApi';
import MainNavbar from './components/mainNavbar';
import HubspotApi from './components/hubspotComponents/hubspotApi';
import AuthPage from './components/authComponents/auth';
import { Example } from './components/authComponents/formikTest';




function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavLink to="/">
        <img src={logo} className="App-logo" alt="logo" />
      </NavLink>
      </header>
      <div>
      <MainNavbar />
          <Routes>
            <Route exact path="/auth" element = {<AuthPage />}/>
            <Route exact path="/authtest" element = {<Example />}/>
            <Route exact path="/mongoApi" element={<MongoApi />} />
            <Route exact path="/mongoApi/recordList" element={<RecordList />} />
            <Route exact path="/hubspotApi" element={<HubspotApi />} />
            <Route path="/hubspotApi/recordList" element={<HubspotRecordList />} /> 
            <Route path='/hubspotApi/install' element={<HubspotInstaller />} />            
          </Routes>
        
      </div>
    </div>
    
  );
}

export default App;


/*  
  <Route exact path="/hubspotApi" element={<HubspotApi />} />
            <Route path="/hubspotApi/recordList" element={<HubspotRecordList />} /> 
            <Route path='/hubspotApi/install' element={<HubspotInstaller />} />
<Route path="/mongoApi/create" element={<Create />} />
            <Route path="/edit/:id" element={<Edit />} />*/