import * as React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import './App.css'

import Home from './screens/Home'
import Detail from './screens/Detail'

import { BookContextProvider } from "./context/book";

export default function App() {
  return (
    <BookContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </BookContextProvider>
  );
}