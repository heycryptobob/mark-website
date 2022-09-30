import { Link } from "react-scroll";

const website = [
    { text: "Home", to: "header" },
    { text: "About us", to: "about" },
    { text: "Marketing services", to: "marketing" },
    { text: "Support services", to: "support" },
    { text: "Success stories", to: "success" },
]

const links = [
    {
        text: "Contact",
        items: [
            { text: "Telegram", href: "https://t.me/Mark_bscking" },
            { text: "Email", href: "mailto:mark_bscking@protonmail.com" },
        ]
    },
    {
        text: "Socials",
        items: [
            { text: "Telegram", href: "https://t.me/MarkGems" },
            { text: "Twitter", href: "https://twitter.com/mark_bscking" },
        ]
    },
]

function Footer() {
    return (
        <div className="py-16 bg-black border-t">
            <div className="container mx-auto px-4 md:px-16">
                <div className="flex flex-col md:flex-row gap-16 md:gap-32">
                    <div>
                    <div className="text-white flex flex-col gap-4">
                        <div className="uppercase font-bold">Website</div>
                        {website.map((link, k) => (<div key={k}><Link to={link.to} className="hover:underline hover:cursor-pointer" spy={true} smooth={true} duration={500}>{link.text}</Link></div>))}
                    </div>
                    </div>

                    {links.map((section, key) => (
                        <div key={key} className="text-white flex flex-col gap-4">
                            <div className="uppercase font-bold">{section.text}</div>
                            {section.items.map((item, k) => (<div key={k}><a href={item.href} className="hover:underline" target={"_blank"} rel={"noreferrer"}>{item.text}</a></div>))}
                        </div>
                    ))}
                </div>
                <div className="mt-16 text-white">Built by <a href="https://b10k.io" target={"_blank"} rel="noreferrer" className="hover:underline">[B10K.IO]</a></div>
            </div>
        </div>
    )
}

export default Footer