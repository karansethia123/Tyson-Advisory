import { MapPin } from "lucide-react";
import Image from "next/image";
import ContactUsForm from "./ContactUsForm";

const ContactUsPage = () => {
  return <div className="w-full">
    <section className="size-full flex flex-col-reverse md:flex-row min-h-[90vh] items-center">
      <div className="flex-1 flex flex-col gap-2 max-lg:px-5">
        <h2 className="text-2xl font-header font-black">Talk to our experts and create your own {" "}
          <span>Product</span>
        </h2>
        <p className="font-content tracking-wide text-sm">Have question about our services, plans or growth ? Fill out form and get in touch with our experts</p>
        <span className="w-full flex items-center justify-center p-5">
          <Image alt="contact-us" width="800" height="900"
          src="https://86v8u6agau.ufs.sh/f/A17KOoeuO4h9MbvaItHR6JKgneZEpG5u2xY1d9cTr0lXVWib" 
            className="w-full sm:w-1/2 md:w-full rounded-xl"/>
        </span>
        <div className="flex items-center gap-5 w-full">
          <div className="flex flex-col gap-3">
            <p className="font-content font-medium">United States</p>
            <span className="flex items-start w-full gap-3">
              <MapPin />
              <p className="font-content tracking-wide text-sm">10880, Malibu point, Southern California - 90265</p>
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-content font-medium">United States</p>
            <span className="flex items-start w-full gap-2">
              <MapPin />
              <p className="font-content tracking-wide text-sm">10880, Malibu point, Southern California - 90265</p>
            </span>
          </div>
        </div>
      </div>
      <div className="flex-1 w-full max-lg:pt-10">
        <ContactUsForm />
      </div>
    </section>
  </div>;
};

export default ContactUsPage;

