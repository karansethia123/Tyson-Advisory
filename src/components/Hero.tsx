import Image from "next/image"
import { Button } from "./ui/button"
const Hero = () => {
  return (
    <main className="size-full flex flex-col md:flex-row p-5 md:p-10 lg:p-5 items-center justify-center h-[100svh] md:h-[95svh] gap-2 relative snap-start pt-[5vh]">

      <div
        aria-hidden="true"
        className="absolute inset-x-0 max-h-[100vh] top-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-bottom-20"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>
      <section className="w-full md:w-[55%] h-full max-md:mt-[6vh] flex flex-col justify-center gap-5 z-10">
        <h1 className="text-3xl md:text-6xl md:leading-16 font-header font-black">
          Architecting the{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-sky-500 animate-gradient-flow">
            Future
          </span>, Empowering{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-sky-500 animate-gradient-flow">
            Innovation
          </span>
        </h1>
        <p className=" text-lg text-gray-500 font-content tracking-wide">Overcoming data barriers, skill gaps, and AI challenges to drive transformation and trust.</p>
        <span className="flex items-center gap-2 w-full py-3">
          <Button variant="default" className="rounded-full border border-blue-400 bg-blue-400 w-fit font-content">Get consultation</Button>
        </span>
      </section>
      <section className="flex-1 h-full pt-[5vh] flex items-center justify-center">
        <Image src="https://86v8u6agau.ufs.sh/f/A17KOoeuO4h9UgtUsCOBLZFXglqw2pirfk7VabSWnUJoK5zm" alt="" className="w-3/4 md:w-full z-0 h-fit scale-125 animate-bounce-slow" width="500" height="500" />
      </section>
    </main>
  )
}

export default Hero
