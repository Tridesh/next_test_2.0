import Image from "next/image";

export default function Home() {
    return (
        <div className="navbar">
            <a href = "/">Learn</a>
            <a href="/signin">Sign In</a>
            <a href="/signup">Sign Up</a>
        </div>
    );
}