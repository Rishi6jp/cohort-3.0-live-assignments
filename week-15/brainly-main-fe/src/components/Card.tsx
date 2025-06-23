import { DeleteIcon } from "./icons/DeleteIcon"
import { DocumentIcon } from "./icons/DocumentIcon"
import { ShareIcon } from "./icons/ShareIcon"
import { TwitterIcon } from "./icons/TwitterIcon"
import { YoutubeIcon } from "./icons/YoutubeIcon"
import { Tags } from "./Tags"

export interface CardProp {
    title: string,
    type: "twitter" | "youtube",
    link: string,
    dateAdded?: string,
    tags?: string[],
}

const iconVariant = {
    "youtube" : <YoutubeIcon size="md"/>,
    "twitter" : <TwitterIcon size="md"/>,
    "document": <DocumentIcon size="md"/>
}

export const Card = (props: CardProp) => {
    return (
        <div>
            <div className="p-4 bg-white rounded-md border-gray-200 border-2 w-82">
                <div className="flex justify-between ">
                    <div className="flex gap-2 items-center font-bold">
                        {iconVariant[props.type]}
                        {props.title}
                    </div>
                    <div className="flex gap-2 items-center">
                        <ShareIcon size="md"/>
                        <div>
                           <DeleteIcon size="md"/> 
                        </div>
                        
                    </div>
                </div>
                <div className="pt-3">
                    {props.type === "youtube" && <iframe className="w-full rounded-2xl"  src={props.link.replace("youtu.be","www.youtube.com/embed")} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"/>}
                    {props.type === "twitter" && 
                    <blockquote className="twitter-tweet">
                        <a href={props.link.replace("x.com", "twitter.com")}></a> 
                    </blockquote>}
                </div>
                <div className="flex gap-1 pt-3">
                    {props.tags?.map((tag) => <Tags title={tag}/>)}
                </div>
                <div className="text-sm text-gray-500 container pt-3">
                    Added on {props.dateAdded}
                </div>
            </div>  
            
        </div>
    )
}