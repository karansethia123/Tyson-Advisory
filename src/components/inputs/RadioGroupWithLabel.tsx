import {
  FormField,
  FormItem,
  FormLabel,
  FormControl
} from '../ui/form'

import { useFormContext } from "react-hook-form";
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Card } from '../ui/card';

type DataObj = {
  title: string,
  score: number
}

type Props<S> = {
  fieldTitle: string,
  nameInSchema: keyof S & string,
  className?: string,
  data: DataObj[]
  containerClass?: string,
}

const RadioGroupWithLabel = <S,>({ fieldTitle, nameInSchema, data }: Props<S>) => {

  const form = useFormContext()

  return (
    <FormField
      control={form.control}
      name={nameInSchema}
      render={({ field }) => (
        <FormItem className="space-y-1">
          <FormLabel>{fieldTitle}</FormLabel>
          <RadioGroup
            onValueChange={(value: string) => field.onChange(parseInt(value))}
            defaultValue={field.value ? String(field.value) : ""}
            className="grid w-full grid-cols-3 gap-3 pt-2"
          >
            {data.map(value => (
              <FormItem key={value.title}>
                <FormLabel className="[&:has([data-state=checked])>div]:border-blue-600">
                  <FormControl>
                    <RadioGroupItem value={value.score.toString()} className="sr-only" />
                  </FormControl>
                  <Card className="flex items-center justify-center w-full h-16">
                    <p className="font-poppins font-light">{value.title}</p>
                  </Card>
                </FormLabel>
              </FormItem>
            ))}
          </RadioGroup>
        </FormItem>
      )}
    />
  )
};

export default RadioGroupWithLabel;

