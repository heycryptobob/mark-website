import SectionWrapper from "./SectionWrapper"
import { FaTwitter, FaTelegramPlane, FaMicrophone, FaYoutube, FaNewspaper, FaChartLine } from "react-icons/fa"
import { ReactComponent as Coinmarketcap } from "../assets/images/coinmarketcap.svg"
import { ReactComponent as Coingecko } from "../assets/images/coingecko.svg"
import { ISection } from "./ISection"
import { AnimationOnScroll } from 'react-animation-on-scroll';


const features = [
    { icon: <FaTwitter className="w-8 h-8" />, text: <div>Twitter<br></br>Influencers</div> },
    { icon: <FaTelegramPlane className="w-8 h-8" />, text: <div>Telegram<br></br>Callgroups</div> },
    { icon: <FaMicrophone className="w-8 h-8" />, text: <div>AMA<br></br>Sessions</div> },
    { icon: <FaYoutube className="w-8 h-8" />, text: <div>Youtube<br></br>Reviews</div> },
    { icon: <FaNewspaper className="w-8 h-8" />, text: <div>Press<br></br>Releases</div> },
    { icon: <FaChartLine className="w-8 h-8" />, text: <div>CEX<br></br>Listings</div> },
    { icon: <Coinmarketcap className="w-8 h-8 svg-fill-white" />, text: <div>Coinmarketcap<br></br>Listing / Trending</div> },
    { icon: <Coingecko className="w-8 h-8 svg-fill-white" />, text: <div>Coingecko<br></br>Listing / Trending</div> },
]

function MarketingSection({ invert = false }: ISection) {
    return (
        <SectionWrapper id="marketing" invert={invert}>
            <div className="flex flex-col lg:flex-row gap-16 lg:items-center">
                <div className="basis-1/2">
                    <div className="flex flex-col gap-8">
                        <h2 className="text-3xl uppercase font-bold leading-tight"><span className="underline">Marketing</span> Services</h2>
                        <p className="text-xl font-semibold">Whether you’re operating an established project or just starting out, having an effective marketing strategy is one of the keys to <span className="underline">success</span>. </p>
                        <p className="text-xl font-semibold">We build marketing strategies to the needs and expectations of your target customers in order to ensure your projects continued <span className="underline">growth</span>.</p>
                        <a href="https://t.me/Mark_bscking" target={"_blank"} rel="noreferrer" className="w-full md:w-fit py-4 px-8 text-2xl font-bold uppercase border-2 border-white hover:underline text-center md:text-left">Reach out</a>
                    </div>
                </div>
                <div className="basis-1/2">
                    <div className="grid grid-cols-2">
                        {features.map((feature, key) => (
                            <AnimationOnScroll key={key} animateIn="animate__bounceIn" animatePreScroll>
                                <div className="flex flex-col items-center gap-2 p-4">
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

export default MarketingSection