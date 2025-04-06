import { ReactElement } from "react";

interface SideBarContentProps {
    text: string;
    icon: ReactElement;
}

export function SideBarContent({ text, icon }: SideBarContentProps) {
    return (
    <div>
        
        <div className="flex text-xl items-center gap-2 cursor-pointer hover:bg-gray-300 rounded p-2 max-w-48 transition-all duration-150">
            {icon} {text}
        </div>
    </div>
    );
}