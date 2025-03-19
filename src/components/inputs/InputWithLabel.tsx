import { InputHTMLAttributes } from "react";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl
} from '../ui/form'

import { useFormContext } from "react-hook-form";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";

type Props<S> = {
  fieldTitle: string,
  nameInSchema: keyof S & string,
  className?: string,
  containerClass?: string,
} & InputHTMLAttributes<HTMLInputElement>

const InputWithLabel = <S,>({ fieldTitle, nameInSchema, containerClass , className, ...props }: Props<S>) => {

  const form = useFormContext()

  return (
    <FormField
      control={form.control}
      name={nameInSchema}
      render={({ field }) => (
        <FormItem className={cn("", containerClass)}>
          <FormLabel className="font-poppins">{fieldTitle}</FormLabel>
          <FormControl>
            <Input className={cn("", className)} {...field} {...props} />
          </FormControl>
        </FormItem>
      )}
    />
  )
};

export default InputWithLabel;

