import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import "./css/bootstrap/bootstrap.css";
import "./css/font_awesome/css/all.min.css";
import "./css/my.css";
import reportWebVitals from './reportWebVitals';
import './index.css';
import Home from "./pages/home";
import About from "./pages/about";
import Pricing from "./pages/pricing";
import Register from "./pages/register";




const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
        <Route path="/pricing" element={<Pricing />}></Route>
        <Route path="/register" element={<Register />}></Route>
    </Routes>
  </Router>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
