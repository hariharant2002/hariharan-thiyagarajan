import Image from "next/image";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import HeroCard from "@/components/HeroCard";


export default function Home() {
  return (



    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        {/*<Navbar/>*/}
          <section className="mb-16 text-center">
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
                  Hariharan, <span className="text-gray-400">Your Engineer</span>
              </h1>
              <p className="mt-4 text-gray-400">
                  Brief introduction about yourself and your journey.
              </p>
          </section>
          {/* Cards Grid */}
          <section className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
              <HeroCard />
              {/*<AboutCard />*/}
          </section>
      </main>
    </div>
  );
}
