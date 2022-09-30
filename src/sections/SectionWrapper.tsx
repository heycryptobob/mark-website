interface ISectionWrapper {
    id: string
    invert?: boolean
    children: JSX.Element | JSX.Element[]
}

function SectionWrapper({ id, invert = false, children }: ISectionWrapper) {

    const classNames = ["py-24 md:py-32"]
    if (invert) {
        classNames.push("bg-white text-black")
    } else {
        classNames.push("bg-black text-white")
    }

    return (
        <section id={id} className={classNames.join(" ")}>
            <div className="container mx-auto px-4 md:px-16">{children}</div>
        </section>
    )
}

export default SectionWrapper