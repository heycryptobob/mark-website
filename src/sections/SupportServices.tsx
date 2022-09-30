import { AnimationOnScroll } from 'react-animation-on-scroll';
import SectionWrapper from "./SectionWrapper"
import { FaMicrophone, FaPen, FaUsers, FaDesktop, FaFileContract, FaDog, FaMobileAlt } from "react-icons/fa"
import { ISection } from "./ISection"

const features = [
    { icon: <FaUsers className="w-8 h-8" />, text: <div>Community<br></br>Managers</div> },
    { icon: <FaMicrophone className="w-8 h-8" />, text: <div>AMA<br></br>Hosts</div> },
    { icon: <FaPen className="w-8 h-8" />, text: <div>Content<br></br>Writers</div> },
    { icon: <FaDesktop className="w-8 h-8" />, text: <div>Website<br></br>Designers</div> },
    { icon: <FaMicrophone className="w-8 h-8" />, text: <div>Voicechat<br></br>Moderators</div> },
    { icon: <FaFileContract className="w-8 h-8" />, text: <div>Contract<br></br>Developers</div> },
    { icon: <FaDog className="w-8 h-8" />, text: <div>NFT<br></br>Designers</div> },
    { icon: <FaMobileAlt className="w-8 h-8" />, text: <div>dApp<br></br>Developers</div> },
]

function SupportSection({ invert = false }: ISection) {
    return (
        <SectionWrapper id="support" invert={invert}>
            <div className="flex flex-col lg:flex-row gap-16 lg:items-center js-show-on-scroll">
                <div className="basis-1/2">
                    <div className="flex flex-col gap-8">
                        <h2 className="text-3xl uppercase font-bold leading-tight"><span className="underline">Support</span> Services</h2>
                        <p className="text-xl font-semibold">Project leaders should be future-focused. Having reliable support staff is a critical to <span className="underline">enable success</span>.</p>
                        <p className="text-xl font-semibold">We staff your project with experienced and dependable team members so that you can focus on the <span className="underline">bigger picture</span>.</p>
                        <a href="https://t.me/Mark_bscking" target={"_blank"} rel="noreferrer" className="w-full md:w-fit py-4 px-8 text-2xl font-bold uppercase border-2 border-black hover:underline text-center md:text-left">Contact us</a>
                    </div>
                </div>
                <div className="basis-1/2">
                    <div className="grid grid-cols-2">
                        {features.map((feature, key) => (
                            <AnimationOnScroll key={key} animateIn="animate__bounceIn">
                                <div key={key} className="flex flex-col items-center gap-2 p-4">
                                    <div>{feature.icon}</div>
                                    <div className="text-sm font-semibold uppercase text-center">{feature.text}</div>
                                </div>
                            </AnimationOnScroll>
                        ))}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default SupportSection