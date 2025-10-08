import { useRef, useState } from "react";
import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";
import { InputBox } from "./InputBox";
import axios from "axios";
import { BACKEND_URL } from "../conifg";

enum ContentType {
    Youtube = "youtube",
    Twitter = "twitter",
    Instagram = "instagram",
    LinkedIn = "linkedin"
}

// @ts-ignore
export function CreateContentModel({ open, onClose }) {
    const titleRef = useRef<HTMLInputElement>(null);
    const linkRef = useRef<HTMLInputElement>(null);
    const [type, setType] = useState(ContentType.Youtube)

    async function addContent() {
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;

        await axios.post(`${BACKEND_URL}/api/v1/content`, {
            link,
            title,
            type
        }, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        })
        onClose();
    }

    return <div>
        {open && <div>
            <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-70 flex flex-col items-center justify-center"></div>

            <div className="w-screen h-screen fixed top-0 left-0 flex flex-col items-center justify-center">
                <span className="bg-white opacity-100 p-4 rounded">
                    <div className="flex justify-end cursor-pointer" onClick={onClose}>
                        <CrossIcon />
                    </div>
                    <div>
                        <InputBox ref={titleRef} placeholder={"Title"} />
                        <InputBox ref={linkRef} placeholder={"Link"} />
                    </div>
                    <span className="flex justify-center m-1 text-xl">Type</span>
                    <div className="flex gap-1 pb-3 justify-center">
                        <Button text="Youtube" varient={type == ContentType.Youtube ? "primary" : "secondary"} onClick={() => setType(ContentType.Youtube)}></Button>
                        <Button text="Twitter" varient={type == ContentType.Twitter ? "primary" : "secondary"} onClick={() => setType(ContentType.Twitter)}></Button>
                    </div>
                    <div className="flex gap-1 pb-3 justify-center">
                        <Button text="Instagram" varient={type == ContentType.Instagram ? "primary" : "secondary"} onClick={() => setType(ContentType.Instagram)}></Button>
                        <Button text="LinkedIn" varient={type == ContentType.LinkedIn ? "primary" : "secondary"} onClick={() => setType(ContentType.LinkedIn)}></Button>
                    </div>
                    <div className="flex justify-center">
                        <Button onClick={addContent} varient="primary" text="submit" />
                    </div>
                </span>
            </div>

        </div>}

    </div>
}