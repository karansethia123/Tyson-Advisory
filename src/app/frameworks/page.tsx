import { Card, CardContent } from "@/components/ui/card"
import FrameworkDescription from "./FrameworkDescription"

const frameworks = [
  {
    "title": "Forensics & Eligibility Verification",
    "description": "Use content from the deck to cite solution offerings.",
    detail: ""
  },
  {
    "title": "Agentic AI Frameworks",
    "description": "MarketingMarvel (paragraph that links to its own website), Accounting & Legal, Tax & Investment Advisor (use content from AICPA + CIMA deck, Investment Bot, Tax Bot), Knowledge Retrieval Chatbots. Engagement Process & Maturity Model."
  },
  {
    "title": "RPA and Intelligent Automation Frameworks",
    "description": "Use content from slides, showing industry partners, product agnostic, framework to size small, medium, large implementations. Bot-As-A-Service and Maturity Model."
  },
  {
    "title": "Real Time Inferencing on the Edge",
    "description": "Use whitepaper for content."
  }
]

const FrameworksPage = () => {
  return (
    <div className="w-full">
      <section className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-header font-stretch-200% tracking-wide text-3xl font-medium sm:text-4xl md:text-5xl py-3 uppercase">Frameworks</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-content">
            Discover the powerful features that make our design system stand out from the rest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {frameworks.map((feature, index) => (
            <Card key={index} className="border rounded-xl overflow-hidden py-3">
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  <div>
                    <h3 className="text-xl font-header font-semibold mb-2">{feature.title}</h3>
                    <p className="font-content text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      {/* Frameworks description */}
      {frameworks.map((frame, index) => (
        <FrameworkDescription key={index} title={frame.title} description={frame.description} />
      ))
      }
    </div>
  )
}

export default FrameworksPage
