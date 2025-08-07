const Heading = ({type, title, classList}) => {
  if(type == "h1"){
    return <h1 className={`${classList} font-bold text-[36px] text-[#FFFFFF]`}>{title}</h1>
  }
  else if(type == "h2"){
     return <h2 className={`${classList} text-[30px] font-bold text-[#FFFFFF]`}>{title}</h2>
  }
  else if(type == "h3"){
     return <h3 className={`${classList} leading-[130%] text-[28px] font-bold text-[#FFFFFF]`}>{title}</h3>
  }
}

export default Heading