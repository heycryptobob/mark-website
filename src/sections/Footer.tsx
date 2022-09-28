const links = [
    {
        text: "Contact",
        items: [
            { text: "Telegram", href: "" },
            { text: "Email", href: "" },
        ]
    },
    {
        text: "Socials",
        items: [
            { text: "Telegram", href: "" },
            { text: "Twitter", href: "" },
        ]
    },
]

function Footer() {
    return (
        <div className="py-32 bg-blue-800">
            <div className="container mx-auto md:px-16">
                <div className="flex gap-32">
                    {links.map((section, key) => (
                        <div className="text-white flex flex-col gap-4">
                            <div className="uppercase font-bold">{section.text}</div>
                            {section.items.map((item, k) => (<div><a href={item.href} className="hover:underline">{item.text}</a></div>))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Footer