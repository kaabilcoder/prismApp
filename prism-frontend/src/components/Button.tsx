import { ReactElement } from "react";

interface ButtonProps {
    varient: 'primary' | 'secondary';
    text?: string;
    startIcon?: ReactElement;
    onClick?: () => void;
    fullWidth?: boolean;
    loading?: boolean
}

const varientClasses = {
    "primary": "bg-[#4F39F6] text-white",
    "secondary": "bg-white text-[#4F39F6]" 
}

const defaultStyles = "px-4 py-2 rounded-md border border-[#4F39F6] font-light flex items-center cursor-pointer"
const miniStyle = "px-2 py-1 rounded-md border border-[#4F39F6] font-light flex items-center cursor-pointer"
const fencyStyle = "font-semibold text-lg rounded-lg py-3 transition shadow-lg transform hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring focus:ring-opacity-50 w-full"

export function Button({varient, text, startIcon, onClick, fullWidth, loading}: ButtonProps) {

    return <button onClick={onClick} className={varientClasses[varient] + " " + defaultStyles + `${fullWidth ? " w-full flex justify-center items-center" : ""} ${loading ? "flex" : ""}`}>
        <div className="pr-2"> {startIcon} </div>
        {text}
        </button>
}
export function FencyButton({varient, text, startIcon, onClick, fullWidth, loading}: ButtonProps) {

    return <button onClick={onClick} className={varientClasses[varient] + " " + fencyStyle + `${fullWidth ? " w-full flex justify-center items-center" : ""} ${loading ? "flex" : ""}`}>
        <div className="pr-2"> {startIcon} </div>
        {text}
        </button>
}
export function MiniButton({varient, text, startIcon, onClick, fullWidth, loading}: ButtonProps) {

    return <button onClick={onClick} className={varientClasses[varient] + " " + miniStyle + `${fullWidth ? " w-full flex justify-center items-center" : ""} ${loading ? "flex" : ""}`}>
        <div className="pr-2"> {startIcon} </div>
        {text}
        </button>
}