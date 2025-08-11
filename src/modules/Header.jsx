import { NotificationIcon, ProfileIcon, SearchIcon, SettingsIcon } from "../assets/icons"

const Header = () => {
  return (
    <div className="p-[38px] flex items-center justify-between">
      <div>
      <div className="flex items-center gap-[5px] mb-[6px]">
        <p className="text-[12px] text-[#A0AEC0] leading-[100%] ">Pages</p>
        <p className="text-white text-[12px] leading-[100%]">/</p>
        <p className="text-white text-[12px] leading-[100%]">Dashboard</p>
      </div>
      <p className="text-white text-[14px] leading-[140%] ">Dashboard</p>
      </div>
      
      <div className="flex items-center gap-[18px]">
      <label className="pl-[12px] flex items-center gap-[12px] w-[199px] border-[0.5px] border-[#E2E8F04D] rounded-[15px] bg-[#0F1535] py-[10px] ">
        <SearchIcon/>
        <input className="text-[#A0AEC0] outline-none  text-[12px] leading-[150%]" type="text" placeholder="Type here..." />
      </label>

      <div className="text-[#718096] flex items-center gap-[3px] ">
        <ProfileIcon/>
        <p className="text-[#A0AEC0]  text-[12px] leading-[150%]">Sign In</p>
      </div>
      <div className="text-[#718096] flex items-center gap-[15px] ">
        <SettingsIcon/>
        <NotificationIcon/>
      </div>
      </div>

      
    </div>
  )
}

export default Header
