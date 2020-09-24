import React from "react";

const defaultGlobalContextValue = {
  user: null,
  setUser: () => {},
};

//set up context
export const GlobalContext = React.createContext(defaultGlobalContextValue);


export const GlobalContextProvider = (props) => {
  // React.useEffect( ,[]) -> checks to see
  // if (cookie) {
  //   fetch from local storage
  // } else {
  //   do nothing
  // }


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

