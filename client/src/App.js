import React, { lazy, Suspense } from "react";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/cms/Login/Login";
import QuotesAdd from "./pages/cms/Quotes/QuotesAdd";
import QuotesEdit from "./pages/cms/Quotes/QuotesEdit";

const Quotes = lazy(() => import("./pages/cms/Quotes/Quotes"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/quotes" element={<Quotes />} />
            <Route path="/quotes/add" element={<QuotesAdd />} />
            <Route path="/quotes/edit" element={<QuotesEdit />} />


          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
