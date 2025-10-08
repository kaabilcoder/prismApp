import { ReactElement } from "react";

interface SideBarContentProps {
    text: string;
    icon: ReactElement;
    onclick?: () => void;
}

export function SideBarContent({ text, icon, onclick }: SideBarContentProps) {
    return (
    <div>
        
        <div className="flex text-shadow-black text-xl items-center gap-2 cursor-pointer hover:bg-blue-200 mb-4 rounded p-2 max-w-48 transition-all duration-150" onClick={onclick}>
            {icon} {text}
        </div>
    </div>
    );
}