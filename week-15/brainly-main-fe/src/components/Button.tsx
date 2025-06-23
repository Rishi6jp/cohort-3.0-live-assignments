import type { ReactElement } from "react"

export interface ButtonProps{
    variant: "primary" | "secondary";
    text: string;
    startIcon?: ReactElement;
    onClick?: () => void;
    fullwidth?: Boolean;
    loading?: Boolean;
}

const variantClass = {
    primary: "bg-blue-500 text-white",
    secondary: "bg-blue-100 text-purple-600"
}

const defaultStyles = "px-4 py-2 rounded-md font-light flex items-center justify-center"

export const Button = (props: ButtonProps) => {
    return <button onClick={props.onClick} className={`${variantClass[props.variant]} ${defaultStyles} ${props.fullwidth? "w-full" : ""} ${props.loading? "opacity-45" : ""  } disabled=${props.loading}`}>
        <div className="pr-2">
            {props.startIcon}
        </div>
        {props.text}
    </button>
}