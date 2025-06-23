import { useRef, useState, type ReactElement } from "react";
import { Button } from "./Button";
import { CrossIcon } from "./icons/CrossIcon";
import { Input } from "./Input";
import { BACKEND_URL } from "../config";
import axios from "axios"

enum ContentType {
    Youtube = "youtube",
    Twitter = "twitter"
}

export function CreateContentModal ({open, onClose}: {
    open: Boolean, onClose: () => void
}){
    const titleRef = useRef<HTMLInputElement>()
    const linkRef = useRef<HTMLInputElement>()
    const [type, setType] = useState(ContentType.Youtube);


    async function  addContent() {
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;

         axios.post(BACKEND_URL + "/api/v1/content",{
            link,
            title,
            type,
            tags: []
         }, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
         })
         
    }

    return <div>
        {open && <div>
            <div className="fixed w-screen h-screen bg-slate-500 opacity-60 flex justify-center top-0 left-0">
            </div>
            <div className="fixed w-screen h-screen flex justify-center top-0 left-0">
                <div className="flex justify-center items-center">
                    <span className="bg-white p-4 rounded">
                    <div className="flex justify-end" >
                            <div onClick={onClose} className="cursor-pointer">
                                <CrossIcon size="lg"/>
                            </div>
                            
                    </div>
                    <div>
                            <Input placeholder="Title" reference={titleRef}/>
                            <Input placeholder="Link" reference={linkRef}/>
                    </div>
                    <div className="flex gap-1 justify-center">
                            <Button text="Youtube" variant={type === ContentType.Youtube ? "primary" : "secondary"} onClick={() => {
                                setType(ContentType.Youtube)
                            }}/>
                            <Button text="Twitter" variant={type === ContentType.Twitter ? "primary" : "secondary"} onClick={() => {
                                setType(ContentType.Twitter);
                            }}/>
                    </div>
                    <div className="flex justify-center pt-3">
                            <Button onClick={addContent} variant="primary" text="submit"/>
                    </div>
                    
                    </span>
                    
                </div>
            </div>
            </div>}
    </div>
    
}

