import { Separator } from "@/components/ui/separator"
import TestimonialCard from "./TestimonialCard"


export default function TestimonialSection() {
  const testimonials = [
    {
      quote:
        "Their strategic IT consulting transformed our infrastructure, reducing costs by 30% while improving system reliability. The team's expertise in cloud migration was invaluable.",
      name: "Sarah Johnson",
      title: "CTO",
      company: "Nexus Innovations",
      avatarSrc: "/placeholder.svg?height=40&width=40",
      initials: "SJ",
    },
    {
      quote:
        "The digital transformation roadmap they developed aligned perfectly with our business goals. Implementation was smooth, and their ongoing support has been exceptional.",
      name: "Jessica Rivera",
      title: "COO",
      company: "Horizon Healthcare",
      avatarSrc: "/placeholder.svg?height=40&width=40",
      initials: "JR",
    },
    {
      quote:
        "The managed IT services they provide have eliminated our technology headaches. Their proactive approach to system maintenance has prevented countless potential issues.",
      name: "Robert Taylor",
      title: "Operations Manager",
      company: "Precision Logistics",
      avatarSrc: "/placeholder.svg?height=40&width=40",
      initials: "RT",
    },
  ]

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-header font-stretch-200% font-bold tracking-tight mb-2">What Our Clients Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-content tracking-wide">
            Discover how our IT consulting services have helped businesses across industries solve complex challenges
            and achieve their technology goals.
          </p>
          <Separator className="mt-8 max-w-24 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}

