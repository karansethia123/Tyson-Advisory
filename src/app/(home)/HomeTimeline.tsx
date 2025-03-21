"use client"

import { useRef } from "react"
import { useInView } from "motion/react"
import Image from "next/image"
import TimelineItem from "./TimelineItem"
import Blob from "@/components/ui/blob"


const HomeTimeline = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const timelineItems = [
    {
      number: 1,
      content:
        "Finding great consultants with impeccable communications and soft skills. Solving hard problems requires an ability to work well with a variety of personalities under stressing conditions.",
    },
    {
      number: 2,
      content:
        "Arming problem solvers with hard business management skills. This starts with a large investment in cross-training and learning. Continuously building expertise in strategy, organizational design, process improvement, workflow automation, solution design and implementation, data analytics, economic modeling, performance management, program delivery, and again good bedside manner.",
    },
    {
      number: 3,
      content:
        "Excitement and curiosity for the work we do. Waking up everyday looking forward to helping our clients execute their most important technology and operational strategies, fighting cyber adversaries, applying automation in smart ways, and enabling products and services in the cloud.",
    },
  ]

  return (
    <section className=" relative overflow-hidden">
      <Blob color="#7A83FF" />

      <div className="absolute inset-0 -z-10 block md:hidden">
        <div className="absolute inset-0 bg-[#0a1428]/90" />
        <Image src="https://86v8u6agau.ufs.sh/f/A17KOoeuO4h9HXTQE4NMor0Nh4Jfi5AVDOw6lmEq82F9dasj" alt="Canyon with starry sky" fill className="object-cover brightness-[0.3]" />
      </div>

      <div className="w-full mx-auto px-8 py-16 md:py-24">
        <div className="flex flex-col gap-2 py-5">
          <h3 className="font-header font-stretch-200% text-4xl font-semibold uppercase">Our secret sauce</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 z-30">
          <div className="hidden md:block relative h-full min-h-[400px]">
            <Image src="https://86v8u6agau.ufs.sh/f/A17KOoeuO4h9AMDR16uO4h9zUp1a6MJqneWdFYX87yo52wmj" alt="Canyon with starry sky" fill className="object-cover rounded-lg" />
          </div>

          <div ref={ref} className="space-y-6 md:col-span-2">
            {timelineItems.map((item) => (
              <TimelineItem key={item.number} number={item.number} content={item.content} isInView={isInView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeTimeline
