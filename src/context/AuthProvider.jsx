import { createContext, useEffect, useState } from "react"
import { getLocalStorage } from "../utils/LocalStorage"

export const AuthContext = createContext() 
const AuthProvider = ({children}) => {
  const [UserData, setUserData] = useState(null)
useEffect(() => {
  const {emp,admin} = getLocalStorage()
  setUserData({emp,admin})
  
  
  
}, [])


  
  return (
<AuthContext.Provider value={UserData}>
    <div>{children}</div>
</AuthContext.Provider>
  )
}

export default AuthProvider