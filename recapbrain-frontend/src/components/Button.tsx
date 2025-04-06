import { ReactElement } from "react";

interface ButtonProps {
    varient: 'primary' | 'secondary';
    text: string;
    startIcon?: ReactElement;
    onClick?: () => void;
}

const varientClasses = {
    "primary": "bg-orangy text-white",
    "secondary": "bg-yellow-400 text-black" 
}

const defaultStyles = "px-4 py-2 rounded-md font-light flex items-center cursor-pointer"

export function Button({varient, text, startIcon, onClick}: ButtonProps) {

    return <button onClick={onClick} className={varientClasses[varient] + " " + defaultStyles}>
        <div className="pr-2"> {startIcon} </div>
        {text}
        </button>
}