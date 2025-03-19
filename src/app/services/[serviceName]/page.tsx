import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import ServiceForm from "./ServiceForm";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { servicesData } from "@/lib/service-data";

type Props = {
  params: Promise<{ serviceName: string }>
}

const services = ["Data and Analytics" , "Cloud" , "AI and Automation" , "Managed Services" , "Application Services"]

type ServiceType = "Data and Analytics" | "Cloud" | "AI and Automation" | "Managed Services" | "Application Services"

const ServicePage = async ({ params }: Props) => {

  const { serviceName } = await params


  return (<div className="w-full">
    <section className="w-full min-h-[80vh] py-10 flex flex-col gap-4 items-center justify-center">
      <h1 className="w-full text-center font-header text-2xl md:text-4xl py-4 tracking-wide">{serviceName.replaceAll('_', " ").toUpperCase()}</h1>
      <div className="flex flex-col md:flex-row w-full gap-2">
        <span className="flex-1 flex items-center justify-center md:min-h-60 p-4">
          <Image
            alt={serviceName}
            src="https://86v8u6agau.ufs.sh/f/A17KOoeuO4h9uMdMHgyYtL7SJ0rTgHzenhCXvMKkpRbqOoQl"
            height="600" width="600"
            className="w-2/3 md:w-full aspect-[4/3] rounded-xl"
          />
        </span>
        <div className="flex flex-row flex-wrap md:flex-col gap-5 flex-1 justify-evenly w-full">
          {servicesData.find(se => se.id === serviceName)?.details.map((d, index) => (
          <span key={index} className="flex flex-col gap-2 border-s-2 border-s-black p-3 ps-6">
            <p className="text-2xl md:text-2xl font-header font-bold">{d.title}</p>
            <p className="text-xs md:text-sm font-content tracking-wide">{d.description}</p>
          </span>
          ))}
        </div>
      </div>
    </section>
    <section className="flex flex-col md:flex-row max-md:px-4 items-center gap-4 py-10">
      <span className="flex flex-col gap-2 p-4">
        <Separator className="bg-gray-400 border-1 border-gray-400" />
        <p className="font-content text-justify text-sm leading-7 tracking-wide">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </span>
      <span className="flex flex-col gap-2 p-4">
        <p className="font-content text-justify text-sm leading-7 tracking-wide">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <Separator className="bg-gray-400 border-1 border-gray-400" />
      </span>
    </section>
    <section className="w-full py-6">
      <ServiceForm serviceType={serviceName.replaceAll("_", " ") as ServiceType} />
    </section>
    <section className="flex w-full flex-col py-8">
      <h3 className="w-full text-center font-header font-black text-xl md:text-3xl">Check out more services</h3>
      <div className="py-10 w-full grid grid-cols-2 md:grid-cols-4 gap-3 p-3">
        {services.filter(se => se !== serviceName.replaceAll('_', " ")).map((se,index) => (
          <Link href={se.replaceAll(" ", "_")} key={index}>
            <Card className="flex items-center justify-center">{se}</Card>
          </Link>
        ))}
      </div>
    </section>
  </div>)
};

export default ServicePage;

