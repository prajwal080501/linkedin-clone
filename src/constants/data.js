import { AiFillHome, AiFillMessage } from "react-icons/ai"
import { FaNetworkWired, FaUserCircle } from "react-icons/fa"
import {BsFillBriefcaseFill} from "react-icons/bs"
import { IoMdNotifications } from "react-icons/io"
import {GrApps} from "react-icons/gr"
export const navdata =[
    {
        title:"Home",
        icon:<AiFillHome className="icon" />,
        link:"/"
    },
    {
        title:"My Network",
        icon:< FaNetworkWired className="icon" />,
        link:"/mynetwork"
    }, 
    {
        title:"Jobs",
        icon:< BsFillBriefcaseFill className="icon" />,
        link:"/jobs"
    },
    {
        title:"Messages",
        icon:< AiFillMessage className="icon" />,
        link:'/messages'
    },
    {
        title:"Notifications",
        icon:< IoMdNotifications className="icon" />,
        link:'/notifications'
    },
    {
        title:"User",
        icon:< FaUserCircle className="icon" />,
        link:'/user'
    }, 
    {
        title:"Work", 
        icon:< GrApps className="icon" />,
        link:'/work'

    }

]