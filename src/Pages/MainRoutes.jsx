import React from "react";
import { Route, Routes } from "react-router-dom";
import { Homepage } from "./Homepage";
import { Login } from "./Login";
import { EditBook } from "./EditBook";

export const MainRoutes = () => {
  return <Routes>
    <Route path="/" element={<Homepage/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/edit/:id" element={<EditBook />} />

  </Routes>;
};
