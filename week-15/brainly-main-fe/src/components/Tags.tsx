export interface tagProp {
    title: string
}

export const Tags = (props: tagProp) => {
    return (
        <div>
            <span className="rounded-2xl bg-blue-100 px-2 py-1 text-blue-500 text-sm">
                # {props.title}
            </span>
        </div>
        
    )
}