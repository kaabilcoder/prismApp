import { useRef, useState } from "react";
import { CrossIcon } from "../icons/CrossIcon";
import { FencyButton, MiniButton } from "./Button";
import { InputBox } from "./InputBox";
import axios from "axios";
import { BACKEND_URL } from "../conifg";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { GithubIcon } from "../icons/GithubIcon";
import { DocsIcon } from "../icons/DocsIcon";
import { LinkIcon } from "../icons/LinkIcon";
import { ShareIcon } from "../icons/ShareIcon";

enum ContentType {
    Youtube = "youtube",
    Twitter = "twitter",
    Github = "github",
    Docs = "docs",
    LinkIcon = 'linkIcon'
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
                        <label htmlFor="Title" className="block font-medium text-[#4F39F6] ml-1">Title</label>
                        <InputBox ref={titleRef} placeholder={"Title"} />
                        <label htmlFor="Link" className="block font-medium text-[#4F39F6] ml-1">Link</label>
                        <InputBox ref={linkRef} placeholder={"Link"} />
                    </div>
                    <span className="flex justify-start font-medium m-1 text-[#4F39F6]">Type</span>
                    <div className="flex gap-1 pb-3 justify-start ml-1">
                        <MiniButton startIcon={<YoutubeIcon />} varient={type == ContentType.Youtube ? "primary" : "secondary"} onClick={() => setType(ContentType.Youtube)}></MiniButton>
                        <MiniButton startIcon={<TwitterIcon />} varient={type == ContentType.Twitter ? "primary" : "secondary"} onClick={() => setType(ContentType.Twitter)}></MiniButton>
                        <MiniButton startIcon={<GithubIcon />} varient={type == ContentType.Github ? "primary" : "secondary"} onClick={() => setType(ContentType.Github)}></MiniButton>
                        <MiniButton startIcon={<LinkIcon />} varient={type == ContentType.LinkIcon ? "primary" : "secondary"} onClick={() => setType(ContentType.LinkIcon)}></MiniButton>
                        <MiniButton startIcon={<ShareIcon />} varient={type == ContentType.Docs ? "primary" : "secondary"} onClick={() => setType(ContentType.Github)}></MiniButton>
                    </div>
                    {/* <div className="mb-2">
                        <label htmlFor="Tags" className="block font-medium text-[#4F39F6] ml-1">Tag</label>
                        <InputBox ref={linkRef} placeholder={"Tag"} />
                    </div> */}
                    <div className="flex justify-center">
                        <FencyButton onClick={addContent} varient="primary" text="submit" />
                    </div>
                </span>
            </div>

        </div>}

    </div>
}