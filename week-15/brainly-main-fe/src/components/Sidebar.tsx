import { TwitterIcon } from "./icons/TwitterIcon"
import { YoutubeIcon } from "./icons/YoutubeIcon"
import { SidebarItem } from "./SidebarItems"
import Logo from "../../public/brain.png"

export const Sidebar = () =>{
    return <div className="h-screen bg-white border-r-gray-200 border-r-2 fixed w-72 left-0 top-0">
        <div className="flex items-center gap-2 p-4 font-bold text-2xl">
            <img src={Logo} alt="" className="size-8"/>
            Brainly
        </div>
        <div className="pt-4 pl-8">
            <SidebarItem text="Tweets" icon={<TwitterIcon size="lg"/>}/>
            <SidebarItem text="Videos" icon={<YoutubeIcon size="lg"/>}/>
        </div>
    </div>
}