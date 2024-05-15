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
        <div className="compname">Panda Spot</div>
      </div>
      <div className="body-content">
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
          <Image className="pic" src={pic} alt="panda photo"></Image>
        </div>
      </div>
      <div className="footer">
        <a href = "./blogs/blog1"><button><div>Blog 1</div></button></a>
        <a href = "./blogs/blog1"><button><div>Blog 2</div></button></a>
        <a href = "./blogs/blog1"><button><div>Blog 3</div></button></a>
      </div>
    </div>
  );
}
