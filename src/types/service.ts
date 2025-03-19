import { z } from "zod";

export const serviceFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email().min(1, {message: "Email is required"}),
  service: z.enum(["Data and Analytics", "Cloud", "AI and Automation", "Managed Services", "Application Services"]),
  message: z.string().optional()
})

export type ServiceFormSchemaType = z.infer<typeof serviceFormSchema>
