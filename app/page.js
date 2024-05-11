import Image from "next/image";
import styles from "./page.module.css";
import logo from "/public/pandalogo.jpg";
import "./globals.css";
import pic from "/public/panda.jpg";
// import { useRouter } from "next/Home";

export default function Home() {
  return (
    <div>
      <div className="navbar">
        <div className="nav_right">
          <a href="./Home">Learn Here</a>
          <a href="./signin">Sign In</a>
          <a href = "./signup">Sign Up</a>
        </div>
        <div className="logo">
          <Image className = "pandalogo" src={logo} alt="logo" width={60}></Image>
        </div>
      </div>
      <div className="text">
        <div>
        "Unravel the enigmatic world of pandas:
        </div>
        <div>
        Discover their playful antics,
        </div>
        <div>
        curious habits, and mysterious ways here."
        </div>
      </div>
      <div>
        <Image className="pic" src={pic} alt="panda photo" width={600}></Image>
      </div>
      <div className="footer">
        <button><div>Footer 1</div></button>
        <button><div>Footer 2</div></button>
        <button><div>Footer 3</div></button>
      </div>
    </div>
  );
}
