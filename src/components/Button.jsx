const Button = ({extraClass, children, type}) => {
  return (
    <button type={type} className={`${extraClass} bg-[#0075FF] border-none text-white rounded-[12px] hover:opacity-[80%] duration-300 cursor-pointer py-[14px] text-center font-bold text-[10px] leading-[150%] `}>{children}</button>
  )
}

export default Button
