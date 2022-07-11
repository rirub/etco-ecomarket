import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignIn from "./samples/SignIn";
import SignUp from "./samples/SignUp";
import logo from './logo.svg';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/samples/SignIn" element={<SignIn />}></Route>
          <Route path="/samples/SignUp" element={<SignUp />}></Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
