import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import LoginPage from "./components/pages/LoginPage";
import DetailPage from "./components/pages/DetailPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="detail" element={<DetailPage/>}>
          <Route path=":detailId" element={<DetailPage />}/>
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
