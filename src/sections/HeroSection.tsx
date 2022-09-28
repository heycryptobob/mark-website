import heroImage from "../assets/images/heroImage.png"
import SectionWrapper from "./SectionWrapper"

function HeroSection() {
    return (
        <SectionWrapper>
            <div className="flex md:gap-32 items-center">
                <div className="basis-1/2">
                    <div className="uppercase font-bold flex flex-col gap-8">
                        <h2 className="text-5xl leading-tight">
                            <span>High</span><br></br>
                            <span className="underline">Impact</span><br></br>
                            <span>Marketing</span><br></br>
                            <span>For crypto, NFT,</span><br></br>
                            <span>gamefi & web3</span><br></br>
                        </h2>
                        <a href="https://t.me/Mark_bscking" className="w-fit py-2 px-4 text-4xl bg-white text-blue-800 hover:underline">Contact us</a>
                    </div>
                </div>
                <div className="basis-1/2">
                    <img src={heroImage} />
                </div>
            </div>
        </SectionWrapper>
    )
}

export default HeroSection