"use client"
import InputWithLabel from "@/components/inputs/InputWithLabel";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import { Card } from "@/components/ui/card";
import { serviceFormSchema, ServiceFormSchemaType } from "@/types/service";
import SelectWithLabel from "@/components/inputs/SelectWithLabel";
import TextareaWithLabel from "@/components/inputs/TextareaWithLabel";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import Image from "next/image";


const ServiceForm = ({ serviceType }: { serviceType: "Data and Analytics" | "Cloud" | "AI and Automation" | "Managed Services" | "Application Services" }) => {

  const form = useForm<ServiceFormSchemaType>({
    resolver: zodResolver(serviceFormSchema),
    defaultValues: {
      name: "",
      email: "",
      service: serviceType
    }
  })

  const submitHandler = () => {
  toast("Details submitted", {
      description: "Our team with reach out shortly"
    })
  }

  return (
    <div className="flex items-center gap-2">
      <span className="hidden md:block w-3/5 rounded-xl">
        <Image src="https://86v8u6agau.ufs.sh/f/A17KOoeuO4h9mcFk6DR8BESupc3KwDzo4tbeGVHYWUAdQyl5"
        width="800" height="800" alt="Manage" className="aspect-[4/3] rounded-xl"/>
      </span>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(submitHandler)} className="flex-1 flex flex-col gap-2 p-4">
          <h3 className="font-header font-black text-2xl pb-4">Wanna know more about this service?</h3>
          <Card className="flex flex-col gap-2 px-6">
            <InputWithLabel<ServiceFormSchemaType> nameInSchema="name" fieldTitle="Full Name" />
            <InputWithLabel<ServiceFormSchemaType> nameInSchema="email" fieldTitle="Email" />
            <SelectWithLabel<ServiceFormSchemaType> nameInSchema="service" fieldTitle="Service"
              data={[
                { option: "Data and Analytics" },
                { option: "Cloud" },
                { option: "AI and Automation" },
                { option: "Managed Services" },
                { option: "Application Services" },
              ]} />
            <TextareaWithLabel<ServiceFormSchemaType> nameInSchema="message" fieldTitle="Message" />
            <Button className="bg-blue-400 transition-all ease-in">Submit</Button>
          </Card>
        </form>
      </Form>
    </div>
  )
}

export default ServiceForm;
