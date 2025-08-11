import { NavLink } from "react-router-dom"
import { BillingIcon, DashboardIcon,  ProfileNavIcon, QuestionIcon, RtlIcon, SigninIcon, SignupIcon, TablesIcon } from "../assets/icons"
import { Logo } from "../assets/images"
import { TextNormal } from "../components"

const Navbar = () => {
  const NavbarList = [
    {
      id:1,
      title:"Dashboard",
      icon: <DashboardIcon/>,
      to: '/',
      content:null
    },
    {
      id:2,
      title:"Tables",
      icon: <TablesIcon/>,
      to: '/tables',
      content:null
    },
    {
      id:3,
      title:"Billing",
      icon: <BillingIcon/>,
      to: '/billing',
      content:null
    },
    {
      id:4,
      title:"RTL",
      icon: <RtlIcon/>,
      to: '/rtl',
      content:"Account pages"
    },
    {
      id:5,
      title:"Profile",
      icon: <ProfileNavIcon/>,
      to: '/profile',
      content:null
    },
    {
      id:6,
      title:"Sign in",
      icon: <SigninIcon/>,
      to: '/signin',
      content:null
    },
    {
      id:7,
      title:"Sign up",
      icon: <SignupIcon/>,
      to: '/signup',
      content:null
    },
  ]
  return (
    <div className="navbar w-[20%] h-[100vh] pb-5  pl-[25px] pr-[15px] overflow-y-auto ">
      <div className="pt-[36px] space-y-[12px]">
        <img className=" mx-auto mb-[31px] w-[135px] h-[14px] " src={Logo} alt="logo img" width={135} height={14} />
        <span className="navbar-span  block mb-[22.5px] w-[210px] h-[1px]"></span>

        {NavbarList.map(item => 
          <NavLink to={item.to} className="w-[219px] pl-[16px] py-[12px] rounded-[15px] flex flex-wrap gap-[15px] items-center" key={item.id}>
            <div className="icon-wrapper text-[#0075FF] w-[30px] h-[30px] rounded-[12px] bg-[#1A1F37] flex justify-center items-center">{item.icon}</div>
            <strong className="text-[14px] text-white">{item.title}</strong>
            <br />
            <p className=" text-[#FFFFFF]">{item.content}</p>
          </NavLink>
        )}
        <div className="documentation !mt-10 p-[16px]">
          <div className="w-[35px] h-[35px] bg-white flex items-center justify-center rounded-[12px] ">
            <QuestionIcon/>
          </div>
          <div className="mt-[20px]">
            <p className="font-bold text-white text-[14px] mb-[3.5px]">Need help?</p>
            <TextNormal  title={"Please check our docs"}/>
            <button className="mt-[11.5px] documentation-btn font-bold text-white text-[10px] py-[12.5px] w-[186px] rounded-[12px]">Documentation</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar
