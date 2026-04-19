"use client";
import * as React19 from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import * as SelectPrimitive from '@radix-ui/react-select';
import { ChevronDown, ChevronUp, Check, Circle, X, PanelLeft, ChevronRight, Search, MoreHorizontal, ChevronLeft, ChevronLeftIcon, ChevronRightIcon, ChevronDownIcon, GripVertical, Loader2, CalendarIcon, Upload, FileVideo, TrendingUp, TrendingDown, ChevronsUpDown, SearchIcon, ChevronsLeftIcon, ChevronsRightIcon, ArrowRight, AlertCircle, AlertTriangle, CheckCircle2, Info, CheckIcon, XIcon, ArrowRightIcon, ArrowDownIcon, TrendingUpIcon, TrendingDownIcon, MinusIcon } from 'lucide-react';
export { FileImage, FileVideo } from 'lucide-react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import * as SliderPrimitive from '@radix-ui/react-slider';
import * as LabelPrimitive from '@radix-ui/react-label';
import { useFormContext, FormProvider, Controller } from 'react-hook-form';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import * as MenubarPrimitive from '@radix-ui/react-menubar';
import { Command as Command$1 } from 'cmdk';
import { Drawer as Drawer$1 } from 'vaul';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { useTheme } from 'next-themes';
import { Toaster as Toaster$1 } from 'sonner';
import { getDefaultClassNames, DayPicker } from 'react-day-picker';
import * as RechartsPrimitive from 'recharts';
import { AreaChart, CartesianGrid, XAxis, Area } from 'recharts';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import * as TogglePrimitive from '@radix-ui/react-toggle';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import { Panel, Group, Separator } from 'react-resizable-panels';
import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio';
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';
import { useDropzone } from 'react-dropzone';
import { useSensors, useSensor, PointerSensor, KeyboardSensor, DndContext, closestCenter } from '@dnd-kit/core';
import { sortableKeyboardCoordinates, SortableContext, verticalListSortingStrategy, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useReactTable, getSortedRowModel, getPaginationRowModel, getFilteredRowModel, getCoreRowModel, flexRender } from '@tanstack/react-table';

