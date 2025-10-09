import { DeleteIcon } from '../icons/DeleteIcon'

import { getTwitterEmbedURL, getYouTubeEmbedURL } from "../utils/Embeddings";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import GitHubCard from '../utils/GithubCard';
import { GithubIcon } from '../icons/GithubIcon';
import { LinkIcon } from '../icons/LinkIcon';

interface CardProps {
    title: string;
    link: string;
    type: "twitter" | "youtube" | "github" | "linkIcon";
    _id?: string;
    onDelete?: () => void;
}


export function Card({ title, link, _id, type, onDelete }: CardProps) {

    return <div>
        <div className="bg-white p-4 border rounded-md shadow-md border-slate-100 max-w-72 min-h-48 min-w-72">
            <div className="flex justify-between">
                <div className="flex text-gray-500 ">
                    {type === "youtube" && <YoutubeIcon />}
                    {type === "twitter" && <TwitterIcon />}
                    {type === "github" && <GithubIcon/>}
                    {type === "linkIcon" && <LinkIcon/>}
                    <span className="ml-2 text-black">{title}</span>
                </div>
                <div className="flex text-gray-500">
                    <a href={link} target="_blank">
                    </a>
                    <div>
                        <span className="cursor-pointer" onClick={onDelete} key={_id} ><DeleteIcon /></span>
                    </div>
                </div>
            </div>
            <div className="pt-4">
                {type === "youtube" && <iframe className="w-full" width="560" height="315" src={getYouTubeEmbedURL(link)} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
                {type === "github" && link && <GitHubCard repoUrl={link}/>},
                {type === "twitter" && <blockquote className="twitter-tweet">
                    <a href={getTwitterEmbedURL(link)}></a>
                </blockquote>}

                {(type === 'linkIcon') && link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-md border transition overflow-hidden"
                >
                  <img
                    src={`https://api.microlink.io?url=${encodeURIComponent(link)}&screenshot=true&embed=screenshot.url`}
                    alt="Link preview"
                    className="w-full h-40 object-cover"
                  />
                </a>
              )}

            </div>
        </div>
    </div>
}