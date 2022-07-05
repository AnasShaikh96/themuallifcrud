import React, { lazy, Suspense } from "react";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/cms/Login/Login";

const Quotes = lazy(() => import("./pages/cms/Quotes/Quotes"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/quotes" element={<Quotes />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
