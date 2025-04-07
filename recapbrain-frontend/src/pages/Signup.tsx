import { Button } from "../components/Button";
import { InputBox } from "../components/InputBox";

export function Signup() {
    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white rounded border min-w-48 m-3 p-2">
            <InputBox placeholder="Username" />
            <InputBox placeholder="Password" />
            <div className="flex justify-center p-3">
            <Button varient="primary" text="Sign Up" fullWidth={true} />
            </div>
        </div>
    </div>
}