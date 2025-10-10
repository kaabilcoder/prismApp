import axios from "axios";
import { FencyButton } from "../components/Button";
import { InputBox } from "../components/InputBox";
import { useRef } from "react";
import { BACKEND_URL } from "../conifg";
import { useNavigate, Link } from "react-router-dom";
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

            const message =
            error?.response?.data?.message ||
            error?.message ||
            "SignIn failed. please try again later";
            toast.error(message)
        }
        
    }

    return (
         <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
            <div className="bg-white rounded border min-w-48 m-3 p-2">
                <div className="flex justify-center"><span className="text-xl">Welcome Back</span></div>
                <label htmlFor="username" className="block text-sm font-medium text-[#4F39F6] m-1">Username</label>
                <InputBox ref={usernameRef} placeholder="Username" />
                <label htmlFor="password" className="block text-sm font-medium text-[#4F39F6] m-1">Password</label>
                <InputBox ref={passwordRef} placeholder="Password" />
                <div className="flex justify-center p-3">
                    <FencyButton onClick={signin} varient="primary" text="Sign In" fullWidth={true}/>
                </div>
                <p className="text-center text-black text-sm mt-2 mb-1">Don't have an account? {" "}
                    <Link to={"/signup"} className="text-[#4F39F6] hover:text-[#4F39F6] font-medium hover:underline transition duration-300">
                Sign Up
            </Link>
                </p>
            </div>
        </div>
    )
}