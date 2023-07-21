import React from "react";
import "./App.css";
import { GlobalContext } from "./context";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routers";

const App = () => {
  const user = {
    username: "Reka Rachmadi Apriansyah - Lempar",
  };
  return (
    <div>
      <GlobalContext.Provider value={user}>
        <RouterProvider router={router} />
      </GlobalContext.Provider>
    </div>
  );
};

export default App;
