import { useContext, useState } from "react"
import { Context } from "../Context/Context"
import { TextNormal } from "../components"
import { AddIcon,  CancelIcon, CheckIcon, DeleteIcon, MoreIcon, UpdateIcon } from "../assets/icons"
import { Link } from "react-router-dom"

const Projects = () => {
    const {projects, setProjects , deleteBtn, updateBtn, addProject} = useContext(Context)
    const [menuOpen, setMenuOpen] = useState(false);
    const [addMenuOpen, setAddMenuOpen] = useState(false)
    const [itemId, setItemId] = useState(null)

    function handleCreate(e){
    e.preventDefault()
    const data = {
        id: projects[projects.length -1]?.id ? projects[projects.length -1].id +1 : 1,
        name:e.target.name.value,
        budget:e.target.budget.value ,
        status:e.target.status.value,
        completetion: e.target.completetion.value,
        img:e.target.image.value,
    }
    addProject(data)
    setAddMenuOpen(false)
  }

  return (
    <div>
    <div className='authors-table p-[25px] rounded-[20px] '>
      <div className="flex  gap-[55px] mb-[23px]">
        <div className="flex flex-col gap-[6px]">
          <TextNormal extraClass={"font-bold text-[18px]"} title={"Projects"} />
          <div className="flex items-center gap-[5px]">
          <CheckIcon/>
          <TextNormal title={"30 done this month"}/>
          </div>
        </div>
        <button onClick={() => setAddMenuOpen(true)} className="cursor-pointer text-white "><AddIcon/></button>
      </div>
      <table className="w-full">
        <thead>
          <tr className="border-b-[1px]w-full ">
            <th className="text-start pl-[5px] text-[10px] leading-[150%] text-[#A0AEC0]">COMPANIES</th>
            <th className="text-start text-[10px] leading-[150%] text-[#A0AEC0]">BUDGET</th>
            <th className="text-start pl-[10px] text-[10px] leading-[150%] text-[#A0AEC0]">STATUS</th>
            <th className="text-start text-[10px] leading-[150%] text-[#A0AEC0]">COMPLETION</th>
          </tr>
        </thead>
        <tbody>
          {projects.map(item => (
            <tr className="relative border-t-[1px] border-t-[#56577A] " key={item.id}>
              <td className="flex items-center gap-[15px]">
                <img className="py-[11px] rounded-full" src={item.img} alt="img" width={20} height={19} />
                <TextNormal extraClass={"text-white"} title={item.name}/>
              </td>
              <td>
                <TextNormal extraClass={"text-white"} title={item.budget}/>
              </td>
              <td>
                <TextNormal extraClass={"text-white"} title={item.status}/>
              </td>

              <td>
                <TextNormal extraClass={"text-white"} title={item.completetion}/>
                <div className="w-[125px] bg-[#2D2E5F] h-[2px] relative">
                  <span className="w-[60%] bg-[#0075FF] absolute"></span>
                </div>
              </td>
              <td>
                <button onClick={() => {setMenuOpen(true); setItemId(item)}} className="text-white cursor-pointer">
                  <MoreIcon/>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Modal */}
        <div className={`${menuOpen ? "duration-300 w-[200px] bg-[rgba(11,20,68,0.74)] p-2 absolute top-3 rounded-lg right-3  backdrop-blur-[5px] z-55" : "hidden"}`}>
          <div className="flex justify-end mb-[4px]">
          <button onClick={() => setMenuOpen(false)} className="text-red-950 cursor-pointer hover:scale-[1.1] duration-300"><CancelIcon/></button>
          </div>
          <div className="flex items-center justify-around">
           <button onClick={() => updateBtn(itemId.id)} className="text-white cursor-pointer hover:scale-[1.3] duration-300">
            <UpdateIcon/>
           </button>
           <Link className="text-white text-[16px] hover:scale-[1.1] duration-300">About</Link>
           <button onClick={() => deleteBtn(itemId.id)} className="text-white cursor-pointer hover:scale-[1.3] duration-300">
            <DeleteIcon/>
           </button>
          </div>
        </div>

        {/* Add Menu */}
        {addMenuOpen && (
        <div className="w-[300px] p-3 absolute left-80 top-3">
            <form onSubmit={handleCreate} autoComplete="off" className=" p-[20px] bg-slate-600 rounded-md space-y-2 w-[300px] text-center">
              <h2 className="text-[20px] font-medium text-white">Add Project</h2>
              <input className="w-full p-2 border-[1.5px] border-slate-400 rounded-[10px] outline-none focus:shadow-md shadow-slate-200 text-white" required type="text" placeholder="name" name="name" />
              <input className="w-full p-2 border-[1.5px] border-slate-400 rounded-[10px] outline-none focus:shadow-md shadow-slate-200 text-white" required type="text" placeholder="budget" name="budget" />
              <input className="w-full p-2 border-[1.5px] border-slate-400 rounded-[10px] outline-none focus:shadow-md shadow-slate-200 text-white" required type="text" placeholder="status" name="status" />
              <input className="w-full p-2 border-[1.5px] border-slate-400 rounded-[10px] outline-none focus:shadow-md shadow-slate-200 text-white" required type="text" placeholder="completetion" name="completetion" />
              <input className="w-full p-2 border-[1.5px] border-slate-400 rounded-[10px] outline-none focus:shadow-md shadow-slate-200 text-white" required type="text" placeholder="image URL" name="image" />
              <div className="flex justify-between">
                <button  onClick={() => setAddMenuOpen(false)} className="duration-300 cursor-pointer  bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600">Cancel</button>
                <button type="submit" className="duration-300 cursor-pointer bg-green-600 text-white px-3 py-2 rounded-md hover:bg-green-700">Add</button>
              </div>
            </form>
          </div>
        )}

    </div>
    </div>
  )
}

export default Projects
