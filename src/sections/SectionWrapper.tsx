interface ISectionWrapper {
    id: string
    invert?: boolean
    children: JSX.Element | JSX.Element[]
}

function SectionWrapper({ id, invert = false, children }: ISectionWrapper) {

    const classNames = ["py-16 md:py-64"]
    if (invert) {
        classNames.push("bg-white text-blue-800")
    } else {
        classNames.push("bg-blue-800 text-white")
    }

    return (
        <section id={id} className={classNames.join(" ")}>
            <div className="container mx-auto px-4 md:px-16">{children}</div>
        </section>
    )
}

export default SectionWrapper