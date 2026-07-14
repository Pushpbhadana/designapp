"use client";

import { InfiniteMovingCards } from "./MovingCards";


export function Testimonials() {
    return (
        <div className="sm:h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">

            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="normal"
            />
        </div>
    );
}

const testimonials = [
    {
        quote:
            "Blum Design completely transformed our digital presence. The new website isn't just visually stunning – it's incredibly intuitive. Our bounce rate dropped by 40% within the first month, and user engagement has never been higher.",
        name: "Sarah Mitchell",
        title: "Increased engagement & lowered bounce rate",
    },
    {
        quote:
            "We were struggling with a slow, outdated platform that hurt our conversions. Blum Design delivered a lightning-fast, mobile-optimized site that actually ranks on Google. Their technical SEO expertise is absolutely unmatched.",
        name: "David Chen",
        title: "Lightning-fast performance & SEO mastery",
    },
    {
        quote:
            "Working with Blum Design felt like they truly understood our vision from day one. They built a cohesive brand identity that resonates perfectly with our target audience. We've received endless compliments on our new look.",
        name: "Emma Rodriguez",
        title: "A cohesive brand identity that resonates",
    },
    {
        quote:
            "The team at Blum Design made the entire redesign process seamless. Their communication, attention to detail, and ability to hit every deadline made us feel like we were their only client. We're already planning our next project with them.",
        name: "James Okafor",
        title: "Flawless collaboration from start to finish",
    },
];

export default Testimonials;

