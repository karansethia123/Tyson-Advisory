import { Separator } from "@/components/ui/separator";
// import Image from "next/image";
// import ServiceForm from "./ServiceForm";
import { Card } from "@/components/ui/card";
import Link from "next/link";
// import { servicesData } from "@/lib/service-data";
import ServiceDetails from "./ServiceDetails";
import BlogCards from "@/components/BlogCards";

export const generateStaticParams = () => {
  return ["Data_and_Analytics", "Cloud", "AI_and_Automation", "Managed_Services", "Application_Services"].map(service => {
    return { serviceName: service }
  })
}

type Props = {
  params: Promise<{ serviceName: string }>
}

const services = ["Data and Analytics", "Cloud", "AI and Automation", "Managed Services", "Application Services"]

// type ServiceType = "Data and Analytics" | "Cloud" | "AI and Automation" | "Managed Services" | "Application Services"

const ServicePage = async ({ params }: Props) => {

  const { serviceName } = await params


  return (
    <div className="w-full">
      <section className="w-full min-h-[80vh] py-10 flex flex-col gap-4 items-center justify-center">
        <h1 className="w-full text-center font-header text-2xl md:text-4xl py-4 tracking-wide">{serviceName.replaceAll('_', " ").toUpperCase()}</h1>
        <ServiceDetails />
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
      <section className="py-12 px-4 md:px-6 lg:px-8">
        <div className="w-full container mx-auto">
          <h2 className="text-3xl text-center w-full tracking-tight mb-8 uppercase font-header font-stretch-200%">Case Studies on {serviceName.replaceAll("_", " ")} </h2>
          <BlogCards />
        </div>
      </section>

      <section className="flex w-full flex-col py-8">
        <h3 className="w-full text-center font-header font-stretch-200% text-xl md:text-3xl">Check out more services</h3>
        <div className="py-10 w-full grid grid-cols-2 md:grid-cols-4 gap-3 p-3">
          {services.filter(se => se !== serviceName.replaceAll('_', " ")).map((se, index) => (
            <Link href={se.replaceAll(" ", "_")} key={index}>
              <Card className="flex items-center justify-center hover:shadow-lg hover:shadow-gray-500 transition-shadow ease-in-out duration-700">{se}</Card>
            </Link>
          ))}
        </div>
      </section>
    </div>)
};

export default ServicePage;

