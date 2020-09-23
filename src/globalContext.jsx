import React from "react";

const defaultGlobalContextValue = {
  user: null,
  setUser: () => {},
};

//set up context
export const GlobalContext = React.createContext(defaultGlobalContextValue);


export const GlobalContextProvider = (props) => {
  const { children } = props;
  const [user, setUser] = React.useState("");

  const value = {
    user,
    setUser,
  };
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

