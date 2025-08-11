import { TextNormal } from '../components'

const Footer = () => {
  return (
     <div className="footer px-[24px] py-[30px] flex justify-between items-center">
        <TextNormal extraClass={"text-white"} title={"@ 2021, Made with ❤️ by Simmmple & Creative Tim for a better web"}/>
        <div className="flex items-center gap-[30px] ">
          <TextNormal extraClass={"text-white"} title={"Marketplace"}/>
          <TextNormal extraClass={"text-white"} title={"Blog"}/>
          <TextNormal extraClass={"text-white"} title={"License"}/>
        </div>
      </div>
  )
}

export default Footer