// src/components/ui/button.tsx
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
var buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
var Button = React19.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";
var Input = React19.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
var Textarea = React19.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    "textarea",
    {
      className: cn(
        "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      ),
      ref,
      ...props
    }
  );
});
Textarea.displayName = "Textarea";
var Select = SelectPrimitive.Root;
var SelectGroup = SelectPrimitive.Group;
var SelectValue = SelectPrimitive.Value;
var SelectTrigger = React19.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  SelectPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
var SelectScrollUpButton = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.ScrollUpButton,
  {
    ref,
    className: cn(
      "flex cursor-default items-center justify-center py-1",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx(ChevronUp, { className: "h-4 w-4" })
  }
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
var SelectScrollDownButton = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.ScrollDownButton,
  {
    ref,
    className: cn(
      "flex cursor-default items-center justify-center py-1",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4" })
  }
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;
var SelectContent = React19.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsx(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxs(
  SelectPrimitive.Content,
  {
    ref,
    className: cn(
      "relative z-50 max-h-[--radix-select-content-available-height] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-select-content-transform-origin]",
      position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      className
    ),
    position,
    ...props,
    children: [
      /* @__PURE__ */ jsx(SelectScrollUpButton, {}),
      /* @__PURE__ */ jsx(
        SelectPrimitive.Viewport,
        {
          className: cn(
            "p-1",
            position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children
        }
      ),
      /* @__PURE__ */ jsx(SelectScrollDownButton, {})
    ]
  }
) }));
SelectContent.displayName = SelectPrimitive.Content.displayName;
var SelectLabel = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.Label,
  {
    ref,
    className: cn("px-2 py-1.5 text-sm font-semibold", className),
    ...props
  }
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;
var SelectItem = React19.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  SelectPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ jsx(SelectPrimitive.ItemText, { children })
    ]
  }
));
SelectItem.displayName = SelectPrimitive.Item.displayName;
var SelectSeparator = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;
var Checkbox = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  CheckboxPrimitive.Root,
  {
    ref,
    className: cn(
      "grid place-content-center peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx(
      CheckboxPrimitive.Indicator,
      {
        className: cn("grid place-content-center text-current"),
        children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" })
      }
    )
  }
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;
var RadioGroup = React19.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    RadioGroupPrimitive.Root,
    {
      className: cn("grid gap-2", className),
      ...props,
      ref
    }
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;
var RadioGroupItem = React19.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    RadioGroupPrimitive.Item,
    {
      ref,
      className: cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx(RadioGroupPrimitive.Indicator, { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx(Circle, { className: "h-3.5 w-3.5 fill-primary" }) })
    }
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;
var Switch = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SwitchPrimitives.Root,
  {
    className: cn(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className
    ),
    ...props,
    ref,
    children: /* @__PURE__ */ jsx(
      SwitchPrimitives.Thumb,
      {
        className: cn(
          "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
Switch.displayName = SwitchPrimitives.Root.displayName;
var Slider = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxs(
  SliderPrimitive.Root,
  {
    ref,
    className: cn(
      "relative flex w-full touch-none select-none items-center",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx(SliderPrimitive.Track, { className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20", children: /* @__PURE__ */ jsx(SliderPrimitive.Range, { className: "absolute h-full bg-primary" }) }),
      /* @__PURE__ */ jsx(SliderPrimitive.Thumb, { className: "block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
Slider.displayName = SliderPrimitive.Root.displayName;
var labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
var Label2 = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  LabelPrimitive.Root,
  {
    ref,
    className: cn(labelVariants(), className),
    ...props
  }
));
Label2.displayName = LabelPrimitive.Root.displayName;
var Form = FormProvider;
var FormFieldContext = React19.createContext(null);
var FormField = ({
  ...props
}) => {
  return /* @__PURE__ */ jsx(FormFieldContext.Provider, { value: { name: props.name }, children: /* @__PURE__ */ jsx(Controller, { ...props }) });
};
var useFormField = () => {
  const fieldContext = React19.useContext(FormFieldContext);
  const itemContext = React19.useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();
  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }
  if (!itemContext) {
    throw new Error("useFormField should be used within <FormItem>");
  }
  const fieldState = getFieldState(fieldContext.name, formState);
  const { id } = itemContext;
  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState
  };
};
var FormItemContext = React19.createContext(null);
var FormItem = React19.forwardRef(({ className, ...props }, ref) => {
  const id = React19.useId();
  return /* @__PURE__ */ jsx(FormItemContext.Provider, { value: { id }, children: /* @__PURE__ */ jsx("div", { ref, className: cn("space-y-2", className), ...props }) });
});
FormItem.displayName = "FormItem";
var FormLabel = React19.forwardRef(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField();
  return /* @__PURE__ */ jsx(
    Label2,
    {
      ref,
      className: cn(error && "text-destructive", className),
      htmlFor: formItemId,
      ...props
    }
  );
});
FormLabel.displayName = "FormLabel";
var FormControl = React19.forwardRef(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
  return /* @__PURE__ */ jsx(
    Slot,
    {
      ref,
      id: formItemId,
      "aria-describedby": !error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`,
      "aria-invalid": !!error,
      ...props
    }
  );
});
FormControl.displayName = "FormControl";
var FormDescription = React19.forwardRef(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField();
  return /* @__PURE__ */ jsx(
    "p",
    {
      ref,
      id: formDescriptionId,
      className: cn("text-[0.8rem] text-muted-foreground", className),
      ...props
    }
  );
});
FormDescription.displayName = "FormDescription";
var FormMessage = React19.forwardRef(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message ?? "") : children;
  if (!body) {
    return null;
  }
  return /* @__PURE__ */ jsx(
    "p",
    {
      ref,
      id: formMessageId,
      className: cn("text-[0.8rem] font-medium text-destructive", className),
      ...props,
      children: body
    }
  );
});
FormMessage.displayName = "FormMessage";
var Card = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn(
      "rounded-xl border bg-card text-card-foreground shadow",
      className
    ),
    ...props
  }
));
Card.displayName = "Card";
var CardHeader = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
var CardTitle = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("font-semibold leading-none tracking-tight", className),
    ...props
  }
));
CardTitle.displayName = "CardTitle";
var CardDescription = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
var CardContent = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("p-6 pt-0", className), ...props }));
CardContent.displayName = "CardContent";
var CardFooter = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";
var badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({ className, variant, ...props }) {
  return /* @__PURE__ */ jsx("div", { className: cn(badgeVariants({ variant }), className), ...props });
}
var Avatar = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AvatarPrimitive.Root,
  {
    ref,
    className: cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    ),
    ...props
  }
));
Avatar.displayName = AvatarPrimitive.Root.displayName;
var AvatarImage = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AvatarPrimitive.Image,
  {
    ref,
    className: cn("aspect-square h-full w-full", className),
    ...props
  }
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;
var AvatarFallback = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AvatarPrimitive.Fallback,
  {
    ref,
    className: cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    ),
    ...props
  }
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;
var Separator2 = React19.forwardRef(
  ({ className, orientation = "horizontal", decorative = true, ...props }, ref) => /* @__PURE__ */ jsx(
    SeparatorPrimitive.Root,
    {
      ref,
      decorative,
      orientation,
      className: cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      ),
      ...props
    }
  )
);
Separator2.displayName = SeparatorPrimitive.Root.displayName;
function Skeleton({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn("animate-pulse rounded-md bg-primary/10", className),
      ...props
    }
  );
}
var Progress = React19.forwardRef(({ className, value, ...props }, ref) => /* @__PURE__ */ jsx(
  ProgressPrimitive.Root,
  {
    ref,
    className: cn(
      "relative h-2 w-full overflow-hidden rounded-full bg-primary/20",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx(
      ProgressPrimitive.Indicator,
      {
        className: "h-full w-full flex-1 bg-primary transition-all",
        style: { transform: `translateX(-${100 - (value || 0)}%)` }
      }
    )
  }
));
Progress.displayName = ProgressPrimitive.Root.displayName;
var alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
var Alert = React19.forwardRef(({ className, variant, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    role: "alert",
    className: cn(alertVariants({ variant }), className),
    ...props
  }
));
Alert.displayName = "Alert";
var AlertTitle = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "h5",
  {
    ref,
    className: cn("mb-1 font-medium leading-none tracking-tight", className),
    ...props
  }
));
AlertTitle.displayName = "AlertTitle";
var AlertDescription = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("text-sm [&_p]:leading-relaxed", className),
    ...props
  }
));
AlertDescription.displayName = "AlertDescription";
var MOBILE_BREAKPOINT = 768;
function useIsMobile() {
  const [isMobile, setIsMobile] = React19.useState(void 0);
  React19.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);
  return !!isMobile;
}
var Sheet = SheetPrimitive.Root;
var SheetTrigger = SheetPrimitive.Trigger;
var SheetClose = SheetPrimitive.Close;
var SheetPortal = SheetPrimitive.Portal;
var SheetOverlay = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Overlay,
  {
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  }
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;
var sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
);
var SheetContent = React19.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ jsxs(SheetPortal, { children: [
  /* @__PURE__ */ jsx(SheetOverlay, {}),
  /* @__PURE__ */ jsxs(
    SheetPrimitive.Content,
    {
      ref,
      className: cn(sheetVariants({ side }), className),
      ...props,
      children: [
        /* @__PURE__ */ jsxs(SheetPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
        ] }),
        children
      ]
    }
  )
] }));
SheetContent.displayName = SheetPrimitive.Content.displayName;
var SheetHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx(
  "div",
  {
    className: cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    ),
    ...props
  }
);
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx(
  "div",
  {
    className: cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    ),
    ...props
  }
);
SheetFooter.displayName = "SheetFooter";
var SheetTitle = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Title,
  {
    ref,
    className: cn("text-lg font-semibold text-foreground", className),
    ...props
  }
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;
var SheetDescription = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;
var TooltipProvider = TooltipPrimitive.Provider;
var Tooltip = TooltipPrimitive.Root;
var TooltipTrigger = TooltipPrimitive.Trigger;
var TooltipContent = React19.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(TooltipPrimitive.Portal, { children: /* @__PURE__ */ jsx(
  TooltipPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-tooltip-content-transform-origin]",
      className
    ),
    ...props
  }
) }));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;
var SIDEBAR_COOKIE_NAME = "sidebar_state";
var SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
var SIDEBAR_WIDTH = "16rem";
var SIDEBAR_WIDTH_MOBILE = "18rem";
var SIDEBAR_WIDTH_ICON = "3rem";
var SIDEBAR_KEYBOARD_SHORTCUT = "b";
var SidebarContext = React19.createContext(null);
function useSidebar() {
  const context = React19.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }
  return context;
}
var SidebarProvider = React19.forwardRef(
  ({
    defaultOpen = true,
    open: openProp,
    onOpenChange: setOpenProp,
    className,
    style,
    children,
    ...props
  }, ref) => {
    const isMobile = useIsMobile();
    const [openMobile, setOpenMobile] = React19.useState(false);
    const [_open, _setOpen] = React19.useState(defaultOpen);
    const open = openProp ?? _open;
    const setOpen = React19.useCallback(
      (value) => {
        const openState = typeof value === "function" ? value(open) : value;
        if (setOpenProp) {
          setOpenProp(openState);
        } else {
          _setOpen(openState);
        }
        document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
      },
      [setOpenProp, open]
    );
    const toggleSidebar = React19.useCallback(() => {
      return isMobile ? setOpenMobile((open2) => !open2) : setOpen((open2) => !open2);
    }, [isMobile, setOpen, setOpenMobile]);
    React19.useEffect(() => {
      const handleKeyDown = (event) => {
        if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
          event.preventDefault();
          toggleSidebar();
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }, [toggleSidebar]);
    const state = open ? "expanded" : "collapsed";
    const contextValue = React19.useMemo(
      () => ({
        state,
        open,
        setOpen,
        isMobile,
        openMobile,
        setOpenMobile,
        toggleSidebar
      }),
      [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
    );
    return /* @__PURE__ */ jsx(SidebarContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsx(TooltipProvider, { delayDuration: 0, children: /* @__PURE__ */ jsx(
      "div",
      {
        style: {
          "--sidebar-width": SIDEBAR_WIDTH,
          "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
          ...style
        },
        className: cn(
          "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar",
          className
        ),
        ref,
        ...props,
        children
      }
    ) }) });
  }
);
SidebarProvider.displayName = "SidebarProvider";
var Sidebar = React19.forwardRef(
  ({
    side = "left",
    variant = "sidebar",
    collapsible = "offcanvas",
    className,
    children,
    ...props
  }, ref) => {
    const { isMobile, state, openMobile, setOpenMobile } = useSidebar();
    if (collapsible === "none") {
      return /* @__PURE__ */ jsx(
        "div",
        {
          className: cn(
            "flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground",
            className
          ),
          ref,
          ...props,
          children
        }
      );
    }
    if (isMobile) {
      return /* @__PURE__ */ jsx(Sheet, { open: openMobile, onOpenChange: setOpenMobile, ...props, children: /* @__PURE__ */ jsxs(
        SheetContent,
        {
          "data-sidebar": "sidebar",
          "data-mobile": "true",
          className: "w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
          style: {
            "--sidebar-width": SIDEBAR_WIDTH_MOBILE
          },
          side,
          children: [
            /* @__PURE__ */ jsxs(SheetHeader, { className: "sr-only", children: [
              /* @__PURE__ */ jsx(SheetTitle, { children: "Sidebar" }),
              /* @__PURE__ */ jsx(SheetDescription, { children: "Displays the mobile sidebar." })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex h-full w-full flex-col", children })
          ]
        }
      ) });
    }
    return /* @__PURE__ */ jsxs(
      "div",
      {
        ref,
        className: "group peer hidden text-sidebar-foreground md:block",
        "data-state": state,
        "data-collapsible": state === "collapsed" ? collapsible : "",
        "data-variant": variant,
        "data-side": side,
        children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: cn(
                "relative w-[--sidebar-width] bg-transparent transition-[width] duration-200 ease-linear",
                "group-data-[collapsible=offcanvas]:w-0",
                "group-data-[side=right]:rotate-180",
                variant === "floating" || variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]"
              )
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: cn(
                "fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] duration-200 ease-linear md:flex",
                side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
                // Adjust the padding for floating and inset variants.
                variant === "floating" || variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l",
                className
              ),
              ...props,
              children: /* @__PURE__ */ jsx(
                "div",
                {
                  "data-sidebar": "sidebar",
                  className: "flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow",
                  children
                }
              )
            }
          )
        ]
      }
    );
  }
);
Sidebar.displayName = "Sidebar";
var SidebarTrigger = React19.forwardRef(({ className, onClick, ...props }, ref) => {
  const { toggleSidebar } = useSidebar();
  return /* @__PURE__ */ jsxs(
    Button,
    {
      ref,
      "data-sidebar": "trigger",
      variant: "ghost",
      size: "icon",
      className: cn("h-7 w-7", className),
      onClick: (event) => {
        onClick?.(event);
        toggleSidebar();
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx(PanelLeft, {}),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Toggle Sidebar" })
      ]
    }
  );
});
SidebarTrigger.displayName = "SidebarTrigger";
var SidebarRail = React19.forwardRef(({ className, ...props }, ref) => {
  const { toggleSidebar } = useSidebar();
  return /* @__PURE__ */ jsx(
    "button",
    {
      ref,
      "data-sidebar": "rail",
      "aria-label": "Toggle Sidebar",
      tabIndex: -1,
      onClick: toggleSidebar,
      title: "Toggle Sidebar",
      className: cn(
        "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex",
        "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        className
      ),
      ...props
    }
  );
});
SidebarRail.displayName = "SidebarRail";
var SidebarInset = React19.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    "main",
    {
      ref,
      className: cn(
        "relative flex w-full flex-1 flex-col bg-background",
        "md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",
        className
      ),
      ...props
    }
  );
});
SidebarInset.displayName = "SidebarInset";
var SidebarInput = React19.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    Input,
    {
      ref,
      "data-sidebar": "input",
      className: cn(
        "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
        className
      ),
      ...props
    }
  );
});
SidebarInput.displayName = "SidebarInput";
var SidebarHeader = React19.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      "data-sidebar": "header",
      className: cn("flex flex-col gap-2 p-2", className),
      ...props
    }
  );
});
SidebarHeader.displayName = "SidebarHeader";
var SidebarFooter = React19.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      "data-sidebar": "footer",
      className: cn("flex flex-col gap-2 p-2", className),
      ...props
    }
  );
});
SidebarFooter.displayName = "SidebarFooter";
var SidebarSeparator = React19.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    Separator2,
    {
      ref,
      "data-sidebar": "separator",
      className: cn("mx-2 w-auto bg-sidebar-border", className),
      ...props
    }
  );
});
SidebarSeparator.displayName = "SidebarSeparator";
var SidebarContent = React19.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      "data-sidebar": "content",
      className: cn(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        className
      ),
      ...props
    }
  );
});
SidebarContent.displayName = "SidebarContent";
var SidebarGroup = React19.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      "data-sidebar": "group",
      className: cn("relative flex w-full min-w-0 flex-col p-2", className),
      ...props
    }
  );
});
SidebarGroup.displayName = "SidebarGroup";
var SidebarGroupLabel = React19.forwardRef(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "div";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      ref,
      "data-sidebar": "group-label",
      className: cn(
        "flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        className
      ),
      ...props
    }
  );
});
SidebarGroupLabel.displayName = "SidebarGroupLabel";
var SidebarGroupAction = React19.forwardRef(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      ref,
      "data-sidebar": "group-action",
      className: cn(
        "absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "group-data-[collapsible=icon]:hidden",
        className
      ),
      ...props
    }
  );
});
SidebarGroupAction.displayName = "SidebarGroupAction";
var SidebarGroupContent = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    "data-sidebar": "group-content",
    className: cn("w-full text-sm", className),
    ...props
  }
));
SidebarGroupContent.displayName = "SidebarGroupContent";
var SidebarMenu = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "ul",
  {
    ref,
    "data-sidebar": "menu",
    className: cn("flex w-full min-w-0 flex-col gap-1", className),
    ...props
  }
));
SidebarMenu.displayName = "SidebarMenu";
var SidebarMenuItem = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "li",
  {
    ref,
    "data-sidebar": "menu-item",
    className: cn("group/menu-item relative", className),
    ...props
  }
));
SidebarMenuItem.displayName = "SidebarMenuItem";
var sidebarMenuButtonVariants = cva(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
var SidebarMenuButton = React19.forwardRef(
  ({
    asChild = false,
    isActive = false,
    variant = "default",
    size = "default",
    tooltip,
    className,
    ...props
  }, ref) => {
    const Comp = asChild ? Slot : "button";
    const { isMobile, state } = useSidebar();
    const button = /* @__PURE__ */ jsx(
      Comp,
      {
        ref,
        "data-sidebar": "menu-button",
        "data-size": size,
        "data-active": isActive,
        className: cn(sidebarMenuButtonVariants({ variant, size }), className),
        ...props
      }
    );
    if (!tooltip) {
      return button;
    }
    if (typeof tooltip === "string") {
      tooltip = {
        children: tooltip
      };
    }
    return /* @__PURE__ */ jsxs(Tooltip, { children: [
      /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: button }),
      /* @__PURE__ */ jsx(
        TooltipContent,
        {
          side: "right",
          align: "center",
          hidden: state !== "collapsed" || isMobile,
          ...tooltip
        }
      )
    ] });
  }
);
SidebarMenuButton.displayName = "SidebarMenuButton";
var SidebarMenuAction = React19.forwardRef(({ className, asChild = false, showOnHover = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      ref,
      "data-sidebar": "menu-action",
      className: cn(
        "absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        showOnHover && "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",
        className
      ),
      ...props
    }
  );
});
SidebarMenuAction.displayName = "SidebarMenuAction";
var SidebarMenuBadge = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    "data-sidebar": "menu-badge",
    className: cn(
      "pointer-events-none absolute right-1 flex h-5 min-w-5 select-none items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground",
      "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
      "peer-data-[size=sm]/menu-button:top-1",
      "peer-data-[size=default]/menu-button:top-1.5",
      "peer-data-[size=lg]/menu-button:top-2.5",
      "group-data-[collapsible=icon]:hidden",
      className
    ),
    ...props
  }
));
SidebarMenuBadge.displayName = "SidebarMenuBadge";
var SidebarMenuSkeleton = React19.forwardRef(({ className, showIcon = false, ...props }, ref) => {
  const width = React19.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`;
  }, []);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref,
      "data-sidebar": "menu-skeleton",
      className: cn("flex h-8 items-center gap-2 rounded-md px-2", className),
      ...props,
      children: [
        showIcon && /* @__PURE__ */ jsx(
          Skeleton,
          {
            className: "size-4 rounded-md",
            "data-sidebar": "menu-skeleton-icon"
          }
        ),
        /* @__PURE__ */ jsx(
          Skeleton,
          {
            className: "h-4 max-w-[--skeleton-width] flex-1",
            "data-sidebar": "menu-skeleton-text",
            style: {
              "--skeleton-width": width
            }
          }
        )
      ]
    }
  );
});
SidebarMenuSkeleton.displayName = "SidebarMenuSkeleton";
var SidebarMenuSub = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "ul",
  {
    ref,
    "data-sidebar": "menu-sub",
    className: cn(
      "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5",
      "group-data-[collapsible=icon]:hidden",
      className
    ),
    ...props
  }
));
SidebarMenuSub.displayName = "SidebarMenuSub";
var SidebarMenuSubItem = React19.forwardRef(({ ...props }, ref) => /* @__PURE__ */ jsx("li", { ref, ...props }));
SidebarMenuSubItem.displayName = "SidebarMenuSubItem";
var SidebarMenuSubButton = React19.forwardRef(({ asChild = false, size = "md", isActive, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      ref,
      "data-sidebar": "menu-sub-button",
      "data-size": size,
      "data-active": isActive,
      className: cn(
        "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        size === "sm" && "text-xs",
        size === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        className
      ),
      ...props
    }
  );
});
SidebarMenuSubButton.displayName = "SidebarMenuSubButton";
var Tabs = TabsPrimitive.Root;
var TabsList = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  TabsPrimitive.List,
  {
    ref,
    className: cn(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      className
    ),
    ...props
  }
));
TabsList.displayName = TabsPrimitive.List.displayName;
var TabsTrigger = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  TabsPrimitive.Trigger,
  {
    ref,
    className: cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
      className
    ),
    ...props
  }
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
var TabsContent = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  TabsPrimitive.Content,
  {
    ref,
    className: cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    ),
    ...props
  }
));
TabsContent.displayName = TabsPrimitive.Content.displayName;
var Breadcrumb = React19.forwardRef(({ ...props }, ref) => /* @__PURE__ */ jsx("nav", { ref, "aria-label": "breadcrumb", ...props }));
Breadcrumb.displayName = "Breadcrumb";
var BreadcrumbList = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "ol",
  {
    ref,
    className: cn(
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
      className
    ),
    ...props
  }
));
BreadcrumbList.displayName = "BreadcrumbList";
var BreadcrumbItem = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "li",
  {
    ref,
    className: cn("inline-flex items-center gap-1.5", className),
    ...props
  }
));
BreadcrumbItem.displayName = "BreadcrumbItem";
var BreadcrumbLink = React19.forwardRef(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      ref,
      className: cn("transition-colors hover:text-foreground", className),
      ...props
    }
  );
});
BreadcrumbLink.displayName = "BreadcrumbLink";
var BreadcrumbPage = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "span",
  {
    ref,
    role: "link",
    "aria-disabled": "true",
    "aria-current": "page",
    className: cn("font-normal text-foreground", className),
    ...props
  }
));
BreadcrumbPage.displayName = "BreadcrumbPage";
var BreadcrumbSeparator = ({
  children,
  className,
  ...props
}) => /* @__PURE__ */ jsx(
  "li",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: cn("[&>svg]:w-3.5 [&>svg]:h-3.5", className),
    ...props,
    children: children ?? /* @__PURE__ */ jsx(ChevronRight, {})
  }
);
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";
var BreadcrumbEllipsis = ({
  className,
  ...props
}) => /* @__PURE__ */ jsxs(
  "span",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: cn("flex h-9 w-9 items-center justify-center", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx(MoreHorizontal, { className: "h-4 w-4" }),
      /* @__PURE__ */ jsx("span", { className: "sr-only", children: "More" })
    ]
  }
);
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis";
var NavigationMenu = React19.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  NavigationMenuPrimitive.Root,
  {
    ref,
    className: cn(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(NavigationMenuViewport, {})
    ]
  }
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;
var NavigationMenuList = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  NavigationMenuPrimitive.List,
  {
    ref,
    className: cn(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      className
    ),
    ...props
  }
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;
var NavigationMenuItem = NavigationMenuPrimitive.Item;
var navigationMenuTriggerStyle = cva(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:text-accent-foreground data-[state=open]:bg-accent/50 data-[state=open]:hover:bg-accent data-[state=open]:focus:bg-accent"
);
var NavigationMenuTrigger = React19.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  NavigationMenuPrimitive.Trigger,
  {
    ref,
    className: cn(navigationMenuTriggerStyle(), "group", className),
    ...props,
    children: [
      children,
      " ",
      /* @__PURE__ */ jsx(
        ChevronDown,
        {
          className: "relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        }
      )
    ]
  }
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;
var NavigationMenuContent = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  NavigationMenuPrimitive.Content,
  {
    ref,
    className: cn(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      className
    ),
    ...props
  }
));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;
var NavigationMenuLink = NavigationMenuPrimitive.Link;
var NavigationMenuViewport = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { className: cn("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ jsx(
  NavigationMenuPrimitive.Viewport,
  {
    className: cn(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      className
    ),
    ref,
    ...props
  }
) }));
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName;
var NavigationMenuIndicator = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  NavigationMenuPrimitive.Indicator,
  {
    ref,
    className: cn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
  }
));
NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName;
var DropdownMenu = DropdownMenuPrimitive.Root;
var DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
var DropdownMenuGroup = DropdownMenuPrimitive.Group;
var DropdownMenuPortal = DropdownMenuPrimitive.Portal;
var DropdownMenuSub = DropdownMenuPrimitive.Sub;
var DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
var DropdownMenuSubTrigger = React19.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.SubTrigger,
  {
    ref,
    className: cn(
      "flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(ChevronRight, { className: "ml-auto" })
    ]
  }
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
var DropdownMenuSubContent = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.SubContent,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-dropdown-menu-content-transform-origin]",
      className
    ),
    ...props
  }
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;
var DropdownMenuContent = React19.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-dropdown-menu-content-transform-origin]",
      className
    ),
    ...props
  }
) }));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
var DropdownMenuItem = React19.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
var DropdownMenuCheckboxItem = React19.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.CheckboxItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }) }) }),
      children
    ]
  }
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
var DropdownMenuRadioItem = React19.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.RadioItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Circle, { className: "h-2 w-2 fill-current" }) }) }),
      children
    ]
  }
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
var DropdownMenuLabel = React19.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Label,
  {
    ref,
    className: cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
var DropdownMenuSeparator = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
var DropdownMenuShortcut = ({
  className,
  ...props
}) => {
  return /* @__PURE__ */ jsx(
    "span",
    {
      className: cn("ml-auto text-xs tracking-widest opacity-60", className),
      ...props
    }
  );
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
function MenubarMenu({
  ...props
}) {
  return /* @__PURE__ */ jsx(MenubarPrimitive.Menu, { ...props });
}
function MenubarGroup({
  ...props
}) {
  return /* @__PURE__ */ jsx(MenubarPrimitive.Group, { ...props });
}
function MenubarPortal({
  ...props
}) {
  return /* @__PURE__ */ jsx(MenubarPrimitive.Portal, { ...props });
}
function MenubarRadioGroup({
  ...props
}) {
  return /* @__PURE__ */ jsx(MenubarPrimitive.RadioGroup, { ...props });
}
function MenubarSub({
  ...props
}) {
  return /* @__PURE__ */ jsx(MenubarPrimitive.Sub, { "data-slot": "menubar-sub", ...props });
}
var Menubar = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  MenubarPrimitive.Root,
  {
    ref,
    className: cn(
      "flex h-9 items-center space-x-1 rounded-md border bg-background p-1 shadow-sm",
      className
    ),
    ...props
  }
));
Menubar.displayName = MenubarPrimitive.Root.displayName;
var MenubarTrigger = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  MenubarPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      className
    ),
    ...props
  }
));
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName;
var MenubarSubTrigger = React19.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  MenubarPrimitive.SubTrigger,
  {
    ref,
    className: cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(ChevronRight, { className: "ml-auto h-4 w-4" })
    ]
  }
));
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName;
var MenubarSubContent = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  MenubarPrimitive.SubContent,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-menubar-content-transform-origin]",
      className
    ),
    ...props
  }
));
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName;
var MenubarContent = React19.forwardRef(
  ({ className, align = "start", alignOffset = -4, sideOffset = 8, ...props }, ref) => /* @__PURE__ */ jsx(MenubarPrimitive.Portal, { children: /* @__PURE__ */ jsx(
    MenubarPrimitive.Content,
    {
      ref,
      align,
      alignOffset,
      sideOffset,
      className: cn(
        "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-menubar-content-transform-origin]",
        className
      ),
      ...props
    }
  ) })
);
MenubarContent.displayName = MenubarPrimitive.Content.displayName;
var MenubarItem = React19.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx(
  MenubarPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
MenubarItem.displayName = MenubarPrimitive.Item.displayName;
var MenubarCheckboxItem = React19.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxs(
  MenubarPrimitive.CheckboxItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(MenubarPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }) }) }),
      children
    ]
  }
));
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName;
var MenubarRadioItem = React19.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  MenubarPrimitive.RadioItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(MenubarPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Circle, { className: "h-4 w-4 fill-current" }) }) }),
      children
    ]
  }
));
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName;
var MenubarLabel = React19.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx(
  MenubarPrimitive.Label,
  {
    ref,
    className: cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
MenubarLabel.displayName = MenubarPrimitive.Label.displayName;
var MenubarSeparator = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  MenubarPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName;
var MenubarShortcut = ({
  className,
  ...props
}) => {
  return /* @__PURE__ */ jsx(
    "span",
    {
      className: cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      ),
      ...props
    }
  );
};
MenubarShortcut.displayname = "MenubarShortcut";
var Dialog = SheetPrimitive.Root;
var DialogTrigger = SheetPrimitive.Trigger;
var DialogPortal = SheetPrimitive.Portal;
var DialogClose = SheetPrimitive.Close;
var DialogOverlay = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = SheetPrimitive.Overlay.displayName;
var DialogContent = React19.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxs(
    SheetPrimitive.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxs(SheetPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = SheetPrimitive.Content.displayName;
var DialogHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx(
  "div",
  {
    className: cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    ),
    ...props
  }
);
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx(
  "div",
  {
    className: cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    ),
    ...props
  }
);
DialogFooter.displayName = "DialogFooter";
var DialogTitle = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Title,
  {
    ref,
    className: cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  }
));
DialogTitle.displayName = SheetPrimitive.Title.displayName;
var DialogDescription = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = SheetPrimitive.Description.displayName;
var Command = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Command$1,
  {
    ref,
    className: cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      className
    ),
    ...props
  }
));
Command.displayName = Command$1.displayName;
var CommandDialog = ({ children, ...props }) => {
  return /* @__PURE__ */ jsx(Dialog, { ...props, children: /* @__PURE__ */ jsx(DialogContent, { className: "overflow-hidden p-0", children: /* @__PURE__ */ jsx(Command, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children }) }) });
};
var CommandInput = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxs("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ jsx(Search, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ jsx(
    Command$1.Input,
    {
      ref,
      className: cn(
        "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props
    }
  )
] }));
CommandInput.displayName = Command$1.Input.displayName;
var CommandList = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Command$1.List,
  {
    ref,
    className: cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className),
    ...props
  }
));
CommandList.displayName = Command$1.List.displayName;
var CommandEmpty = React19.forwardRef((props, ref) => /* @__PURE__ */ jsx(
  Command$1.Empty,
  {
    ref,
    className: "py-6 text-center text-sm",
    ...props
  }
));
CommandEmpty.displayName = Command$1.Empty.displayName;
var CommandGroup = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Command$1.Group,
  {
    ref,
    className: cn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      className
    ),
    ...props
  }
));
CommandGroup.displayName = Command$1.Group.displayName;
var CommandSeparator = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Command$1.Separator,
  {
    ref,
    className: cn("-mx-1 h-px bg-border", className),
    ...props
  }
));
CommandSeparator.displayName = Command$1.Separator.displayName;
var CommandItem = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Command$1.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      className
    ),
    ...props
  }
));
CommandItem.displayName = Command$1.Item.displayName;
var CommandShortcut = ({
  className,
  ...props
}) => {
  return /* @__PURE__ */ jsx(
    "span",
    {
      className: cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      ),
      ...props
    }
  );
};
CommandShortcut.displayName = "CommandShortcut";
var Pagination = ({ className, ...props }) => /* @__PURE__ */ jsx(
  "nav",
  {
    role: "navigation",
    "aria-label": "pagination",
    className: cn("mx-auto flex w-full justify-center", className),
    ...props
  }
);
Pagination.displayName = "Pagination";
var PaginationContent = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "ul",
  {
    ref,
    className: cn("flex flex-row items-center gap-1", className),
    ...props
  }
));
PaginationContent.displayName = "PaginationContent";
var PaginationItem = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("li", { ref, className: cn("", className), ...props }));
PaginationItem.displayName = "PaginationItem";
var PaginationLink = ({
  className,
  isActive,
  size = "icon",
  ...props
}) => /* @__PURE__ */ jsx(
  "a",
  {
    "aria-current": isActive ? "page" : void 0,
    className: cn(
      buttonVariants({
        variant: isActive ? "outline" : "ghost",
        size
      }),
      className
    ),
    ...props
  }
);
PaginationLink.displayName = "PaginationLink";
var PaginationPrevious = ({
  className,
  ...props
}) => /* @__PURE__ */ jsxs(
  PaginationLink,
  {
    "aria-label": "Go to previous page",
    size: "default",
    className: cn("gap-1 pl-2.5", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx(ChevronLeft, { className: "h-4 w-4" }),
      /* @__PURE__ */ jsx("span", { children: "Previous" })
    ]
  }
);
PaginationPrevious.displayName = "PaginationPrevious";
var PaginationNext = ({
  className,
  ...props
}) => /* @__PURE__ */ jsxs(
  PaginationLink,
  {
    "aria-label": "Go to next page",
    size: "default",
    className: cn("gap-1 pr-2.5", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { children: "Next" }),
      /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4" })
    ]
  }
);
PaginationNext.displayName = "PaginationNext";
var PaginationEllipsis = ({
  className,
  ...props
}) => /* @__PURE__ */ jsxs(
  "span",
  {
    "aria-hidden": true,
    className: cn("flex h-9 w-9 items-center justify-center", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx(MoreHorizontal, { className: "h-4 w-4" }),
      /* @__PURE__ */ jsx("span", { className: "sr-only", children: "More pages" })
    ]
  }
);
PaginationEllipsis.displayName = "PaginationEllipsis";
var Drawer = ({
  shouldScaleBackground = true,
  ...props
}) => /* @__PURE__ */ jsx(
  Drawer$1.Root,
  {
    shouldScaleBackground,
    ...props
  }
);
Drawer.displayName = "Drawer";
var DrawerTrigger = Drawer$1.Trigger;
var DrawerPortal = Drawer$1.Portal;
var DrawerClose = Drawer$1.Close;
var DrawerOverlay = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Drawer$1.Overlay,
  {
    ref,
    className: cn("fixed inset-0 z-50 bg-black/80", className),
    ...props
  }
));
DrawerOverlay.displayName = Drawer$1.Overlay.displayName;
var DrawerContent = React19.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(DrawerPortal, { children: [
  /* @__PURE__ */ jsx(DrawerOverlay, {}),
  /* @__PURE__ */ jsxs(
    Drawer$1.Content,
    {
      ref,
      className: cn(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx("div", { className: "mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" }),
        children
      ]
    }
  )
] }));
DrawerContent.displayName = "DrawerContent";
var DrawerHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx(
  "div",
  {
    className: cn("grid gap-1.5 p-4 text-center sm:text-left", className),
    ...props
  }
);
DrawerHeader.displayName = "DrawerHeader";
var DrawerFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx(
  "div",
  {
    className: cn("mt-auto flex flex-col gap-2 p-4", className),
    ...props
  }
);
DrawerFooter.displayName = "DrawerFooter";
var DrawerTitle = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Drawer$1.Title,
  {
    ref,
    className: cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  }
));
DrawerTitle.displayName = Drawer$1.Title.displayName;
var DrawerDescription = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Drawer$1.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DrawerDescription.displayName = Drawer$1.Description.displayName;
var Popover = PopoverPrimitive.Root;
var PopoverTrigger = PopoverPrimitive.Trigger;
var PopoverAnchor = PopoverPrimitive.Anchor;
var PopoverContent = React19.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(PopoverPrimitive.Portal, { children: /* @__PURE__ */ jsx(
  PopoverPrimitive.Content,
  {
    ref,
    align,
    sideOffset,
    className: cn(
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-popover-content-transform-origin]",
      className
    ),
    ...props
  }
) }));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;
var HoverCard = HoverCardPrimitive.Root;
var HoverCardTrigger = HoverCardPrimitive.Trigger;
var HoverCardContent = React19.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(
  HoverCardPrimitive.Content,
  {
    ref,
    align,
    sideOffset,
    className: cn(
      "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-hover-card-content-transform-origin]",
      className
    ),
    ...props
  }
));
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;
var AlertDialog = AlertDialogPrimitive.Root;
var AlertDialogTrigger = AlertDialogPrimitive.Trigger;
var AlertDialogPortal = AlertDialogPrimitive.Portal;
var AlertDialogOverlay = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AlertDialogPrimitive.Overlay,
  {
    className: cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  }
));
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;
var AlertDialogContent = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxs(AlertDialogPortal, { children: [
  /* @__PURE__ */ jsx(AlertDialogOverlay, {}),
  /* @__PURE__ */ jsx(
    AlertDialogPrimitive.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      ),
      ...props
    }
  )
] }));
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;
var AlertDialogHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx(
  "div",
  {
    className: cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    ),
    ...props
  }
);
AlertDialogHeader.displayName = "AlertDialogHeader";
var AlertDialogFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx(
  "div",
  {
    className: cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    ),
    ...props
  }
);
AlertDialogFooter.displayName = "AlertDialogFooter";
var AlertDialogTitle = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AlertDialogPrimitive.Title,
  {
    ref,
    className: cn("text-lg font-semibold", className),
    ...props
  }
));
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;
var AlertDialogDescription = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AlertDialogPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName;
var AlertDialogAction = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AlertDialogPrimitive.Action,
  {
    ref,
    className: cn(buttonVariants(), className),
    ...props
  }
));
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;
var AlertDialogCancel = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AlertDialogPrimitive.Cancel,
  {
    ref,
    className: cn(
      buttonVariants({ variant: "outline" }),
      "mt-2 sm:mt-0",
      className
    ),
    ...props
  }
));
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;
var Toaster = ({ ...props }) => {
  const { theme = "system" } = useTheme();
  return /* @__PURE__ */ jsx(
    Toaster$1,
    {
      theme,
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
var Table = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ jsx(
  "table",
  {
    ref,
    className: cn("w-full caption-bottom text-sm", className),
    ...props
  }
) }));
Table.displayName = "Table";
var TableHeader = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("thead", { ref, className: cn("[&_tr]:border-b", className), ...props }));
TableHeader.displayName = "TableHeader";
var TableBody = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "tbody",
  {
    ref,
    className: cn("[&_tr:last-child]:border-0", className),
    ...props
  }
));
TableBody.displayName = "TableBody";
var TableFooter = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "tfoot",
  {
    ref,
    className: cn(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      className
    ),
    ...props
  }
));
TableFooter.displayName = "TableFooter";
var TableRow = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "tr",
  {
    ref,
    className: cn(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      className
    ),
    ...props
  }
));
TableRow.displayName = "TableRow";
var TableHead = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "th",
  {
    ref,
    className: cn(
      "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className
    ),
    ...props
  }
));
TableHead.displayName = "TableHead";
var TableCell = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "td",
  {
    ref,
    className: cn(
      "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className
    ),
    ...props
  }
));
TableCell.displayName = "TableCell";
var TableCaption = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "caption",
  {
    ref,
    className: cn("mt-4 text-sm text-muted-foreground", className),
    ...props
  }
));
TableCaption.displayName = "TableCaption";
function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  formatters,
  components,
  ...props
}) {
  const defaultClassNames = getDefaultClassNames();
  return /* @__PURE__ */ jsx(
    DayPicker,
    {
      showOutsideDays,
      className: cn(
        "bg-background group/calendar p-3 [--cell-size:2rem] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className
      ),
      captionLayout,
      formatters: {
        formatMonthDropdown: (date) => date.toLocaleString("default", { month: "short" }),
        ...formatters
      },
      classNames: {
        root: cn("w-fit", defaultClassNames.root),
        months: cn(
          "relative flex flex-col gap-4 md:flex-row",
          defaultClassNames.months
        ),
        month: cn("flex w-full flex-col gap-4", defaultClassNames.month),
        nav: cn(
          "absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1",
          defaultClassNames.nav
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          "h-[--cell-size] w-[--cell-size] select-none p-0 aria-disabled:opacity-50",
          defaultClassNames.button_previous
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          "h-[--cell-size] w-[--cell-size] select-none p-0 aria-disabled:opacity-50",
          defaultClassNames.button_next
        ),
        month_caption: cn(
          "flex h-[--cell-size] w-full items-center justify-center px-[--cell-size]",
          defaultClassNames.month_caption
        ),
        dropdowns: cn(
          "flex h-[--cell-size] w-full items-center justify-center gap-1.5 text-sm font-medium",
          defaultClassNames.dropdowns
        ),
        dropdown_root: cn(
          "has-focus:border-ring border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] relative rounded-md border",
          defaultClassNames.dropdown_root
        ),
        dropdown: cn(
          "bg-popover absolute inset-0 opacity-0",
          defaultClassNames.dropdown
        ),
        caption_label: cn(
          "select-none font-medium",
          captionLayout === "label" ? "text-sm" : "[&>svg]:text-muted-foreground flex h-8 items-center gap-1 rounded-md pl-2 pr-1 text-sm [&>svg]:size-3.5",
          defaultClassNames.caption_label
        ),
        table: "w-full border-collapse",
        weekdays: cn("flex", defaultClassNames.weekdays),
        weekday: cn(
          "text-muted-foreground flex-1 select-none rounded-md text-[0.8rem] font-normal",
          defaultClassNames.weekday
        ),
        week: cn("mt-2 flex w-full", defaultClassNames.week),
        week_number_header: cn(
          "w-[--cell-size] select-none",
          defaultClassNames.week_number_header
        ),
        week_number: cn(
          "text-muted-foreground select-none text-[0.8rem]",
          defaultClassNames.week_number
        ),
        day: cn(
          "group/day relative aspect-square h-full w-full select-none p-0 text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md",
          defaultClassNames.day
        ),
        range_start: cn(
          "bg-accent rounded-l-md",
          defaultClassNames.range_start
        ),
        range_middle: cn("rounded-none", defaultClassNames.range_middle),
        range_end: cn("bg-accent rounded-r-md", defaultClassNames.range_end),
        today: cn(
          "bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none",
          defaultClassNames.today
        ),
        outside: cn(
          "text-muted-foreground aria-selected:text-muted-foreground",
          defaultClassNames.outside
        ),
        disabled: cn(
          "text-muted-foreground opacity-50",
          defaultClassNames.disabled
        ),
        hidden: cn("invisible", defaultClassNames.hidden),
        ...classNames
      },
      components: {
        Root: ({ className: className2, rootRef, ...props2 }) => {
          return /* @__PURE__ */ jsx(
            "div",
            {
              "data-slot": "calendar",
              ref: rootRef,
              className: cn(className2),
              ...props2
            }
          );
        },
        Chevron: ({ className: className2, orientation, ...props2 }) => {
          if (orientation === "left") {
            return /* @__PURE__ */ jsx(ChevronLeftIcon, { className: cn("size-4", className2), ...props2 });
          }
          if (orientation === "right") {
            return /* @__PURE__ */ jsx(
              ChevronRightIcon,
              {
                className: cn("size-4", className2),
                ...props2
              }
            );
          }
          return /* @__PURE__ */ jsx(ChevronDownIcon, { className: cn("size-4", className2), ...props2 });
        },
        DayButton: CalendarDayButton,
        WeekNumber: ({ children, ...props2 }) => {
          return /* @__PURE__ */ jsx("td", { ...props2, children: /* @__PURE__ */ jsx("div", { className: "flex size-[--cell-size] items-center justify-center text-center", children }) });
        },
        ...components
      },
      ...props
    }
  );
}
function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}) {
  const defaultClassNames = getDefaultClassNames();
  const ref = React19.useRef(null);
  React19.useEffect(() => {
    if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);
  return /* @__PURE__ */ jsx(
    Button,
    {
      ref,
      variant: "ghost",
      size: "icon",
      "data-day": day.date.toLocaleDateString(),
      "data-selected-single": modifiers.selected && !modifiers.range_start && !modifiers.range_end && !modifiers.range_middle,
      "data-range-start": modifiers.range_start,
      "data-range-end": modifiers.range_end,
      "data-range-middle": modifiers.range_middle,
      className: cn(
        "data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 flex aspect-square h-auto w-full min-w-[--cell-size] flex-col gap-1 font-normal leading-none data-[range-end=true]:rounded-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] [&>span]:text-xs [&>span]:opacity-70",
        defaultClassNames.day,
        className
      ),
      ...props
    }
  );
}
var THEMES = { light: "", dark: ".dark" };
var ChartContext = React19.createContext(null);
function useChart() {
  const context = React19.useContext(ChartContext);
  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }
  return context;
}
var ChartContainer = React19.forwardRef(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = React19.useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;
  return /* @__PURE__ */ jsx(ChartContext.Provider, { value: { config }, children: /* @__PURE__ */ jsxs(
    "div",
    {
      "data-chart": chartId,
      ref,
      className: cn(
        "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx(ChartStyle, { id: chartId, config }),
        /* @__PURE__ */ jsx(RechartsPrimitive.ResponsiveContainer, { children })
      ]
    }
  ) });
});
ChartContainer.displayName = "Chart";
var ChartStyle = ({ id, config }) => {
  const colorConfig = Object.entries(config).filter(
    ([, config2]) => config2.theme || config2.color
  );
  if (!colorConfig.length) {
    return null;
  }
  return /* @__PURE__ */ jsx(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(THEMES).map(
          ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig.map(([key, itemConfig]) => {
            const color = itemConfig.theme?.[theme] || itemConfig.color;
            return color ? `  --color-${key}: ${color};` : null;
          }).join("\n")}
}
`
        ).join("\n")
      }
    }
  );
};
var ChartTooltip = RechartsPrimitive.Tooltip;
var ChartTooltipContent = React19.forwardRef(
  ({
    active,
    payload,
    className,
    indicator = "dot",
    hideLabel = false,
    hideIndicator = false,
    label,
    labelFormatter,
    labelClassName,
    formatter,
    color,
    nameKey,
    labelKey
  }, ref) => {
    const { config } = useChart();
    const tooltipLabel = React19.useMemo(() => {
      if (hideLabel || !payload?.length) {
        return null;
      }
      const [item] = payload;
      const key = `${labelKey || item?.dataKey || item?.name || "value"}`;
      const itemConfig = getPayloadConfigFromPayload(config, item, key);
      const value = !labelKey && typeof label === "string" ? config[label]?.label || label : itemConfig?.label;
      if (labelFormatter) {
        return /* @__PURE__ */ jsx("div", { className: cn("font-medium", labelClassName), children: labelFormatter(value, payload) });
      }
      if (!value) {
        return null;
      }
      return /* @__PURE__ */ jsx("div", { className: cn("font-medium", labelClassName), children: value });
    }, [
      label,
      labelFormatter,
      payload,
      hideLabel,
      labelClassName,
      config,
      labelKey
    ]);
    if (!active || !payload?.length) {
      return null;
    }
    const nestLabel = payload.length === 1 && indicator !== "dot";
    return /* @__PURE__ */ jsxs(
      "div",
      {
        ref,
        className: cn(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          className
        ),
        children: [
          !nestLabel ? tooltipLabel : null,
          /* @__PURE__ */ jsx("div", { className: "grid gap-1.5", children: payload.filter((item) => item.type !== "none").map((item, index) => {
            const key = `${nameKey || item.name || item.dataKey || "value"}`;
            const itemConfig = getPayloadConfigFromPayload(config, item, key);
            const indicatorColor = color || item.payload.fill || item.color;
            return /* @__PURE__ */ jsx(
              "div",
              {
                className: cn(
                  "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                  indicator === "dot" && "items-center"
                ),
                children: formatter && item?.value !== void 0 && item.name ? formatter(item.value, item.name, item, index, item.payload) : /* @__PURE__ */ jsxs(Fragment, { children: [
                  itemConfig?.icon ? /* @__PURE__ */ jsx(itemConfig.icon, {}) : !hideIndicator && /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: cn(
                        "shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",
                        {
                          "h-2.5 w-2.5": indicator === "dot",
                          "w-1": indicator === "line",
                          "w-0 border-[1.5px] border-dashed bg-transparent": indicator === "dashed",
                          "my-0.5": nestLabel && indicator === "dashed"
                        }
                      ),
                      style: {
                        "--color-bg": indicatorColor,
                        "--color-border": indicatorColor
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxs(
                    "div",
                    {
                      className: cn(
                        "flex flex-1 justify-between leading-none",
                        nestLabel ? "items-end" : "items-center"
                      ),
                      children: [
                        /* @__PURE__ */ jsxs("div", { className: "grid gap-1.5", children: [
                          nestLabel ? tooltipLabel : null,
                          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: itemConfig?.label || item.name })
                        ] }),
                        item.value && /* @__PURE__ */ jsx("span", { className: "font-mono font-medium tabular-nums text-foreground", children: item.value.toLocaleString() })
                      ]
                    }
                  )
                ] })
              },
              item.dataKey
            );
          }) })
        ]
      }
    );
  }
);
ChartTooltipContent.displayName = "ChartTooltip";
var ChartLegend = RechartsPrimitive.Legend;
var ChartLegendContent = React19.forwardRef(
  ({ className, hideIcon = false, payload, verticalAlign = "bottom", nameKey }, ref) => {
    const { config } = useChart();
    if (!payload?.length) {
      return null;
    }
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cn(
          "flex items-center justify-center gap-4",
          verticalAlign === "top" ? "pb-3" : "pt-3",
          className
        ),
        children: payload.filter((item) => item.type !== "none").map((item) => {
          const key = `${nameKey || item.dataKey || "value"}`;
          const itemConfig = getPayloadConfigFromPayload(config, item, key);
          return /* @__PURE__ */ jsxs(
            "div",
            {
              className: cn(
                "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"
              ),
              children: [
                itemConfig?.icon && !hideIcon ? /* @__PURE__ */ jsx(itemConfig.icon, {}) : /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "h-2 w-2 shrink-0 rounded-[2px]",
                    style: {
                      backgroundColor: item.color
                    }
                  }
                ),
                itemConfig?.label
              ]
            },
            item.value
          );
        })
      }
    );
  }
);
ChartLegendContent.displayName = "ChartLegend";
function getPayloadConfigFromPayload(config, payload, key) {
  if (typeof payload !== "object" || payload === null) {
    return void 0;
  }
  const payloadPayload = "payload" in payload && typeof payload.payload === "object" && payload.payload !== null ? payload.payload : void 0;
  let configLabelKey = key;
  if (key in payload && typeof payload[key] === "string") {
    configLabelKey = payload[key];
  } else if (payloadPayload && key in payloadPayload && typeof payloadPayload[key] === "string") {
    configLabelKey = payloadPayload[key];
  }
  return configLabelKey in config ? config[configLabelKey] : config[key];
}
var Accordion = AccordionPrimitive.Root;
var AccordionItem = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AccordionPrimitive.Item,
  {
    ref,
    className: cn("border-b", className),
    ...props
  }
));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = React19.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ jsxs(
  AccordionPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
    ]
  }
) }));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
var AccordionContent = React19.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(
  AccordionPrimitive.Content,
  {
    ref,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsx("div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;
var Collapsible = CollapsiblePrimitive.Root;
var CollapsibleTrigger2 = CollapsiblePrimitive.CollapsibleTrigger;
var CollapsibleContent2 = CollapsiblePrimitive.CollapsibleContent;
var ScrollArea = React19.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  ScrollAreaPrimitive.Root,
  {
    ref,
    className: cn("relative overflow-hidden", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx(ScrollAreaPrimitive.Viewport, { className: "h-full w-full rounded-[inherit]", children }),
      /* @__PURE__ */ jsx(ScrollBar, {}),
      /* @__PURE__ */ jsx(ScrollAreaPrimitive.Corner, {})
    ]
  }
));
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;
var ScrollBar = React19.forwardRef(({ className, orientation = "vertical", ...props }, ref) => /* @__PURE__ */ jsx(
  ScrollAreaPrimitive.ScrollAreaScrollbar,
  {
    ref,
    orientation,
    className: cn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx(ScrollAreaPrimitive.ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-border" })
  }
));
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;
var toggleVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground"
      },
      size: {
        default: "h-9 px-2 min-w-9",
        sm: "h-8 px-1.5 min-w-8",
        lg: "h-10 px-2.5 min-w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
var Toggle = React19.forwardRef(({ className, variant, size, ...props }, ref) => /* @__PURE__ */ jsx(
  TogglePrimitive.Root,
  {
    ref,
    className: cn(toggleVariants({ variant, size, className })),
    ...props
  }
));
Toggle.displayName = TogglePrimitive.Root.displayName;
var ToggleGroupContext = React19.createContext({
  size: "default",
  variant: "default"
});
var ToggleGroup = React19.forwardRef(({ className, variant, size, children, ...props }, ref) => /* @__PURE__ */ jsx(
  ToggleGroupPrimitive.Root,
  {
    ref,
    className: cn("flex items-center justify-center gap-1", className),
    ...props,
    children: /* @__PURE__ */ jsx(ToggleGroupContext.Provider, { value: { variant, size }, children })
  }
));
ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;
var ToggleGroupItem = React19.forwardRef(({ className, children, variant, size, ...props }, ref) => {
  const context = React19.useContext(ToggleGroupContext);
  return /* @__PURE__ */ jsx(
    ToggleGroupPrimitive.Item,
    {
      ref,
      className: cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size
        }),
        className
      ),
      ...props,
      children
    }
  );
});
ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;
var ResizablePanelGroup = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx(
  Group,
  {
    className: cn(
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
      className
    ),
    ...props
  }
);
var ResizablePanel = Panel;
var ResizableHandle = ({
  withHandle,
  className,
  ...props
}) => /* @__PURE__ */ jsx(
  Separator,
  {
    className: cn(
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
      className
    ),
    ...props,
    children: withHandle && /* @__PURE__ */ jsx("div", { className: "z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border", children: /* @__PURE__ */ jsx(GripVertical, { className: "h-2.5 w-2.5" }) })
  }
);
var AspectRatio = AspectRatioPrimitive.Root;

// src/components/ui/design-tokens-css.ts
var TOKENS_CSS = '/* ============================================================\n   tokens.css \u2014 Go\u30B7\u30EA\u30FC\u30BA \u30C7\u30B6\u30A4\u30F3\u30C8\u30FC\u30AF\u30F3\n   \u7D14\u7C8B\u306ACSS\u5909\u6570\u5B9A\u7FA9\u306E\u307F\u3002@layer/@apply/@tailwind \u306F\u542B\u307E\u306A\u3044\u3002\n   Tailwind v3/v4 \u3069\u3061\u3089\u3068\u3082\u4E92\u63DB\u3002\n   \u5404Go\u306E layout.tsx \u3067\u6700\u521D\u306B import \u3059\u308B\u3053\u3068\u3002\n   ============================================================ */\n\n:root {\n  /* ============================================\n     Primitive Tokens \u2014 \u751F\u306E\u5024\u3002\u5909\u66F4\u306F\u5168Go\u306B\u5F71\u97FF\u3002\n     ============================================ */\n\n  /* Radius */\n  --radius-sm: 3px;\n  --radius-md: 4px;\n  --radius-lg: 6px;\n  --radius-full: 9999px;\n\n  /* Space (4px grid) */\n  --space-1: 4px;\n  --space-2: 8px;\n  --space-3: 12px;\n  --space-4: 16px;\n  --space-5: 20px;\n  --space-6: 24px;\n  --space-8: 32px;\n  --space-10: 40px;\n\n  /* Typography */\n  --font-sans: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;\n  --text-xs: 12px;\n  --text-sm: 14px;\n  --text-base: 16px;\n  --text-lg: 18px;\n  --text-xl: 20px;\n  --text-2xl: 24px;\n  --text-3xl: 32px;\n  --text-4xl: 40px;\n  --font-weight-regular: 400;\n  --font-weight-medium: 500;\n  --font-weight-semibold: 600;\n  --font-weight-bold: 700;\n\n  /* Animation */\n  --duration-fast: 150ms;\n  --duration-base: 200ms;\n  --duration-slow: 300ms;\n  --easing-default: cubic-bezier(0.4, 0, 0.2, 1);\n  --easing-in: cubic-bezier(0.4, 0, 1, 1);\n  --easing-out: cubic-bezier(0, 0, 0.2, 1);\n\n  /* ============================================\n     Semantic Tokens \u2014 Light Mode\n     ============================================ */\n\n  /* Backgrounds */\n  --color-background: #ffffff;\n  --color-surface: #ffffff;\n  --color-surface-subtle: #f7f8f9;\n  --color-surface-elevated: #ffffff;\n\n  /* Text (WCAG AA\u4EE5\u4E0A\u3092\u62C5\u4FDD) */\n  --color-text-primary: #172b4d;   /* contrast vs #fff: 12.6:1 */\n  --color-text-secondary: #6b778c; /* contrast vs #fff:  5.0:1 */\n  --color-text-subtle: #8993a4;    /* contrast vs #fff:  3.7:1 \u2014 decorative\u7528\u9014\u306E\u307F */\n  --color-text-disabled: #a5adba;\n\n  /* Borders */\n  --color-border-subtle: #ebecf0;\n  --color-border-default: #dfe1e6;\n  --color-border-strong: #c1c7d0;\n\n  /* Primary \u2014 \u5404Go\u306F\u3053\u3053\u3060\u3051\u4E0A\u66F8\u304D\u3059\u308C\u3070OK */\n  --color-primary: #0052cc;\n  --color-primary-hover: #0747a6;\n  --color-primary-text: #ffffff;\n\n  /* Status */\n  --color-success: #00875a;\n  --color-success-subtle: #e3fcef;\n  --color-warning: #ff8b00;\n  --color-warning-subtle: #fffae6;\n  --color-danger: #de350b;\n  --color-danger-subtle: #ffebe6;\n  --color-info: #0052cc;\n  --color-info-subtle: #deebff;\n\n  /* Shadows */\n  --shadow-sm: 0 1px 2px rgba(9, 30, 66, 0.08);\n  --shadow-md: 0 4px 8px rgba(9, 30, 66, 0.08);\n  --shadow-lg: 0 8px 16px rgba(9, 30, 66, 0.1);\n\n  /* ============================================\n     Sidebar Tokens (HSL\u5F62\u5F0F \u2014 shadcn sidebar.tsx \u304C\n     hsl(var(--sidebar-xxx)) \u3067\u53C2\u7167\u3059\u308B\u305F\u3081\u7DAD\u6301)\n     ============================================ */\n  --sidebar-background: 0 0% 98%;\n  --sidebar-foreground: 240 5.3% 26.1%;\n  --sidebar-primary: 240 5.9% 10%;\n  --sidebar-primary-foreground: 0 0% 98%;\n  --sidebar-accent: 240 4.8% 95.9%;\n  --sidebar-accent-foreground: 240 5.9% 10%;\n  --sidebar-border: 220 13% 91%;\n  --sidebar-ring: 217.2 91.2% 59.8%;\n}\n\n/* ============================================\n   Dark Mode Overrides\n   \u30D7\u30EA\u30DF\u30C6\u30A3\u30D6\uFF08radius/space/font\uFF09\u306F\u5909\u66F4\u4E0D\u8981\u3002\n   \u8272\u7CFB\u30C8\u30FC\u30AF\u30F3\u306E\u307F\u4E0A\u66F8\u304D\u3002WCAG AA\u4EE5\u4E0A\u3092\u7DAD\u6301\u3002\n   ============================================ */\n.dark {\n  /* Backgrounds */\n  --color-background: #0f1117;       /* \u30D9\u30FC\u30B9\u80CC\u666F */\n  --color-surface: #1a1d27;          /* \u30AB\u30FC\u30C9\u7B49\u306E\u9762 */\n  --color-surface-subtle: #252836;   /* \u30B5\u30D6\u9762\uFF08\u30B5\u30A4\u30C9\u30D0\u30FC\u7B49\uFF09 */\n  --color-surface-elevated: #1e2130; /* \u30E2\u30FC\u30C0\u30EB\u7B49\u306E\u6D6E\u304D\u9762 */\n\n  /* Text (WCAG AA\u4EE5\u4E0A\u3092\u62C5\u4FDD) */\n  --color-text-primary: #f0f2f5;    /* contrast vs #0f1117: 14.2:1 */\n  --color-text-secondary: #a8b2c1;  /* contrast vs #0f1117:  7.3:1 */\n  --color-text-subtle: #7a8494;     /* contrast vs #0f1117:  4.6:1 */\n  --color-text-disabled: #4e5668;\n\n  /* Borders */\n  --color-border-subtle: #252836;\n  --color-border-default: #2d3244;\n  --color-border-strong: #3d4460;\n\n  /* Primary \u2014 \u30C6\u30AD\u30B9\u30C8\u8272\u306F\u30C0\u30FC\u30AF\u3067\u3082\u767D\u3067\u7D71\u4E00 */\n  --color-primary-text: #ffffff;\n\n  /* Status subtle (dark) */\n  --color-success-subtle: #0a2e1a;\n  --color-warning-subtle: #2e1f00;\n  --color-danger-subtle: #2e0d00;\n  --color-info-subtle: #001a4d;\n\n  /* Shadows \u2014 \u30C0\u30FC\u30AF\u306F\u900F\u660E\u5EA6\u3092\u4E0A\u3052\u3066\u8996\u8A8D\u6027\u3092\u78BA\u4FDD */\n  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.3);\n  --shadow-md: 0 4px 8px rgba(0, 0, 0, 0.3);\n  --shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.4);\n\n  /* Sidebar \u2014 Dark */\n  --sidebar-background: 240 5.9% 10%;\n  --sidebar-foreground: 240 4.8% 95.9%;\n  --sidebar-primary: 224.3 76.3% 48%;\n  --sidebar-primary-foreground: 0 0% 100%;\n  --sidebar-accent: 240 3.7% 15.9%;\n  --sidebar-accent-foreground: 240 4.8% 95.9%;\n  --sidebar-border: 240 3.7% 15.9%;\n  --sidebar-ring: 217.2 91.2% 59.8%;\n}\n';
var GLOBALS_CSS = "/*\n * globals.css \u2014 shadcn/ui CSS\u5909\u6570\u3068\u306E\u6A4B\u6E21\u3057\n *\n * tokens.css \u306E\u610F\u5473\u7684\u30C8\u30FC\u30AF\u30F3\uFF08--color-xxx\uFF09\u3092\n * shadcn/ui \u304C\u671F\u5F85\u3059\u308B\u5909\u6570\u540D\uFF08--background \u7B49\uFF09\u306B\u30DE\u30C3\u30D4\u30F3\u30B0\u3059\u308B\u3002\n *\n * \u5404Go\u3067\u306E\u4F7F\u3044\u65B9:\n *   import '@takaki/go-design-system/tokens.css'  // \u2190 tokens + Tailwind directives\n *   import '@takaki/go-design-system/globals.css' // \u2190 shadcn bridge\uFF08\u4EFB\u610F\uFF09\n *\n * tokens.css \u306E .dark \u304C --color-xxx \u3092\u4E0A\u66F8\u304D\u3059\u308B\u305F\u3081\u3001\n * globals.css \u306E .dark \u3082\u540C\u3058\u30DE\u30C3\u30D4\u30F3\u30B0\u3092\u66F8\u304F\u3060\u3051\u3067\u30C1\u30A7\u30FC\u30F3\u304C\u6210\u7ACB\u3059\u308B\u3002\n */\n\n:root {\n  /* --- Layout --- */\n  --background: var(--color-background);\n  --foreground: var(--color-text-primary);\n\n  /* --- Card / Popover --- */\n  --card: var(--color-surface);\n  --card-foreground: var(--color-text-primary);\n  --popover: var(--color-surface-elevated);\n  --popover-foreground: var(--color-text-primary);\n\n  /* --- Brand --- */\n  --primary: var(--color-primary);\n  --primary-foreground: var(--color-primary-text);\n\n  /* --- Neutral --- */\n  --secondary: var(--color-surface-subtle);\n  --secondary-foreground: var(--color-text-primary);\n  --muted: var(--color-surface-subtle);\n  --muted-foreground: var(--color-text-secondary);\n  --accent: var(--color-surface-subtle);\n  --accent-foreground: var(--color-text-primary);\n\n  /* --- Destructive --- */\n  --destructive: var(--color-danger);\n  --destructive-foreground: #ffffff;\n\n  /* --- Form / Interactive --- */\n  --border: var(--color-border-default);\n  --input: var(--color-border-default);\n  --ring: var(--color-primary);\n\n  /* --- Border radius alias (used by shadcn internals) --- */\n  --radius: var(--radius-md);\n}\n\n.dark {\n  /* tokens.css \u306E .dark \u304C --color-xxx \u3092\u6697\u8272\u5024\u306B\u4E0A\u66F8\u304D\u6E08\u307F\u306E\u305F\u3081\u3001\n     \u3053\u306E\u30DE\u30C3\u30D4\u30F3\u30B0\u5B9A\u7FA9\u306F\u30E9\u30A4\u30C8\u3068\u540C\u3058\u3067\u6B63\u3057\u304F\u6A5F\u80FD\u3059\u308B\u3002 */\n  --background: var(--color-background);\n  --foreground: var(--color-text-primary);\n\n  --card: var(--color-surface);\n  --card-foreground: var(--color-text-primary);\n  --popover: var(--color-surface-elevated);\n  --popover-foreground: var(--color-text-primary);\n\n  --primary: var(--color-primary);\n  --primary-foreground: var(--color-primary-text);\n\n  --secondary: var(--color-surface-subtle);\n  --secondary-foreground: var(--color-text-primary);\n  --muted: var(--color-surface-subtle);\n  --muted-foreground: var(--color-text-secondary);\n  --accent: var(--color-surface-subtle);\n  --accent-foreground: var(--color-text-primary);\n\n  --destructive: var(--color-danger);\n  --destructive-foreground: #ffffff;\n\n  --border: var(--color-border-default);\n  --input: var(--color-border-default);\n  --ring: var(--color-primary);\n\n  --radius: var(--radius-md);\n}\n";
function DesignTokens({ primaryColor, primaryColorHover }) {
  const overrideCSS = primaryColor ? `:root{--color-primary:${primaryColor};--color-primary-hover:${primaryColorHover ?? primaryColor};}` : "";
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("style", { dangerouslySetInnerHTML: { __html: TOKENS_CSS } }),
    /* @__PURE__ */ jsx("style", { dangerouslySetInnerHTML: { __html: GLOBALS_CSS } }),
    overrideCSS && /* @__PURE__ */ jsx("style", { dangerouslySetInnerHTML: { __html: overrideCSS } })
  ] });
}
var sizeMap = {
  sm: 16,
  md: 24,
  lg: 32,
  xl: 48
};
function Spinner({
  size = "md",
  color = "current",
  className,
  "aria-label": ariaLabel = "\u8AAD\u307F\u8FBC\u307F\u4E2D",
  ...props
}) {
  const px = sizeMap[size];
  return /* @__PURE__ */ jsx(
    Loader2,
    {
      width: px,
      height: px,
      "aria-label": ariaLabel,
      role: "status",
      className: cn(
        "animate-spin",
        color === "primary" && "text-primary",
        className
      ),
      ...props
    }
  );
}
var variantConfig = {
  default: {
    container: "bg-surface-subtle border-border text-foreground",
    icon: /* @__PURE__ */ jsx(Info, { className: "size-4 shrink-0" })
  },
  info: {
    container: "bg-[color:var(--color-info-subtle)] border-[color:var(--color-info)] text-foreground",
    icon: /* @__PURE__ */ jsx(Info, { className: "size-4 shrink-0 text-[color:var(--color-info)]" })
  },
  success: {
    container: "bg-[color:var(--color-success-subtle)] border-[color:var(--color-success)] text-foreground",
    icon: /* @__PURE__ */ jsx(CheckCircle2, { className: "size-4 shrink-0 text-[color:var(--color-success)]" })
  },
  warning: {
    container: "bg-[color:var(--color-warning-subtle)] border-[color:var(--color-warning)] text-foreground",
    icon: /* @__PURE__ */ jsx(AlertTriangle, { className: "size-4 shrink-0 text-[color:var(--color-warning)]" })
  },
  danger: {
    container: "bg-[color:var(--color-danger-subtle)] border-[color:var(--color-danger)] text-foreground",
    icon: /* @__PURE__ */ jsx(AlertCircle, { className: "size-4 shrink-0 text-[color:var(--color-danger)]" })
  }
};
function Banner({
  variant = "default",
  title,
  description,
  action,
  dismissible = false,
  onDismiss,
  className,
  children,
  ...props
}) {
  const [visible, setVisible] = React19.useState(true);
  if (!visible) return null;
  const config = variantConfig[variant];
  function handleDismiss() {
    setVisible(false);
    onDismiss?.();
  }
  return /* @__PURE__ */ jsxs(
    "div",
    {
      role: "alert",
      className: cn(
        "flex items-start gap-3 rounded-md border px-4 py-3",
        config.container,
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx("span", { className: "mt-0.5", children: config.icon }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-1 flex-col gap-1", children: [
          title && /* @__PURE__ */ jsx("p", { className: "text-sm font-medium leading-tight", children: title }),
          description && /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: description }),
          children,
          action && /* @__PURE__ */ jsx(
            Button,
            {
              variant: "link",
              size: "sm",
              className: "h-auto p-0 text-sm font-medium underline-offset-2",
              onClick: action.onClick,
              children: action.label
            }
          )
        ] }),
        dismissible && /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            "aria-label": "\u9589\u3058\u308B",
            onClick: handleDismiss,
            className: "ml-auto shrink-0 rounded p-0.5 opacity-70 hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
            children: /* @__PURE__ */ jsx(X, { className: "size-4" })
          }
        )
      ]
    }
  );
}
function EmptyState({
  icon,
  title,
  description,
  action,
  secondaryAction,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "flex flex-col items-center justify-center gap-4 py-12 text-center",
        className
      ),
      ...props,
      children: [
        icon && /* @__PURE__ */ jsx("div", { className: "flex size-14 items-center justify-center rounded-full bg-surface-subtle text-muted-foreground", children: icon }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1", children: [
          /* @__PURE__ */ jsx("p", { className: "text-base font-semibold text-foreground", children: title }),
          description && /* @__PURE__ */ jsx("p", { className: "max-w-sm text-sm text-muted-foreground", children: description })
        ] }),
        (action || secondaryAction) && /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-center gap-2", children: [
          action && /* @__PURE__ */ jsx(Button, { variant: action.variant ?? "default", onClick: action.onClick, children: action.label }),
          secondaryAction && /* @__PURE__ */ jsx(Button, { variant: "outline", onClick: secondaryAction.onClick, children: secondaryAction.label })
        ] })
      ]
    }
  );
}
function DatePicker({
  value,
  onChange,
  placeholder = "\u65E5\u4ED8\u3092\u9078\u629E",
  disabled = false,
  className,
  disabledDates,
  fromDate,
  toDate
}) {
  const [open, setOpen] = React19.useState(false);
  function handleSelect(date) {
    onChange?.(date);
    setOpen(false);
  }
  return /* @__PURE__ */ jsxs(Popover, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(
      Button,
      {
        variant: "outline",
        disabled,
        className: cn(
          "w-[240px] justify-start text-left font-normal",
          !value && "text-muted-foreground",
          className
        ),
        children: [
          /* @__PURE__ */ jsx(CalendarIcon, { className: "mr-2 size-4" }),
          value ? format(value, "yyyy\u5E74M\u6708d\u65E5", { locale: ja }) : placeholder
        ]
      }
    ) }),
    /* @__PURE__ */ jsx(PopoverContent, { className: "w-auto p-0", align: "start", children: /* @__PURE__ */ jsx(
      Calendar,
      {
        mode: "single",
        selected: value,
        onSelect: handleSelect,
        disabled: disabledDates,
        fromDate,
        toDate,
        locale: ja,
        initialFocus: true
      }
    ) })
  ] });
}
function DateRangePicker({
  value,
  onChange,
  placeholder = "\u671F\u9593\u3092\u9078\u629E",
  disabled = false,
  className,
  disabledDates,
  fromDate,
  toDate
}) {
  const [open, setOpen] = React19.useState(false);
  function formatRange(range) {
    if (!range?.from) return placeholder;
    if (!range.to) return format(range.from, "yyyy\u5E74M\u6708d\u65E5", { locale: ja });
    return `${format(range.from, "yyyy\u5E74M\u6708d\u65E5", { locale: ja })} \u301C ${format(range.to, "M\u6708d\u65E5", { locale: ja })}`;
  }
  return /* @__PURE__ */ jsxs(Popover, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(
      Button,
      {
        variant: "outline",
        disabled,
        className: cn(
          "w-[300px] justify-start text-left font-normal",
          !value?.from && "text-muted-foreground",
          className
        ),
        children: [
          /* @__PURE__ */ jsx(CalendarIcon, { className: "mr-2 size-4" }),
          formatRange(value)
        ]
      }
    ) }),
    /* @__PURE__ */ jsx(PopoverContent, { className: "w-auto p-0", align: "start", children: /* @__PURE__ */ jsx(
      Calendar,
      {
        mode: "range",
        selected: value,
        onSelect: onChange,
        disabled: disabledDates,
        fromDate,
        toDate,
        locale: ja,
        numberOfMonths: 2,
        initialFocus: true
      }
    ) })
  ] });
}
function InlineEdit({
  value,
  onChange,
  validate,
  placeholder = "\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u7DE8\u96C6",
  multiline = false,
  disabled = false,
  className,
  inputClassName,
  renderDisplay
}) {
  const [editing, setEditing] = React19.useState(false);
  const [draft, setDraft] = React19.useState(value);
  const [error, setError] = React19.useState();
  const inputRef = React19.useRef(null);
  React19.useEffect(() => {
    if (editing) {
      setDraft(value);
      setError(void 0);
      setTimeout(() => inputRef.current?.focus(), 0);
    }
  }, [editing, value]);
  function save() {
    const err = validate?.(draft);
    if (err) {
      setError(err);
      return;
    }
    onChange(draft);
    setEditing(false);
  }
  function cancel() {
    setDraft(value);
    setError(void 0);
    setEditing(false);
  }
  function handleKeyDown(e) {
    if (e.key === "Enter" && !multiline) {
      e.preventDefault();
      save();
    }
    if (e.key === "Escape") {
      e.preventDefault();
      cancel();
    }
    if (e.key === "Enter" && multiline && e.metaKey) {
      e.preventDefault();
      save();
    }
  }
  const sharedInputClass = cn(
    "w-full rounded-sm border border-primary bg-background px-1 py-0.5 text-sm text-foreground outline-none ring-2 ring-primary/30",
    error && "border-destructive ring-destructive/30",
    inputClassName
  );
  if (editing) {
    return /* @__PURE__ */ jsxs("div", { className: cn("flex flex-col gap-1", className), children: [
      multiline ? /* @__PURE__ */ jsx(
        "textarea",
        {
          ref: inputRef,
          value: draft,
          onChange: (e) => setDraft(e.target.value),
          onKeyDown: handleKeyDown,
          onBlur: save,
          rows: 3,
          className: cn(sharedInputClass, "resize-y")
        }
      ) : /* @__PURE__ */ jsx(
        "input",
        {
          ref: inputRef,
          type: "text",
          value: draft,
          onChange: (e) => setDraft(e.target.value),
          onKeyDown: handleKeyDown,
          onBlur: save,
          className: sharedInputClass
        }
      ),
      error && /* @__PURE__ */ jsx("p", { className: "text-xs text-destructive", children: error }),
      multiline && /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "\u2318+Enter \u3067\u4FDD\u5B58\u3001Esc \u3067\u30AD\u30E3\u30F3\u30BB\u30EB" })
    ] });
  }
  return /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      disabled,
      onClick: () => !disabled && setEditing(true),
      className: cn(
        "group w-full rounded-sm px-1 py-0.5 text-left text-sm transition-colors",
        !disabled && "hover:bg-surface-subtle hover:ring-1 hover:ring-border",
        disabled && "cursor-not-allowed opacity-50",
        className
      ),
      children: value ? renderDisplay ? renderDisplay(value) : /* @__PURE__ */ jsx("span", { className: "text-foreground", children: value }) : /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: placeholder })
    }
  );
}
var acceptMap = {
  image: { "image/*": [] },
  video: { "video/*": [] },
  "image-or-video": { "image/*": [], "video/*": [] }
};
function FileUpload({
  accept = "image",
  maxSize = 10 * 1024 * 1024,
  maxFiles = 1,
  onUpload,
  disabled = false,
  className
}) {
  const [previews, setPreviews] = React19.useState([]);
  const [uploading, setUploading] = React19.useState(false);
  const [error, setError] = React19.useState(null);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: acceptMap[accept],
    maxSize,
    maxFiles,
    disabled: disabled || uploading,
    onDrop: async (accepted, rejected) => {
      setError(null);
      if (rejected.length > 0) {
        const err = rejected[0].errors[0];
        if (err.code === "file-too-large") {
          setError(`\u30D5\u30A1\u30A4\u30EB\u30B5\u30A4\u30BA\u304C\u5927\u304D\u3059\u304E\u307E\u3059\uFF08\u6700\u5927 ${Math.round(maxSize / 1024 / 1024)}MB\uFF09`);
        } else if (err.code === "too-many-files") {
          setError(`\u30D5\u30A1\u30A4\u30EB\u306F\u6700\u5927 ${maxFiles} \u500B\u307E\u3067\u3067\u3059`);
        } else {
          setError("\u5BFE\u5FDC\u3057\u3066\u3044\u306A\u3044\u30D5\u30A1\u30A4\u30EB\u5F62\u5F0F\u3067\u3059");
        }
        return;
      }
      if (accepted.length === 0) return;
      const newPreviews = accepted.map((file) => ({
        file,
        url: URL.createObjectURL(file),
        type: file.type.startsWith("video/") ? "video" : "image"
      }));
      setPreviews(newPreviews);
      try {
        setUploading(true);
        await onUpload(accepted);
      } catch {
        setError("\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u306B\u5931\u6557\u3057\u307E\u3057\u305F");
      } finally {
        setUploading(false);
      }
    }
  });
  function removePreview(index) {
    setPreviews((prev) => {
      URL.revokeObjectURL(prev[index].url);
      return prev.filter((_, i) => i !== index);
    });
  }
  React19.useEffect(() => {
    return () => {
      previews.forEach((p) => URL.revokeObjectURL(p.url));
    };
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: cn("flex flex-col gap-3", className), children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        ...getRootProps(),
        className: cn(
          "flex cursor-pointer flex-col items-center justify-center gap-3 rounded-lg border-2 border-dashed px-6 py-10 text-center transition-colors",
          isDragActive ? "border-primary bg-[color:var(--color-primary)]/5" : "border-border hover:border-primary/50 hover:bg-surface-subtle",
          (disabled || uploading) && "cursor-not-allowed opacity-50"
        ),
        children: [
          /* @__PURE__ */ jsx("input", { ...getInputProps() }),
          uploading ? /* @__PURE__ */ jsx(Spinner, { size: "lg", color: "primary" }) : /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(Upload, { className: "size-8 text-muted-foreground" }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1", children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-foreground", children: isDragActive ? "\u3053\u3053\u306B\u30C9\u30ED\u30C3\u30D7" : "\u30AF\u30EA\u30C3\u30AF\u307E\u305F\u306F\u30C9\u30E9\u30C3\u30B0\uFF06\u30C9\u30ED\u30C3\u30D7" }),
              /* @__PURE__ */ jsxs("p", { className: "text-xs text-muted-foreground", children: [
                accept === "image" && "\u753B\u50CF\u30D5\u30A1\u30A4\u30EB",
                accept === "video" && "\u52D5\u753B\u30D5\u30A1\u30A4\u30EB",
                accept === "image-or-video" && "\u753B\u50CF\u30FB\u52D5\u753B\u30D5\u30A1\u30A4\u30EB",
                " ",
                "\uFF08\u6700\u5927 ",
                Math.round(maxSize / 1024 / 1024),
                "MB\uFF09"
              ] })
            ] })
          ] })
        ]
      }
    ),
    error && /* @__PURE__ */ jsx(Alert, { variant: "destructive", children: /* @__PURE__ */ jsx(AlertDescription, { children: error }) }),
    previews.length > 0 && /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-3", children: previews.map((preview, i) => /* @__PURE__ */ jsxs("div", { className: "relative size-24 overflow-hidden rounded-md border border-border", children: [
      preview.type === "image" ? (
        // eslint-disable-next-line @next/next/no-img-element
        /* @__PURE__ */ jsx(
          "img",
          {
            src: preview.url,
            alt: preview.file.name,
            className: "size-full object-cover"
          }
        )
      ) : /* @__PURE__ */ jsxs("div", { className: "flex size-full flex-col items-center justify-center gap-1 bg-surface-subtle", children: [
        /* @__PURE__ */ jsx(FileVideo, { className: "size-6 text-muted-foreground" }),
        /* @__PURE__ */ jsx("span", { className: "max-w-full truncate px-1 text-xs text-muted-foreground", children: preview.file.name })
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          "aria-label": "\u524A\u9664",
          onClick: () => removePreview(i),
          className: "absolute right-1 top-1 flex size-5 items-center justify-center rounded-full bg-foreground/70 text-background hover:bg-foreground",
          children: /* @__PURE__ */ jsx(X, { className: "size-3" })
        }
      )
    ] }, i)) })
  ] });
}
var headingStyles = {
  1: "scroll-m-20 text-4xl font-bold tracking-tight",
  2: "scroll-m-20 text-3xl font-semibold tracking-tight",
  3: "scroll-m-20 text-2xl font-semibold tracking-tight",
  4: "scroll-m-20 text-xl font-semibold tracking-tight",
  5: "scroll-m-20 text-lg font-semibold",
  6: "scroll-m-20 text-base font-semibold"
};
function Heading({ level = 2, as, className, children, ...props }) {
  const Tag2 = as ?? `h${level}`;
  return /* @__PURE__ */ jsx(
    Tag2,
    {
      className: cn("text-foreground", headingStyles[level], className),
      ...props,
      children
    }
  );
}
var textSizes = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl"
};
var textWeights = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold"
};
var textColors = {
  default: "text-foreground",
  muted: "text-muted-foreground",
  primary: "text-primary",
  success: "text-[color:var(--color-success)]",
  warning: "text-[color:var(--color-warning)]",
  danger: "text-[color:var(--color-danger)]"
};
function Text({
  size = "base",
  weight = "normal",
  color = "default",
  as: Tag2 = "p",
  className,
  children,
  ...props
}) {
  const El = Tag2;
  return /* @__PURE__ */ jsx(
    El,
    {
      className: cn(textSizes[size], textWeights[weight], textColors[color], className),
      ...props,
      children
    }
  );
}
var metricSizes = {
  sm: { value: "text-2xl", unit: "text-sm", trend: "text-xs" },
  md: { value: "text-3xl", unit: "text-base", trend: "text-sm" },
  lg: { value: "text-5xl", unit: "text-xl", trend: "text-base" }
};
function MetricText({ value, unit, trend, size = "md", className, ...props }) {
  const s = metricSizes[size];
  let trendColor = "text-muted-foreground";
  if (trend) {
    const isPositive = trend.positive !== false ? trend.direction === "up" : trend.direction === "down";
    trendColor = isPositive ? "text-[color:var(--color-success)]" : "text-[color:var(--color-danger)]";
    if (trend.direction === "neutral") trendColor = "text-muted-foreground";
  }
  return /* @__PURE__ */ jsxs("div", { className: cn("flex flex-col gap-1", className), ...props, children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-baseline gap-1", children: [
      /* @__PURE__ */ jsx("span", { className: cn(s.value, "font-bold tabular-nums text-foreground"), children: value }),
      unit && /* @__PURE__ */ jsx("span", { className: cn(s.unit, "text-muted-foreground"), children: unit })
    ] }),
    trend && /* @__PURE__ */ jsxs("div", { className: cn("flex items-center gap-1", trendColor), children: [
      trend.direction === "up" && /* @__PURE__ */ jsx(TrendingUp, { className: "size-3.5" }),
      trend.direction === "down" && /* @__PURE__ */ jsx(TrendingDown, { className: "size-3.5" }),
      /* @__PURE__ */ jsx("span", { className: s.trend, children: trend.label })
    ] })
  ] });
}
var sizeMap2 = {
  sm: 32,
  md: 48,
  lg: 64,
  xl: 96
};
var colorMap = {
  primary: "var(--color-primary)",
  success: "var(--color-success)",
  warning: "var(--color-warning)",
  danger: "var(--color-danger)"
};
function ProgressCircular({
  value,
  size = "md",
  color = "primary",
  showLabel = false,
  strokeWidth,
  className,
  ...props
}) {
  const px = sizeMap2[size];
  const sw = strokeWidth ?? Math.max(2, Math.round(px * 0.1));
  const radius = (px - sw) / 2;
  const circumference = 2 * Math.PI * radius;
  const clampedValue = Math.min(100, Math.max(0, value));
  const offset = circumference - clampedValue / 100 * circumference;
  const center = px / 2;
  const strokeColor = colorMap[color];
  const fontSize = px * 0.22;
  return /* @__PURE__ */ jsxs("div", { className: "relative inline-flex items-center justify-center", style: { width: px, height: px }, children: [
    /* @__PURE__ */ jsxs(
      "svg",
      {
        width: px,
        height: px,
        viewBox: `0 0 ${px} ${px}`,
        role: "progressbar",
        "aria-valuenow": clampedValue,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        className: cn("rotate-[-90deg]", className),
        ...props,
        children: [
          /* @__PURE__ */ jsx(
            "circle",
            {
              cx: center,
              cy: center,
              r: radius,
              fill: "none",
              stroke: "var(--color-border-default)",
              strokeWidth: sw
            }
          ),
          /* @__PURE__ */ jsx(
            "circle",
            {
              cx: center,
              cy: center,
              r: radius,
              fill: "none",
              stroke: strokeColor,
              strokeWidth: sw,
              strokeLinecap: "round",
              strokeDasharray: circumference,
              strokeDashoffset: offset,
              style: { transition: "stroke-dashoffset 0.35s ease" }
            }
          )
        ]
      }
    ),
    showLabel && /* @__PURE__ */ jsxs(
      "span",
      {
        className: "absolute font-medium tabular-nums text-foreground",
        style: { fontSize },
        "aria-hidden": true,
        children: [
          clampedValue,
          "%"
        ]
      }
    )
  ] });
}
function Stepper({ steps, currentStep, orientation = "horizontal", className }) {
  const resolvedSteps = steps.map((step, i) => {
    if (step.status) return { ...step, status: step.status };
    const idx = currentStep ?? 0;
    if (i < idx) return { ...step, status: "completed" };
    if (i === idx) return { ...step, status: "current" };
    return { ...step, status: "upcoming" };
  });
  if (orientation === "vertical") {
    return /* @__PURE__ */ jsx("ol", { className: cn("flex flex-col", className), children: resolvedSteps.map((step, i) => /* @__PURE__ */ jsxs("li", { className: "flex gap-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ jsx(StepIndicator, { status: step.status, index: i }),
        i < resolvedSteps.length - 1 && /* @__PURE__ */ jsx(
          "div",
          {
            className: cn(
              "mt-1 w-0.5 flex-1",
              step.status === "completed" ? "bg-primary" : "bg-border"
            ),
            style: { minHeight: "2rem" }
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "pb-6 pt-0.5", children: /* @__PURE__ */ jsx(StepLabel, { step }) })
    ] }, i)) });
  }
  return /* @__PURE__ */ jsx("ol", { className: cn("flex w-full items-start", className), children: resolvedSteps.map((step, i) => /* @__PURE__ */ jsxs("li", { className: "flex flex-1 items-center", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-2", children: [
      /* @__PURE__ */ jsx(StepIndicator, { status: step.status, index: i }),
      /* @__PURE__ */ jsx(StepLabel, { step, centered: true })
    ] }),
    i < resolvedSteps.length - 1 && /* @__PURE__ */ jsx(
      "div",
      {
        className: cn(
          "mx-2 mb-6 h-0.5 flex-1",
          step.status === "completed" ? "bg-primary" : "bg-border"
        )
      }
    )
  ] }, i)) });
}
function StepIndicator({
  status,
  index
}) {
  if (status === "completed") {
    return /* @__PURE__ */ jsx("div", { className: "flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground", children: /* @__PURE__ */ jsx(Check, { className: "size-4", strokeWidth: 2.5 }) });
  }
  if (status === "current") {
    return /* @__PURE__ */ jsx("div", { className: "flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground ring-4 ring-primary/20", children: /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold", children: index + 1 }) });
  }
  return /* @__PURE__ */ jsx("div", { className: "flex size-8 shrink-0 items-center justify-center rounded-full border-2 border-border bg-background text-muted-foreground", children: /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold", children: index + 1 }) });
}
function StepLabel({ step, centered }) {
  return /* @__PURE__ */ jsxs("div", { className: cn("flex flex-col gap-0.5", centered && "items-center text-center"), children: [
    /* @__PURE__ */ jsx(
      "p",
      {
        className: cn(
          "text-sm font-medium",
          step.status === "upcoming" ? "text-muted-foreground" : "text-foreground"
        ),
        children: step.title
      }
    ),
    step.description && /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: step.description })
  ] });
}
function Section({
  title,
  description,
  actions,
  variant = "default",
  divider = false,
  as: Tag2 = "section",
  className,
  children,
  ...props
}) {
  const El = Tag2;
  return /* @__PURE__ */ jsxs(
    El,
    {
      className: cn(
        "flex flex-col gap-4",
        variant === "bordered" && "rounded-lg border border-border p-6",
        variant === "elevated" && "rounded-lg bg-card p-6 shadow-sm",
        className
      ),
      ...props,
      children: [
        (title || actions) && /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1", children: [
            title && /* @__PURE__ */ jsx("h2", { className: "text-base font-semibold text-foreground", children: title }),
            description && /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: description })
          ] }),
          actions && /* @__PURE__ */ jsx("div", { className: "shrink-0", children: actions })
        ] }),
        divider && /* @__PURE__ */ jsx(Separator2, {}),
        children
      ]
    }
  );
}
var colorVariants = {
  default: "bg-surface-subtle text-foreground border-border",
  primary: "bg-[color:var(--color-primary)]/10 text-primary border-primary/30",
  success: "bg-[color:var(--color-success-subtle)] text-[color:var(--color-success)] border-[color:var(--color-success)]/30",
  warning: "bg-[color:var(--color-warning-subtle)] text-[color:var(--color-warning)] border-[color:var(--color-warning)]/30",
  danger: "bg-[color:var(--color-danger-subtle)] text-[color:var(--color-danger)] border-[color:var(--color-danger)]/30",
  info: "bg-[color:var(--color-info-subtle)] text-[color:var(--color-info)] border-[color:var(--color-info)]/30"
};
function Tag({
  color = "default",
  removable = false,
  onRemove,
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    "span",
    {
      className: cn(
        "inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium",
        colorVariants[color],
        className
      ),
      ...props,
      children: [
        children,
        removable && /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            "aria-label": "\u524A\u9664",
            onClick: (e) => {
              e.stopPropagation();
              onRemove?.();
            },
            className: "ml-0.5 flex size-3.5 items-center justify-center rounded-full opacity-60 hover:opacity-100",
            children: /* @__PURE__ */ jsx(X, { className: "size-2.5" })
          }
        )
      ]
    }
  );
}
function TagGroup({ wrap = true, className, children, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn(
        "flex gap-1.5",
        wrap && "flex-wrap",
        !wrap && "overflow-x-auto",
        className
      ),
      ...props,
      children
    }
  );
}
function DndProvider({ items, onReorder, children }) {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  );
  function handleDragEnd(event) {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    const oldIndex = items.indexOf(String(active.id));
    const newIndex = items.indexOf(String(over.id));
    if (oldIndex === -1 || newIndex === -1) return;
    const next = [...items];
    next.splice(oldIndex, 1);
    next.splice(newIndex, 0, String(active.id));
    onReorder(next);
  }
  return /* @__PURE__ */ jsx(DndContext, { sensors, collisionDetection: closestCenter, onDragEnd: handleDragEnd, children: /* @__PURE__ */ jsx(SortableContext, { items, strategy: verticalListSortingStrategy, children }) });
}
function SortableItem({ id, children, className }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1
  };
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref: setNodeRef,
      style,
      className: cn("touch-none", className),
      ...attributes,
      ...listeners,
      children
    }
  );
}
function DragHandle({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      "aria-label": "\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u4E26\u3073\u66FF\u3048",
      className: cn(
        "flex cursor-grab items-center justify-center rounded p-1 text-muted-foreground hover:bg-surface-subtle hover:text-foreground active:cursor-grabbing",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx(GripVertical, { className: "size-4" })
    }
  );
}
function ColorDot({ color, size = 8 }) {
  return /* @__PURE__ */ jsx(
    "span",
    {
      className: "shrink-0 rounded-full",
      style: { width: size, height: size, backgroundColor: color },
      "aria-hidden": true
    }
  );
}
function SearchForm({
  placeholder = "Search...",
  ...props
}) {
  return /* @__PURE__ */ jsx("form", { ...props, children: /* @__PURE__ */ jsx(SidebarGroup, { className: "py-0", children: /* @__PURE__ */ jsxs(SidebarGroupContent, { className: "relative", children: [
    /* @__PURE__ */ jsx(Label2, { htmlFor: "sidebar-search", className: "sr-only", children: "Search" }),
    /* @__PURE__ */ jsx(
      SidebarInput,
      {
        id: "sidebar-search",
        placeholder,
        className: "pl-8"
      }
    ),
    /* @__PURE__ */ jsx(Search, { className: "pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none opacity-50" })
  ] }) }) });
}
function AppSwitcher({
  currentApp,
  apps,
  onNavigate
}) {
  const current = apps.find((a) => a.name === currentApp) ?? apps[0];
  function handleSelect(url) {
    if (onNavigate) {
      onNavigate(url);
    } else {
      window.location.href = url;
    }
  }
  return /* @__PURE__ */ jsx(SidebarMenu, { children: /* @__PURE__ */ jsx(SidebarMenuItem, { children: /* @__PURE__ */ jsxs(DropdownMenu, { children: [
    /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(
      SidebarMenuButton,
      {
        size: "lg",
        className: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground",
        "aria-label": "\u30A2\u30D7\u30EA\u3092\u5207\u308A\u66FF\u3048",
        children: [
          /* @__PURE__ */ jsx(ColorDot, { color: current?.color ?? "#888", size: 10 }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-0.5 leading-none min-w-0", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground", children: "App" }),
            /* @__PURE__ */ jsx("span", { className: "font-semibold truncate", children: current?.name ?? currentApp })
          ] }),
          /* @__PURE__ */ jsx(ChevronsUpDown, { className: "ml-auto shrink-0 opacity-50" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxs(
      DropdownMenuContent,
      {
        className: "w-[--radix-dropdown-menu-trigger-width] min-w-52",
        align: "start",
        side: "top",
        sideOffset: 4,
        children: [
          /* @__PURE__ */ jsx(DropdownMenuLabel, { className: "text-xs text-muted-foreground", children: "Go\u30B7\u30EA\u30FC\u30BA" }),
          /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
          apps.map((app) => /* @__PURE__ */ jsxs(
            DropdownMenuItem,
            {
              onSelect: () => handleSelect(app.url),
              className: "gap-2",
              children: [
                /* @__PURE__ */ jsx(ColorDot, { color: app.color, size: 8 }),
                /* @__PURE__ */ jsx("span", { className: "flex-1", children: app.name }),
                app.name === currentApp && /* @__PURE__ */ jsx(Check, { className: "size-4 shrink-0 opacity-70" })
              ]
            },
            app.name
          ))
        ]
      }
    )
  ] }) }) });
}
function AppSidebar({
  currentApp,
  apps,
  navItems,
  logo,
  searchPlaceholder,
  onNavigate,
  ...props
}) {
  return /* @__PURE__ */ jsxs(Sidebar, { ...props, children: [
    /* @__PURE__ */ jsxs(SidebarHeader, { children: [
      logo && /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2 px-2 py-1", children: logo }),
      /* @__PURE__ */ jsx(SearchForm, { placeholder: searchPlaceholder })
    ] }),
    /* @__PURE__ */ jsx(SidebarContent, { children: navItems.map(
      (section) => section.items ? (
        // グループ付きナビ（セクション見出し + サブ項目）
        /* @__PURE__ */ jsxs(SidebarGroup, { children: [
          /* @__PURE__ */ jsx(SidebarGroupLabel, { children: section.title }),
          /* @__PURE__ */ jsx(SidebarGroupContent, { children: /* @__PURE__ */ jsx(SidebarMenu, { children: section.items.map((item) => /* @__PURE__ */ jsx(SidebarMenuItem, { children: /* @__PURE__ */ jsx(
            SidebarMenuButton,
            {
              asChild: true,
              isActive: item.isActive,
              children: /* @__PURE__ */ jsx("a", { href: item.url, children: item.title })
            }
          ) }, item.title)) }) })
        ] }, section.title)
      ) : (
        // フラットなナビ項目
        /* @__PURE__ */ jsx(SidebarGroup, { children: /* @__PURE__ */ jsx(SidebarGroupContent, { children: /* @__PURE__ */ jsx(SidebarMenu, { children: /* @__PURE__ */ jsx(SidebarMenuItem, { children: /* @__PURE__ */ jsx(
          SidebarMenuButton,
          {
            asChild: true,
            isActive: section.isActive,
            className: cn(
              section.icon && "gap-2"
            ),
            children: /* @__PURE__ */ jsxs("a", { href: section.url, children: [
              section.icon && /* @__PURE__ */ jsx(section.icon, { className: "size-4 shrink-0" }),
              section.title
            ] })
          }
        ) }) }) }) }, section.title)
      )
    ) }),
    /* @__PURE__ */ jsx(SidebarFooter, { children: /* @__PURE__ */ jsx(
      AppSwitcher,
      {
        currentApp,
        apps,
        onNavigate
      }
    ) }),
    /* @__PURE__ */ jsx(SidebarRail, {})
  ] });
}
function TrendIcon({ direction }) {
  if (direction === "up") return /* @__PURE__ */ jsx(TrendingUpIcon, { className: "size-3" });
  if (direction === "down") return /* @__PURE__ */ jsx(TrendingDownIcon, { className: "size-3" });
  return /* @__PURE__ */ jsx(MinusIcon, { className: "size-3" });
}
function TrendBadge({ trend }) {
  return /* @__PURE__ */ jsxs(
    Badge,
    {
      variant: "outline",
      className: "flex gap-1 rounded-lg text-xs",
      "aria-label": `\u5909\u5316: ${trend.value}`,
      children: [
        /* @__PURE__ */ jsx(TrendIcon, { direction: trend.direction }),
        trend.value
      ]
    }
  );
}
function SectionCards({ cards }) {
  return /* @__PURE__ */ jsx("div", { className: "*:data-[slot=card]:shadow-xs @xl/main:grid-cols-2 @5xl/main:grid-cols-4 grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card lg:px-6", children: cards.map((card, i) => /* @__PURE__ */ jsxs(Card, { className: "@container/card", children: [
    /* @__PURE__ */ jsxs(CardHeader, { className: "relative", children: [
      /* @__PURE__ */ jsx(CardDescription, { children: card.title }),
      /* @__PURE__ */ jsx(CardTitle, { className: "@[250px]/card:text-3xl text-2xl font-semibold tabular-nums", children: card.value }),
      card.trend && /* @__PURE__ */ jsx("div", { className: "absolute right-4 top-4", children: /* @__PURE__ */ jsx(TrendBadge, { trend: card.trend }) }),
      card.icon && !card.trend && /* @__PURE__ */ jsx("div", { className: "absolute right-4 top-4 text-muted-foreground", children: card.icon })
    ] }),
    card.description && /* @__PURE__ */ jsx(CardFooter, { className: "flex-col items-start gap-1 text-sm", children: /* @__PURE__ */ jsx("div", { className: "line-clamp-2 flex gap-2 text-muted-foreground", children: card.description }) })
  ] }, i)) });
}
var DEFAULT_TIME_RANGES = [
  { label: "\u904E\u53BB90\u65E5", value: "90d", daysBack: 90 },
  { label: "\u904E\u53BB30\u65E5", value: "30d", daysBack: 30 },
  { label: "\u904E\u53BB7\u65E5", value: "7d", daysBack: 7 }
];
function defaultXFormatter(value) {
  const d = new Date(value);
  if (isNaN(d.getTime())) return value;
  return d.toLocaleDateString("ja-JP", { month: "short", day: "numeric" });
}
function ChartArea({
  data,
  config,
  xKey,
  yKeys,
  title,
  description,
  timeRanges = DEFAULT_TIME_RANGES,
  defaultRange,
  filterByDate = true,
  xTickFormatter = defaultXFormatter,
  tooltipLabelFormatter
}) {
  const initialRange = defaultRange ?? timeRanges[0]?.value ?? "";
  const [timeRange, setTimeRange] = React19.useState(initialRange);
  const filteredData = React19.useMemo(() => {
    if (!filterByDate || !timeRanges.length) return data;
    const selected = timeRanges.find((r) => r.value === timeRange);
    if (!selected?.daysBack) return data;
    const referenceDate = new Date(
      Math.max(...data.map((d) => new Date(d[xKey]).getTime()))
    );
    const cutoff = new Date(referenceDate);
    cutoff.setDate(cutoff.getDate() - selected.daysBack);
    return data.filter((item) => new Date(item[xKey]) >= cutoff);
  }, [data, filterByDate, timeRange, timeRanges, xKey]);
  const uid = React19.useId().replace(/:/g, "");
  return /* @__PURE__ */ jsxs(Card, { className: "@container/card", children: [
    /* @__PURE__ */ jsxs(CardHeader, { className: "relative", children: [
      title && /* @__PURE__ */ jsx(CardTitle, { children: title }),
      description && /* @__PURE__ */ jsx(CardDescription, { children: description }),
      timeRanges.length > 0 && /* @__PURE__ */ jsxs("div", { className: "absolute right-4 top-4 flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(
          ToggleGroup,
          {
            type: "single",
            value: timeRange,
            onValueChange: (v) => v && setTimeRange(v),
            variant: "outline",
            className: "@[767px]/card:flex hidden",
            children: timeRanges.map((r) => /* @__PURE__ */ jsx(ToggleGroupItem, { value: r.value, className: "h-8 px-2.5", children: r.label }, r.value))
          }
        ),
        /* @__PURE__ */ jsxs(Select, { value: timeRange, onValueChange: setTimeRange, children: [
          /* @__PURE__ */ jsx(
            SelectTrigger,
            {
              className: "@[767px]/card:hidden flex w-36",
              "aria-label": "\u671F\u9593\u3092\u9078\u629E",
              children: /* @__PURE__ */ jsx(SelectValue, {})
            }
          ),
          /* @__PURE__ */ jsx(SelectContent, { className: "rounded-xl", children: timeRanges.map((r) => /* @__PURE__ */ jsx(SelectItem, { value: r.value, className: "rounded-lg", children: r.label }, r.value)) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(CardContent, { className: "px-2 pt-4 sm:px-6 sm:pt-6", children: /* @__PURE__ */ jsx(ChartContainer, { config, className: "aspect-auto h-[250px] w-full", children: /* @__PURE__ */ jsxs(AreaChart, { data: filteredData, children: [
      /* @__PURE__ */ jsx("defs", { children: yKeys.map((key) => /* @__PURE__ */ jsxs(
        "linearGradient",
        {
          id: `${uid}-fill-${key}`,
          x1: "0",
          y1: "0",
          x2: "0",
          y2: "1",
          children: [
            /* @__PURE__ */ jsx("stop", { offset: "5%", stopColor: `var(--color-${key})`, stopOpacity: 0.8 }),
            /* @__PURE__ */ jsx("stop", { offset: "95%", stopColor: `var(--color-${key})`, stopOpacity: 0.1 })
          ]
        },
        key
      )) }),
      /* @__PURE__ */ jsx(CartesianGrid, { vertical: false }),
      /* @__PURE__ */ jsx(
        XAxis,
        {
          dataKey: xKey,
          tickLine: false,
          axisLine: false,
          tickMargin: 8,
          minTickGap: 32,
          tickFormatter: xTickFormatter
        }
      ),
      /* @__PURE__ */ jsx(
        ChartTooltip,
        {
          cursor: false,
          content: /* @__PURE__ */ jsx(
            ChartTooltipContent,
            {
              labelFormatter: tooltipLabelFormatter ? tooltipLabelFormatter : (v) => xTickFormatter(v),
              indicator: "dot"
            }
          )
        }
      ),
      yKeys.map((key) => /* @__PURE__ */ jsx(
        Area,
        {
          dataKey: key,
          type: "natural",
          fill: `url(#${uid}-fill-${key})`,
          stroke: `var(--color-${key})`,
          stackId: "a"
        },
        key
      ))
    ] }) }) })
  ] });
}
function DataTable({
  columns,
  data,
  searchable = false,
  pageSize = 10,
  pageSizeOptions = [10, 20, 50],
  emptyMessage = "\u30C7\u30FC\u30BF\u304C\u3042\u308A\u307E\u305B\u3093"
}) {
  const [sorting, setSorting] = React19.useState([]);
  const [columnFilters, setColumnFilters] = React19.useState([]);
  const [columnVisibility, setColumnVisibility] = React19.useState({});
  const [pagination, setPagination] = React19.useState({
    pageIndex: 0,
    pageSize
  });
  const searchColumnId = typeof searchable === "object" ? searchable.columnId : void 0;
  const searchPlaceholder = typeof searchable === "object" ? searchable.placeholder ?? "\u691C\u7D22..." : "\u691C\u7D22...";
  const table = useReactTable({
    data,
    columns,
    state: { sorting, columnFilters, columnVisibility, pagination },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel()
  });
  const searchValue = searchColumnId ? table.getColumn(searchColumnId)?.getFilterValue() ?? "" : "";
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4", children: [
    searchable && searchColumnId && /* @__PURE__ */ jsxs("div", { className: "relative max-w-xs", children: [
      /* @__PURE__ */ jsx(Label2, { htmlFor: "data-table-search", className: "sr-only", children: searchPlaceholder }),
      /* @__PURE__ */ jsx(SearchIcon, { className: "pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" }),
      /* @__PURE__ */ jsx(
        Input,
        {
          id: "data-table-search",
          placeholder: searchPlaceholder,
          value: searchValue,
          onChange: (e) => table.getColumn(searchColumnId)?.setFilterValue(e.target.value),
          className: "pl-9"
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-lg border border-border", children: /* @__PURE__ */ jsxs(Table, { children: [
      /* @__PURE__ */ jsx(TableHeader, { className: "sticky top-0 z-10 bg-muted", children: table.getHeaderGroups().map((headerGroup) => /* @__PURE__ */ jsx(TableRow, { children: headerGroup.headers.map((header) => /* @__PURE__ */ jsx(TableHead, { colSpan: header.colSpan, children: header.isPlaceholder ? null : flexRender(
        header.column.columnDef.header,
        header.getContext()
      ) }, header.id)) }, headerGroup.id)) }),
      /* @__PURE__ */ jsx(TableBody, { children: table.getRowModel().rows.length > 0 ? table.getRowModel().rows.map((row) => /* @__PURE__ */ jsx(
        TableRow,
        {
          "data-state": row.getIsSelected() ? "selected" : void 0,
          children: row.getVisibleCells().map((cell) => /* @__PURE__ */ jsx(TableCell, { children: flexRender(cell.column.columnDef.cell, cell.getContext()) }, cell.id))
        },
        row.id
      )) : /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsx(
        TableCell,
        {
          colSpan: columns.length,
          className: "h-24 text-center text-muted-foreground",
          children: emptyMessage
        }
      ) }) })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-4 text-sm", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-muted-foreground hidden lg:block", children: [
        table.getFilteredRowModel().rows.length,
        " \u4EF6\u4E2D",
        " ",
        table.getState().pagination.pageIndex * table.getState().pagination.pageSize + 1,
        "\u2013",
        Math.min(
          (table.getState().pagination.pageIndex + 1) * table.getState().pagination.pageSize,
          table.getFilteredRowModel().rows.length
        ),
        " ",
        "\u4EF6\u3092\u8868\u793A"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "ml-auto flex items-center gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "hidden items-center gap-2 lg:flex", children: [
          /* @__PURE__ */ jsx(Label2, { htmlFor: "page-size", className: "text-sm font-medium whitespace-nowrap", children: "\u8868\u793A\u4EF6\u6570" }),
          /* @__PURE__ */ jsxs(
            Select,
            {
              value: `${table.getState().pagination.pageSize}`,
              onValueChange: (v) => table.setPageSize(Number(v)),
              children: [
                /* @__PURE__ */ jsx(SelectTrigger, { className: "w-20", id: "page-size", children: /* @__PURE__ */ jsx(SelectValue, {}) }),
                /* @__PURE__ */ jsx(SelectContent, { side: "top", children: pageSizeOptions.map((size) => /* @__PURE__ */ jsx(SelectItem, { value: `${size}`, children: size }, size)) })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "font-medium", children: [
          table.getState().pagination.pageIndex + 1,
          " / ",
          table.getPageCount()
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsx(
            Button,
            {
              variant: "outline",
              size: "icon",
              className: "hidden size-8 lg:flex",
              onClick: () => table.setPageIndex(0),
              disabled: !table.getCanPreviousPage(),
              "aria-label": "\u6700\u521D\u306E\u30DA\u30FC\u30B8",
              children: /* @__PURE__ */ jsx(ChevronsLeftIcon, { className: "size-4" })
            }
          ),
          /* @__PURE__ */ jsx(
            Button,
            {
              variant: "outline",
              size: "icon",
              className: "size-8",
              onClick: () => table.previousPage(),
              disabled: !table.getCanPreviousPage(),
              "aria-label": "\u524D\u306E\u30DA\u30FC\u30B8",
              children: /* @__PURE__ */ jsx(ChevronLeftIcon, { className: "size-4" })
            }
          ),
          /* @__PURE__ */ jsx(
            Button,
            {
              variant: "outline",
              size: "icon",
              className: "size-8",
              onClick: () => table.nextPage(),
              disabled: !table.getCanNextPage(),
              "aria-label": "\u6B21\u306E\u30DA\u30FC\u30B8",
              children: /* @__PURE__ */ jsx(ChevronRightIcon, { className: "size-4" })
            }
          ),
          /* @__PURE__ */ jsx(
            Button,
            {
              variant: "outline",
              size: "icon",
              className: "hidden size-8 lg:flex",
              onClick: () => table.setPageIndex(table.getPageCount() - 1),
              disabled: !table.getCanNextPage(),
              "aria-label": "\u6700\u5F8C\u306E\u30DA\u30FC\u30B8",
              children: /* @__PURE__ */ jsx(ChevronsRightIcon, { className: "size-4" })
            }
          )
        ] })
      ] })
    ] })
  ] });
}
function DashboardPage({
  cards,
  chart,
  table,
  children
}) {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6", children: [
    cards && cards.length > 0 && /* @__PURE__ */ jsx(SectionCards, { cards }),
    chart && /* @__PURE__ */ jsx("div", { className: "px-4 lg:px-6", children: /* @__PURE__ */ jsx(ChartArea, { ...chart }) }),
    table && /* @__PURE__ */ jsx("div", { className: "px-4 lg:px-6", children: /* @__PURE__ */ jsx(
      DataTable,
      {
        columns: table.columns,
        data: table.data,
        searchable: table.searchable,
        pageSize: table.pageSize,
        emptyMessage: table.emptyMessage
      }
    ) }),
    children && /* @__PURE__ */ jsx("div", { className: "px-4 lg:px-6", children })
  ] });
}
function GoogleIcon({ className }) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      className,
      "aria-hidden": true,
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",
            fill: "#4285F4"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",
            fill: "#34A853"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",
            fill: "#FBBC05"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",
            fill: "#EA4335"
          }
        )
      ]
    }
  );
}
function LoginPage({
  productName,
  productLogo,
  tagline,
  onGoogleSignIn,
  isLoading = false
}) {
  const [pending, setPending] = React19.useState(false);
  async function handleSignIn() {
    setPending(true);
    try {
      await onGoogleSignIn();
    } finally {
      setPending(false);
    }
  }
  const loading = isLoading || pending;
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background p-4", children: /* @__PURE__ */ jsxs(Card, { className: "w-full max-w-sm shadow-md", children: [
    /* @__PURE__ */ jsxs(CardHeader, { className: "flex flex-col items-center gap-3 pb-2 pt-8", children: [
      productLogo && /* @__PURE__ */ jsx("div", { className: "flex size-14 items-center justify-center rounded-xl border border-border bg-surface-subtle text-foreground", children: productLogo }),
      /* @__PURE__ */ jsx(
        CardTitle,
        {
          className: "text-center",
          style: {
            fontSize: "var(--text-2xl)",
            fontWeight: "var(--font-weight-semibold)"
          },
          children: productName
        }
      ),
      tagline && /* @__PURE__ */ jsx(CardDescription, { className: "text-center text-sm leading-relaxed", children: tagline })
    ] }),
    /* @__PURE__ */ jsxs(CardContent, { className: "flex flex-col gap-4 px-8 pb-10 pt-6", children: [
      /* @__PURE__ */ jsxs(
        Button,
        {
          type: "button",
          size: "lg",
          className: "w-full gap-3 text-base",
          onClick: handleSignIn,
          disabled: loading,
          "aria-busy": loading,
          children: [
            loading ? /* @__PURE__ */ jsx("span", { className: "size-5 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" }) : /* @__PURE__ */ jsx(GoogleIcon, { className: "size-5 shrink-0" }),
            loading ? "\u30B5\u30A4\u30F3\u30A4\u30F3\u4E2D..." : "Google \u3067\u30B5\u30A4\u30F3\u30A4\u30F3"
          ]
        }
      ),
      /* @__PURE__ */ jsxs("p", { className: "text-center text-xs text-muted-foreground", children: [
        "\u30B5\u30A4\u30F3\u30A4\u30F3\u3059\u308B\u3053\u3068\u3067",
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "/terms",
            className: "underline underline-offset-2 hover:text-foreground",
            children: "\u5229\u7528\u898F\u7D04"
          }
        ),
        "\u304A\u3088\u3073",
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "/privacy",
            className: "underline underline-offset-2 hover:text-foreground",
            children: "\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u30DD\u30EA\u30B7\u30FC"
          }
        ),
        "\u306B\u540C\u610F\u3057\u305F\u3082\u306E\u3068\u307F\u306A\u3055\u308C\u307E\u3059\u3002"
      ] })
    ] })
  ] }) });
}
function Section2({ title, description, children, className }) {
  return /* @__PURE__ */ jsxs(
    "section",
    {
      className: cn("flex flex-col gap-4 border-t border-border pt-8", className),
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1", children: [
          /* @__PURE__ */ jsx(
            "h2",
            {
              className: "font-semibold text-foreground",
              style: {
                fontSize: "var(--text-xl)",
                fontWeight: "var(--font-weight-semibold)"
              },
              children: title
            }
          ),
          description && /* @__PURE__ */ jsx(
            "p",
            {
              className: "text-muted-foreground",
              style: { fontSize: "var(--text-sm)", color: "var(--color-text-secondary)" },
              children: description
            }
          )
        ] }),
        children
      ]
    }
  );
}
function ScopeItem({ text, type }) {
  const isSolve = type === "solve";
  return /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2.5 text-sm", children: [
    /* @__PURE__ */ jsx(
      "span",
      {
        className: cn(
          "mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full",
          isSolve ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
        ),
        "aria-hidden": true,
        children: isSolve ? /* @__PURE__ */ jsx(CheckIcon, { className: "size-2.5 stroke-[2.5]" }) : /* @__PURE__ */ jsx(XIcon, { className: "size-2.5 stroke-[2.5]" })
      }
    ),
    /* @__PURE__ */ jsx(
      "span",
      {
        className: cn(
          isSolve ? "text-foreground" : "text-muted-foreground"
        ),
        style: {
          fontSize: "var(--text-sm)",
          color: isSolve ? "var(--color-text-primary)" : "var(--color-text-subtle)"
        },
        children: text
      }
    )
  ] });
}
function ScopeColumn({ title, items, type }) {
  const isSolve = type === "solve";
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3 rounded-lg border border-border bg-surface-subtle p-4", children: [
    /* @__PURE__ */ jsx(
      "p",
      {
        className: "text-xs font-semibold uppercase tracking-wider",
        style: {
          fontSize: "var(--text-xs)",
          fontWeight: "var(--font-weight-semibold)",
          color: isSolve ? "var(--color-primary)" : "var(--color-text-secondary)"
        },
        children: title
      }
    ),
    /* @__PURE__ */ jsx("ul", { className: "flex flex-col gap-2.5", children: items.map((item, i) => /* @__PURE__ */ jsx(ScopeItem, { text: item, type }, i)) })
  ] });
}
function StepCard({
  step,
  index,
  total
}) {
  const isLast = index === total - 1;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1.5 rounded-lg border border-border bg-card p-4 shadow-sm min-w-0", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(
          "span",
          {
            className: "flex size-5 shrink-0 items-center justify-center rounded-full text-xs font-semibold text-primary-foreground",
            style: {
              backgroundColor: "var(--color-primary)",
              fontSize: "var(--text-xs)",
              fontWeight: "var(--font-weight-semibold)"
            },
            children: index + 1
          }
        ),
        /* @__PURE__ */ jsx(
          "p",
          {
            className: "font-semibold leading-tight text-foreground",
            style: {
              fontSize: "var(--text-sm)",
              fontWeight: "var(--font-weight-semibold)"
            },
            children: step.title
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        "p",
        {
          className: "text-muted-foreground leading-relaxed",
          style: { fontSize: "var(--text-xs)", color: "var(--color-text-secondary)" },
          children: step.description
        }
      )
    ] }),
    !isLast && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("div", { className: "hidden md:flex shrink-0 items-center text-muted-foreground", children: /* @__PURE__ */ jsx(ArrowRightIcon, { className: "size-5", "aria-hidden": true }) }),
      /* @__PURE__ */ jsx("div", { className: "flex md:hidden justify-center text-muted-foreground", children: /* @__PURE__ */ jsx(ArrowDownIcon, { className: "size-5", "aria-hidden": true }) })
    ] })
  ] });
}
function ProductLogicFlow({ steps, outcome }) {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6", children: [
    /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-3 md:flex-row md:items-stretch md:gap-2", children: steps.map((step, i) => /* @__PURE__ */ jsx(StepCard, { step, index: i, total: steps.length }, i)) }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsx(
        ArrowRight,
        {
          className: "size-5 shrink-0 text-primary",
          "aria-hidden": true,
          style: { color: "var(--color-primary)" }
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "flex-1 rounded-lg border px-4 py-3 font-semibold text-foreground",
          style: {
            borderColor: "var(--color-primary)",
            backgroundColor: "color-mix(in srgb, var(--color-primary) 6%, transparent)",
            fontSize: "var(--text-base)",
            fontWeight: "var(--font-weight-semibold)"
          },
          children: outcome
        }
      )
    ] })
  ] });
}
function MetricCard({ title, description, isPrimary = false, className }) {
  return /* @__PURE__ */ jsxs(
    Card,
    {
      className: cn(
        "transition-shadow",
        isPrimary && "border-primary shadow-md",
        className
      ),
      style: isPrimary ? {
        borderColor: "var(--color-primary)",
        boxShadow: "0 0 0 1px var(--color-primary), var(--shadow-sm)"
      } : void 0,
      children: [
        /* @__PURE__ */ jsx(CardHeader, { className: "pb-1", children: /* @__PURE__ */ jsx(
          CardTitle,
          {
            className: cn(
              "leading-snug",
              isPrimary ? "text-primary" : "text-foreground"
            ),
            style: {
              fontSize: isPrimary ? "var(--text-lg)" : "var(--text-base)",
              fontWeight: "var(--font-weight-semibold)",
              color: isPrimary ? "var(--color-primary)" : "var(--color-text-primary)"
            },
            children: title
          }
        ) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx(
          "p",
          {
            className: "leading-relaxed text-muted-foreground",
            style: {
              fontSize: "var(--text-sm)",
              color: "var(--color-text-secondary)"
            },
            children: description
          }
        ) })
      ]
    }
  );
}
function ConceptPage({
  productName,
  productLogo,
  tagline,
  coreMessage,
  coreValue,
  scope,
  productLogic,
  resultMetric,
  behaviorMetrics
}) {
  return /* @__PURE__ */ jsx("div", { className: "mx-auto w-full max-w-4xl px-4 py-10 md:px-8 md:py-14", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-10", children: [
    /* @__PURE__ */ jsxs("header", { className: "flex flex-col gap-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        productLogo && /* @__PURE__ */ jsx(
          "div",
          {
            className: "flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-surface-subtle",
            "aria-hidden": true,
            children: productLogo
          }
        ),
        /* @__PURE__ */ jsx(
          "h1",
          {
            className: "font-bold text-foreground",
            style: {
              fontSize: "var(--text-3xl)",
              fontWeight: "var(--font-weight-bold)"
            },
            children: productName
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        "p",
        {
          className: "text-muted-foreground",
          style: { fontSize: "var(--text-base)", color: "var(--color-text-secondary)" },
          children: tagline
        }
      ),
      /* @__PURE__ */ jsx(
        "p",
        {
          className: "max-w-2xl leading-relaxed text-foreground",
          style: {
            fontSize: "var(--text-xl)",
            fontWeight: "var(--font-weight-medium)",
            color: "var(--color-text-primary)"
          },
          children: coreMessage
        }
      )
    ] }),
    /* @__PURE__ */ jsx(Section2, { title: "\u30B3\u30A2\u30D0\u30EA\u30E5\u30FC", children: /* @__PURE__ */ jsx(
      "p",
      {
        className: "max-w-2xl leading-relaxed text-foreground",
        style: { fontSize: "var(--text-base)", color: "var(--color-text-primary)" },
        children: coreValue
      }
    ) }),
    /* @__PURE__ */ jsx(Section2, { title: "\u30B9\u30B3\u30FC\u30D7", description: "\u3053\u306E\u30D7\u30ED\u30C0\u30AF\u30C8\u304C\u5BFE\u8C61\u3068\u3059\u308B\u8AB2\u984C\u306E\u7BC4\u56F2", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-4 sm:grid-cols-2", children: [
      /* @__PURE__ */ jsx(ScopeColumn, { title: "\u89E3\u6C7A\u3059\u308B\u3053\u3068", items: scope.solve, type: "solve" }),
      /* @__PURE__ */ jsx(ScopeColumn, { title: "\u89E3\u6C7A\u3057\u306A\u3044\u3053\u3068", items: scope.notSolve, type: "notSolve" })
    ] }) }),
    /* @__PURE__ */ jsx(
      Section2,
      {
        title: "\u30D7\u30ED\u30C0\u30AF\u30C8\u30ED\u30B8\u30C3\u30AF",
        description: "\u30E6\u30FC\u30B6\u30FC\u306E\u884C\u52D5\u304C\u3069\u306E\u3088\u3046\u306B\u4FA1\u5024\u306B\u3064\u306A\u304C\u308B\u304B",
        children: /* @__PURE__ */ jsx(ProductLogicFlow, { steps: productLogic.steps, outcome: productLogic.outcome })
      }
    ),
    /* @__PURE__ */ jsx(Section2, { title: "\u7D50\u679C\u6307\u6A19\uFF08KGI\uFF09", description: "\u6700\u7D42\u7684\u306B\u9054\u6210\u3059\u3079\u304D\u6210\u679C", children: /* @__PURE__ */ jsx(
      MetricCard,
      {
        title: resultMetric.title,
        description: resultMetric.description,
        isPrimary: true
      }
    ) }),
    /* @__PURE__ */ jsx(Section2, { title: "\u884C\u52D5\u6307\u6A19\uFF08KPI\uFF09", description: "KGI \u306B\u3064\u306A\u304C\u308B\u4E2D\u9593\u7684\u306A\u884C\u52D5\u306E\u6307\u6A19", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-3 sm:grid-cols-2", children: behaviorMetrics.map((m, i) => /* @__PURE__ */ jsx(MetricCard, { title: m.title, description: m.description }, i)) }) })
  ] }) });
}
function SettingsItem({ label, description, control, className }) {
  return /* @__PURE__ */ jsxs("div", { className: cn("flex items-center justify-between gap-4 py-4", className), children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-0.5", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-foreground", children: label }),
      description && /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: description })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "shrink-0", children: control })
  ] });
}
function SettingsGroup({ title, description, children, className }) {
  return /* @__PURE__ */ jsxs("div", { className: cn("flex flex-col", className), children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-2", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-sm font-semibold text-foreground", children: title }),
      description && /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: description })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "rounded-lg border border-border bg-card divide-y divide-border", children: React19.Children.map(children, (child, i) => /* @__PURE__ */ jsx("div", { className: "px-4", children: child }, i)) })
  ] });
}
function SettingsPage({
  sections,
  defaultSection,
  title = "\u8A2D\u5B9A",
  className
}) {
  const [activeId, setActiveId] = React19.useState(
    defaultSection ?? sections[0]?.id
  );
  const activeSection = sections.find((s) => s.id === activeId) ?? sections[0];
  return /* @__PURE__ */ jsxs("div", { className: cn("mx-auto w-full max-w-5xl px-4 py-8 md:px-8", className), children: [
    /* @__PURE__ */ jsx("h1", { className: "mb-6 text-2xl font-bold text-foreground", children: title }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-8", children: [
      /* @__PURE__ */ jsx("nav", { className: "hidden w-48 shrink-0 md:block", children: /* @__PURE__ */ jsx("ul", { className: "flex flex-col gap-1", children: sections.map((s) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
        "button",
        {
          type: "button",
          onClick: () => setActiveId(s.id),
          className: cn(
            "flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors",
            activeId === s.id ? "bg-surface-subtle font-medium text-foreground" : "text-muted-foreground hover:bg-surface-subtle hover:text-foreground"
          ),
          children: [
            s.icon && /* @__PURE__ */ jsx("span", { className: "shrink-0", children: s.icon }),
            s.label
          ]
        }
      ) }, s.id)) }) }),
      /* @__PURE__ */ jsx("div", { className: "mb-4 flex gap-1 overflow-x-auto md:hidden", children: sections.map((s) => /* @__PURE__ */ jsxs(
        "button",
        {
          type: "button",
          onClick: () => setActiveId(s.id),
          className: cn(
            "flex shrink-0 items-center gap-1.5 rounded-md px-3 py-1.5 text-sm transition-colors",
            activeId === s.id ? "bg-surface-subtle font-medium text-foreground" : "text-muted-foreground hover:bg-surface-subtle"
          ),
          children: [
            s.icon,
            s.label
          ]
        },
        s.id
      )) }),
      /* @__PURE__ */ jsx(Separator2, { orientation: "vertical", className: "hidden h-auto md:block" }),
      /* @__PURE__ */ jsx("div", { className: "min-w-0 flex-1", children: activeSection && /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-6", children: activeSection.content }) })
    ] })
  ] });
}
function AppLayout({
  sidebar,
  header,
  children,
  defaultOpen = true
}) {
  return /* @__PURE__ */ jsxs(SidebarProvider, { defaultOpen, children: [
    sidebar,
    /* @__PURE__ */ jsxs(SidebarInset, { children: [
      /* @__PURE__ */ jsxs("header", { className: "flex h-12 shrink-0 items-center gap-2 border-b border-border px-4", children: [
        /* @__PURE__ */ jsx(SidebarTrigger, { className: "-ml-1" }),
        header && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(Separator2, { orientation: "vertical", className: "h-4" }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-1 items-center", children: header })
        ] })
      ] }),
      /* @__PURE__ */ jsx("main", { className: "flex flex-1 flex-col gap-4 p-4", children })
    ] })
  ] });
}
function PageHeader({
  title,
  description,
  actions,
  breadcrumbs
}) {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1", children: [
    breadcrumbs && breadcrumbs.length > 0 && /* @__PURE__ */ jsx(Breadcrumb, { children: /* @__PURE__ */ jsx(BreadcrumbList, { children: breadcrumbs.map((crumb, i) => {
      const isLast = i === breadcrumbs.length - 1;
      return /* @__PURE__ */ jsxs(React19.Fragment, { children: [
        i > 0 && /* @__PURE__ */ jsx(BreadcrumbSeparator, {}),
        /* @__PURE__ */ jsx(BreadcrumbItem, { children: isLast || !crumb.href ? /* @__PURE__ */ jsx(BreadcrumbPage, { children: crumb.label }) : /* @__PURE__ */ jsx(BreadcrumbLink, { href: crumb.href, children: crumb.label }) })
      ] }, i);
    }) }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1 min-w-0", children: [
        /* @__PURE__ */ jsx(
          "h1",
          {
            className: "text-2xl font-semibold leading-tight text-foreground truncate",
            style: { fontSize: "var(--text-2xl)", fontWeight: "var(--font-weight-semibold)" },
            children: title
          }
        ),
        description && /* @__PURE__ */ jsx(
          "p",
          {
            className: "text-sm text-muted-foreground",
            style: { fontSize: "var(--text-sm)" },
            children: description
          }
        )
      ] }),
      actions && /* @__PURE__ */ jsx("div", { className: "flex shrink-0 items-center gap-2", children: actions })
    ] }),
    /* @__PURE__ */ jsx(Separator2, { className: "mt-2", style: { marginTop: "var(--space-2)" } })
  ] });
}

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Alert, AlertDescription, AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, AlertDialogPortal, AlertDialogTitle, AlertDialogTrigger, AlertTitle, AppLayout, AppSidebar, AppSwitcher, AspectRatio, Avatar, AvatarFallback, AvatarImage, Badge, Banner, Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, Button, Calendar, CalendarDayButton, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, ChartArea, ChartContainer, ChartLegend, ChartLegendContent, ChartStyle, ChartTooltip, ChartTooltipContent, Checkbox, Collapsible, CollapsibleContent2 as CollapsibleContent, CollapsibleTrigger2 as CollapsibleTrigger, Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut, ConceptPage, DashboardPage, DataTable, DatePicker, DateRangePicker, DesignTokens, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger, DndProvider, DragHandle, Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerPortal, DrawerTitle, DrawerTrigger, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, EmptyState, FileUpload, Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, Heading, HoverCard, HoverCardContent, HoverCardTrigger, InlineEdit, Input, Label2 as Label, LoginPage, Menubar, MenubarCheckboxItem, MenubarContent, MenubarGroup, MenubarItem, MenubarLabel, MenubarMenu, MenubarPortal, MenubarRadioGroup, MenubarRadioItem, MenubarSeparator, MenubarShortcut, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger, MetricCard, MetricText, NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport, PageHeader, Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, Popover, PopoverAnchor, PopoverContent, PopoverTrigger, ProductLogicFlow, Progress, ProgressCircular, RadioGroup, RadioGroupItem, ResizableHandle, ResizablePanel, ResizablePanelGroup, ScopeColumn, ScrollArea, ScrollBar, SearchForm, Section, SectionCards, Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue, Separator2 as Separator, SettingsGroup, SettingsItem, SettingsPage, Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetOverlay, SheetPortal, SheetTitle, SheetTrigger, Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarInput, SidebarInset, SidebarMenu, SidebarMenuAction, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, SidebarMenuSkeleton, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarProvider, SidebarRail, SidebarSeparator, SidebarTrigger, Skeleton, Slider, SortableItem, Spinner, Stepper, Switch, Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow, Tabs, TabsContent, TabsList, TabsTrigger, Tag, TagGroup, Text, Textarea, Toaster, Toggle, ToggleGroup, ToggleGroupItem, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, badgeVariants, buttonVariants, cn, navigationMenuTriggerStyle, toggleVariants, useFormField, useIsMobile, useSidebar };
//# sourceMappingURL=index.mjs.map
//# sourceMappingURL=index.mjs.map