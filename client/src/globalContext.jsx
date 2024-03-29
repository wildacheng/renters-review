import React from "react";

const HEROKU_API_ENDPOINT = "/api/";

const defaultGlobalContextValue = {
  user: null,
  setUser: () => {},
};

//set up context
export const GlobalContext = React.createContext(defaultGlobalContextValue);

export const GlobalContextProvider = (props) => {
  React.useEffect(() => {
    requestUserData();
  }, []);
  const requestUserData = async () => {
    const res = await fetch(`${HEROKU_API_ENDPOINT}getUserInfo`, {
      method: "GET",
      credentials: "include",
    });
    const payload = await res.json();
    console.log(payload, "PAYLOAD");
    if (payload.success) {
      setUser(payload.data);
    }
    console.log(payload);
  };

  const { children } = props;
  const [user, setUser] = React.useState("");
  const [isDesktop, setIsDesktop] = React.useState(window.innerWidth > 760);

  const value = {
    user,
    setUser,
    isDesktop,
    setIsDesktop
  };
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
