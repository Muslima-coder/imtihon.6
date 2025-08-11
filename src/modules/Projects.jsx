import { useContext, useState } from "react"
import { Context } from "../Context/Context"
import { TextNormal } from "../components"
import { AddPersonIcon, CancelIcon, CheckIcon, DeleteIcon, MoreIcon, UpdateIcon } from "../assets/icons"
import { Link } from "react-router-dom"

const Projects = () => {
    const {authors, setAuthors, deleteBtn, updateBtn, addAuthor} = useContext(Context)
    const [menuOpen, setMenuOpen] = useState(false);
    const [addMenuOpen, setAddMenuOpen] = useState(false)
    const [itemId, setItemId] = useState(null)

    function handleCreate(e){
    e.preventDefault()
    const data = {
        id: authors[authors.length -1]?.id ? authors[authors.length -1].id +1 : 1,
        name:e.target.name.value,
        email:e.target.email.value ,
        profession:e.target.profession.value,
        position: e.target.position.value,
        status: e.target.status.value,
        img:e.target.image.value,
        employed: new Date().toLocaleDateString()
    }
    // setAuthors(data)
    addAuthor(data)
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
        <button onClick={() => setAddMenuOpen(true)} className="cursor-pointer text-white "><AddPersonIcon/></button>
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
          {authors.map(item => (
            <tr className="relative border-t-[1px] border-t-[#56577A] " key={item.id}>
              <td className="flex items-center gap-[15px]">
                <img className="py-[11px] rounded-full" src={item.img} alt="img" width={40} height={40} />
                <div className="flex flex-col">
                <TextNormal extraClass={"text-white"} title={item.name}/>
                <TextNormal extraClass={"text-[#A0AEC0]"} title={item.email}/>
              </div>
              </td>
              <td>
                <TextNormal extraClass={"text-white"} title={item.profession}/>
                <TextNormal extraClass={"text-[#A0AEC0]"} title={item.position}/>
              </td>
              <td>
                <div className={item.status === "Online" ? "cursor-pointer text-[14px] leading-[140%] w-[65px] h-[25px] rounded-[8px] text-white flex justify-center items-center border-none bg-[#01B574] " : "cursor-pointer text-[14px] leading-[140%] w-[65px] h-[25px] rounded-[8px] text-white flex justify-center items-center border-[1px] border-white "}>
                {item.status}
                </div>
              </td>

              <td>
                <TextNormal extraClass={"text-white"} title={item.employed}/>
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
              <h2 className="text-[20px] font-medium text-white">Add Person</h2>
              <input className="w-full p-2 border-[1.5px] border-slate-400 rounded-[10px] outline-none focus:shadow-md shadow-slate-200 text-white" required type="text" placeholder="name" name="name" />
              <input className="w-full p-2 border-[1.5px] border-slate-400 rounded-[10px] outline-none focus:shadow-md shadow-slate-200 text-white" required type="text" placeholder="email" name="email" />
              <input className="w-full p-2 border-[1.5px] border-slate-400 rounded-[10px] outline-none focus:shadow-md shadow-slate-200 text-white" required type="text" placeholder="profession" name="profession" />
              <input className="w-full p-2 border-[1.5px] border-slate-400 rounded-[10px] outline-none focus:shadow-md shadow-slate-200 text-white" required type="text" placeholder="position" name="position" />
              <input className="w-full p-2 border-[1.5px] border-slate-400 rounded-[10px] outline-none focus:shadow-md shadow-slate-200 text-white" required type="text" placeholder="status" name="status" />
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
