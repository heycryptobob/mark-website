import { Link } from "react-scroll";
import logo from "../assets/images/logo.png";

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
                        <div>
                            <img src={logo} alt="logo" className="h-24" />
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