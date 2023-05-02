import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Service from "./components/Service";
import Contact from "./components/Contact"
import NoPage from "./components/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar/>
        <Routes>
          <Route path="/" Component={<Home/>}>
            <Route path="services" Component={<Service/>} />
            <Route path="contact" Component={<Contact/>} />
            <Route path="*" Component={<NoPage/>} />
          </Route>
        </Routes>
      </>
    </BrowserRouter>
  );
}
