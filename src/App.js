import { Fragment, React } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingScreen from "./pages/LandingScreen";
import Login from "./pages/login/Login";
import Documents from "./pages/document/Documents";
import Dashboard from "./pages/dashboard/Dashboard";

const routes = (
  <Routes>
    <Route path={"/"} element={<LandingScreen />}></Route>
    <Route path={"/ocean/login"} element={<Login />}></Route>
    <Route path={"/dashboard"} element={<Dashboard />}></Route>
    <Route path={"/documents"} element={<Documents />}></Route>
    <Route path='/' />
  </Routes>
);

const App = () => {
  return <Fragment>{routes}</Fragment>;
};

export default App;
