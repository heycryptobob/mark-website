import { AnimationOnScroll } from 'react-animation-on-scroll';
import Video from "../assets/videos/video.mp4"
import Header from "./Header"

function HeroV2() {
    return (
        <div className="relative flex items-center justify-center overflow-hidden">
            <video className="absolute z-10 w-auto min-w-full max-w-none" autoPlay muted loop>
                <source src={Video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute w-full h-full top-0 left-0 bg-black opacity-50 z-20" />
            <div className="w-full z-30">
                <Header />
                <div className="container mx-auto px-4 md:px-16">
                    <div className="mt-16 lg:mt-24 mb-32">
                        <div className="flex flex-col lg:flex-row gap-4 md:gap-16 lg:items-center">
                            <div className="basis-1/2">
                                <div className="uppercase font-bold flex flex-col gap-8">
                                    <h2 className="text-5xl text-white">
                                        <div className="leading-tight">
                                            <div>High</div>
                                            <div className="underline">Impact</div>
                                            <div>Marketing</div>
                                            <div>For Crypto, NFT,</div>
                                            <div>Gamefi & Web3</div>
                                        </div>
                                    </h2>
                                    <a href="https://t.me/Mark_bscking" target={"_blank"} rel="noreferrer" className="w-full md:w-fit p-4 text-2xl bg-white text-black hover:underline text-center md:text-left">Contact us</a>
                                </div>
                            </div>
                            <div className="basis-1/2">
                                <div className="flex flex-col items-end justify-end gap-4 text-white">
                                    <a href="https://t.me/Mark_bscking" target={"_blank"} rel="noreferrer" className="uppercase font-bold w-full md:w-fit p-4 text-2xl bg-white text-black hover:underline text-center md:text-left">Book an AMA</a>
                                    <a href="https://t.me/Mark_bscking" target={"_blank"} rel="noreferrer" className="uppercase font-bold w-full md:w-fit p-4 text-2xl bg-white text-black hover:underline text-center md:text-left">Get a <span className="underline">free</span> call</a>
                                    <div className="text-xs uppercase">on the <a href="https://t.me/MarkGems" className="hover:underline font-bold">MarkGems channel</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HeroV2