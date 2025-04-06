import { Logo } from "../icons/Logo";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SideBarContent } from "./sideBarContent";

export function SideBar() {
    return <div className="h-screen bg-white border-r w-72 fixed left-0 top-0 border-gray-200 pl-4 pt-6 text-gray-600">
        <div className="text-3xl pb-3">
            <div className="flex gap-2">
                <Logo/>
                <span>Recape Brain</span>
            </div>
        </div>
        <div className="mt-6">
        <SideBarContent text="Twitter" icon={<TwitterIcon />} />
        <SideBarContent text="Youtube" icon={<YoutubeIcon />} />
        </div>
    </div>
}