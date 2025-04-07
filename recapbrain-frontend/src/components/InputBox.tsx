interface inputBoxProps {
    onChange?: () => void;
    placeholder: string;
}

export function InputBox({ onChange, placeholder }: inputBoxProps) {
    return <div>
        <input placeholder={placeholder} type={"text"} className="px-4 py-2 border m-1 rounded" onChange={onChange}></input>
    </div>
}