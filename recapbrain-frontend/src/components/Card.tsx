import { ShareIcon } from "../icons/ShareIcon";
import { getTwitterEmbedURL, getYouTubeEmbedURL } from "../utils/Embeddings";

interface CardProps {
    title: string;
    link: string;
    type: "twitter" | "Youtube";
}


export function Card({ title, link, type }: CardProps) {
    return <div>
        <div className="bg-white p-4 border rounded-md shadow-md border-slate-100 max-w-72 min-h-48 min-w-72">
            <div className="flex justify-between">
                <div className="flex text-gray-500 ">
                    <ShareIcon />
                    <span className="ml-2 text-black">{title}</span>
                </div>
                <div className="flex text-gray-500">
                    <a href={link} target="_blank">
                        <ShareIcon />
                    </a>
                    <ShareIcon />
                </div>
            </div>
            <div className="pt-4">
                {type === "Youtube" && <iframe className="w-full" width="560" height="315" src={getYouTubeEmbedURL(link)} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
                {type === "twitter" && <blockquote className="twitter-tweet">
                    <a href={getTwitterEmbedURL(link)}></a>
                </blockquote>}
            </div>
        </div>
    </div>
}