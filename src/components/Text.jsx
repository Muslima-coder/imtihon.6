const Text = ({title, extraclass}) => {
  return (
    <p className={`font-normal leading-[100%] text-[20px] text-white  cursor-pointer ${extraclass}`}>{title}</p>
  )
}

export default Text
