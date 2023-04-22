import { Fragment, React } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingScreen from "./pages/LandingScreen";
import Login from "./pages/login/Login";

const routes = (
  <Routes>
    <Route path={"/"} element={<LandingScreen />}></Route>
    <Route path={"/login"} element={<Login />}></Route>
  </Routes>
);

const App = () => {
  return <Fragment>{routes}</Fragment>;
};

export default App;
