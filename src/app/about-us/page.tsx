import ImageWithData from "@/components/ImageWithData";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card"
import { TrustedIcon, TeamIcon, LearnerIcon, AccountabilityIcon } from "@/components/icons";
import { Check } from "lucide-react";
import Image from "next/image"

const features = [{
  title: "Integrity",
  description: "Honesty | Morality | Trust",
  icon: <TrustedIcon size={28} />,
},
{
  title: "Accountability",
  description: "Do it once, Do it right",
  icon: <AccountabilityIcon size={28} />,
},
{
  title: "Lifelong Learner",
  description: "Learn | Inspire | Grow",
  icon: <LearnerIcon size={28} />,
},
{
  title: "Teaming",
  description: "Interdependence | Genuineness | Empathy",
  icon: <TeamIcon size={28} />,
},
]

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
      {/* Core values section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-header text-3xl font-medium tracking-tighter sm:text-4xl md:text-5xl py-3">Core Values</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-content">
            Discover the powerful features that make our design system stand out from the rest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {features.map((feature, index) => (
            <Card key={index} className="border rounded-xl overflow-hidden py-3">
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="bg-blue-500 rounded-full w-16 h-16 flex items-center justify-center">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-content font-semibold mb-2">{feature.title}</h3>
                    <p className="font-content text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      {/* Career section */}
      <section className="w-full py-12 md:py-24 bg-background">
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="font-header text-3xl font-medium tracking-tighter sm:text-4xl md:text-5xl">Career and Benefits</h2>
            <p className="font-content max-w-[700px] text-muted-foreground">
              Join our team and enjoy a range of benefits designed to support your professional and personal growth.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2 items-center mt-12">
            <div className="flex justify-center md:justify-end">
              <Image
                src="https://86v8u6agau.ufs.sh/f/A17KOoeuO4h9nBvt9V9jFXeoEuz1R0LN8a2SkPDg9MshcvKf"
                alt="Career benefits illustration"
                width={600}
                height={400}
                className="rounded-lg object-cover shadow-xl shadow-black"
              />
            </div>

            <div className="space-y-6">
              <h3 className="font-header text-2xl font-medium font-stretch-200%">Why work with us?</h3>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="h-6 w-6 mr-2 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Comprehensive Health Coverage</h4>
                    <p className="text-muted-foreground">
                      Medical, dental, and vision insurance for you and your dependents.
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <Check className="h-6 w-6 mr-2 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Flexible Work Arrangements</h4>
                    <p className="text-muted-foreground">
                      Remote work options and flexible hours to maintain work-life balance.
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <Check className="h-6 w-6 mr-2 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Professional Development</h4>
                    <p className="text-muted-foreground">
                      Learning stipends, conference attendance, and career growth opportunities.
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <Check className="h-6 w-6 mr-2 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Competitive Compensation</h4>
                    <p className="text-muted-foreground">Salary packages that recognize your skills and experience.</p>
                  </div>
                </li>

                <li className="flex items-start">
                  <Check className="h-6 w-6 mr-2 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Team Building Activities</h4>
                    <p className="text-muted-foreground">
                      Regular events to foster collaboration and build relationships.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;

