import React from 'react'

const defaultGlobalContextValue = {
  user: null,
  setUser: () => {}
}

const GlobalContext = React.createContext(defaultGlobalContextValue)

const GlobalContextProvider = (props) => {
  const { children } = props
  const [user, setUser] = React.useState('')

  const value = {
    user,
    setUser
  }
  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContextProvider
