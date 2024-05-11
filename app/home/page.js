import Image from "next/image";
import "./style.css";
export default function Home() {
    return (
        <div>
            <div className="navbar">
            <a href = "/">Learn</a>
            <a href="/signin">Sign In</a>
            <a href="/signup">Sign Up</a>
            </div>
        </div>
        
    );
}