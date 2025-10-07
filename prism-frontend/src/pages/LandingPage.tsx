import { Link } from "react-router-dom"
import { Zap } from "lucide-react"
import { FeatureSection } from "../components/FeaturesSection"
export function LandingPage() {

    return (
        <div className="min-h-screen bg-white font-sans text-gray-900">
            {/* Header / Navigation */}
            <header className="fixed top-0 left-0 right-0 z-10 p-4 sm:p-6 bg-white/95 backdrop-blur-sm shadow-md">
                <div className="flex justify-between items-center max-w-7xl mx-auto">
                    {/* App Title */}
                    <h1 className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-yellow-500">
                        Prism
                    </h1>
                    {/* Navigation Links */}
                    <nav className="space-x-4">
                        <Link
                            to={"/signin"}
                            className="text-gray-600 hover:text-orange-500 transition-colors font-medium text-lg"
                        >
                            Sign In
                        </Link>
                        <Link
                            to={"/signup"}
                            className="px-4 py-2 text-white bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 font-semibold text-lg"
                        >
                            Sign Up
                        </Link>
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
                <section className="max-w-7xl mx-auto text-center py-16 sm:py-24">
                    
                    {/* Main Headline */}
                    <h2 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight">
                        <span className="block text-gray-800">Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-500">Digital Brain</span>,</span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-red-600">Perfectly Organized.</span>
                    </h2>

                    {/* Sub-Headline / Slogan */}
                    <p className="text-xl sm:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
                        Spend less time searching and more time living. Prism stores and structures all your valuable social media posts and links in one secure, sharable place.
                    </p>

                    {/* Call to Action Button */}
                    <Link
                        to={"/signup"}
                        className="inline-flex items-center justify-center space-x-2 px-10 py-4 text-xl font-bold text-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-[1.03]
                                   bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 ring-4 ring-orange-200"
                    >
                        {<Zap />}
                        <span>Start Your Prism Now</span>
                    </Link>
                    <p className="mt-4 text-sm text-gray-500">
                        Sign up is fast and free.
                    </p>
                </section>

                <section>
                        {<FeatureSection />}
                </section>
            </main>

            {/* Footer Placeholder */}
            <footer className="py-6 text-center text-gray-500 text-sm border-t border-gray-100">
                &copy; {new Date().getFullYear()} Prism App. All rights reserved.
            </footer>
        </div>
    )
}    