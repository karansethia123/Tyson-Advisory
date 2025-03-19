import { useFormContext } from "react-hook-form"
import {
  FormControl,
  FormLabel,
  FormItem,
  FormMessage,
  FormField
} from '../ui/form'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"


type DataObj = {
  option: string,
}

type Props<S> = {
  fieldTitle: string,
  nameInSchema: keyof S & string,
  data: DataObj[]
  className?: string,
  containerClass?: string,
}

import { cn } from "@/lib/utils"

const SelectWithLabel = <S,>({
  fieldTitle, nameInSchema, data, className, containerClass
}: Props<S>) => {

  const form = useFormContext()

  return (
    <FormField
      control={form.control}
      name={nameInSchema}
      render={({ field }) => (
        <FormItem className={cn("", containerClass)}>
          <FormLabel className="text-sm" htmlFor={nameInSchema}>
            {fieldTitle}
          </FormLabel>
          <Select {...field}
            onValueChange={field.onChange}
          >
            <FormControl>
              <SelectTrigger id={nameInSchema} className={cn("w-full", className)}>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
            </FormControl>
              <SelectContent>
                {data.map(item => (
                  <SelectItem key={`${nameInSchema}_${item.option}`} value={item.option}>
                    {item.option}
                  </SelectItem>
                ))}
              </SelectContent>
            <FormMessage />
          </Select>
        </FormItem>
      )}
    />
  )
}

export default SelectWithLabel
