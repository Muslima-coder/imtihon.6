const Input = ({extraCLass, type, name, placeholder}) => {
  return (
    <input className={`${extraCLass} login-input outline-none w-[350px] rounded-[20px] py-[14px] pl-[20px] text-[14px] leading-[140%] text-[#A0AEC0]`} name={name} required type={type} placeholder={placeholder} />
  )
}

export default Input
