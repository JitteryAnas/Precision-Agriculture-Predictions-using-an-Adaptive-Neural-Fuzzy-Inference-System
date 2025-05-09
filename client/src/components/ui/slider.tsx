import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/lib/utils";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> & {
    showValue?: boolean;
    valueDisplay?: React.ReactNode;
    unit?: string;
  }
>(({ className, showValue, valueDisplay, unit, ...props }, ref) => {
  const [value, setValue] = React.useState(props.defaultValue || [0]);

  React.useEffect(() => {
    if (props.value) {
      setValue(props.value);
    }
  }, [props.value]);

  const handleValueChange = (newValue: number[]) => {
    setValue(newValue);
    if (props.onValueChange) {
      props.onValueChange(newValue);
    }
  };

  return (
    <div className="w-full flex items-center gap-4">
      <SliderPrimitive.Root
        ref={ref}
        className={cn(
          "relative flex w-full touch-none select-none items-center",
          className
        )}
        onValueChange={handleValueChange}
        {...props}
      >
        <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-gray-200">
          <SliderPrimitive.Range className="absolute h-full bg-primary-green" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-white bg-primary-green shadow-lg ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
      </SliderPrimitive.Root>
      {showValue && (
        <span className="text-lg font-semibold min-w-[3rem] text-right">
          {valueDisplay || value[0]} {unit}
        </span>
      )}
    </div>
  );
});

Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
