import { ISection } from "./ISection"
import SectionWrapper from "./SectionWrapper"

interface IGreenIcon {
    text: string
}

function GreenIcon({ text }: IGreenIcon) {
    return <div className="bg-green-500 p-4 text-xl font-bold text-white uppercase w-24 text-center">{text}</div>
}

const features = [
    { icon: <GreenIcon text="600x" />, text: "Shibazilla" },
    { icon: <GreenIcon text="125x" />, text: "Axienomics" },
    { icon: <GreenIcon text="125x" />, text: "Cronoape" },
    { icon: <GreenIcon text="110x" />, text: "Forever pump" },
    { icon: <GreenIcon text="24x" />, text: "Memenation" },
    { icon: <GreenIcon text="18x" />, text: "Twoge" },
]

function SuccessStories({ invert = false }: ISection) {
    return (
        <SectionWrapper id="success" invert={invert}>
            <div className="flex flex-col lg:flex-row gap-16 lg:items-center">
                <div className="basis-1/2">
                    <div className="flex flex-col gap-8">
                        <h2 className="text-3xl uppercase font-bold leading-tight"><span className="underline">Success</span> Stories</h2>
                        <p className="text-xl font-semibold">We <span className="underline">don't</span> settle for a 2X. We will work hard to make sure your story is an inspirational one.</p>
                        <p className="text-xl font-semibold">The BSC King team has a track record of consistently delivering <span className="underline">high multiples</span> to our customers.</p>
                        <a href="https://t.me/Mark_bscking" target={"_blank"} rel="noreferrer" className="w-fit py-4 px-8 text-2xl font-bold uppercase border-2 border-white hover:underline">Talk to us</a>
                    </div>
                </div>
                <div className="basis-1/2">
                    <div className="flex flex-col px-0 md:px-16">
                        {features.map((feature, key) => (
                            <div key={key}>
                                <div className="flex items-center justify-between py-2 group">
                                    <div className="text-xl font-semibold uppercase text-left">{feature.text}</div>
                                    <div className="transition ease-in-out hover:scale-125 hover:shadow hover:cursor-pointer">{feature.icon}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default SuccessStories