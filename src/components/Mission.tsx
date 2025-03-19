import { Card } from "./ui/card";
import Image from "next/image";

const Mission = () => {
  return (
    <div className="size-full p-5 md:p-10 xl:p-0 flex flex-col items-center justify-center h-[100svh]">
      <h3 className="text-2xl sm:text-4xl font-header tracking-wide font-black pb-5 text-center">TRANSFORM. MODERNIZE. SUSTAIN & GROW.</h3>
      <p className="text-sm sm:text-base w-full text-center pb-6 sm:pb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut </p>
      <section className="w-full flex flex-col md:flex-row items-center gap-5 h-[50vh]">
        <div className="flex-1 size-full flex items-start">
          <Card className="flex-1 w-full h-full lg:h-[80%] bg-gradient-to-tr from-blue-200 to-blue-50 p-6 flex flex-col gap-2 lg:gap-3 relative">
            <h4 className="text-xl font-header tracking-wide font-black">Strategy</h4>
            <p className="w-4/6 md:w-full text-xs tracking-wide leading-5 lg:leading-6 font-content hidden sm:block">Organizations globally adopt digital transformation to boost efficiency, customer experience, and productivity. Our experts partner with you to develop and execute sustainable strategies.</p>
            <Image src="https://86v8u6agau.ufs.sh/f/A17KOoeuO4h9Sm7tZ8fXy4TE1xGZlDvk8whc92qC7H0r6sKe" 
              alt="Strategy" width="300" height="300"
              className="w-[110px] md:w-[140px] absolute h-fit right-0 bottom-3"
            />
          </Card>
        </div>
        <div className="flex-1 size-full flex lg:pt-10">
          <Card className="flex-1 max-lg:h-full bg-gradient-to-tr from-blue-200 to-blue-50 p-6 flex flex-col gap-2 lg:gap-3 relative">
            <h4 className="text-xl font-header tracking-wide font-black">Technology</h4>
            <p className="w-4/6 hidden sm:block md:w-full text-xs tracking-wide leading-5 lg:leading-6 font-content">Transformation demands change across people, processes, and technology. We prioritize data optimization, automation, and AI with an agile, people-focused approach for sustainable adoption.</p>
            <Image src="https://86v8u6agau.ufs.sh/f/A17KOoeuO4h9HmkpvCNMor0Nh4Jfi5AVDOw6lmEq82F9dasj" 
              alt="Strategy" width="300" height="300"
              className="w-[140px] md:w-[100px] lg:w-[160px] absolute h-fit sm:right-6 sm:bottom-3 right-0 bottom-0"
            />
          </Card>
        </div>
        <div className="flex-1 size-full flex items-start">
          <Card className="flex-1 h-full lg:h-[80%] bg-gradient-to-tr from-blue-200 to-blue-50 p-6 flex flex-col gap-1 lg:gap-3 relative">
            <h4 className="text-xl font-header tracking-wide font-black z-10">Managed Services</h4>
            <p className="w-4/6 md:w-full hidden sm:block text-xs tracking-wide leading-5 lg:leading-6 font-content">As an extension of your team, we provide seamless business and technical support, enhancing productivity, managing backlogs, and offering 24/7 assistance for greater scalability.</p>
            <Image src="https://86v8u6agau.ufs.sh/f/A17KOoeuO4h9ujflg4YtL7SJ0rTgHzenhCXvMKkpRbqOoQly" 
              alt="Strategy" width="300" height="300"
              className="w-[120px] lg:w-[170px] absolute h-fit right-2 bottom-0"
            />
          </Card>
        </div>
      </section>
    </div>
  )
}

export default Mission;
