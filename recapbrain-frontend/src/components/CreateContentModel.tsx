import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";

// @ts-ignore
export function CreateContentModel({ open, onClose }) {
    return <div>
        {open && <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-70 flex flex-col items-center justify-center">
            <span className="bg-white opacity-100 p-4 rounded">
                <div className="flex justify-end cursor-pointer" onClick={onClose}>
                    <CrossIcon />
                </div>
                <div>
                    <Input placeholder={"Title"} />
                    <Input placeholder={"Link"} />
                </div>
                <div className="flex justify-center">
                    <Button varient="primary" text="submit" />
                </div>
            </span>
        </div>}

    </div>
}

interface inputProps {
    onChange?: () => void;
    placeholder: string;
}

function Input({ onChange, placeholder }: inputProps) {
    return <div>
        <input placeholder={placeholder} type={"text"} className="px-4 py-2 border m-1 rounded" onChange={onChange}></input>
    </div>
}