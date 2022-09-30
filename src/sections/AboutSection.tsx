import SectionWrapper from "./SectionWrapper"
import { /*FaShoppingBag,*/ FaRocket, FaCalendarCheck, FaNewspaper, FaBtc, FaDesktop, FaList, FaStar, FaUsers } from "react-icons/fa"
import { ISection } from "./ISection"

const features = [
    // { icon: <FaShoppingBag className="w-4 h-4" />, text: <div>Fill your private or presale</div> },
    { icon: <FaNewspaper className="w-4 h-4" />, text: <div>Prelaunch / Stealth marketing</div> },
    { icon: <FaRocket className="w-4 h-4" />, text: <div>Launch marketing</div> },
    { icon: <FaCalendarCheck className="w-4 h-4" />, text: <div>Milestone / Feature marketing</div> },
    { icon: <FaList className="w-4 h-4 svg-fill-primary" />, text: <div>CMC + CG Listing / Trending / Fasttrack</div> },
    { icon: <FaBtc className="w-4 h-4 svg-fill-primary" />, text: <div>CEX Listings</div> },
    { icon: <FaDesktop className="w-4 h-4 svg-fill-primary" />, text: <div>Smart Contract + dApp development</div> },
    { icon: <FaStar className="w-4 h-4 svg-fill-primary" />, text: <div>Negotiate celebrity endorsements</div> },
    { icon: <FaUsers className="w-4 h-4 svg-fill-primary" />, text: <div>Find community moderators + voicechat hosts</div> },
]

function AboutSection({ invert = false }: ISection) {
    return (
        <SectionWrapper id="about" invert={invert}>
            <div className="flex flex-col lg:flex-row gap-32 lg:items-top js-show-on-scroll">
                <div className="basis-1/2">
                    <div className="flex flex-col gap-8">
                        <h2 className="text-3xl uppercase font-bold leading-tight"><span className="underline">About</span> Mark</h2>
                        <p className="text-xl font-semibold">Mark is a Crypto, NFT, GameFi, and Web3 marketing agency. Mark and his team have supported projects that went on to make over <span className="underline">600X</span> with multi-million dollar market caps.</p>
                        <p className="text-xl font-semibold">Mark has been working within the Crypto space for multiple years. Over this time, he has developed deep relationships with key <span className="underline">partners</span> and <span className="underline">influencers</span> across multiple blockchain ecosystems.</p>
                        <p className="text-xl font-semibold">Based on your objectives, Mark will work with you to <span className="underline">define and execute</span> a marketing plan that works within your budget in order to achieve maximum <span className="underline">impact</span>.</p>
                        <a href="https://t.me/Mark_bscking" target={"_blank"} rel="noreferrer" className="w-full md:w-fit py-4 px-8 text-2xl font-bold uppercase border-2 border-black hover:underline text-center md:text-left">Get started</a>
                    </div>
                </div>
                <div className="basis-1/2">
                    <div className="flex flex-col gap-8">
                        <h2 className="text-3xl uppercase font-bold leading-tight"><span className="underline">How</span> Mark can help</h2>
                        <div className="flex flex-col gap-4">
                            {features.map((feature, key) => (
                                <div key={key} className="flex flex-row gap-4 capitalize items-center text-lg font-semibold">
                                    <div>{feature.icon}</div>
                                    <div>{feature.text}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default AboutSection