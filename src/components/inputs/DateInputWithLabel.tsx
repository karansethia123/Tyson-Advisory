import {
  FormField,
  FormItem,
  FormLabel,
  FormControl
} from '../form'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../popover"
import { Button } from "../button";
import { useFormContext } from "react-hook-form";
import { format, isPast, isSameDay, startOfDay } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils";
import { Calendar } from "../calendar";

type Props<S> = {
  fieldTitle: string,
  nameInSchema: keyof S & string,
  className?: string,
  containerClass?: string,
}

const DateInputWithLabel = <S,>({ fieldTitle, nameInSchema, containerClass, className }: Props<S>) => {

  const form = useFormContext()

  return (
    <FormField
      control={form.control}
      name={nameInSchema}
      render={({ field }) => {
        return (<FormItem className={cn("", containerClass)}>
          <FormLabel className="font-poppins">{fieldTitle}</FormLabel>
          <Popover modal>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full pl-3 text-left font-normal",
                    !field.value && "text-muted-foreground",
                    className
                  )}
                >
                  {field.value ? (
                    format(field.value, "PPP")
                  ) : (
                    <span>Pick a date</span>
                  )}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={field.value}
                onSelect={field.onChange}
                disabled={date => {
                  const today = startOfDay(new Date());
                  const currentDate = startOfDay(date);
                  return isPast(currentDate) && !isSameDay(currentDate, today);
                }}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </FormItem>
        )
      }}
    />
  )
};

export default DateInputWithLabel;

