export interface InputProp {
    placeholder: string,
}

export const InputUI = (props: InputProp) => {
    return <input type="text" placeholder={props.placeholder}/>
}