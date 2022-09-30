import { FaCalendar, FaEnvelope, FaPhone, FaTelegram, FaTwitter } from "react-icons/fa";
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
            { text: "Telegram", href: "https://t.me/Mark_bscking", icon: <FaTelegram className="w-4 h-4" /> },
            { text: "Email", href: "mailto:mark_bscking@protonmail.com", icon: <FaEnvelope className="w-4 h-4" /> },
        ]
    },
    {
        text: "Socials",
        items: [
            { text: "Telegram", href: "https://t.me/MarkGems", icon: <FaTelegram className="w-4 h-4" />},
            { text: "Twitter", href: "https://twitter.com/mark_bscking", icon: <FaTwitter className="w-4 h-4"/> },
        ]
    },
    {
        text: "Actions",
        items: [
            { text: "Schedule a call", href: "https://t.me/Mark_bscking", icon: <FaPhone className="w-4 h-4" /> },
            { text: "Book an AMA", href: "https://t.me/Mark_bscking", icon: <FaCalendar className="w-4 h-4" />},
        ]
    }
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
                            {section.items.map((item, k) => (
                                <div key={k} className="flex items-center gap-2">
                                    <span>{item.icon}</span>
                                    <a href={item.href} className="hover:underline" target={"_blank"} rel={"noreferrer"}>{item.text}</a>
                                </div>))}
                        </div>
                    ))}
                </div>
                <div className="mt-16 text-white">Built by <a href="https://b10k.io" target={"_blank"} rel="noreferrer" className="hover:underline">[B10K.IO]</a></div>
            </div>
        </div>
    )
}

export default Footer