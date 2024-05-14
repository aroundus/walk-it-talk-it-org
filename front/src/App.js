import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Layout from "./layouts/Layout";
import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Layout>
  );
}

export default App;
