import React from "react";
import { ArrowRight, LayoutDashboard } from "lucide-react"; // Optional modern icons

function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
      <div className="grid max-w-screen-xl px-4 py-12 mx-auto lg:gap-8 xl:gap-0 lg:py-20 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
            Create. Customize. Conquer Exams.
          </h1>
          <p className="max-w-2xl mb-6 text-lg font-medium tracking-tight leading-relaxed md:text-xl xl:text-2xl">
            Your ultimate tool for crafting high-quality question papers in minutes. Designed for educators who value precision, speed, and simplicity.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://deployed-app-delta.vercel.app"
              className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold backdrop-blur-sm bg-white/10 border border-white/20 rounded-xl transition-transform duration-300 hover:scale-105 hover:bg-white/20 focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-md hover:shadow-xl"
            >
              <span>Create</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="https://deployed-app-delta.vercel.app"
              className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold backdrop-blur-sm bg-white/10 border border-white/20 rounded-xl transition-transform duration-300 hover:scale-105 hover:bg-white/20 focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-md hover:shadow-xl"
            >
              <span>View Formats</span>
              <LayoutDashboard className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex justify-center items-center">
          {/* Optional: Add hero image or animation */}
        </div>
      </div>
    </section>
  );
}

export default Hero;
