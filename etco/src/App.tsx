import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SigninSample from "./samples/SigninSample";
import logo from './logo.svg';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/samples/signin" element={<SigninSample />}></Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
