interface ISectionWrapper {
    invert?: boolean
    children: JSX.Element | JSX.Element[]
}

function SectionWrapper({ invert = false, children }: ISectionWrapper) {

    const classNames = ["py-4 md:py-32"]
    if (invert) {
        classNames.push("bg-white text-blue-800")
    } else {
        classNames.push("bg-blue-800 text-white")
    }

    return (
        <section className={classNames.join(" ")}>
            <div className="container mx-auto md:px-16">{children}</div>
        </section>
    )
}

export default SectionWrapper