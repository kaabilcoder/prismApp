import axios from "axios";
import { Button } from "../components/Button";
import { InputBox } from "../components/InputBox";
import { useRef } from "react";
import { BACKEND_URL } from "../conifg";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


export function Signin() {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    async function signin() {
        const username = usernameRef.current?.value || "";
        const password = passwordRef.current?.value || "";

        try {
            const response = await axios.post(BACKEND_URL + "/api/v1/signin", {
                username,
                password
            });
            const jwt = response.data.token;
            localStorage.setItem("token", jwt)
            navigate("/dashboard")

        } catch (error: any) {
            console.error("SignIn failed:", error);
            const message = error.response.data.message || error.message || "SignIn Failed"
            toast.error(message);
        }
    }

    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white rounded border min-w-48 m-3 p-2">
            <InputBox ref={usernameRef} placeholder="Username" />
            <InputBox ref={passwordRef} placeholder="Password" />
            <div className="flex justify-center p-3">
                <Button onClick={signin} varient="primary" text="Sign In" fullWidth={true} />
            </div>
        </div>
    </div>
}