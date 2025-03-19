type ServiceData = {
  id: string,
  details: {
    title: string,
    description: string
  }[]
}[]

export const servicesData: ServiceData = [
  {
    id: "Data_and_Analytics",
    details: [
      {
        title: "Data Preparation & Security",
        description: "Ensure high-quality, secure, and well-managed data through robust data preparation, validation, security protocols, and master data management solutions."
      },
      {
        title: "Predictive & Prescriptive Analytics",
        description: "Leverage advanced analytics to forecast trends, optimize decision-making, and drive business growth with predictive and prescriptive analytics solutions."
      }
    ]
  },
  {
    id: "Cloud",
    details: [
      {
        title: "Cloud Strategy & Migration",
        description: "Develop a comprehensive cloud strategy, plan seamless migrations, and optimize cloud adoption to enhance business agility and scalability."
      },
      {
        title: "Cloud Governance & Security",
        description: "Ensure compliance, security, and risk management with robust cloud governance frameworks, protecting your cloud infrastructure from potential threats."
      }
    ]
  },
  {
    id: "AI_and_Automation",
    details: [
      {
        title: "Low-Code & Robotic Process Automation (RPA)",
        description: "Accelerate digital transformation with low-code and no-code platforms, enabling rapid application development and automation through Robotic Process Automation (RPA)."
      },
      {
        title: "Artificial Intelligence & Machine Learning",
        description: "Harness the power of AI, machine learning, and agentic AI to drive intelligent decision-making, optimize processes, and enhance business efficiency."
      },
      {
        title: "Enterprise Platforms & Automation",
        description: "Enhance business operations with AI-driven integrations for leading enterprise platforms such as ERPs, ServiceNow, and Salesforce, improving efficiency and scalability."
      }
    ]
  },
  {
    id: "Application_Services",
    details: [
      {
        title: "Custom Development & Modernization",
        description: "Build tailored applications and modernize legacy systems to enhance performance, scalability, and business agility."
      },
      {
        title: "Sustainable Agile Transformation & Operations",
        description: "Implement sustainable Agile practices, streamline operations, and ensure seamless application maintenance for long-term success."
      },
      {
        title: "Testing & Validation",
        description: "Ensure high-quality, reliable software with comprehensive testing and validation services, improving performance and security."
      }
    ]
  },
  {
    id: "Managed_Services",
    details: [
      {
        title: "Managed IT Services & Support",
        description: "Ensure seamless IT operations with managed services, including support desks and contact centers, to enhance business efficiency and user experience."
      },
      {
        title: "Data Validation & Reporting",
        description: "Maintain data integrity with robust validation, testing, and accuracy checks, complemented by insightful reporting for better decision-making."
      },
      {
        title: "Last-Mile Automation Assistant",
        description: "Enhance operational efficiency with last-mile automation solutions, streamlining workflows and reducing manual efforts across business processes."
      }
    ]
  }
]
