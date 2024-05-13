import Image from "next/image";
import "./style.css";
import profile from "/public/profile.png";
import panda from "/public/panda_blog1.jpeg";
export default function Home() {
    return(
        <div>
            <div className="compName">Panda Spot</div>
            <a href="/app/page.js"><div className="back">Back to Home🔙</div></a>
            <div className="topic">
            Unlocking the Mysteries of Panda Behavior: Insights into the Gentle Giants.
            </div>
            <div className="back_color">
                <div className="name-container">
                    <Image className="profile" src={profile} width={100}></Image>
                    <div className="details">
                        <div className="name">Tridesh</div>
                        <div>Founder & Co-founder</div>
                        <div>Tridesh Industries</div>
                    </div>
                </div>
                <div className="wallpaper">
                    <Image className = "panda" src={panda} width={1000}></Image>
                </div>
                <div className="intro">
                Pandas, with their iconic black and white appearance, are one of the most beloved animals on the planet. 
                These gentle giants are not only fascinating to look at but also exhibit a range of intriguing behaviors.
                <br/></div>
                <div id = "head" className="head1">
                The Bamboo Connoisseurs:<br/>
                </div>
                <div className="point">
                Pandas are renowned for their voracious appetite for bamboo. Despite being classified as carnivores,
                they primarily feed on bamboo, consuming vast quantities each day. Dive into the reasons behind this
                unusual dietary preference and uncover the fascinating adaptations that allow pandas to thrive on a 
                diet predominantly consisting of bamboo.
                </div>
                <div id = "head" className="head2">
                Solitude or Sociability?:
                </div>
                <div className="point">
                While pandas are often depicted as solitary animals, they do engage in social interactions, especially
                during the breeding season. Explore the intricacies of panda social behavior, from their communication 
                methods to their mating rituals. Learn how conservation efforts are crucial not only for preserving 
                panda populations but also for understanding their complex social dynamics.
                </div>
                <div id = "head" className="head3">
                Playful Pandas:
                </div>
                <div className="point">
                Contrary to popular belief, pandas possess a playful side. From frolicking in the snow to engaging in 
                mock fights, these playful behaviors offer insights into panda cognition and emotional well-being. 
                Discover how enrichment activities in captivity mimic their natural behaviors, providing mental 
                stimulation and improving their overall welfare.
                </div>
                <div id = "head" className="head4">
                The Art of Conservation:
                </div>
                <div className="point">
                Pandas have long been an emblem of conservation efforts, with their population once on the brink of
                extinction. Explore the conservation success story of pandas, from the establishment of reserves to
                breeding programs aimed at bolstering wild populations. Learn how scientific research plays a pivotal 
                role in understanding panda behavior and informing conservation strategies.
                </div>
                <div id = "head" className="head5">
                Challenges and Threats:
                </div>
                <div className="point">
                Despite significant conservation efforts, pandas still face numerous challenges in the wild, including
                habitat loss, fragmentation, and climate change. Delve into the ongoing threats to panda populations
                and the importance of continued conservation initiatives to ensure their long-term survival.
                </div>
            </div>
            
        </div>
    );
}