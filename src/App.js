import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Create from "./pages/Create";
import Feed from "./pages/Feed";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employer">
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="create" element={<Create />} />
          </Route>
          <Route path="/employee/feed" element={<Feed />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
