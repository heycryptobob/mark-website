import { FaCrown } from "react-icons/fa"
import { Link } from "react-scroll";

const links = [
    { text: "About", to: "about" },
    { text: "Marketing", to: "marketing" },
    { text: "Support", to: "support" },
    { text: "Success stories", to: "success" },
]

function Header() {
    return (
        <header id="header" className="py-8 lg:py-16 bg-transparent">
            <div className="container mx-auto px-4 md:px-16">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <div className="p-4 bg-white text-black font-bold uppercase">
                            <FaCrown className="w-8 h-8" />
                        </div>
                        <div className="text-white b">
                            <div className="text-3xl font-bold">MARK</div>
                            <div className="text-lg font-semibold tracking-wide">BSC KING</div>
                        </div>
                    </div>
                    <div className="text-white text-base font-semibold uppercase hidden md:flex">
                        <div className="flex gap-16">
                            {links.map((link, key) => (<Link key={key} to={link.to} className="hover:underline hover:cursor-pointer" spy={true} smooth={true} duration={500}>{link.text}</Link>))}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header