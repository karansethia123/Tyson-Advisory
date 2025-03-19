import Image from "next/image";
import { Card } from "./ui/card";

const Services = () => {
  return (
    <div className="size-full flex snap-start flex-col items-center justify-center gap-2 md:gap-5 py-10">
      <h3 className="font-header sm:pb-5 text-4xl font-bold">Services we offer</h3>
      <div className="grid-row-6 grid min-h-[80vh] w-full grid-cols-1 gap-4 max-xl:p-10 sm:grid-cols-5 xl:min-h-[60vh] xl:grid-cols-4 xl:grid-rows-2">
        <Card className="relative flex flex-col gap-1 bg-gradient-to-br from-blue-400 to-sky-50 p-4 sm:col-span-2 sm:row-span-3 xl:col-span-1 xl:row-span-2">
          <h3 className="font-header text-xl font-bold xl:text-2xl">Data and Analytics</h3>
          <p className="font-content px-2 text-xs font-medium tracking-wide text-slate-600 xl:text-sm">Comprehensive data solutions, from preparation and security to advanced predictive and prescriptive analytics.</p>
          <Image src="https://86v8u6agau.ufs.sh/f/A17KOoeuO4h9QJdb7w5xda1XtZpLHfOboP0vMFKu9IY274BV" 
            width="600" height="600" alt="ai" 
            className="hidden sm:block w-1/2 md:w-2/5 xl:w-4/5 absolute bottom-0 right-0" />
        </Card>
        <Card className="relative flex flex-col gap-1 bg-gradient-to-tr from-blue-400 to-cyan-50 p-4 sm:col-span-3 sm:row-span-2 xl:col-span-1 xl:row-span-1">
          <h3 className="font-header text-xl font-bold xl:text-2xl">Cloud</h3>
          <p className="font-content z-10 px-2 text-xs font-medium tracking-wide text-slate-600 xl:text-sm">Seamless and secure cloud data migration with expert strategy, governance, and risk management.</p>
          <Image src="https://86v8u6agau.ufs.sh/f/A17KOoeuO4h9FW0vPo2734notj1daOZW8ixGuckNIgXvfRPp" 
            width="600" height="600" alt="ai" 
            className="hidden sm:block absolute -bottom-4 xl:-bottom-5 right-0 w-[120px] md:w-[160px] xl:w-3/5" />
        </Card>
        <Card className="relative flex flex-col gap-2 overflow-hidden bg-gradient-to-br from-blue-400 to-sky-50 p-4 sm:col-span-3 sm:row-span-2 xl:col-span-2 xl:row-span-1">
          <h3 className="font-header text-xl font-bold xl:text-2xl">Ai and Automation</h3>
          <p className="font-content z-10 px-2 sm:pe-10 text-xs font-medium tracking-wide text-slate-600 xl:text-sm">Boost productivity and automate tasks with AI, RPA, and low-code/no-code solutions for faster go-to-market.</p>
          <Image src="https://86v8u6agau.ufs.sh/f/A17KOoeuO4h98UkrZZwC1G5bX4luoBVdDxyz2pqhSve6WNIs" 
            width="600" height="600" alt="ai" 
            className="hidden sm:block absolute bottom-0 right-0 w-[30%] xl:w-[40%]" />
        </Card>
        <Card className="relative flex flex-col gap-2 overflow-hidden bg-gradient-to-tl from-blue-400 to-sky-50 p-4 max-xl:row-span-3 sm:col-span-2">
          <h3 className="font-header text-xl font-bold xl:text-2xl">Application Services</h3>
          <p className="font-content sm:w-3/4 px-2 text-xs font-medium tracking-wide text-slate-600 xl:text-sm">Tailored solutions for seamless operations, from custom development to agile transformation and maintenance.</p>
          <Image src="https://86v8u6agau.ufs.sh/f/A17KOoeuO4h9lQ8IqTea9GPbsBc8qemrgU21ypdoCI6HEfSR" 
            width="600" height="600" alt="ai" 
            className="hidden sm:block absolute bottom-0 xl:-bottom-7 right-0 w-[50%] xl:w-[35%]" />
        </Card>
        <Card className="relative flex flex-col gap-2 overflow-hidden bg-gradient-to-br from-blue-300 to-sky-50 p-4 max-xl:col-span-3 max-xl:row-span-2 max-sm:col-span-1">
          <h3 className="font-header text-xl font-bold xl:text-2xl">Managed Services</h3>
          <p className="font-content px-2 text-xs font-medium tracking-wide text-slate-600 xl:text-sm">Seamless extension of your team, bridging business and tech gaps with managed IT, data accuracy, and automation.</p>
          <Image src="https://86v8u6agau.ufs.sh/f/A17KOoeuO4h9XQIzS095OTGxU1B4zhfXW6VnmJP9N87DuCZa" 
            width="600" height="600" alt="ai" 
            className="hidden sm:block absolute bottom-0 right-0 w-[80px] md:w-[120px] xl:w-[38%]" />
        </Card>
      </div>
    </div>
  )
}

export default Services;
