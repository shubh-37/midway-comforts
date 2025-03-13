"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { Link } from "react-router-dom"
import HVACServicePage from "@/components/Services"

export default function Landing() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

return (
 <>
 <section className="relative overflow-hidden bg-gradient-to-r from-blue-800 via-blue-900 to-slate-700 py-16 md:py-24">
        {/* Animated background elements */}
        <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute -left-10 -top-10 h-64 w-64 rounded-full bg-yellow-500 opacity-20 blur-3xl animate-blob"></div>
            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-400 opacity-10 blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute left-1/3 top-1/3 h-64 w-64 rounded-full bg-blue-300 opacity-10 blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="container relative z-10 px-4 md:px-6">
            <div
                className={cn(
                    "inline-block rounded-full bg-gradient-to-r from-yellow-500 to-yellow-400 px-4 py-1 text-sm font-medium text-blue-800 shadow-lg transition-all duration-700 ease-out",
                    isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                )}
            >
                Celebrating 26 Years of Excellence
            </div>

            <div className="mt-6 max-w-3xl">
                <h1
                    className={cn(
                        "text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl transition-all duration-700 delay-100 ease-out",
                        isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                    )}
                >
                    Premium HVAC Solutions
                    <br />
                    For Your Comfort
                </h1>

                <p
                    className={cn(
                        "mt-6 text-lg text-white/90 transition-all duration-700 delay-200 ease-out",
                        isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                    )}
                >
                    Delivering expert heating, ventilation, and air conditioning services with unmatched quality and reliability
                    since 1999.
                </p>

                <div
                    className={cn(
                        "mt-8 flex flex-wrap gap-4 transition-all duration-700 delay-300 ease-out",
                        isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                    )}
                >
                    <Link
                        to="/quote"
                        className="inline-flex h-12 items-center justify-center rounded-md bg-gradient-to-r from-yellow-500 to-yellow-400 px-6 text-base font-medium text-black shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
                    >
                        Get a Free Quote
                    </Link>
                    <Link
                        to="/services"
                        className="inline-flex h-12 items-center justify-center rounded-md border border-white/70 bg-white/10 px-6 text-base font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                    >
                        Explore Services
                    </Link>
                </div>
            </div>
        </div>
    </section>
    <HVACServicePage />
 </>   
    
)
}

