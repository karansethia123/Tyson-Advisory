"use client"
import InputWithLabel from "@/components/inputs/InputWithLabel";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import { Card } from "@/components/ui/card";
import TextareaWithLabel from "@/components/inputs/TextareaWithLabel";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { ContactFormSchemaType, contactFormSchema } from "@/types/service";


const ContactUsForm = () => {

    const form = useForm<ContactFormSchemaType>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      companyName: ""
    }
  })

  const submitHandler = () => {
  toast("Details submitted", {
      description: "Our team with reach out shortly"
    })
  }

  return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(submitHandler)} className="flex-1 flex flex-col gap-2 p-4 lg:px-8">
          <Card className="flex flex-col gap-2 px-6 shadow-md shadow-gray-800">
            <InputWithLabel<ContactFormSchemaType> nameInSchema="name" fieldTitle="Full Name"  />
            <InputWithLabel<ContactFormSchemaType> nameInSchema="email" fieldTitle="Email" />
            <InputWithLabel<ContactFormSchemaType> nameInSchema="companyName" fieldTitle="Company Name" />
            <TextareaWithLabel<ContactFormSchemaType> nameInSchema="message" rows={10} fieldTitle="Message" className="h-32"/>
            <Button className="my-5 bg-blue-400 transition-all ease-in">Submit</Button>
          </Card>
        </form>
      </Form>
  )
}

export default ContactUsForm;
