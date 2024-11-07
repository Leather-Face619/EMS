
const Header = () => {
  return (
   <>
   <div className="flex items-end justify-between text-xl">
    <div>
<h1>Hello, <br /><span className="text-3xl font-extrabold"> Nothing 🤘</span></h1>
    </div>
    <button className="text-white font-semibold bg-red-500 p-2 rounded-xl border border-red-400 cursor-pointer transition bg-red-700 hover:bg-red-900 select-none" onClick={() => window.location.href='/login'}>Log out</button>
   </div>
   </>
  )
}

export default Header