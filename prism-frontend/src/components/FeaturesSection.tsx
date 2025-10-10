import { FeatureCard } from "./FeatureCard";
import { Link, WandSparkles, Share2} from "lucide-react";
export const FeatureSection = () =>{
     const features = [
    {
        icon: Link,
        title: "Effortless Capture",
        description: "Save posts, articles, videos, and tweets instantly. Just copy the link, and Prism does the rest.",
    },
    {
        icon: WandSparkles,
        title: "Intelligent Organization",
        description: "Ditch the bookmarks. Categorize your content into shared or private collections (your 'Prism Brains').",
    },
    {
        icon: Share2,
        title: "Seamless Sharing",
        description: "Share entire collections with colleagues, friends, or your community with a single, elegant link.",
    },
];

return(<>
        <section className="py-16 sm:py-24">
                    <h3 className="text-3xl sm:text-4xl font-extrabold text-center mb-12 text-gray-800">
                        How Prism Works
                    </h3>
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <FeatureCard key={index} {...feature} />
                        ))}
                    </div>
                </section>
</>)
}