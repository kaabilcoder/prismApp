interface inputBoxProps {
    placeholder: string;
    ref: any;
}

export function InputBox({placeholder, ref }: inputBoxProps) {
    return <div>
        <input ref={ref} placeholder={placeholder} type={"text"} className="px-4 py-2 border m-1 rounded"></input>
    </div>
}