export const AppleCards = () => {
    const items = [
        {
            title: "Innovation",
            description: "Beautiful and durable,\nby design.",
            image: "/images/1.jpg",
        },
        {
            title: "Cutting-Edge Cameras",
            description: "Picture your best\nphotos and videos.",
            image: "/images/2.jpg",
        },
        {
            title: "Chip and Battery Life",
            description: "Fast that lasts.",
            image: "/images/3.jpg",
        },
        {
            title: "iOS and Apple Intelligence",
            description: "New look. Even more magic.",
            image: "/images/4.jpg",
        },
        {
            title: "Environment",
            description: "Designed with the earth in mind.",
            image: "/images/5.jpg",
        },
        {
            title: "Privacy",
            description: "Your data.\nJust where you want it.",
            image: "/images/6.jpg",
        },
        {
            title: "Peace of Mind",
            description: "Helpful features.\nJust in case.",
            image: "/images/7.jpg",
        },
    ]

    // Same left inset as `mx-auto max-w-6xl px-4`:
    // - if viewport > 72rem, the centered column starts at (100vw - 72rem) / 2
    // - then add the px-4 (1rem) inner padding
    // - clamp to a minimum 1rem so it never goes below the px-4 gutter
    const startInset =
        "pl-[max(1rem,calc((100vw-72rem)/2+1rem))] " +
        "pr-[max(1rem,calc((100vw-72rem)/2+1rem))] " +
        "scroll-pl-[max(1rem,calc((100vw-72rem)/2+1rem))]"

    return (
        <section className="w-full overflow-x-hidden py-32">
            <div className="mx-auto max-w-6xl px-4">
                <h2 className="mb-10 text-5xl font-bold tracking-tight md:mb-14">
                    Get to know your iPhone.
                </h2>
            </div>

            <div
                className={`flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory [scrollbar-width:none]  ${startInset}`}
            >
                {items.map((item) => (
                    <div
                        key={item.title}
                        className="relative h-180 w-100 shrink-0 snap-start overflow-hidden rounded-3xl p-12"
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="absolute inset-0 size-full object-cover"
                        />
                        <div className="relative z-10 flex flex-col gap-3">
                            <h3 className="text-xl font-medium text-white">{item.title}</h3>
                            <p className="whitespace-pre-line text-3xl font-bold text-white">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
