import { Loading2, Logo } from '../assets/images'

const PageLoading = ({isLoading}) => {
  return (
    <div className='fixed right-0 left-0 top-0 bottom-0 flex justify-center items-center '>
      <img className={` w-[100px] h-[100px]`} src={isLoading ? Loading2 : Logo} alt="loading" />
    </div>
  )
}

export default PageLoading