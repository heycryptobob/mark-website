import SectionWrapper from "./SectionWrapper"

const links = [
    // { text: "Home", href: "#home" },
    { text: "Marketing", href: "#marketing" },
    { text: "Support", href: "#support" },
    { text: "Success stories", href: "#success" },
]

function Header() {
    return (
        <div className="py-16 bg-blue-800">
            <div className="container mx-auto md:px-16">
                <div className="flex justify-between items-center">
                    <div className="px-2 py-4 bg-white text-blue-800 font-bold uppercase">Logo</div>
                    <div className="text-white text-base font-semibold uppercase">
                        <div className="flex gap-16">
                            {links.map((link, key) => (<a href={link.href} className="hover:underline">{link.text}</a>))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header