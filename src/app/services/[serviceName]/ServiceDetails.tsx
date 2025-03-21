import React from 'react'

const ServiceDetails = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-8">
      <div className="flex flex-col animate-in slide-out-to-left-24 md:flex-row gap-6 md:gap-12 pb-8 border-b border-gray-200">
        <div className="flex-shrink-0">
          <span className="text-[80px] md:text-[100px] font-bold text-white leading-none">01</span>
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-50 font-header">
            Optimizing and Automating Cyber Security Capabilities
          </h2>
          <p className="text-gray-100 text-lg">
            We have a proven track record of optimizing and automating a wide-range of cyber security and privacy
            practices and capabilities. We serve our clients across the full spectrum of capability optimization
            including strategy and planning, requirements definition, business and economic justification, workflow
            design and optimization, integration, automation, operationalization and change management.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 md:gap-12 pb-8 border-b border-gray-200">
        <div className="flex-shrink-0">
          <span className="text-[80px] md:text-[100px] font-bold text-white leading-none">02</span>
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-50 font-header">
            Accelerating Critical Cyber Security Initiatives and Programs
          </h2>
          <p className="text-gray-100 text-lg">
            Our clients rely on us to deliver their most critical programs and initiatives. Our deep security expertise
            with an ability to move products and programs forward at an accelerated rate is what defines us.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 md:gap-12">
        <div className="flex-shrink-0">
          <span className="text-[80px] md:text-[100px] font-bold text-white leading-none">03</span>
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-50 font-header">
            Ensuring Audit Readiness While Hardening Cyber Practices
          </h2>
          <p className="text-gray-100 text-lg">
            While we are deeply skeptical that being audit-proof is adequate to prevent a major cyber breach, meeting
            regulatory obligations is a must and a reasonable start that sets the foundation for expanding, hardening
            and scaling cyber security and privacy practices.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ServiceDetails;
