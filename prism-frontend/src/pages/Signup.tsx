import { useRef } from "react";
import { Button } from "../components/Button";
import { InputBox } from "../components/InputBox";
import { BACKEND_URL } from "../conifg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Signup() {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate()
    async function signup() {
        const username = usernameRef.current?.value || "";
        const password = passwordRef.current?.value || "";

        try {
            await axios.post(BACKEND_URL + "/api/v1/signup", {
                username,
                password
            });
            navigate("/signin")
            alert("You are signed up");
        } catch (error) {
            console.error("Signup failed:", error);
            alert("Signup failed. Please try again.");
        }
    }

    return (
        <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
            <div className="bg-white rounded border min-w-48 m-3 p-2">
                <InputBox ref={usernameRef} placeholder="Username" />
                <InputBox ref={passwordRef} placeholder="Password" />
                <div className="flex justify-center p-3">
                    <Button onClick={signup} varient="primary" text="Sign Up" fullWidth={true} />
                </div>
            </div>
        </div>
    );
}