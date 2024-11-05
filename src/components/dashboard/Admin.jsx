
import Header from '../other/header'
const Admin = () => {
  return (
    <>
      <Header />
      <div className=' w-full mt-10 mb-12 '>
        <h2 className="text-3xl font-bold mb-5">Create Task</h2>
        <form className=" text-white flex  gap-5">
          <div className='w-1/2 '>
            <div>
              <label htmlFor="taskTitle" className="block text-sm font-medium">Task Title</label>
              <input type="text" name="taskTitle" id="taskTitle" className="py-1 mt-1 block w-full rounded-md border-gray-300 bg-[#313131] shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-zinc-400" placeholder="Enter task title..." />
            </div>

            <div>
              <label htmlFor="date" className="block text-sm font-medium">Date</label>
              <input type="date" id="date" name="date" className=" py-1 mt-1 block w-full rounded-md border-gray-300 bg-[#313131] shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-zinc-400" placeholder="Select date..." />
            </div>
            <div>
              <label htmlFor="assignTo" className="block text-sm font-medium">Assign to</label>
              <select id="assignTo" name="assignTo" className=" py-1 mt-1 block w-full rounded-md border-gray-300 bg-[#313131] shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-zinc-400">
                <option value="">Select a person</option>
                <option value="john">John Doe</option>
                <option value="jane">Jane Doe</option>
                <option value="bob">Bob Smith</option>
              </select>
            </div>
            <div>
              <label htmlFor="category" className="block text-sm font-medium">Category</label>
              <select id="category" name="category" className="py-1 mt-1 block w-full rounded-md border-gray-300 bg-[#313131] shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-zinc-400">
                <option value="">Select a category</option>
                <option value="high">High Priority</option>
                <option value="medium">Medium Priority</option>
                <option value="low">Low Priority</option>
              </select>
            </div>

          </div>
          <div className='w-[45%]'>
            <label htmlFor="description" className="block text-sm font-medium">Description</label>
            <textarea id="description" name="description" rows={7} className="mt-1 block w-full rounded-md border-gray-200 bg-[#313131] shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-zinc-400" placeholder="Task description..."></textarea>

            <button type="submit" className="inline-flex justify-center mt-4 rounded-md border border-transparent bg-zinc-500 py-2 px-4 w-[100%] text-sm font-medium text-white shadow-sm hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Create Task</button>
          </div>

        </form>
      </div>
      <hr />
    </>
  )
}

export default Admin