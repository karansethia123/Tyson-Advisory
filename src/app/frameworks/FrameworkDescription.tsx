import { BadgeCheck } from 'lucide-react';
import Image from 'next/image'

type Props = {
  title: string;
  description: string;
}

const FrameworkDescription = ({ title, description }: Props) => {
  return (
    <section className="w-full space-y-8 lg:space-y-14 py-10 min-h-[70vh] px-5">
      <div className="space-y-2">
        <h3 className="text-2xl lg:text-4xl font-header font-stretch-200% font-semibold">{title}</h3>
        <p className="text-lg font-content">{description}</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 justify-between">
        <div className="w-full md:w-[65%] grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="flex-1 flex items-start gap-2">
            <span className="">
              <BadgeCheck />
            </span>
            <span className="flex flex-col gap-2">
              <h4 className="text-lg font-semibold font-content">The copy warned the Little Blind Tex</h4>
              <p className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            </span>
          </div>

          <div className="flex-1 flex items-start gap-2">
            <span className="">
              <BadgeCheck />
            </span>
            <span className="flex flex-col gap-2">
              <h4 className="text-lg font-semibold font-content">The copy warned the Little Blind Tex</h4>
              <p className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            </span>
          </div>
          <div className="flex-1 flex items-start gap-2">
            <span className="">
              <BadgeCheck />
            </span>
            <span className="flex flex-col gap-2">
              <h4 className="text-lg font-semibold font-content">The copy warned the Little Blind Tex</h4>
              <p className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            </span>
          </div>
          <div className="flex-1 flex items-start gap-2">
            <span className="">
              <BadgeCheck />
            </span>
            <span className="flex flex-col gap-2">
              <h4 className="text-lg font-semibold font-content">The copy warned the Little Blind Tex</h4>
              <p className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            </span>
          </div>
        </div>
        <span className="w-3/4 md:w-[30%]">
          <Image
            src="https://86v8u6agau.ufs.sh/f/A17KOoeuO4h9HXTQE4NMor0Nh4Jfi5AVDOw6lmEq82F9dasj"
            width="800" height="500" className="object-cover  rounded-xl" alt="img" />
        </span>
      </div>
    </section>
  )
}

export default FrameworkDescription;
