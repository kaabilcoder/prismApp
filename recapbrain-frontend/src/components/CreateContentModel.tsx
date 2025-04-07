import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";
import { InputBox } from "./InputBox";

// @ts-ignore
export function CreateContentModel({ open, onClose }) {
    return <div>
        {open && <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-70 flex flex-col items-center justify-center">
            <span className="bg-white opacity-100 p-4 rounded">
                <div className="flex justify-end cursor-pointer" onClick={onClose}>
                    <CrossIcon />
                </div>
                <div>
                    <InputBox placeholder={"Title"} />
                    <InputBox placeholder={"Link"} />
                </div>
                <div className="flex justify-center">
                    <Button varient="primary" text="submit" />
                </div>
            </span>
        </div>}

    </div>
}