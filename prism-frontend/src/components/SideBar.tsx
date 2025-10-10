import toast from "react-hot-toast";
import { Logo } from "../icons/Logo";
import { ProfileIcon } from "../icons/ProfileIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SideBarContent } from "./sideBarContent";
import { useNavigate } from "react-router-dom";
import { GithubIcon } from "../icons/GithubIcon";
import { LinkIcon } from "../icons/LinkIcon";
import { HomeIcon } from "../icons/HomeIcon";

interface SideBarProps {
    onSelectType: React.Dispatch<React.SetStateAction<string>>;
    selectedType: string;
}

export function SideBar({ onSelectType, selectedType }: SideBarProps){
    const navigate = useNavigate();

    const LogoutHandler = () =>{
        try{
            localStorage.removeItem('token');
            toast.success("Logout successful. Redirecting...")
            navigate("/signin")
            
        } catch(error){
            console.error("Logout error", error)
            toast.error("An error occurred during logout. Please try again.")
        }

    }

    return (
    <div className="h-screen bg-white border-r w-62 fixed left-0 top-0 border-gray-200 pl-4 pt-6 flex flex-col justify-between text-gray-600">
        <div>
            <div className="text-3xl pb-3">
                <div className="flex gap-2">
                    <Logo />
                    <span>Prism</span>
                </div>
            </div>
            <div className="mt-6 space-y-2">
                <SideBarContent text="Home" type="all" icon={<HomeIcon />} onclick={() => onSelectType("all")} active={selectedType === "all"} />
                <SideBarContent text="Tweets" type="twitter" icon={<TwitterIcon />} onclick={() => onSelectType("twitter")} active={selectedType === "twitter"}  />
                <SideBarContent text="Youtube" type="youtube" icon={<YoutubeIcon />} onclick={() => onSelectType("youtube")} active={selectedType === "youtube"}/>
                <SideBarContent text="GitHub" type="github" icon={<GithubIcon />} onclick={() => onSelectType("github")} active={selectedType === "github"}/>
                <SideBarContent text="Any Link" type="anylink" icon={<LinkIcon />} onclick={() => onSelectType("anylink")} active={selectedType === "anylink"}/>
            </div>
        </div>
            <div>
                <SideBarContent text="Logout" icon={<ProfileIcon />} onclick={LogoutHandler} />
            </div>
    </div>
    )
}