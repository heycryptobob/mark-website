import SectionWrapper from "./SectionWrapper"

function Icon() {
    return <div className="bg-blue-800 w-8 h-8 rounded"></div>
}

const features = [
    { icon: <Icon />, text: <div>Twitter<br></br>Influencers</div> },
    { icon: <Icon />, text: <div>Telegram<br></br>Callgroups</div> },
    { icon: <Icon />, text: <div>AMA<br></br>Sessions</div> },
    { icon: <Icon />, text: <div>Youtube<br></br>Reviews</div> },
    { icon: <Icon />, text: <div>Press<br></br>Releases</div> },
    { icon: <Icon />, text: <div>CEX<br></br>Listings</div> },
    { icon: <Icon />, text: <div>Coinmarketcap<br></br>Listing / Trending</div> },
    { icon: <Icon />, text: <div>Coingecko<br></br>Listing / Trending</div> },
]

function MarketingSection() {
    return (
        <SectionWrapper invert>
            <div className="flex md:gap-32 items-center">
                <div className="basis-1/2">
                    <div className="flex flex-col gap-8">
                        <h2 className="text-3xl uppercase font-bold leading-tight"><span className="underline">Marketing</span> Services</h2>
                        <p className="text-xl font-semibold">Whether you’re operating an established project or just starting out, having an effective marketing strategy is one of the keys to <span className="underline">success</span>. </p>
                        <p className="text-xl font-semibold">We build marketing strategies to the needs and expectations of your target customers in order to ensure your projects continued <span className="underline">growth</span>.</p>
                        <a href="https://t.me/Mark_bscking" className="w-fit py-2 px-4 text-xl font-bold uppercase border-2 border-blue-800 hover:underline">Reach out</a>
                    </div>
                </div>
                <div className="basis-1/2">
                    <div className="grid grid-cols-2">
                        {features.map((feature, key) => (
                            <div className="flex flex-col items-center gap-2 p-4">
                                <div>{feature.icon}</div>
                                <div className="text-sm font-semibold uppercase text-center">{feature.text}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default MarketingSection