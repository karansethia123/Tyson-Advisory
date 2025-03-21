import ImageWithData from "@/components/ImageWithData";
import { Separator } from "@/components/ui/separator";

const AboutUsPage = () => {
  return (
    <div className="w-full">
      <ImageWithData
        image="https://86v8u6agau.ufs.sh/f/A17KOoeuO4h9Zlq2qm6QPiWMqQjw4ktaL1lK3z2EXHm6scGg"
        header="Build brand and grow your business with Consultic."
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidata"
        ctaText="Schedule Consultation"
        ctaLink="/contact-us"
      />

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
    </div>
  );
};

export default AboutUsPage;

