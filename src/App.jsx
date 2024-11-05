import Login from "./components/auth/Login";
import Admin from "./components/dashboard/Admin";
import Employee from "./components/dashboard/Employee";
import AllTask from "./components/other/AllTask";
export default function App() {
  return (
    <>
    <div className="p-12 bg-[#1C1C1C] ">
    <Login/>
    {/* <Employee/>
    <Admin/>
    <AllTask/> */}
    </div>
    </>
  )
}