import { Link } from "react-router-dom";
import { Button, Heading, Input, Text, TextNormal,  } from "../../components";
import { useCookies } from "react-cookie";
import { useState } from "react";
import { Loading, Logo } from "../../assets/images";
import { AppleIcon, FacebookIcon, GoogleIcon, KeyIcon, KubIcon, ProfileIcon, SignUsersIcon } from "../../assets/icons";

const Toggle = () => {
  const handleClick = (e) => {
    e.currentTarget.classList.toggle('active');
  };

  return (
    <button type="button" onClick={handleClick} className="toggle cursor-pointer bg-[#0075FF] p-[2px] w-[36px] h-[18px] rounded-[97px] flex items-center transition-all duration-300" >
      <div className="circle bg-white w-[13.5px]  h-[13.5px] rounded-full transition-transform duration-300"></div>
    </button>);};

const Register = () => {
   const [cookies, setCookie] = useCookies(['token'])
  const [loading, setLoading] = useState(false)

   function handleRegister(e){
    e.preventDefault()
    setLoading(true)
    const data = {
      email:e.target.email.value,
      password:e.target.password.value
    }
    setTimeout(() => {
      setCookie("token", data)
    },1000);
  }
  return (
    <section className=" flex items-center w-full min-h-[100vh] relative">
      <div className="login-input flex items-center justify-between z-50 rounded-[20px] !border-[#757A8C] p-[24px] absolute top-[15px] mx-auto right-0 left-0 w-[987px] ">
      <a href="#">
      <img src={Logo} alt="logo" width={135} height={14}/>
      </a>
      <div className="flex items-center gap-[33px]">
        <div className="flex items-center gap-[4px]">
          <KubIcon/>
          <TextNormal extraClass={"!text-[10px] !font-bold text-white "} title={"DASHBOARD"}/>
        </div>
        <div className="flex items-center gap-[4px]">
          <ProfileIcon/>
          <TextNormal extraClass={"!text-[10px] !font-bold text-white "} title={"PROFILE"}/>
        </div>
        <div className="flex items-center gap-[4px]">
          <SignUsersIcon/>
          <TextNormal extraClass={"!text-[10px] !font-bold text-white "} title={"SIGN UP"}/>
        </div>
        <div className="flex items-center gap-[4px]">
          <KeyIcon/>
          <TextNormal extraClass={"!text-[10px] !font-bold text-white "} title={"SIGN IN"}/>
        </div>
      </div>
      <Button extraClass={"!w-[150px] !py-[9px]"}>Free Download</Button>
      </div>
      <div className="login-div1 w-[50%] h-[100vh] flex justify-center items-center">
        <div className="text-center">
          <Text extraclass="mb-[16px]" title="INSPIRED BY THE FUTURE:" />
          <Heading type="h1" title="THE VISION UI DASHBOARD" />
        </div>
      </div>
      <div className="login-div2 w-[50%] h-[100vh] pb-10 overflow-y-auto !pt-20 flex flex-col justify-center">
        <div className="w-[50%] flex pt-140  pl-[103px]">
        <div className="w-[425px] flex flex-col">
          <Heading classList="!pt-12 text-center mb-[11px]" type="h2" title="Welcome!" />
          <Text extraclass="mb-[54px] w-[450px] text-center leading-[24%] " title="Use these awesome forms to login or create new account in your project for free." />
          {/* Form */}
          <div className="register-wrapper w-[425px] p-[40px] ">
          <Heading classList={"mb-[24px] text-center !text-[18px]"} type={"h3"} title={"Register with"}/>
          <div className="flex gap-[15px] items-center justify-center ">
            <div className="w-[75px] h-[75px] rounded-[20px] border-[2px] border-[#FFFFFF] flex items-center justify-center ">
             <a href="https://www.facebook.com" target="_blank">
              <FacebookIcon/>
             </a>
            </div>
            <div className="w-[75px] h-[75px] rounded-[20px] border-[2px] border-[#FFFFFF] flex items-center justify-center ">
              <a href="https://www.apple.com" target="_blank">
              <AppleIcon/>
             </a>
            </div>
            <div className="w-[75px] h-[75px] rounded-[20px] border-[2px] border-[#FFFFFF] flex items-center justify-center ">
              <a href="https://www.google.com" target="_blank">
              <GoogleIcon/>
             </a>
            </div>
          </div>
          <Heading classList={"py-[20px] text-center !text-[18px]"} type={"h3"} title={"or"}/>
          
          <form onSubmit={handleRegister} autoComplete="off">
          <TextNormal extraClass="!text-white  mb-[4px]" title="Name" />
          <Input type="text" name="name" placeholder="Your full name" />

          <TextNormal extraClass="!text-white mt-[15px] mb-[4px]" title="Email" />
          <Input type="text" name="email" placeholder="Your email address" />

          <TextNormal extraClass="!text-white mt-[15px] mb-[4px]" title="Password" />
          <Input type="text" name="password" placeholder="Your password" />
           <div className="mt-[15px] mb-[35px] flex items-center gap-[10px]">
            <Toggle />
            <TextNormal extraClass={"!text-white"} title={"Remember me "}/>
          </div>
          <Button type={'submit'} extraClass={"w-[350px]"}>
             {loading ?  <img className="scale-[2.5] w-[28px] h-[28px] mx-auto" src={Loading} alt="loading" /> : "Sign up"}
          </Button>
          </form>
         <div className="flex items-center pt-[22px] justify-center text-center gap-[2px]">
          <TextNormal title={"Already have an account?"}/>
          <Link to={'/register'} className="text-[14px] leading-[140%] text-white">Sign in</Link>
         </div>
         </div>
        </div>
        </div>
        <div className="pt-15 w-[450px] ml-[58px]">
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

export default Register;

