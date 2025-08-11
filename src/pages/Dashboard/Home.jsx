import { BasketIcon, InternetIcon, SigninIcon, WalletIcon } from "../../assets/icons"
import { BirbaloHome, MarkJohn, OrdersOwerview, Referral, SalesOwerview, Satisfaction, UsersHome } from "../../assets/images"
import { TextNormal } from "../../components"

const Home = () => {
  const MoneyList = [
    {
      id:1,
      title:"Today's Money",
      quantity:"$53,000",
      quantity2:"+55%",
      icon:<WalletIcon/>
    },
    {
      id:2,
      title:"Today's Users",
      quantity:"2,300",
      quantity2:"+5%",
      icon:<InternetIcon/>
    },
    {
      id:3,
      title:"New Clients",
      quantity:"+3,052",
      quantity2:"-14%",
      icon:<SigninIcon/>
    },
    {
      id:4,
      title:"Total Sales",
      quantity:"$173,000",
      quantity2:"+8%",
      icon:<BasketIcon/>
    },
  ]
  return (
    <div className="px-[24px] pb-[80px]">
      <div className=" flex items-center gap-[10px] justify-between">
        {MoneyList.map(item => 
          <div key={item.id} className=" money-list-wrapper w-[352px] p-[20px] rounded-[20px] flex items-center justify-between">
            <div>
              <p className="text-[12px] text-[#A0AEC0] leading-[100%] ">{item.title}</p>
              <div className="flex items-center gap-[3px]">
                <p className="text-[18px] leading-[140%] text-white ">{item.quantity}</p>
                <p className="text-[14px] leading-[140%] text-[#01B574] ">{item.quantity2}</p>
              </div>
            </div>
            <div className="w-[45px] text-white h-[45px] rounded-[12px] bg-[#0075FF] flex items-center justify-center ">{item.icon}</div>
          </div>
        )}
      </div>
      <div className="py-[24px] flex items-center justify-between">
        <img className=" w-[442px] h-[264px] " src={MarkJohn} alt="photo" />
        <img className=" w-[250px] h-[264px] " src={Satisfaction} alt="photo" />
        <img className=" w-[251px] h-[264px] " src={Referral} alt="photo" />
      </div>
      <div className="pb-[24px] flex items-center justify-between">
        <img className=" w-[562px] h-[350px] " src={SalesOwerview} alt="photo" />
        <img className=" w-[380px] h-[350px] " src={BirbaloHome} alt="photo" />
      </div>
      <div className="flex items-center justify-between">
        <img className=" w-[610px] h-[350px] " src={UsersHome} alt="photo" />
        <img className=" w-[340px] h-[350px] " src={OrdersOwerview} alt="photo" />
      </div>
    </div>
  )
}

export default Home
