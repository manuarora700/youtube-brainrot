import React from 'react'

export const AppleCards = () => {
    const items = [
        {
            title: "Innovation",
            description: "Beautiful and durable,\nby design.",
            image: "/images/1.jpg",
            caption: "iPhone 17 Pro in cosmic orange finish, back exterior showcasing Pro Fusion camera system, LiDAR flash, and microphone."
        },
        {
            title: "Cutting-Edge Cameras",
            description: "Picture your best\nphotos and videos.",
            image: "/images/2.jpg",
            caption: "Close-up black and white photo of person in sunglasses and large hat"
        },
        {
            title: "Chip and Battery Life",
            description: "Fast that lasts.",
            image: "/images/3.jpg",
            caption: "Apple A19 Pro Chip"
        },
        {
            title: "iOS and Apple Intelligence",
            description: "New look. Even more magic.",
            image: "/images/4.jpg",
            caption: "Hand holding iPhone 17 Pro, Message pop-up on personalized Lock Screen"
        },
        {
            title: "Environment",
            description: "Designed with the earth in mind.",
            image: "/images/5.jpg",
            caption: "iPhone Air in Sky Blue finish, back exterior showcasing Fusion camera system, 2-in-1 lens, LiDAR, flash and microphone"
        },
        {
            title: "Privacy",
            description: "Your data.\nJust where you want it.",
            image: "/images/6.jpg",
            caption: "Silver Apple logo with padlock loop replacing leaf on top of logo"
        },
        {
            title: "Peace of Mind",
            description: "Helpful features.\nJust in case.",
            image: "/images/7.jpg",
            caption: ""
        }
    ];
    return (
        <section className="px-4 py-32">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-5xl font-bold text-left tracking-tight">Get to know your iPhone.</h2>
            </div>
            <div className="flex shrink-0 overflow-x-auto no-scrollbar">
                {items.map((item) => (
                    <div key={item.title} className="w-1/5 h-160 rounded-xl p-12 relative overflow-hidden shrink-0">
                        <h3 className="text-xl font-medium text-white">{item.title}</h3>
                        <p className="text-4xl font-bold text-white">{item.description}</p>
                        <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover" />
                    </div>
                ))}
            </div>

        </section>
    )
}
