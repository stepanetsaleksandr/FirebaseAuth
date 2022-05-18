import React from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../routes";
import { LOGIN_ROUTE, CHAT_ROUTE } from "../utils/constants";

const AppRouter = () => {
  const user = false;
  return user ? (
    <Routes>
      {privateRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={Component} exact={true} />
      ))}
      {/* <Navigate replace to={CHAT_ROUTE} /> */}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={Component} exact={true} />
      ))}
      {/* <Navigate replace to={LOGIN_ROUTE} /> */}
    </Routes>
  );
};

export default AppRouter;
