import type { ReactElement } from "react";
import { InputUI } from "./Input";
import { Button } from "./Button";

export interface ModalProp {
    heading: string,
    description: string,
    button: ReactElement,
    input: ReactElement,
    down_description: string,
}

export const Modal = (props: ModalProp) => {
    return <div>
        <div>
            <h2>{props.heading}</h2>

        </div>
        <div>
            {props.description}
        </div>
        <div>
            <InputUI placeholder=""/>
        </div>
        <div>
            <Button/>
        </div>
        <div>
            {props.down_description}
        </div>
        
    </div>
}