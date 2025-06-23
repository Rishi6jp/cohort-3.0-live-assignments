import type { ReactElement } from "react"


interface ButtonInterface {
    variant: "primary" | "secondary",
    title: string,
    size: "sm" | "md" | "lg",
    startIcon?: ReactElement,
    endIcon?: ReactElement,
}

const sizeStyles = {
    "sm":"px-8 py-4 text-xl rounded-xl",
    "md":"px-4 py-2 text-md rounded-md",
    "lg":"px-2 py-1 text-sm rounded-sm",
}

const variantStyles = {
    "primary": "bg-purple-400 text-white",
    "secondary": "bg-purple-100 text-purple-600",
}

export const Button = (props: ButtonInterface) => {
    return (
        <button
        className={`${sizeStyles[props.size]} ${variantStyles[props.variant]}`}
        >
            <div className="flex items-center">
                <span className="text-xs">
                    {props.startIcon}
                </span>
                <div className="pl-2 pr-2">
                  {props.title}  
                </div>
                {props.endIcon}
            </div>
            
        </button>
    )
}