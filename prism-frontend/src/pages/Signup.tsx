import { useRef } from "react";
import { FencyButton } from "../components/Button";
import { InputBox } from "../components/InputBox";
import { BACKEND_URL } from "../conifg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

export function Signup() {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate()
    async function signup() {
        const username = usernameRef.current?.value || "";
        const password = passwordRef.current?.value || "";

        try {
           const response = await axios.post(BACKEND_URL + "/api/v1/signup", {
                username,
                password
            });
            navigate("/signin")
            toast.success(response.data.message);

        } catch (error: any) {
            console.error("Signup failed:", error);
            const message = error.response?.data?.message || error.message || "signup failed! try again later";
            toast.error(message);
        }
    }

    return (
        <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
            <div className="bg-white rounded border min-w-48 m-3 p-2">
                <div className="flex justify-center"><span className="text-xl">Sign Up</span></div>
                <label htmlFor="username" className="block text-sm font-medium text-[#4F39F6] m-1">Username</label>
                <InputBox ref={usernameRef} placeholder="Username" />
                <label htmlFor="password" className="block text-sm font-medium text-[#4F39F6] m-1">Password</label>
                <InputBox ref={passwordRef} placeholder="Password" />
                <div className="flex justify-center p-3">
                    <FencyButton onClick={signup} varient="primary" text="Sign Up" fullWidth={true}/>
                </div>
                <p className="text-center text-black text-sm mt-2 mb-1">Already have an account? {" "}
                    <Link to={"/signin"} className="text-[#4F39F6] hover:text-[#4F39F6] font-medium hover:underline transition duration-300">
                Sign in
            </Link>
                </p>
            </div>
        </div>

        
    );
}