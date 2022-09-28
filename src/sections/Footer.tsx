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
        <div className="py-16 bg-blue-800">
            <div className="container mx-auto px-4 md:px-16">
                <div className="flex gap-32">
                    {links.map((section, key) => (
                        <div key={key} className="text-white flex flex-col gap-4">
                            <div className="uppercase font-bold">{section.text}</div>
                            {section.items.map((item, k) => (<div key={k}><a href={item.href} className="hover:underline" target={"_blank"} rel={"noreferrer"}>{item.text}</a></div>))}
                        </div>
                    ))}
                </div>
                <div className="mt-16 text-white">Built by <a href="https://b10k.io" target={"_blank"} rel="noreferrer" className="hover:underline font-semibold">[B10K.IO]</a></div>
            </div>
        </div>
    )
}

export default Footer