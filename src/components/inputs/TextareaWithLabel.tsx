import { TextareaHTMLAttributes } from "react";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl
} from '../ui/form'

import { useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Textarea } from "../ui/textarea";

type Props<S> = {
  fieldTitle: string,
  nameInSchema: keyof S & string,
  className?: string,
  containerClass?: string,
} & TextareaHTMLAttributes<HTMLTextAreaElement>

const TextareaWithLabel = <S,>({ fieldTitle, nameInSchema, containerClass , className, ...props }: Props<S>) => {

  const form = useFormContext()

  return (
    <FormField
      control={form.control}
      name={nameInSchema}
      render={({ field }) => (
        <FormItem className={cn("", containerClass)}>
          <FormLabel className="font-poppins">{fieldTitle}</FormLabel>
          <FormControl>
            <Textarea className={cn("resize-none", className)} {...field} {...props} />
          </FormControl>
        </FormItem>
      )}
    />
  )
};

export default TextareaWithLabel;

