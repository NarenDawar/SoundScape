'use client'
import { useRef } from "react";

export default function Blocks({ onEnter }) {
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    
        const handleSubmit = (e) => {
            e.preventDefault();
            const username = usernameRef.current.value;
            const password = passwordRef.current.value;
            usernameRef.current.value = null;
            passwordRef.current.value = null;
          };
        
    return(
            <form className="credentials" onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="Enter your username"
                ref={usernameRef}
                className=" authInput userInput"
                />
                <input
                type="password"
                placeholder="Enter your password"
                ref={passwordRef}
                className="authInput passInput"
                />
                <button className="submitItems">Create</button>
            </form>
    );
}