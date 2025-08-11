import { Link } from "react-router-dom";
import { Button, Heading, Input, Text, TextNormal,  } from "../../components";
import { useCookies } from "react-cookie";
import { useContext, useState } from "react";
import { Loading, Logo } from "../../assets/images";
import { KeyIcon, KubIcon, ProfileIcon, SignUsersIcon } from "../../assets/icons";
import { Context } from "../../Context/Context";
import { toast } from "react-toastify";

const Toggle = () => {
  const handleClick = (e) => {
    e.currentTarget.classList.toggle('active');
  };

  return (
    <button type="button" onClick={handleClick} className="toggle cursor-pointer bg-[#0075FF] p-[2px] w-[36px] h-[18px] rounded-[97px] flex items-center transition-all duration-300" >
      <div className="circle bg-white w-[13.5px]  h-[13.5px] rounded-full transition-transform duration-300"></div>
    </button>);};

const Login = () => {
  const {registerData} = useContext(Context)
  const [cookies, setCookie] = useCookies(['token'])
  const [loading, setLoading] = useState(false)

   function handleLogin(e){
    e.preventDefault()
    setLoading(true)
    const data = {
      email:e.target.email.value,
      password:e.target.password.value
    }
    if(!registerData){
      setTimeout(() => {
        location.pathname = "/register"
       },1000)
    }
  else{
    if(data.email == registerData.email && data.password == registerData.password){
        setTimeout(() => {
          setCookie("token", registerData)
          location.pathname = "/"
        },1000);
     }
  }
  }
  return (
    <section className=" flex items-center w-full min-h-[100vh] relative">
      <div className="login-input z-50 flex items-center justify-between rounded-[20px] !border-[#757A8C] p-[24px] absolute top-[15px] mx-auto right-0 left-0 w-[987px] ">
      <a href="#">
      <img src={Logo} alt="logo" width={135} height={14}/>
      </a>
      <div className="flex items-center gap-[33px]">
        <div className="flex items-center gap-[4px]">
          <div className="text-white "><KubIcon/></div>
          <TextNormal extraClass={"!text-[10px] !font-bold text-white "} title={"DASHBOARD"}/>
        </div>
        <div className="flex items-center gap-[4px]">
          <div className="text-white "><ProfileIcon/></div>
          <TextNormal extraClass={"!text-[10px] !font-bold text-white "} title={"PROFILE"}/>
        </div>
        <div className="flex items-center gap-[4px]">
          <div className="text-white "><SignUsersIcon/></div>
          <TextNormal extraClass={"!text-[10px] !font-bold text-white "} title={"SIGN UP"}/>
        </div>
        <div className="flex items-center gap-[4px]">
          <div className="text-white "><KeyIcon/></div>
          <TextNormal extraClass={"!text-[10px] !font-bold text-white "} title={"SIGN IN"}/>
        </div>
      </div>
      <Button extraClass={"!w-[150px] !py-[9px]"}>Free Download</Button>
      </div>
      <div className="login-div1 w-[50%] flex justify-center items-center">
        <div className="text-center">
          <Text extraclass="mb-[16px]" title="INSPIRED BY THE FUTURE:" />
          <Heading type="h1" title="THE VISION UI DASHBOARD" />
        </div>
      </div>
      <div className="login-div2 w-[50%] overflow-y-auto h-[100vh] !pt-50 flex flex-col justify-center">
        <div className="w-[50%] flex  pl-[103px]">
        <div className="w-[400px] flex flex-col">
          <Heading classList="!pt-12 mb-[6px]" type="h2" title="Nice to see you!" />
          <Text extraclass="mb-[12px] w-[500px] mb-[25px] !text-[#A0AEC0] leading-[150%] " title="Enter your email and password to sign in" />
          {/* Form */}
          <form onSubmit={handleLogin} autoComplete="off">
          <TextNormal extraClass="!text-white mb-[4px]" title="Email" />
          <Input type="text" name="email" placeholder="Your email address" />

          <TextNormal extraClass="!text-white mt-[15px] mb-[4px]" title="Password" />
          <Input type="password" name="password" placeholder="Your password" />
           <div className="mt-[15px] mb-[35px] flex items-center gap-[10px]">
            <Toggle />
            <TextNormal extraClass={"!text-white"} title={"Remember me "}/>
          </div>
          <Button type={'submit'} extraClass={"w-[350px]"}>
             {loading ?  <img className="scale-[2.5] w-[28px] h-[28px] mx-auto" src={Loading} alt="loading" /> : "Sign in"}
          </Button>
          </form>
         <div className="flex items-center pt-[22px] justify-center text-center gap-[2px]">
          <TextNormal title={"Don't have an account?"}/>
          <Link to={'/register'} className="text-[14px] leading-[140%] text-white">Sign up</Link>
         </div>
        </div>
        </div>
        <div className="py-15 w-[450px] ml-[58px]">
        <TextNormal extraClass={"text-center"} title={"@ 2021, Made with ❤️ by Simmmple & Creative Tim for a better web"}/>
        <div className="mt-[9px] flex justify-around items-center">
        <TextNormal title={"Marketplace"}/>
        <TextNormal title={"Blog"}/>
        <TextNormal title={"License"}/>
        </div>
        </div>
 
      </div>
    </section>
  );
};

export default Login;

