import { useEffect, useState } from "react";
import Login from "./components/auth/Login";
import Admin from "./components/dashboard/Admin";
import Employee from "./components/dashboard/Employee";
import AllTask from "./components/other/AllTask";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
import { useContext } from "react";
import { AuthContext } from "./context/AuthProvider";

export default function App() {
  const AuthData = useContext(AuthContext)
 
  
  const [User, setUser] = useState(null)
  useEffect(() => {
    // setLocalStorage()
    getLocalStorage()
  },)
  const handleLogin = (email,password) => {
    if(AuthData.admin.some(admin => admin.email === email && admin.password === password)) {
      setUser('admin');
      console.log('Admin logged in');
    } 
   
    else if(AuthData.emp.some(employee => employee.email === email && employee.password === password)) {  
      setUser('User');
      console.log(`User logged in`);
    }
    else {
      alert("password or username is incorrect");
    }
    
  };
  
  
  return (
    <>
    <div className="p-12 bg-[#1C1C1C] ">
      
    {User ? '' : <Login handleLogin={handleLogin}/>}
    {User == 'admin' ? <Admin /> : <Employee/>}
    {/* <Employee/>
    <Admin/>
    <AllTask/> */}
    </div>
    </>
  )
}