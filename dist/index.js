"use client";
'use strict';

var React19 = require('react');
var reactSlot = require('@radix-ui/react-slot');
var classVarianceAuthority = require('class-variance-authority');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var jsxRuntime = require('react/jsx-runtime');
var SelectPrimitive = require('@radix-ui/react-select');
var lucideReact = require('lucide-react');
var CheckboxPrimitive = require('@radix-ui/react-checkbox');
var RadioGroupPrimitive = require('@radix-ui/react-radio-group');
var SwitchPrimitives = require('@radix-ui/react-switch');
var SliderPrimitive = require('@radix-ui/react-slider');
var LabelPrimitive = require('@radix-ui/react-label');
var reactHookForm = require('react-hook-form');
var AvatarPrimitive = require('@radix-ui/react-avatar');
var SeparatorPrimitive = require('@radix-ui/react-separator');
var ProgressPrimitive = require('@radix-ui/react-progress');
var SheetPrimitive = require('@radix-ui/react-dialog');
var TooltipPrimitive = require('@radix-ui/react-tooltip');
var TabsPrimitive = require('@radix-ui/react-tabs');
var NavigationMenuPrimitive = require('@radix-ui/react-navigation-menu');
var DropdownMenuPrimitive = require('@radix-ui/react-dropdown-menu');
var MenubarPrimitive = require('@radix-ui/react-menubar');
var cmdk = require('cmdk');
var vaul = require('vaul');
var PopoverPrimitive = require('@radix-ui/react-popover');
var HoverCardPrimitive = require('@radix-ui/react-hover-card');
var AlertDialogPrimitive = require('@radix-ui/react-alert-dialog');
var nextThemes = require('next-themes');
var sonner = require('sonner');
var reactDayPicker = require('react-day-picker');
var RechartsPrimitive = require('recharts');
var AccordionPrimitive = require('@radix-ui/react-accordion');
var CollapsiblePrimitive = require('@radix-ui/react-collapsible');
var ScrollAreaPrimitive = require('@radix-ui/react-scroll-area');
var TogglePrimitive = require('@radix-ui/react-toggle');
var ToggleGroupPrimitive = require('@radix-ui/react-toggle-group');
var reactResizablePanels = require('react-resizable-panels');
var AspectRatioPrimitive = require('@radix-ui/react-aspect-ratio');
var dateFns = require('date-fns');
var locale = require('date-fns/locale');
var reactDropzone = require('react-dropzone');
var core = require('@dnd-kit/core');
var sortable = require('@dnd-kit/sortable');
var utilities = require('@dnd-kit/utilities');
var reactTable = require('@tanstack/react-table');

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var React19__namespace = /*#__PURE__*/_interopNamespace(React19);
var SelectPrimitive__namespace = /*#__PURE__*/_interopNamespace(SelectPrimitive);
var CheckboxPrimitive__namespace = /*#__PURE__*/_interopNamespace(CheckboxPrimitive);
var RadioGroupPrimitive__namespace = /*#__PURE__*/_interopNamespace(RadioGroupPrimitive);
var SwitchPrimitives__namespace = /*#__PURE__*/_interopNamespace(SwitchPrimitives);
var SliderPrimitive__namespace = /*#__PURE__*/_interopNamespace(SliderPrimitive);
var LabelPrimitive__namespace = /*#__PURE__*/_interopNamespace(LabelPrimitive);
var AvatarPrimitive__namespace = /*#__PURE__*/_interopNamespace(AvatarPrimitive);
var SeparatorPrimitive__namespace = /*#__PURE__*/_interopNamespace(SeparatorPrimitive);
var ProgressPrimitive__namespace = /*#__PURE__*/_interopNamespace(ProgressPrimitive);
var SheetPrimitive__namespace = /*#__PURE__*/_interopNamespace(SheetPrimitive);
var TooltipPrimitive__namespace = /*#__PURE__*/_interopNamespace(TooltipPrimitive);
var TabsPrimitive__namespace = /*#__PURE__*/_interopNamespace(TabsPrimitive);
var NavigationMenuPrimitive__namespace = /*#__PURE__*/_interopNamespace(NavigationMenuPrimitive);
var DropdownMenuPrimitive__namespace = /*#__PURE__*/_interopNamespace(DropdownMenuPrimitive);
var MenubarPrimitive__namespace = /*#__PURE__*/_interopNamespace(MenubarPrimitive);
var PopoverPrimitive__namespace = /*#__PURE__*/_interopNamespace(PopoverPrimitive);
var HoverCardPrimitive__namespace = /*#__PURE__*/_interopNamespace(HoverCardPrimitive);
var AlertDialogPrimitive__namespace = /*#__PURE__*/_interopNamespace(AlertDialogPrimitive);
var RechartsPrimitive__namespace = /*#__PURE__*/_interopNamespace(RechartsPrimitive);
var AccordionPrimitive__namespace = /*#__PURE__*/_interopNamespace(AccordionPrimitive);
var CollapsiblePrimitive__namespace = /*#__PURE__*/_interopNamespace(CollapsiblePrimitive);
var ScrollAreaPrimitive__namespace = /*#__PURE__*/_interopNamespace(ScrollAreaPrimitive);
var TogglePrimitive__namespace = /*#__PURE__*/_interopNamespace(TogglePrimitive);
var ToggleGroupPrimitive__namespace = /*#__PURE__*/_interopNamespace(ToggleGroupPrimitive);
var AspectRatioPrimitive__namespace = /*#__PURE__*/_interopNamespace(AspectRatioPrimitive);

// src/components/ui/button.tsx
function cn(...inputs) {
  return tailwindMerge.twMerge(clsx.clsx(inputs));
}
var buttonVariants = classVarianceAuthority.cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-[var(--color-primary-hover)]",
        destructive: "bg-destructive text-destructive-foreground hover:bg-[var(--color-danger)]",
        outline: "border border-border bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-[var(--color-border-strong)]",
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
var Button = React19__namespace.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? reactSlot.Slot : "button";
    return /* @__PURE__ */ jsxRuntime.jsx(
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
var Input = React19__namespace.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-9 w-full rounded-md border border-border bg-background px-3 py-1 text-sm text-foreground transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
var Textarea = React19__namespace.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "textarea",
    {
      className: cn(
        "flex min-h-[60px] w-full rounded-md border border-border bg-background px-3 py-2 text-base placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      ),
      ref,
      ...props
    }
  );
});
Textarea.displayName = "Textarea";
var Select = SelectPrimitive__namespace.Root;
var SelectGroup = SelectPrimitive__namespace.Group;
var SelectValue = SelectPrimitive__namespace.Value;
var SelectTrigger = React19__namespace.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  SelectPrimitive__namespace.Trigger,
  {
    ref,
    className: cn(
      "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-border bg-background px-3 py-2 text-sm data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntime.jsx(SelectPrimitive__namespace.Icon, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronDown, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
SelectTrigger.displayName = SelectPrimitive__namespace.Trigger.displayName;
var SelectScrollUpButton = React19__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  SelectPrimitive__namespace.ScrollUpButton,
  {
    ref,
    className: cn(
      "flex cursor-default items-center justify-center py-1",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronUp, { className: "h-4 w-4" })
  }
));
SelectScrollUpButton.displayName = SelectPrimitive__namespace.ScrollUpButton.displayName;
var SelectScrollDownButton = React19__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  SelectPrimitive__namespace.ScrollDownButton,
  {
    ref,
    className: cn(
      "flex cursor-default items-center justify-center py-1",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronDown, { className: "h-4 w-4" })
  }
));
SelectScrollDownButton.displayName = SelectPrimitive__namespace.ScrollDownButton.displayName;
var SelectContent = React19__namespace.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(SelectPrimitive__namespace.Portal, { children: /* @__PURE__ */ jsxRuntime.jsxs(
  SelectPrimitive__namespace.Content,
  {
    ref,
    className: cn(
      "relative z-50 max-h-[var(--radix-select-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border border-border bg-popover text-popover-foreground shadow-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[var(--radix-select-content-transform-origin)]",
      position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      className
    ),
    position,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(SelectScrollUpButton, {}),
      /* @__PURE__ */ jsxRuntime.jsx(
        SelectPrimitive__namespace.Viewport,
        {
          className: cn(
            "p-1",
            position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(SelectScrollDownButton, {})
    ]
  }
) }));
SelectContent.displayName = SelectPrimitive__namespace.Content.displayName;
var SelectLabel = React19__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  SelectPrimitive__namespace.Label,
  {
    ref,
    className: cn("px-2 py-1.5 text-sm font-semibold", className),
    ...props
  }
));
SelectLabel.displayName = SelectPrimitive__namespace.Label.displayName;
var SelectItem = React19__namespace.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  SelectPrimitive__namespace.Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx("span", { className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(SelectPrimitive__namespace.ItemIndicator, { children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Check, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ jsxRuntime.jsx(SelectPrimitive__namespace.ItemText, { children })
    ]
  }
));
SelectItem.displayName = SelectPrimitive__namespace.Item.displayName;
var SelectSeparator = React19__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  SelectPrimitive__namespace.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
SelectSeparator.displayName = SelectPrimitive__namespace.Separator.displayName;
var Checkbox = React19__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  CheckboxPrimitive__namespace.Root,
  {
    ref,
    className: cn(
      "grid place-content-center peer h-4 w-4 shrink-0 rounded-sm border border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      CheckboxPrimitive__namespace.Indicator,
      {
        className: cn("grid place-content-center text-current"),
        children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Check, { className: "h-4 w-4" })
      }
    )
  }
));
Checkbox.displayName = CheckboxPrimitive__namespace.Root.displayName;
var RadioGroup = React19__namespace.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    RadioGroupPrimitive__namespace.Root,
    {
      className: cn("grid gap-2", className),
      ...props,
      ref
    }
  );
});
RadioGroup.displayName = RadioGroupPrimitive__namespace.Root.displayName;
var RadioGroupItem = React19__namespace.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    RadioGroupPrimitive__namespace.Item,
    {
      ref,
      className: cn(
        "aspect-square h-4 w-4 rounded-full border border-border text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-primary",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(RadioGroupPrimitive__namespace.Indicator, { className: "flex items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Circle, { className: "h-3.5 w-3.5 fill-primary" }) })
    }
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive__namespace.Item.displayName;
var Switch = React19__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  SwitchPrimitives__namespace.Root,
  {
    className: cn(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className
    ),
    ...props,
    ref,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      SwitchPrimitives__namespace.Thumb,
      {
        className: cn(
          "pointer-events-none block h-4 w-4 rounded-full bg-background ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
Switch.displayName = SwitchPrimitives__namespace.Root.displayName;
var Slider = React19__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  SliderPrimitive__namespace.Root,
  {
    ref,
    className: cn(
      "relative flex w-full touch-none select-none items-center",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(SliderPrimitive__namespace.Track, { className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20", children: /* @__PURE__ */ jsxRuntime.jsx(SliderPrimitive__namespace.Range, { className: "absolute h-full bg-primary" }) }),
      /* @__PURE__ */ jsxRuntime.jsx(SliderPrimitive__namespace.Thumb, { className: "block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
Slider.displayName = SliderPrimitive__namespace.Root.displayName;
var labelVariants = classVarianceAuthority.cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
var Label2 = React19__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  LabelPrimitive__namespace.Root,
  {
    ref,
    className: cn(labelVariants(), className),
    ...props
  }
));
Label2.displayName = LabelPrimitive__namespace.Root.displayName;
var Form = reactHookForm.FormProvider;
var FormFieldContext = React19__namespace.createContext(null);
var FormField = ({
  ...props
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx(FormFieldContext.Provider, { value: { name: props.name }, children: /* @__PURE__ */ jsxRuntime.jsx(reactHookForm.Controller, { ...props }) });
};
var useFormField = () => {
  const fieldContext = React19__namespace.useContext(FormFieldContext);
  const itemContext = React19__namespace.useContext(FormItemContext);
  const { getFieldState, formState } = reactHookForm.useFormContext();
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
var FormItemContext = React19__namespace.createContext(null);
var FormItem = React19__namespace.forwardRef(({ className, ...props }, ref) => {
  const id = React19__namespace.useId();
  return /* @__PURE__ */ jsxRuntime.jsx(FormItemContext.Provider, { value: { id }, children: /* @__PURE__ */ jsxRuntime.jsx("div", { ref, className: cn("space-y-2", className), ...props }) });
});
FormItem.displayName = "FormItem";
var FormLabel = React19__namespace.forwardRef(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField();
  return /* @__PURE__ */ jsxRuntime.jsx(
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
var FormControl = React19__namespace.forwardRef(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
  return /* @__PURE__ */ jsxRuntime.jsx(
    reactSlot.Slot,
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
var FormDescription = React19__namespace.forwardRef(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField();
  return /* @__PURE__ */ jsxRuntime.jsx(
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
var FormMessage = React19__namespace.forwardRef(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message ?? "") : children;
  if (!body) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntime.jsx(
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
function FormActions({
  className,
  children
}) {
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn("flex items-center justify-end gap-3 pt-2", className), children });
}
var Card = React19__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "div",
  {
    ref,
    className: cn(
      "rounded-lg border border-border bg-card text-card-foreground",
      className
    ),
    ...props
  }
));
Card.displayName = "Card";
var CardHeader = React19__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
var CardTitle = React19__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "div",
  {
    ref,
    className: cn("font-semibold leading-snug", className),
    ...props
  }
));
CardTitle.displayName = "CardTitle";
var CardDescription = React19__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "div",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
var CardContent = React19__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("div", { ref, className: cn("p-6 pt-0", className), ...props }));
CardContent.displayName = "CardContent";
var CardFooter = React19__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";
var badgeVariants = classVarianceAuthority.cva(
  "inline-flex items-center rounded px-2 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1",
  {
    variants: {
      variant: {
        default: "border border-transparent bg-primary text-primary-foreground hover:bg-[var(--color-primary-hover)]",
        secondary: "border border-transparent bg-secondary text-secondary-foreground hover:bg-accent",
        destructive: "border border-transparent bg-destructive text-destructive-foreground hover:bg-[var(--color-danger)]",
        outline: "border border-border text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({ className, variant, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn(badgeVariants({ variant }), className), ...props });
}
var Avatar = React19__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  AvatarPrimitive__namespace.Root,
  {
    ref,
    className: cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    ),
    ...props
  }
));
Avatar.displayName = AvatarPrimitive__namespace.Root.displayName;
var AvatarImage = React19__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  AvatarPrimitive__namespace.Image,
  {
    ref,
    className: cn("aspect-square h-full w-full", className),
    ...props
  }
));
AvatarImage.displayName = AvatarPrimitive__namespace.Image.displayName;
var AvatarFallback = React19__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  AvatarPrimitive__namespace.Fallback,
  {
    ref,
    className: cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    ),
    ...props
  }
));
AvatarFallback.displayName = AvatarPrimitive__namespace.Fallback.displayName;
var Separator2 = React19__namespace.forwardRef(
  ({ className, orientation = "horizontal", decorative = true, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    SeparatorPrimitive__namespace.Root,
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
Separator2.displayName = SeparatorPrimitive__namespace.Root.displayName;
function Skeleton({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      className: cn("animate-pulse rounded-md bg-primary/10", className),
      ...props
    }
  );
}
var Progress = React19__namespace.forwardRef(({ className, value, indicatorStyle, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  ProgressPrimitive__namespace.Root,
  {
    ref,
    className: cn(
      "relative h-2 w-full overflow-hidden rounded-full bg-primary/20",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      ProgressPrimitive__namespace.Indicator,
      {
        className: "h-full w-full flex-1 bg-primary transition-all",
        style: { transform: `translateX(-${100 - (value || 0)}%)`, ...indicatorStyle }
      }
    )
  }
));
Progress.displayName = ProgressPrimitive__namespace.Root.displayName;
var alertVariants = classVarianceAuthority.cva(
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
var Alert = React19__namespace.forwardRef(({ className, variant, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "div",
  {
    ref,
    role: "alert",
    className: cn(alertVariants({ variant }), className),
    ...props
  }
));
Alert.displayName = "Alert";
var AlertTitle = React19__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "h5",
  {
    ref,
    className: cn("mb-1 font-medium leading-none tracking-tight", className),
    ...props
  }
));
AlertTitle.displayName = "AlertTitle";
var AlertDescription = React19__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
  const [isMobile, setIsMobile] = React19__namespace.useState(void 0);
  React19__namespace.useEffect(() => {
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
var Sheet = SheetPrimitive__namespace.Root;
var SheetTrigger = SheetPrimitive__namespace.Trigger;
var SheetClose = SheetPrimitive__namespace.Close;
var SheetPortal = SheetPrimitive__namespace.Portal;
var SheetOverlay = React19__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  SheetPrimitive__namespace.Overlay,
  {
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  }
));
SheetOverlay.displayName = SheetPrimitive__namespace.Overlay.displayName;
var sheetVariants = classVarianceAuthority.cva(
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
var SheetContent = React19__namespace.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(SheetPortal, { children: [
  /* @__PURE__ */ jsxRuntime.jsx(SheetOverlay, {}),
  /* @__PURE__ */ jsxRuntime.jsxs(
    SheetPrimitive__namespace.Content,
    {
      ref,
      className: cn(sheetVariants({ side }), className),
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsxs(SheetPrimitive__namespace.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ jsxRuntime.jsx(lucideReact.X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "Close" })
        ] }),
        children
      ]
    }
  )
] }));
SheetContent.displayName = SheetPrimitive__namespace.Content.displayName;
var SheetHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsxRuntime.jsx(
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
}) => /* @__PURE__ */ jsxRuntime.jsx(
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
var SheetTitle = React19__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  SheetPrimitive__namespace.Title,
  {
    ref,
    className: cn("text-lg font-semibold text-foreground", className),
    ...props
  }
));
SheetTitle.displayName = SheetPrimitive__namespace.Title.displayName;
var SheetDescription = React19__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  SheetPrimitive__namespace.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
SheetDescription.displayName = SheetPrimitive__namespace.Description.displayName;
var TooltipProvider = TooltipPrimitive__namespace.Provider;
var Tooltip = TooltipPrimitive__namespace.Root;
var TooltipTrigger = TooltipPrimitive__namespace.Trigger;
var TooltipContent = React19__namespace.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(TooltipPrimitive__namespace.Portal, { children: /* @__PURE__ */ jsxRuntime.jsx(
  TooltipPrimitive__namespace.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[var(--radix-tooltip-content-transform-origin)]",
      className
    ),
    ...props
  }
) }));
TooltipContent.displayName = TooltipPrimitive__namespace.Content.displayName;
var SIDEBAR_COOKIE_NAME = "sidebar_state";
var SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
var SIDEBAR_WIDTH = "16rem";
var SIDEBAR_WIDTH_MOBILE = "18rem";
var SIDEBAR_WIDTH_ICON = "3rem";
var SIDEBAR_KEYBOARD_SHORTCUT = "b";
var SidebarContext = React19__namespace.createContext(null);
function useSidebar() {
  const context = React19__namespace.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }
  return context;
}
var SidebarProvider = React19__namespace.forwardRef(
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
    const [openMobile, setOpenMobile] = React19__namespace.useState(false);
    const [_open, _setOpen] = React19__namespace.useState(defaultOpen);
    const open = openProp ?? _open;
    const setOpen = React19__namespace.useCallback(
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
    const toggleSidebar = React19__namespace.useCallback(() => {
      return isMobile ? setOpenMobile((open2) => !open2) : setOpen((open2) => !open2);
    }, [isMobile, setOpen, setOpenMobile]);
    React19__namespace.useEffect(() => {
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
    const contextValue = React19__namespace.useMemo(
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
    return /* @__PURE__ */ jsxRuntime.jsx(SidebarContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsxRuntime.jsx(TooltipProvider, { delayDuration: 0, children: /* @__PURE__ */ jsxRuntime.jsx(
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
var Sidebar = React19__namespace.forwardRef(
  ({
    side = "left",
    variant = "sidebar",
    collapsible = "icon",
    className,
    children,
    ...props
  }, ref) => {
    const { isMobile, state, openMobile, setOpenMobile } = useSidebar();
    if (collapsible === "none") {
      return /* @__PURE__ */ jsxRuntime.jsx(
        "div",
        {
          className: cn(
            "flex h-full w-[var(--sidebar-width)] flex-col bg-sidebar text-sidebar-foreground",
            className
          ),
          ref,
          ...props,
          children
        }
      );
    }
    if (isMobile) {
      return /* @__PURE__ */ jsxRuntime.jsx(Sheet, { open: openMobile, onOpenChange: setOpenMobile, ...props, children: /* @__PURE__ */ jsxRuntime.jsxs(
        SheetContent,
        {
          "data-sidebar": "sidebar",
          "data-mobile": "true",
          className: "w-[var(--sidebar-width)] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
          style: {
            "--sidebar-width": SIDEBAR_WIDTH_MOBILE
          },
          side,
          children: [
            /* @__PURE__ */ jsxRuntime.jsxs(SheetHeader, { className: "sr-only", children: [
              /* @__PURE__ */ jsxRuntime.jsx(SheetTitle, { children: "Sidebar" }),
              /* @__PURE__ */ jsxRuntime.jsx(SheetDescription, { children: "Displays the mobile sidebar." })
            ] }),
            /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex h-full w-full flex-col", children })
          ]
        }
      ) });
    }
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        ref,
        className: "group peer hidden text-sidebar-foreground md:block",
        "data-state": state,
        "data-collapsible": state === "collapsed" ? collapsible : "",
        "data-variant": variant,
        "data-side": side,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            "div",
            {
              className: cn(
                "relative w-[var(--sidebar-width)] bg-transparent transition-[width] duration-200 ease-linear",
                "group-data-[collapsible=offcanvas]:w-0",
                "group-data-[side=right]:rotate-180",
                variant === "floating" || variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]" : "group-data-[collapsible=icon]:w-[var(--sidebar-width-icon)]"
              )
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(
            "div",
            {
              className: cn(
                "fixed inset-y-0 z-10 hidden h-svh w-[var(--sidebar-width)] transition-[left,right,width] duration-200 ease-linear md:flex",
                side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
                // Adjust the padding for floating and inset variants.
                variant === "floating" || variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]" : "group-data-[collapsible=icon]:w-[var(--sidebar-width-icon)] group-data-[side=left]:border-r group-data-[side=right]:border-l border-sidebar-border",
                className
              ),
              ...props,
              children: /* @__PURE__ */ jsxRuntime.jsx(
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
var SidebarTrigger = React19__namespace.forwardRef(({ className, onClick, ...props }, ref) => {
  const { toggleSidebar } = useSidebar();
  return /* @__PURE__ */ jsxRuntime.jsxs(
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
        /* @__PURE__ */ jsxRuntime.jsx(lucideReact.PanelLeft, {}),
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "Toggle Sidebar" })
      ]
    }
  );
});
SidebarTrigger.displayName = "SidebarTrigger";
var SidebarRail = React19__namespace.forwardRef(({ className, ...props }, ref) => {
  const { toggleSidebar } = useSidebar();
  return /* @__PURE__ */ jsxRuntime.jsx(
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
var SidebarInset = React19__namespace.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
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
var SidebarInput = React19__namespace.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    Input,
    {
      ref,
      "data-sidebar": "input",
      className: cn(
        "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-primary",
        className
      ),
      ...props
    }
  );
});
SidebarInput.displayName = "SidebarInput";
var SidebarHeader = React19__namespace.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
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
var SidebarFooter = React19__namespace.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
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
var SidebarSeparator = React19__namespace.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
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
var SidebarContent = React19__namespace.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
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
var SidebarGroup = React19__namespace.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
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
var SidebarGroupLabel = React19__namespace.forwardRef(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? reactSlot.Slot : "div";
  return /* @__PURE__ */ jsxRuntime.jsx(
    Comp,
    {
      ref,
      "data-sidebar": "group-label",
      className: cn(
        "flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-primary transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        className
      ),
      ...props
    }
  );
});
SidebarGroupLabel.displayName = "SidebarGroupLabel";
var SidebarGroupAction = React19__namespace.forwardRef(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? reactSlot.Slot : "button";
  return /* @__PURE__ */ jsxRuntime.jsx(
    Comp,
    {
      ref,
      "data-sidebar": "group-action",
      className: cn(
        "absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-primary transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
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
var SidebarGroupContent = React19__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "div",
  {
    ref,
    "data-sidebar": "group-content",
    className: cn("w-full text-sm", className),
    ...props
  }
));
SidebarGroupContent.displayName = "SidebarGroupContent";
var SidebarMenu = React19__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "ul",
  {
    ref,
    "data-sidebar": "menu",
    className: cn("flex w-full min-w-0 flex-col gap-1", className),
    ...props
  }
));
SidebarMenu.displayName = "SidebarMenu";
var SidebarMenuItem = React19__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "li",
  {
    ref,
    "data-sidebar": "menu-item",
    className: cn("group/menu-item relative", className),
    ...props
  }
));
SidebarMenuItem.displayName = "SidebarMenuItem";
var sidebarMenuButtonVariants = classVarianceAuthority.cva(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-primary transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
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
var SidebarMenuButton = React19__namespace.forwardRef(
  ({
    asChild = false,
    isActive = false,
    variant = "default",
    size = "default",
    tooltip,
    className,
    ...props
  }, ref) => {
    const Comp = asChild ? reactSlot.Slot : "button";
    const { isMobile, state } = useSidebar();
    const button = /* @__PURE__ */ jsxRuntime.jsx(
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
    return /* @__PURE__ */ jsxRuntime.jsxs(Tooltip, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(TooltipTrigger, { asChild: true, children: button }),
      /* @__PURE__ */ jsxRuntime.jsx(
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
var SidebarMenuAction = React19__namespace.forwardRef(({ className, asChild = false, showOnHover = false, ...props }, ref) => {
  const Comp = asChild ? reactSlot.Slot : "button";
  return /* @__PURE__ */ jsxRuntime.jsx(
    Comp,
    {
      ref,
      "data-sidebar": "menu-action",
      className: cn(
        "absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-primary transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0",
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
var SidebarMenuBadge = React19__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
var SidebarMenuSkeleton = React19__namespace.forwardRef(({ className, showIcon = false, ...props }, ref) => {
  const width = React19__namespace.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`;
  }, []);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      ref,
      "data-sidebar": "menu-skeleton",
      className: cn("flex h-8 items-center gap-2 rounded-md px-2", className),
      ...props,
      children: [
        showIcon && /* @__PURE__ */ jsxRuntime.jsx(
          Skeleton,
          {
            className: "size-4 rounded-md",
            "data-sidebar": "menu-skeleton-icon"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          Skeleton,
          {
            className: "h-4 max-w-[var(--skeleton-width)] flex-1",
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
var SidebarMenuSub = React19__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
var SidebarMenuSubItem = React19__namespace.forwardRef(({ ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("li", { ref, ...props }));
SidebarMenuSubItem.displayName = "SidebarMenuSubItem";
var SidebarMenuSubButton = React19__namespace.forwardRef(({ asChild = false, size = "md", isActive, className, ...props }, ref) => {
  const Comp = asChild ? reactSlot.Slot : "a";
  return /* @__PURE__ */ jsxRuntime.jsx(
    Comp,
    {
      ref,
      "data-sidebar": "menu-sub-button",
      "data-size": size,
      "data-active": isActive,
      className: cn(
        "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-primary hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
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
var TabsVariantContext = React19__namespace.createContext("default");
var Tabs = TabsPrimitive__namespace.Root;
var TabsList = React19__namespace.forwardRef(({ className, variant = "default", children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(TabsVariantContext.Provider, { value: variant, children: /* @__PURE__ */ jsxRuntime.jsx(
  TabsPrimitive__namespace.List,
  {
    ref,
    className: cn(
      variant === "default" && "inline-flex h-9 items-center justify-center rounded-lg border border-border bg-muted p-1 text-muted-foreground",
      variant === "underline" && "flex border-b border-border bg-transparent",
      className
    ),
    ...props,
    children
  }
) }));
TabsList.displayName = TabsPrimitive__namespace.List.displayName;
var TabsTrigger = React19__namespace.forwardRef(({ className, ...props }, ref) => {
  const variant = React19__namespace.useContext(TabsVariantContext);
  return /* @__PURE__ */ jsxRuntime.jsx(
    TabsPrimitive__namespace.Trigger,
    {
      ref,
      className: cn(
        variant === "default" && "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-card data-[state=active]:text-foreground data-[state=active]:shadow-sm",
        variant === "underline" && "relative -mb-px border-b-2 border-transparent px-4 pb-2.5 pt-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-primary data-[state=active]:text-foreground",
        className
      ),
      ...props
    }
  );
});
TabsTrigger.displayName = TabsPrimitive__namespace.Trigger.displayName;
var TabsContent = React19__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  TabsPrimitive__namespace.Content,
  {
    ref,
    className: cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    ),
    ...props
  }
));
TabsContent.displayName = TabsPrimitive__namespace.Content.displayName;
var Breadcrumb = React19__namespace.forwardRef(({ ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("nav", { ref, "aria-label": "breadcrumb", ...props }));
Breadcrumb.displayName = "Breadcrumb";
var BreadcrumbList = React19__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
var BreadcrumbItem = React19__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "li",
  {
    ref,
    className: cn("inline-flex items-center gap-1.5", className),
    ...props
  }
));
BreadcrumbItem.displayName = "BreadcrumbItem";
var BreadcrumbLink = React19__namespace.forwardRef(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? reactSlot.Slot : "a";
  return /* @__PURE__ */ jsxRuntime.jsx(
    Comp,
    {
      ref,
      className: cn("transition-colors hover:text-foreground", className),
      ...props
    }
  );
});
BreadcrumbLink.displayName = "BreadcrumbLink";
var BreadcrumbPage = React19__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
}) => /* @__PURE__ */ jsxRuntime.jsx(
  "li",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: cn("[&>svg]:w-3.5 [&>svg]:h-3.5", className),
    ...props,
    children: children ?? /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronRight, {})
  }
);
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";
var BreadcrumbEllipsis = ({
  className,
  ...props
}) => /* @__PURE__ */ jsxRuntime.jsxs(
  "span",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: cn("flex h-9 w-9 items-center justify-center", className),
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(lucideReact.MoreHorizontal, { className: "h-4 w-4" }),
      /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "More" })
    ]
  }
);
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis";
var NavigationMenu = React19__namespace.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  NavigationMenuPrimitive__namespace.Root,
  {
    ref,
    className: cn(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntime.jsx(NavigationMenuViewport, {})
    ]
  }
));
NavigationMenu.displayName = NavigationMenuPrimitive__namespace.Root.displayName;
var NavigationMenuList = React19__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  NavigationMenuPrimitive__namespace.List,
  {
    ref,
    className: cn(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      className
    ),
    ...props
  }
));
NavigationMenuList.displayName = NavigationMenuPrimitive__namespace.List.displayName;
var NavigationMenuItem = NavigationMenuPrimitive__namespace.Item;
var navigationMenuTriggerStyle = classVarianceAuthority.cva(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:text-accent-foreground data-[state=open]:bg-accent/50 data-[state=open]:hover:bg-accent data-[state=open]:focus:bg-accent"
);
var NavigationMenuTrigger = React19__namespace.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  NavigationMenuPrimitive__namespace.Trigger,
  {
    ref,
    className: cn(navigationMenuTriggerStyle(), "group", className),
    ...props,
    children: [
      children,
      " ",
      /* @__PURE__ */ jsxRuntime.jsx(
        lucideReact.ChevronDown,
        {
          className: "relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        }
      )
    ]
  }
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive__namespace.Trigger.displayName;
var NavigationMenuContent = React19__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  NavigationMenuPrimitive__namespace.Content,
  {
    ref,
    className: cn(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      className
    ),
    ...props
  }
));
NavigationMenuContent.displayName = NavigationMenuPrimitive__namespace.Content.displayName;
var NavigationMenuLink = NavigationMenuPrimitive__namespace.Link;
var NavigationMenuViewport = React19__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ jsxRuntime.jsx(
  NavigationMenuPrimitive__namespace.Viewport,
  {
    className: cn(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      className
    ),
    ref,
    ...props
  }
) }));
NavigationMenuViewport.displayName = NavigationMenuPrimitive__namespace.Viewport.displayName;
var NavigationMenuIndicator = React19__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  NavigationMenuPrimitive__namespace.Indicator,
  {
    ref,
    className: cn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
  }
));
NavigationMenuIndicator.displayName = NavigationMenuPrimitive__namespace.Indicator.displayName;
var DropdownMenu = DropdownMenuPrimitive__namespace.Root;
var DropdownMenuTrigger = DropdownMenuPrimitive__namespace.Trigger;
var DropdownMenuGroup = DropdownMenuPrimitive__namespace.Group;
var DropdownMenuPortal = DropdownMenuPrimitive__namespace.Portal;
var DropdownMenuSub = DropdownMenuPrimitive__namespace.Sub;
var DropdownMenuRadioGroup = DropdownMenuPrimitive__namespace.RadioGroup;
var DropdownMenuSubTrigger = React19__namespace.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  DropdownMenuPrimitive__namespace.SubTrigger,
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
      /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronRight, { className: "ml-auto" })
    ]
  }
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive__namespace.SubTrigger.displayName;
var DropdownMenuSubContent = React19__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  DropdownMenuPrimitive__namespace.SubContent,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[var(--radix-dropdown-menu-content-transform-origin)]",
      className
    ),
    ...props
  }
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive__namespace.SubContent.displayName;
var DropdownMenuContent = React19__namespace.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuPrimitive__namespace.Portal, { children: /* @__PURE__ */ jsxRuntime.jsx(
  DropdownMenuPrimitive__namespace.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-sm",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[var(--radix-dropdown-menu-content-transform-origin)]",
      className
    ),
    ...props
  }
) }));
DropdownMenuContent.displayName = DropdownMenuPrimitive__namespace.Content.displayName;
var DropdownMenuItem = React19__namespace.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  DropdownMenuPrimitive__namespace.Item,
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
DropdownMenuItem.displayName = DropdownMenuPrimitive__namespace.Item.displayName;
var DropdownMenuCheckboxItem = React19__namespace.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  DropdownMenuPrimitive__namespace.CheckboxItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuPrimitive__namespace.ItemIndicator, { children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Check, { className: "h-4 w-4" }) }) }),
      children
    ]
  }
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive__namespace.CheckboxItem.displayName;
var DropdownMenuRadioItem = React19__namespace.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  DropdownMenuPrimitive__namespace.RadioItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuPrimitive__namespace.ItemIndicator, { children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Circle, { className: "h-2 w-2 fill-current" }) }) }),
      children
    ]
  }
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive__namespace.RadioItem.displayName;
var DropdownMenuLabel = React19__namespace.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  DropdownMenuPrimitive__namespace.Label,
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
DropdownMenuLabel.displayName = DropdownMenuPrimitive__namespace.Label.displayName;
var DropdownMenuSeparator = React19__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  DropdownMenuPrimitive__namespace.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive__namespace.Separator.displayName;
var DropdownMenuShortcut = ({
  className,
  ...props
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
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
  return /* @__PURE__ */ jsxRuntime.jsx(MenubarPrimitive__namespace.Menu, { ...props });
}
function MenubarGroup({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(MenubarPrimitive__namespace.Group, { ...props });
}
function MenubarPortal({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(MenubarPrimitive__namespace.Portal, { ...props });
}
function MenubarRadioGroup({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(MenubarPrimitive__namespace.RadioGroup, { ...props });
}
function MenubarSub({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(MenubarPrimitive__namespace.Sub, { "data-slot": "menubar-sub", ...props });
}
var Menubar = React19__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  MenubarPrimitive__namespace.Root,
  {
    ref,
    className: cn(
      "flex h-9 items-center space-x-1 rounded-md border border-border bg-background p-1",
      className
    ),
    ...props
  }
));
Menubar.displayName = MenubarPrimitive__namespace.Root.displayName;
var MenubarTrigger = React19__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  MenubarPrimitive__namespace.Trigger,
  {
    ref,
    className: cn(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      className
    ),
    ...props
  }
));
MenubarTrigger.displayName = MenubarPrimitive__namespace.Trigger.displayName;
var MenubarSubTrigger = React19__namespace.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  MenubarPrimitive__namespace.SubTrigger,
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
      /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronRight, { className: "ml-auto h-4 w-4" })
    ]
  }
));
MenubarSubTrigger.displayName = MenubarPrimitive__namespace.SubTrigger.displayName;
var MenubarSubContent = React19__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  MenubarPrimitive__namespace.SubContent,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[var(--radix-menubar-content-transform-origin)]",
      className
    ),
    ...props
  }
));
MenubarSubContent.displayName = MenubarPrimitive__namespace.SubContent.displayName;
var MenubarContent = React19__namespace.forwardRef(
  ({ className, align = "start", alignOffset = -4, sideOffset = 8, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(MenubarPrimitive__namespace.Portal, { children: /* @__PURE__ */ jsxRuntime.jsx(
    MenubarPrimitive__namespace.Content,
    {
      ref,
      align,
      alignOffset,
      sideOffset,
      className: cn(
        "z-50 min-w-[12rem] overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-sm data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[var(--radix-menubar-content-transform-origin)]",
        className
      ),
      ...props
    }
  ) })
);
MenubarContent.displayName = MenubarPrimitive__namespace.Content.displayName;
var MenubarItem = React19__namespace.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  MenubarPrimitive__namespace.Item,
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
MenubarItem.displayName = MenubarPrimitive__namespace.Item.displayName;
var MenubarCheckboxItem = React19__namespace.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  MenubarPrimitive__namespace.CheckboxItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(MenubarPrimitive__namespace.ItemIndicator, { children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Check, { className: "h-4 w-4" }) }) }),
      children
    ]
  }
));
MenubarCheckboxItem.displayName = MenubarPrimitive__namespace.CheckboxItem.displayName;
var MenubarRadioItem = React19__namespace.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  MenubarPrimitive__namespace.RadioItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(MenubarPrimitive__namespace.ItemIndicator, { children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Circle, { className: "h-4 w-4 fill-current" }) }) }),
      children
    ]
  }
));
MenubarRadioItem.displayName = MenubarPrimitive__namespace.RadioItem.displayName;
var MenubarLabel = React19__namespace.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  MenubarPrimitive__namespace.Label,
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
MenubarLabel.displayName = MenubarPrimitive__namespace.Label.displayName;
var MenubarSeparator = React19__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  MenubarPrimitive__namespace.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
MenubarSeparator.displayName = MenubarPrimitive__namespace.Separator.displayName;
var MenubarShortcut = ({
  className,
  ...props
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
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
var Dialog = SheetPrimitive__namespace.Root;
var DialogTrigger = SheetPrimitive__namespace.Trigger;
var DialogPortal = SheetPrimitive__namespace.Portal;
var DialogClose = SheetPrimitive__namespace.Close;
var DialogOverlay = React19__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  SheetPrimitive__namespace.Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = SheetPrimitive__namespace.Overlay.displayName;
var DialogContent = React19__namespace.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsxRuntime.jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxRuntime.jsxs(
    SheetPrimitive__namespace.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-border bg-background p-6 shadow-md duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxRuntime.jsxs(SheetPrimitive__namespace.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntime.jsx(lucideReact.X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = SheetPrimitive__namespace.Content.displayName;
var DialogHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsxRuntime.jsx(
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
}) => /* @__PURE__ */ jsxRuntime.jsx(
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
var DialogTitle = React19__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  SheetPrimitive__namespace.Title,
  {
    ref,
    className: cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  }
));
DialogTitle.displayName = SheetPrimitive__namespace.Title.displayName;
var DialogDescription = React19__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  SheetPrimitive__namespace.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = SheetPrimitive__namespace.Description.displayName;
var Command = React19__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  cmdk.Command,
  {
    ref,
    className: cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      className
    ),
    ...props
  }
));
Command.displayName = cmdk.Command.displayName;
var CommandDialog = ({ children, ...props }) => {
  return /* @__PURE__ */ jsxRuntime.jsx(Dialog, { ...props, children: /* @__PURE__ */ jsxRuntime.jsx(DialogContent, { className: "overflow-hidden p-0", children: /* @__PURE__ */ jsxRuntime.jsx(Command, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children }) }) });
};
var CommandInput = React19__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center border-b border-border px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Search, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ jsxRuntime.jsx(
    cmdk.Command.Input,
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
CommandInput.displayName = cmdk.Command.Input.displayName;
var CommandList = React19__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  cmdk.Command.List,
  {
    ref,
    className: cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className),
    ...props
  }
));
CommandList.displayName = cmdk.Command.List.displayName;
var CommandEmpty = React19__namespace.forwardRef((props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  cmdk.Command.Empty,
  {
    ref,
    className: "py-6 text-center text-sm",
    ...props
  }
));
CommandEmpty.displayName = cmdk.Command.Empty.displayName;
var CommandGroup = React19__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  cmdk.Command.Group,
  {
    ref,
    className: cn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      className
    ),
    ...props
  }
));
CommandGroup.displayName = cmdk.Command.Group.displayName;
var CommandSeparator = React19__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  cmdk.Command.Separator,
  {
    ref,
    className: cn("-mx-1 h-px bg-border", className),
    ...props
  }
));
CommandSeparator.displayName = cmdk.Command.Separator.displayName;
var CommandItem = React19__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  cmdk.Command.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      className
    ),
    ...props
  }
));
CommandItem.displayName = cmdk.Command.Item.displayName;
var CommandShortcut = ({
  className,
  ...props
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
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
var Pagination = ({ className, ...props }) => /* @__PURE__ */ jsxRuntime.jsx(
  "nav",
  {
    role: "navigation",
    "aria-label": "pagination",
    className: cn("mx-auto flex w-full justify-center", className),
    ...props
  }
);
Pagination.displayName = "Pagination";
var PaginationContent = React19__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "ul",
  {
    ref,
    className: cn("flex flex-row items-center gap-1", className),
    ...props
  }
));
PaginationContent.displayName = "PaginationContent";
var PaginationItem = React19__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("li", { ref, className: cn("", className), ...props }));
PaginationItem.displayName = "PaginationItem";
var PaginationLink = ({
  className,
  isActive,
  size = "icon",
  ...props
}) => /* @__PURE__ */ jsxRuntime.jsx(
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
}) => /* @__PURE__ */ jsxRuntime.jsxs(
  PaginationLink,
  {
    "aria-label": "Go to previous page",
    size: "default",
    className: cn("gap-1 pl-2.5", className),
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronLeft, { className: "h-4 w-4" }),
      /* @__PURE__ */ jsxRuntime.jsx("span", { children: "Previous" })
    ]
  }
);
PaginationPrevious.displayName = "PaginationPrevious";
var PaginationNext = ({
  className,
  ...props
}) => /* @__PURE__ */ jsxRuntime.jsxs(
  PaginationLink,
  {
    "aria-label": "Go to next page",
    size: "default",
    className: cn("gap-1 pr-2.5", className),
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx("span", { children: "Next" }),
      /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronRight, { className: "h-4 w-4" })
    ]
  }
);
PaginationNext.displayName = "PaginationNext";
var PaginationEllipsis = ({
  className,
  ...props
}) => /* @__PURE__ */ jsxRuntime.jsxs(
  "span",
  {
    "aria-hidden": true,
    className: cn("flex h-9 w-9 items-center justify-center", className),
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(lucideReact.MoreHorizontal, { className: "h-4 w-4" }),
      /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "More pages" })
    ]
  }
);
PaginationEllipsis.displayName = "PaginationEllipsis";
var Drawer = ({
  shouldScaleBackground = true,
  ...props
}) => /* @__PURE__ */ jsxRuntime.jsx(
  vaul.Drawer.Root,
  {
    shouldScaleBackground,
    ...props
  }
);
Drawer.displayName = "Drawer";
var DrawerTrigger = vaul.Drawer.Trigger;
var DrawerPortal = vaul.Drawer.Portal;
var DrawerClose = vaul.Drawer.Close;
var DrawerOverlay = React19__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  vaul.Drawer.Overlay,
  {
    ref,
    className: cn("fixed inset-0 z-50 bg-black/80", className),
    ...props
  }
));
DrawerOverlay.displayName = vaul.Drawer.Overlay.displayName;
var DrawerContent = React19__namespace.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(DrawerPortal, { children: [
  /* @__PURE__ */ jsxRuntime.jsx(DrawerOverlay, {}),
  /* @__PURE__ */ jsxRuntime.jsxs(
    vaul.Drawer.Content,
    {
      ref,
      className: cn(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" }),
        children
      ]
    }
  )
] }));
DrawerContent.displayName = "DrawerContent";
var DrawerHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsxRuntime.jsx(
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
}) => /* @__PURE__ */ jsxRuntime.jsx(
  "div",
  {
    className: cn("mt-auto flex flex-col gap-2 p-4", className),
    ...props
  }
);
DrawerFooter.displayName = "DrawerFooter";
var DrawerTitle = React19__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  vaul.Drawer.Title,
  {
    ref,
    className: cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  }
));
DrawerTitle.displayName = vaul.Drawer.Title.displayName;
var DrawerDescription = React19__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  vaul.Drawer.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DrawerDescription.displayName = vaul.Drawer.Description.displayName;
var Popover = PopoverPrimitive__namespace.Root;
var PopoverTrigger = PopoverPrimitive__namespace.Trigger;
var PopoverAnchor = PopoverPrimitive__namespace.Anchor;
var PopoverContent = React19__namespace.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(PopoverPrimitive__namespace.Portal, { children: /* @__PURE__ */ jsxRuntime.jsx(
  PopoverPrimitive__namespace.Content,
  {
    ref,
    align,
    sideOffset,
    className: cn(
      "z-50 w-72 rounded-md border border-border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[var(--radix-popover-content-transform-origin)]",
      className
    ),
    ...props
  }
) }));
PopoverContent.displayName = PopoverPrimitive__namespace.Content.displayName;
var HoverCard = HoverCardPrimitive__namespace.Root;
var HoverCardTrigger = HoverCardPrimitive__namespace.Trigger;
var HoverCardContent = React19__namespace.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  HoverCardPrimitive__namespace.Content,
  {
    ref,
    align,
    sideOffset,
    className: cn(
      "z-50 w-64 rounded-md border border-border bg-popover p-4 text-popover-foreground shadow-sm outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[var(--radix-hover-card-content-transform-origin)]",
      className
    ),
    ...props
  }
));
HoverCardContent.displayName = HoverCardPrimitive__namespace.Content.displayName;
var AlertDialog = AlertDialogPrimitive__namespace.Root;
var AlertDialogTrigger = AlertDialogPrimitive__namespace.Trigger;
var AlertDialogPortal = AlertDialogPrimitive__namespace.Portal;
var AlertDialogOverlay = React19__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  AlertDialogPrimitive__namespace.Overlay,
  {
    className: cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  }
));
AlertDialogOverlay.displayName = AlertDialogPrimitive__namespace.Overlay.displayName;
var AlertDialogContent = React19__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(AlertDialogPortal, { children: [
  /* @__PURE__ */ jsxRuntime.jsx(AlertDialogOverlay, {}),
  /* @__PURE__ */ jsxRuntime.jsx(
    AlertDialogPrimitive__namespace.Content,
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
AlertDialogContent.displayName = AlertDialogPrimitive__namespace.Content.displayName;
var AlertDialogHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsxRuntime.jsx(
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
}) => /* @__PURE__ */ jsxRuntime.jsx(
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
var AlertDialogTitle = React19__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  AlertDialogPrimitive__namespace.Title,
  {
    ref,
    className: cn("text-lg font-semibold", className),
    ...props
  }
));
AlertDialogTitle.displayName = AlertDialogPrimitive__namespace.Title.displayName;
var AlertDialogDescription = React19__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  AlertDialogPrimitive__namespace.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
AlertDialogDescription.displayName = AlertDialogPrimitive__namespace.Description.displayName;
var AlertDialogAction = React19__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  AlertDialogPrimitive__namespace.Action,
  {
    ref,
    className: cn(buttonVariants(), className),
    ...props
  }
));
AlertDialogAction.displayName = AlertDialogPrimitive__namespace.Action.displayName;
var AlertDialogCancel = React19__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  AlertDialogPrimitive__namespace.Cancel,
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
AlertDialogCancel.displayName = AlertDialogPrimitive__namespace.Cancel.displayName;
var Toaster = ({ ...props }) => {
  const { theme = "system" } = nextThemes.useTheme();
  return /* @__PURE__ */ jsxRuntime.jsx(
    sonner.Toaster,
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
var Table = React19__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ jsxRuntime.jsx(
  "table",
  {
    ref,
    className: cn("w-full caption-bottom text-sm", className),
    ...props
  }
) }));
Table.displayName = "Table";
var TableHeader = React19__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("thead", { ref, className: cn("[&_tr]:border-b [&_tr]:border-border", className), ...props }));
TableHeader.displayName = "TableHeader";
var TableBody = React19__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "tbody",
  {
    ref,
    className: cn("[&_tr:last-child]:border-0", className),
    ...props
  }
));
TableBody.displayName = "TableBody";
var TableFooter = React19__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "tfoot",
  {
    ref,
    className: cn(
      "border-t border-border bg-muted/50 font-medium [&>tr]:last:border-b-0",
      className
    ),
    ...props
  }
));
TableFooter.displayName = "TableFooter";
var TableRow = React19__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "tr",
  {
    ref,
    className: cn(
      "border-b border-border transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      className
    ),
    ...props
  }
));
TableRow.displayName = "TableRow";
var TableHead = React19__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
var TableCell = React19__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
var TableCaption = React19__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
  const defaultClassNames = reactDayPicker.getDefaultClassNames();
  return /* @__PURE__ */ jsxRuntime.jsx(
    reactDayPicker.DayPicker,
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
          "h-[var(--cell-size)] w-[var(--cell-size)] select-none p-0 aria-disabled:opacity-50",
          defaultClassNames.button_previous
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          "h-[var(--cell-size)] w-[var(--cell-size)] select-none p-0 aria-disabled:opacity-50",
          defaultClassNames.button_next
        ),
        month_caption: cn(
          "flex h-[var(--cell-size)] w-full items-center justify-center px-[var(--cell-size)]",
          defaultClassNames.month_caption
        ),
        dropdowns: cn(
          "flex h-[var(--cell-size)] w-full items-center justify-center gap-1.5 text-sm font-medium",
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
          "w-[var(--cell-size)] select-none",
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
          return /* @__PURE__ */ jsxRuntime.jsx(
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
            return /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronLeftIcon, { className: cn("size-4", className2), ...props2 });
          }
          if (orientation === "right") {
            return /* @__PURE__ */ jsxRuntime.jsx(
              lucideReact.ChevronRightIcon,
              {
                className: cn("size-4", className2),
                ...props2
              }
            );
          }
          return /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronDownIcon, { className: cn("size-4", className2), ...props2 });
        },
        DayButton: CalendarDayButton,
        WeekNumber: ({ children, ...props2 }) => {
          return /* @__PURE__ */ jsxRuntime.jsx("td", { ...props2, children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex size-[var(--cell-size)] items-center justify-center text-center", children }) });
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
  const defaultClassNames = reactDayPicker.getDefaultClassNames();
  const ref = React19__namespace.useRef(null);
  React19__namespace.useEffect(() => {
    if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);
  return /* @__PURE__ */ jsxRuntime.jsx(
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
        "data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 flex aspect-square h-auto w-full min-w-[var(--cell-size)] flex-col gap-1 font-normal leading-none data-[range-end=true]:rounded-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] [&>span]:text-xs [&>span]:opacity-70",
        defaultClassNames.day,
        className
      ),
      ...props
    }
  );
}
var THEMES = { light: "", dark: ".dark" };
var ChartContext = React19__namespace.createContext(null);
function useChart() {
  const context = React19__namespace.useContext(ChartContext);
  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }
  return context;
}
var ChartContainer = React19__namespace.forwardRef(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = React19__namespace.useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;
  return /* @__PURE__ */ jsxRuntime.jsx(ChartContext.Provider, { value: { config }, children: /* @__PURE__ */ jsxRuntime.jsxs(
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
        /* @__PURE__ */ jsxRuntime.jsx(ChartStyle, { id: chartId, config }),
        /* @__PURE__ */ jsxRuntime.jsx(RechartsPrimitive__namespace.ResponsiveContainer, { children })
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
  return /* @__PURE__ */ jsxRuntime.jsx(
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
var ChartTooltip = RechartsPrimitive__namespace.Tooltip;
var ChartTooltipContent = React19__namespace.forwardRef(
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
    const tooltipLabel = React19__namespace.useMemo(() => {
      if (hideLabel || !payload?.length) {
        return null;
      }
      const [item] = payload;
      const key = `${labelKey || item?.dataKey || item?.name || "value"}`;
      const itemConfig = getPayloadConfigFromPayload(config, item, key);
      const value = !labelKey && typeof label === "string" ? config[label]?.label || label : itemConfig?.label;
      if (labelFormatter) {
        return /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn("font-medium", labelClassName), children: labelFormatter(value, payload) });
      }
      if (!value) {
        return null;
      }
      return /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn("font-medium", labelClassName), children: value });
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
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        ref,
        className: cn(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border bg-background px-2.5 py-1.5 text-xs shadow-sm",
          className
        ),
        children: [
          !nestLabel ? tooltipLabel : null,
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "grid gap-1.5", children: payload.filter((item) => item.type !== "none").map((item, index) => {
            const key = `${nameKey || item.name || item.dataKey || "value"}`;
            const itemConfig = getPayloadConfigFromPayload(config, item, key);
            const indicatorColor = color || item.payload.fill || item.color;
            return /* @__PURE__ */ jsxRuntime.jsx(
              "div",
              {
                className: cn(
                  "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                  indicator === "dot" && "items-center"
                ),
                children: formatter && item?.value !== void 0 && item.name ? formatter(item.value, item.name, item, index, item.payload) : /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
                  itemConfig?.icon ? /* @__PURE__ */ jsxRuntime.jsx(itemConfig.icon, {}) : !hideIndicator && /* @__PURE__ */ jsxRuntime.jsx(
                    "div",
                    {
                      className: cn(
                        "shrink-0 rounded-[2px] border-[var(--color-border)] bg-[var(--color-bg)]",
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
                  /* @__PURE__ */ jsxRuntime.jsxs(
                    "div",
                    {
                      className: cn(
                        "flex flex-1 justify-between leading-none",
                        nestLabel ? "items-end" : "items-center"
                      ),
                      children: [
                        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "grid gap-1.5", children: [
                          nestLabel ? tooltipLabel : null,
                          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-muted-foreground", children: itemConfig?.label || item.name })
                        ] }),
                        item.value && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "font-mono font-medium tabular-nums text-foreground", children: item.value.toLocaleString() })
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
var ChartLegend = RechartsPrimitive__namespace.Legend;
var ChartLegendContent = React19__namespace.forwardRef(
  ({ className, hideIcon = false, payload, verticalAlign = "bottom", nameKey }, ref) => {
    const { config } = useChart();
    if (!payload?.length) {
      return null;
    }
    return /* @__PURE__ */ jsxRuntime.jsx(
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
          return /* @__PURE__ */ jsxRuntime.jsxs(
            "div",
            {
              className: cn(
                "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"
              ),
              children: [
                itemConfig?.icon && !hideIcon ? /* @__PURE__ */ jsxRuntime.jsx(itemConfig.icon, {}) : /* @__PURE__ */ jsxRuntime.jsx(
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
var Accordion = AccordionPrimitive__namespace.Root;
var AccordionItem = React19__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  AccordionPrimitive__namespace.Item,
  {
    ref,
    className: cn("border-b", className),
    ...props
  }
));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = React19__namespace.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(AccordionPrimitive__namespace.Header, { className: "flex", children: /* @__PURE__ */ jsxRuntime.jsxs(
  AccordionPrimitive__namespace.Trigger,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
    ]
  }
) }));
AccordionTrigger.displayName = AccordionPrimitive__namespace.Trigger.displayName;
var AccordionContent = React19__namespace.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  AccordionPrimitive__namespace.Content,
  {
    ref,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = AccordionPrimitive__namespace.Content.displayName;
var Collapsible = CollapsiblePrimitive__namespace.Root;
var CollapsibleTrigger2 = CollapsiblePrimitive__namespace.CollapsibleTrigger;
var CollapsibleContent2 = CollapsiblePrimitive__namespace.CollapsibleContent;
var ScrollArea = React19__namespace.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  ScrollAreaPrimitive__namespace.Root,
  {
    ref,
    className: cn("relative overflow-hidden", className),
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(ScrollAreaPrimitive__namespace.Viewport, { className: "h-full w-full rounded-[inherit]", children }),
      /* @__PURE__ */ jsxRuntime.jsx(ScrollBar, {}),
      /* @__PURE__ */ jsxRuntime.jsx(ScrollAreaPrimitive__namespace.Corner, {})
    ]
  }
));
ScrollArea.displayName = ScrollAreaPrimitive__namespace.Root.displayName;
var ScrollBar = React19__namespace.forwardRef(({ className, orientation = "vertical", ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  ScrollAreaPrimitive__namespace.ScrollAreaScrollbar,
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
    children: /* @__PURE__ */ jsxRuntime.jsx(ScrollAreaPrimitive__namespace.ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-border" })
  }
));
ScrollBar.displayName = ScrollAreaPrimitive__namespace.ScrollAreaScrollbar.displayName;
var toggleVariants = classVarianceAuthority.cva(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-border bg-background hover:bg-accent hover:text-accent-foreground"
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
var Toggle = React19__namespace.forwardRef(({ className, variant, size, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  TogglePrimitive__namespace.Root,
  {
    ref,
    className: cn(toggleVariants({ variant, size, className })),
    ...props
  }
));
Toggle.displayName = TogglePrimitive__namespace.Root.displayName;
var ToggleGroupContext = React19__namespace.createContext({
  size: "default",
  variant: "default"
});
var ToggleGroup = React19__namespace.forwardRef(({ className, variant, size, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  ToggleGroupPrimitive__namespace.Root,
  {
    ref,
    className: cn("flex items-center justify-center gap-1", className),
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(ToggleGroupContext.Provider, { value: { variant, size }, children })
  }
));
ToggleGroup.displayName = ToggleGroupPrimitive__namespace.Root.displayName;
var ToggleGroupItem = React19__namespace.forwardRef(({ className, children, variant, size, ...props }, ref) => {
  const context = React19__namespace.useContext(ToggleGroupContext);
  return /* @__PURE__ */ jsxRuntime.jsx(
    ToggleGroupPrimitive__namespace.Item,
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
ToggleGroupItem.displayName = ToggleGroupPrimitive__namespace.Item.displayName;
var ResizablePanelGroup = ({
  className,
  ...props
}) => /* @__PURE__ */ jsxRuntime.jsx(
  reactResizablePanels.Group,
  {
    className: cn(
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
      className
    ),
    ...props
  }
);
var ResizablePanel = reactResizablePanels.Panel;
var ResizableHandle = ({
  withHandle,
  className,
  ...props
}) => /* @__PURE__ */ jsxRuntime.jsx(
  reactResizablePanels.Separator,
  {
    className: cn(
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
      className
    ),
    ...props,
    children: withHandle && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border", children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.GripVertical, { className: "h-2.5 w-2.5" }) })
  }
);
var AspectRatio = AspectRatioPrimitive__namespace.Root;

// src/components/ui/design-tokens-css.ts
var TOKENS_CSS = '/* ============================================================\n   tokens.css \u2014 Go\u30B7\u30EA\u30FC\u30BA \u30C7\u30B6\u30A4\u30F3\u30C8\u30FC\u30AF\u30F3\n   \u7D14\u7C8B\u306ACSS\u5909\u6570\u5B9A\u7FA9\u306E\u307F\u3002@layer/@apply/@tailwind \u306F\u542B\u307E\u306A\u3044\u3002\n   Tailwind v3/v4 \u3069\u3061\u3089\u3068\u3082\u4E92\u63DB\u3002\n   \u5404Go\u306E layout.tsx \u3067\u6700\u521D\u306B import \u3059\u308B\u3053\u3068\u3002\n   ============================================================ */\n\n:root {\n  /* ============================================\n     Primitive Tokens \u2014 \u751F\u306E\u5024\u3002\u5909\u66F4\u306F\u5168Go\u306B\u5F71\u97FF\u3002\n     ============================================ */\n\n  /* Radius */\n  --radius-sm: 3px;\n  --radius-md: 4px;\n  --radius-lg: 6px;\n  --radius-full: 9999px;\n\n  /* Space (4px grid) */\n  --space-1: 4px;\n  --space-2: 8px;\n  --space-3: 12px;\n  --space-4: 16px;\n  --space-5: 20px;\n  --space-6: 24px;\n  --space-8: 32px;\n  --space-10: 40px;\n\n  /* Typography */\n  --font-sans: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;\n  --text-xs: 12px;\n  --text-sm: 14px;\n  --text-base: 16px;\n  --text-lg: 18px;\n  --text-xl: 20px;\n  --text-2xl: 24px;\n  --text-3xl: 32px;\n  --text-4xl: 40px;\n  --font-weight-regular: 400;\n  --font-weight-medium: 500;\n  --font-weight-semibold: 600;\n  --font-weight-bold: 700;\n\n  /* Animation */\n  --duration-fast: 150ms;\n  --duration-base: 200ms;\n  --duration-slow: 300ms;\n  --easing-default: cubic-bezier(0.4, 0, 0.2, 1);\n  --easing-in: cubic-bezier(0.4, 0, 1, 1);\n  --easing-out: cubic-bezier(0, 0, 0.2, 1);\n\n  /* ============================================\n     Semantic Tokens \u2014 Light Mode\n     ============================================ */\n\n  /* Backgrounds\n     \u54F2\u5B66: \u30B5\u30FC\u30D5\u30A7\u30B9\u306F\u9ED2\u5B50\u3001\u30B3\u30F3\u30C6\u30F3\u30C4\u304C\u4E3B\u5F79\u3002\n     \u9818\u57DF\u306E\u533A\u5207\u308A\u306F whitespace \u3068 border \u306E\u307F\u3002\u80CC\u666F\u8272\u3067\u4E3B\u5F35\u3057\u306A\u3044\u3002\n     \u4F8B\u5916\u7684\u306B surface-subtle \u306F kanban\u5217\u30FB\u30B0\u30EB\u30FC\u30D4\u30F3\u30B0\u7B49\u306E"sunken"\u7528\u9014\u306E\u307F\u4F7F\u7528\u3002 */\n  --color-background: #ffffff;\n  --color-surface: #ffffff;\n  --color-surface-subtle: #f7f8f9;   /* sunken \u4F8B\u5916\u7528 \u2014 \u660E\u78BA\u306A\u76EE\u7684\u304C\u3042\u308B\u6642\u306E\u307F */\n  --color-surface-elevated: #ffffff;\n\n  /* Text (WCAG AA\u4EE5\u4E0A\u3092\u62C5\u4FDD) */\n  --color-text-primary: #172b4d;   /* contrast vs #fff: 12.6:1 */\n  --color-text-secondary: #6b778c; /* contrast vs #fff:  5.0:1 */\n  --color-text-subtle: #8993a4;    /* contrast vs #fff:  3.7:1 \u2014 decorative\u7528\u9014\u306E\u307F */\n  --color-text-disabled: #a5adba;\n\n  /* Borders */\n  --color-border-subtle: #ebecf0;\n  --color-border-default: #dfe1e6;\n  --color-border-strong: #c1c7d0;\n\n  /* Primary \u2014 \u5404Go\u306F\u3053\u3053\u3060\u3051\u4E0A\u66F8\u304D\u3059\u308C\u3070OK */\n  --color-primary: #0052cc;\n  --color-primary-hover: #0747a6;\n  --color-primary-text: #ffffff;\n\n  /* Status */\n  --color-success: #00875a;\n  --color-success-subtle: #e3fcef;\n  --color-warning: #ff8b00;\n  --color-warning-subtle: #fffae6;\n  --color-danger: #de350b;\n  --color-danger-subtle: #ffebe6;\n  --color-info: #0052cc;\n  --color-info-subtle: #deebff;\n\n  /* Shadows */\n  --shadow-sm: 0 1px 2px rgba(9, 30, 66, 0.08);\n  --shadow-md: 0 4px 8px rgba(9, 30, 66, 0.08);\n  --shadow-lg: 0 8px 16px rgba(9, 30, 66, 0.1);\n\n  /* ============================================\n     Sidebar Tokens (HSL\u5F62\u5F0F \u2014 shadcn sidebar.tsx \u304C\n     hsl(var(--sidebar-xxx)) \u3067\u53C2\u7167\u3059\u308B\u305F\u3081\u7DAD\u6301)\n     ============================================ */\n  --sidebar-background: 0 0% 100%;      /* \u767D \u2014 \u30DC\u30C7\u30A3\u3068\u540C\u3058\u30B5\u30FC\u30D5\u30A7\u30B9 */\n  --sidebar-foreground: 215 25% 30%;    /* #384660 \u2014 \u8996\u8A8D\u6027\u306E\u9AD8\u3044\u30CA\u30D3\u30C6\u30AD\u30B9\u30C8 */\n  --sidebar-primary: 215 25% 14%;       /* #1c2535 \u2014 \u30A2\u30A4\u30B3\u30F3\u7B49\u306E\u30C0\u30FC\u30AF */\n  --sidebar-primary-foreground: 0 0% 98%;\n  --sidebar-accent: 220 13% 95%;        /* #eef0f4 \u2014 \u767D\u80CC\u666F\u4E0A\u306E subtle hover */\n  --sidebar-accent-foreground: 215 25% 14%; /* #1c2535 \u2014 \u30B3\u30F3\u30C8\u30E9\u30B9\u30C8\u78BA\u4FDD */\n  --sidebar-border: 220 13% 91%;        /* #e4e6eb \u2014 sidebar\u53F3\u67A0 border */\n  --sidebar-ring: 218 100% 40%;         /* #0052cc \u2014 \u30D5\u30A9\u30FC\u30AB\u30B9\u30EA\u30F3\u30B0 */\n}\n\n/* ============================================\n   Dark Mode Overrides\n   \u30D7\u30EA\u30DF\u30C6\u30A3\u30D6\uFF08radius/space/font\uFF09\u306F\u5909\u66F4\u4E0D\u8981\u3002\n   \u8272\u7CFB\u30C8\u30FC\u30AF\u30F3\u306E\u307F\u4E0A\u66F8\u304D\u3002WCAG AA\u4EE5\u4E0A\u3092\u7DAD\u6301\u3002\n   ============================================ */\n.dark {\n  /* Backgrounds */\n  --color-background: #0f1117;       /* \u30D9\u30FC\u30B9\u80CC\u666F */\n  --color-surface: #1a1d27;          /* \u30AB\u30FC\u30C9\u7B49\u306E\u9762 */\n  --color-surface-subtle: #252836;   /* \u30B5\u30D6\u9762\uFF08\u30B5\u30A4\u30C9\u30D0\u30FC\u7B49\uFF09 */\n  --color-surface-elevated: #1e2130; /* \u30E2\u30FC\u30C0\u30EB\u7B49\u306E\u6D6E\u304D\u9762 */\n\n  /* Text (WCAG AA\u4EE5\u4E0A\u3092\u62C5\u4FDD) */\n  --color-text-primary: #f0f2f5;    /* contrast vs #0f1117: 14.2:1 */\n  --color-text-secondary: #a8b2c1;  /* contrast vs #0f1117:  7.3:1 */\n  --color-text-subtle: #7a8494;     /* contrast vs #0f1117:  4.6:1 */\n  --color-text-disabled: #4e5668;\n\n  /* Borders */\n  --color-border-subtle: #252836;\n  --color-border-default: #2d3244;\n  --color-border-strong: #3d4460;\n\n  /* Primary \u2014 \u30C6\u30AD\u30B9\u30C8\u8272\u306F\u30C0\u30FC\u30AF\u3067\u3082\u767D\u3067\u7D71\u4E00 */\n  --color-primary-text: #ffffff;\n\n  /* Status subtle (dark) */\n  --color-success-subtle: #0a2e1a;\n  --color-warning-subtle: #2e1f00;\n  --color-danger-subtle: #2e0d00;\n  --color-info-subtle: #001a4d;\n\n  /* Shadows \u2014 \u30C0\u30FC\u30AF\u306F\u900F\u660E\u5EA6\u3092\u4E0A\u3052\u3066\u8996\u8A8D\u6027\u3092\u78BA\u4FDD */\n  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.3);\n  --shadow-md: 0 4px 8px rgba(0, 0, 0, 0.3);\n  --shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.4);\n\n  /* Sidebar \u2014 Dark */\n  --sidebar-background: 222 18% 11%;    /* #161d2d */\n  --sidebar-foreground: 215 20% 75%;    /* #abb5c8 */\n  --sidebar-primary: 218 100% 70%;      /* #6699ff */\n  --sidebar-primary-foreground: 0 0% 100%;\n  --sidebar-accent: 220 18% 18%;        /* #242e42 \u2014 dark hover */\n  --sidebar-accent-foreground: 215 20% 92%; /* #dfe3ec */\n  --sidebar-border: 220 18% 18%;        /* #242e42 */\n  --sidebar-ring: 218 100% 60%;         /* #3380ff */\n}\n\n/* ============================================================\n   Sidebar \u2014 \u30A2\u30AF\u30C6\u30A3\u30D6\u30A2\u30A4\u30C6\u30E0\u30B9\u30BF\u30A4\u30EB\n   Tailwind \u30B9\u30AD\u30E3\u30F3\u306B\u4F9D\u5B58\u305B\u305A\u5E38\u306B\u6CE8\u5165\u3055\u308C\u308B\u3002\n   ============================================================ */\n[data-sidebar="menu-button"][data-active="true"],\n[data-sidebar="menu-sub-button"][data-active="true"] {\n  background-color: color-mix(in srgb, var(--color-primary) 12%, transparent);\n  color: var(--color-primary);\n  font-weight: 500;\n}\n';
var GLOBALS_CSS = "/*\n * globals.css \u2014 shadcn/ui CSS\u5909\u6570\u3068\u306E\u6A4B\u6E21\u3057\n *\n * tokens.css \u306E\u610F\u5473\u7684\u30C8\u30FC\u30AF\u30F3\uFF08--color-xxx\uFF09\u3092\n * shadcn/ui \u304C\u671F\u5F85\u3059\u308B\u5909\u6570\u540D\uFF08--background \u7B49\uFF09\u306B\u30DE\u30C3\u30D4\u30F3\u30B0\u3059\u308B\u3002\n *\n * \u5404Go\u3067\u306E\u4F7F\u3044\u65B9:\n *   import '@takaki/go-design-system/tokens.css'  // \u2190 tokens + Tailwind directives\n *   import '@takaki/go-design-system/globals.css' // \u2190 shadcn bridge\uFF08\u4EFB\u610F\uFF09\n *\n * tokens.css \u306E .dark \u304C --color-xxx \u3092\u4E0A\u66F8\u304D\u3059\u308B\u305F\u3081\u3001\n * globals.css \u306E .dark \u3082\u540C\u3058\u30DE\u30C3\u30D4\u30F3\u30B0\u3092\u66F8\u304F\u3060\u3051\u3067\u30C1\u30A7\u30FC\u30F3\u304C\u6210\u7ACB\u3059\u308B\u3002\n */\n\n:root {\n  /* --- Layout --- */\n  --background: var(--color-background);\n  --foreground: var(--color-text-primary);\n\n  /* --- Card / Popover --- */\n  --card: var(--color-surface);\n  --card-foreground: var(--color-text-primary);\n  --popover: var(--color-surface-elevated);\n  --popover-foreground: var(--color-text-primary);\n\n  /* --- Brand --- */\n  --primary: var(--color-primary);\n  --primary-foreground: var(--color-primary-text);\n\n  /* --- Neutral --- */\n  --secondary: var(--color-surface-subtle);\n  --secondary-foreground: var(--color-text-primary);\n  --muted: var(--color-surface-subtle);\n  --muted-foreground: var(--color-text-secondary);\n  --accent: var(--color-surface-subtle);\n  --accent-foreground: var(--color-text-primary);\n\n  /* --- Destructive --- */\n  --destructive: var(--color-danger);\n  --destructive-foreground: #ffffff;\n\n  /* --- Status --- */\n  --warning: var(--color-warning);\n  --warning-subtle: var(--color-warning-subtle);\n  --success: var(--color-success);\n  --success-subtle: var(--color-success-subtle);\n  --danger: var(--color-danger);\n  --danger-subtle: var(--color-danger-subtle);\n  --info: var(--color-info);\n  --info-subtle: var(--color-info-subtle);\n\n  /* --- Form / Interactive --- */\n  --border: var(--color-border-default);\n  --input: var(--color-border-default);\n  --ring: var(--color-primary);\n\n  /* --- Border radius alias (used by shadcn internals) --- */\n  --radius: var(--radius-md);\n}\n\n.dark {\n  /* tokens.css \u306E .dark \u304C --color-xxx \u3092\u6697\u8272\u5024\u306B\u4E0A\u66F8\u304D\u6E08\u307F\u306E\u305F\u3081\u3001\n     \u3053\u306E\u30DE\u30C3\u30D4\u30F3\u30B0\u5B9A\u7FA9\u306F\u30E9\u30A4\u30C8\u3068\u540C\u3058\u3067\u6B63\u3057\u304F\u6A5F\u80FD\u3059\u308B\u3002 */\n  --background: var(--color-background);\n  --foreground: var(--color-text-primary);\n\n  --card: var(--color-surface);\n  --card-foreground: var(--color-text-primary);\n  --popover: var(--color-surface-elevated);\n  --popover-foreground: var(--color-text-primary);\n\n  --primary: var(--color-primary);\n  --primary-foreground: var(--color-primary-text);\n\n  --secondary: var(--color-surface-subtle);\n  --secondary-foreground: var(--color-text-primary);\n  --muted: var(--color-surface-subtle);\n  --muted-foreground: var(--color-text-secondary);\n  --accent: var(--color-surface-subtle);\n  --accent-foreground: var(--color-text-primary);\n\n  --destructive: var(--color-danger);\n  --destructive-foreground: #ffffff;\n\n  --warning: var(--color-warning);\n  --warning-subtle: var(--color-warning-subtle);\n  --success: var(--color-success);\n  --success-subtle: var(--color-success-subtle);\n  --danger: var(--color-danger);\n  --danger-subtle: var(--color-danger-subtle);\n  --info: var(--color-info);\n  --info-subtle: var(--color-info-subtle);\n\n  --border: var(--color-border-default);\n  --input: var(--color-border-default);\n  --ring: var(--color-primary);\n\n  --radius: var(--radius-md);\n}\n";
function DesignTokens({ primaryColor, primaryColorHover }) {
  const overrideCSS = primaryColor ? `:root{--color-primary:${primaryColor};--color-primary-hover:${primaryColorHover ?? primaryColor};}` : "";
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx("style", { dangerouslySetInnerHTML: { __html: TOKENS_CSS } }),
    /* @__PURE__ */ jsxRuntime.jsx("style", { dangerouslySetInnerHTML: { __html: GLOBALS_CSS } }),
    overrideCSS && /* @__PURE__ */ jsxRuntime.jsx("style", { dangerouslySetInnerHTML: { __html: overrideCSS } })
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
  return /* @__PURE__ */ jsxRuntime.jsx(
    lucideReact.Loader2,
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
    icon: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Info, { className: "size-4 shrink-0" })
  },
  info: {
    container: "bg-[color:var(--color-info-subtle)] border-[color:var(--color-info)] text-foreground",
    icon: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Info, { className: "size-4 shrink-0 text-[color:var(--color-info)]" })
  },
  success: {
    container: "bg-[color:var(--color-success-subtle)] border-[color:var(--color-success)] text-foreground",
    icon: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.CheckCircle2, { className: "size-4 shrink-0 text-[color:var(--color-success)]" })
  },
  warning: {
    container: "bg-[color:var(--color-warning-subtle)] border-[color:var(--color-warning)] text-foreground",
    icon: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.AlertTriangle, { className: "size-4 shrink-0 text-[color:var(--color-warning)]" })
  },
  danger: {
    container: "bg-[color:var(--color-danger-subtle)] border-[color:var(--color-danger)] text-foreground",
    icon: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.AlertCircle, { className: "size-4 shrink-0 text-[color:var(--color-danger)]" })
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
  const [visible, setVisible] = React19__namespace.useState(true);
  if (!visible) return null;
  const config = variantConfig[variant];
  function handleDismiss() {
    setVisible(false);
    onDismiss?.();
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(
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
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "mt-0.5", children: config.icon }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-1 flex-col gap-1", children: [
          title && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm font-medium leading-tight", children: title }),
          description && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm text-muted-foreground", children: description }),
          children,
          action && /* @__PURE__ */ jsxRuntime.jsx(
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
        dismissible && /* @__PURE__ */ jsxRuntime.jsx(
          "button",
          {
            type: "button",
            "aria-label": "\u9589\u3058\u308B",
            onClick: handleDismiss,
            className: "ml-auto shrink-0 rounded p-0.5 opacity-70 hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
            children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.X, { className: "size-4" })
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
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      className: cn(
        "flex flex-col items-center justify-center gap-4 py-12 text-center",
        className
      ),
      ...props,
      children: [
        icon && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex size-14 items-center justify-center rounded-full bg-surface-subtle text-muted-foreground", children: icon }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col gap-1", children: [
          /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-base font-semibold text-foreground", children: title }),
          description && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "max-w-sm text-sm text-muted-foreground", children: description })
        ] }),
        (action || secondaryAction) && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-wrap items-center justify-center gap-2", children: [
          action && /* @__PURE__ */ jsxRuntime.jsx(Button, { variant: action.variant ?? "default", onClick: action.onClick, children: action.label }),
          secondaryAction && /* @__PURE__ */ jsxRuntime.jsx(Button, { variant: "outline", onClick: secondaryAction.onClick, children: secondaryAction.label })
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
  const [open, setOpen] = React19__namespace.useState(false);
  function handleSelect(date) {
    onChange?.(date);
    setOpen(false);
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(Popover, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxRuntime.jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsxs(
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
          /* @__PURE__ */ jsxRuntime.jsx(lucideReact.CalendarIcon, { className: "mr-2 size-4" }),
          value ? dateFns.format(value, "yyyy\u5E74M\u6708d\u65E5", { locale: locale.ja }) : placeholder
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntime.jsx(PopoverContent, { className: "w-auto p-0", align: "start", children: /* @__PURE__ */ jsxRuntime.jsx(
      Calendar,
      {
        mode: "single",
        selected: value,
        onSelect: handleSelect,
        disabled: disabledDates,
        fromDate,
        toDate,
        locale: locale.ja,
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
  const [open, setOpen] = React19__namespace.useState(false);
  function formatRange(range) {
    if (!range?.from) return placeholder;
    if (!range.to) return dateFns.format(range.from, "yyyy\u5E74M\u6708d\u65E5", { locale: locale.ja });
    return `${dateFns.format(range.from, "yyyy\u5E74M\u6708d\u65E5", { locale: locale.ja })} \u301C ${dateFns.format(range.to, "M\u6708d\u65E5", { locale: locale.ja })}`;
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(Popover, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxRuntime.jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsxs(
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
          /* @__PURE__ */ jsxRuntime.jsx(lucideReact.CalendarIcon, { className: "mr-2 size-4" }),
          formatRange(value)
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntime.jsx(PopoverContent, { className: "w-auto p-0", align: "start", children: /* @__PURE__ */ jsxRuntime.jsx(
      Calendar,
      {
        mode: "range",
        selected: value,
        onSelect: onChange,
        disabled: disabledDates,
        fromDate,
        toDate,
        locale: locale.ja,
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
  const [editing, setEditing] = React19__namespace.useState(false);
  const [draft, setDraft] = React19__namespace.useState(value);
  const [error, setError] = React19__namespace.useState();
  const inputRef = React19__namespace.useRef(null);
  React19__namespace.useEffect(() => {
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
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn("flex flex-col gap-1", className), children: [
      multiline ? /* @__PURE__ */ jsxRuntime.jsx(
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
      ) : /* @__PURE__ */ jsxRuntime.jsx(
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
      error && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-xs text-destructive", children: error }),
      multiline && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-xs text-muted-foreground", children: "\u2318+Enter \u3067\u4FDD\u5B58\u3001Esc \u3067\u30AD\u30E3\u30F3\u30BB\u30EB" })
    ] });
  }
  return /* @__PURE__ */ jsxRuntime.jsx(
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
      children: value ? renderDisplay ? renderDisplay(value) : /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-foreground", children: value }) : /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-muted-foreground", children: placeholder })
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
  const [previews, setPreviews] = React19__namespace.useState([]);
  const [uploading, setUploading] = React19__namespace.useState(false);
  const [error, setError] = React19__namespace.useState(null);
  const { getRootProps, getInputProps, isDragActive } = reactDropzone.useDropzone({
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
  React19__namespace.useEffect(() => {
    return () => {
      previews.forEach((p) => URL.revokeObjectURL(p.url));
    };
  }, []);
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn("flex flex-col gap-3", className), children: [
    /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        ...getRootProps(),
        className: cn(
          "flex cursor-pointer flex-col items-center justify-center gap-3 rounded-lg border-2 border-dashed px-6 py-10 text-center transition-colors",
          isDragActive ? "border-primary bg-[color:var(--color-primary)]/5" : "border-border hover:border-primary/50 hover:bg-surface-subtle",
          (disabled || uploading) && "cursor-not-allowed opacity-50"
        ),
        children: [
          /* @__PURE__ */ jsxRuntime.jsx("input", { ...getInputProps() }),
          uploading ? /* @__PURE__ */ jsxRuntime.jsx(Spinner, { size: "lg", color: "primary" }) : /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
            /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Upload, { className: "size-8 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col gap-1", children: [
              /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm font-medium text-foreground", children: isDragActive ? "\u3053\u3053\u306B\u30C9\u30ED\u30C3\u30D7" : "\u30AF\u30EA\u30C3\u30AF\u307E\u305F\u306F\u30C9\u30E9\u30C3\u30B0\uFF06\u30C9\u30ED\u30C3\u30D7" }),
              /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-xs text-muted-foreground", children: [
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
    error && /* @__PURE__ */ jsxRuntime.jsx(Alert, { variant: "destructive", children: /* @__PURE__ */ jsxRuntime.jsx(AlertDescription, { children: error }) }),
    previews.length > 0 && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex flex-wrap gap-3", children: previews.map((preview, i) => /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "relative size-24 overflow-hidden rounded-md border border-border", children: [
      preview.type === "image" ? (
        // eslint-disable-next-line @next/next/no-img-element
        /* @__PURE__ */ jsxRuntime.jsx(
          "img",
          {
            src: preview.url,
            alt: preview.file.name,
            className: "size-full object-cover"
          }
        )
      ) : /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex size-full flex-col items-center justify-center gap-1 bg-surface-subtle", children: [
        /* @__PURE__ */ jsxRuntime.jsx(lucideReact.FileVideo, { className: "size-6 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "max-w-full truncate px-1 text-xs text-muted-foreground", children: preview.file.name })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx(
        "button",
        {
          type: "button",
          "aria-label": "\u524A\u9664",
          onClick: () => removePreview(i),
          className: "absolute right-1 top-1 flex size-5 items-center justify-center rounded-full bg-foreground/70 text-background hover:bg-foreground",
          children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.X, { className: "size-3" })
        }
      )
    ] }, i)) })
  ] });
}
function useControlledState(controlledValue, defaultValue) {
  const [internalValue, setInternalValue] = React19__namespace.useState(defaultValue);
  const value = controlledValue !== void 0 ? controlledValue : internalValue;
  const setValue = React19__namespace.useCallback(
    (next) => {
      if (controlledValue === void 0) {
        setInternalValue(next);
      }
    },
    [controlledValue]
  );
  return [value, setValue];
}
var NumberInput = React19__namespace.forwardRef(
  function NumberInput2({
    value: controlledValue,
    defaultValue = 0,
    min = -Infinity,
    max = Infinity,
    step = 1,
    disabled = false,
    className,
    onChange
  }, ref) {
    const [value, setInternalValue] = useControlledState(controlledValue, defaultValue);
    function update(next) {
      const clamped = Math.min(max, Math.max(min, next));
      setInternalValue(clamped);
      onChange?.(clamped);
    }
    function handleInputChange(e) {
      const parsed = parseFloat(e.target.value);
      if (!isNaN(parsed)) update(parsed);
    }
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        className: cn(
          "inline-flex h-9 items-center rounded-md border border-border bg-background",
          disabled && "cursor-not-allowed opacity-50",
          className
        ),
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            "button",
            {
              type: "button",
              "aria-label": "\u6E1B\u3089\u3059",
              disabled: disabled || value <= min,
              onClick: () => update(value - step),
              className: "flex h-full w-8 items-center justify-center text-muted-foreground transition-colors hover:text-foreground disabled:pointer-events-none",
              children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Minus, { className: "size-3.5" })
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(
            "input",
            {
              ref,
              type: "number",
              value,
              min,
              max,
              step,
              disabled,
              onChange: handleInputChange,
              className: "w-12 bg-transparent text-center text-sm text-foreground focus:outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(
            "button",
            {
              type: "button",
              "aria-label": "\u5897\u3084\u3059",
              disabled: disabled || value >= max,
              onClick: () => update(value + step),
              className: "flex h-full w-8 items-center justify-center text-muted-foreground transition-colors hover:text-foreground disabled:pointer-events-none",
              children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Plus, { className: "size-3.5" })
            }
          )
        ]
      }
    );
  }
);
NumberInput.displayName = "NumberInput";
var SearchInput = React19__namespace.forwardRef(
  function SearchInput2({
    value: controlledValue,
    defaultValue = "",
    onValueChange,
    onClear,
    className,
    containerClassName,
    ...props
  }, ref) {
    const [value, setInternalValue] = useControlledState(controlledValue, defaultValue);
    function handleChange(e) {
      setInternalValue(e.target.value);
      onValueChange?.(e.target.value);
    }
    function handleClear() {
      setInternalValue("");
      onValueChange?.("");
      onClear?.();
    }
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn("relative flex items-center", containerClassName), children: [
      /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Search, { className: "pointer-events-none absolute left-2.5 size-4 text-muted-foreground" }),
      /* @__PURE__ */ jsxRuntime.jsx(
        "input",
        {
          ref,
          type: "search",
          value,
          onChange: handleChange,
          className: cn(
            "flex h-9 w-full rounded-md border border-border bg-background py-1 pl-8 pr-8 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 [&::-webkit-search-cancel-button]:hidden",
            className
          ),
          ...props
        }
      ),
      value && /* @__PURE__ */ jsxRuntime.jsx(
        "button",
        {
          type: "button",
          "aria-label": "\u30AF\u30EA\u30A2",
          onClick: handleClear,
          className: "absolute right-2 flex items-center justify-center text-muted-foreground hover:text-foreground",
          children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.X, { className: "size-3.5" })
        }
      )
    ] });
  }
);
SearchInput.displayName = "SearchInput";
function MultiSelect({
  options,
  value: controlledValue,
  defaultValue = [],
  placeholder = "\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044",
  disabled = false,
  className,
  onChange
}) {
  const [selected, setInternalSelected] = useControlledState(controlledValue, defaultValue);
  const [open, setOpen] = React19__namespace.useState(false);
  const containerRef = React19__namespace.useRef(null);
  function toggle(optionValue) {
    const next = selected.includes(optionValue) ? selected.filter((v) => v !== optionValue) : [...selected, optionValue];
    setInternalSelected(next);
    onChange?.(next);
  }
  function remove(optionValue, e) {
    e.stopPropagation();
    toggle(optionValue);
  }
  React19__namespace.useEffect(() => {
    function onClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);
  const selectedOptions = options.filter((o) => selected.includes(o.value));
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { ref: containerRef, className: cn("relative", className), children: [
    /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        role: "combobox",
        "aria-expanded": open,
        "aria-haspopup": "listbox",
        tabIndex: disabled ? -1 : 0,
        onClick: () => !disabled && setOpen((v) => !v),
        onKeyDown: (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            !disabled && setOpen((v) => !v);
          }
          if (e.key === "Escape") setOpen(false);
        },
        className: cn(
          "flex min-h-9 w-full cursor-pointer flex-wrap items-center gap-1 rounded-md border border-border bg-background px-2 py-1 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1",
          disabled && "cursor-not-allowed opacity-50"
        ),
        children: [
          selectedOptions.length === 0 ? /* @__PURE__ */ jsxRuntime.jsx("span", { className: "py-0.5 text-muted-foreground", children: placeholder }) : selectedOptions.map((o) => /* @__PURE__ */ jsxRuntime.jsxs(
            "span",
            {
              className: "inline-flex items-center gap-1 rounded bg-surface-subtle px-1.5 py-0.5 text-xs font-medium text-foreground",
              children: [
                o.label,
                /* @__PURE__ */ jsxRuntime.jsx(
                  "button",
                  {
                    type: "button",
                    "aria-label": `${o.label}\u3092\u524A\u9664`,
                    onClick: (e) => remove(o.value, e),
                    className: "text-muted-foreground hover:text-foreground",
                    children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.X, { className: "size-3" })
                  }
                )
              ]
            },
            o.value
          )),
          /* @__PURE__ */ jsxRuntime.jsx(
            lucideReact.ChevronDown,
            {
              className: cn(
                "ml-auto size-4 shrink-0 text-muted-foreground transition-transform",
                open && "rotate-180"
              )
            }
          )
        ]
      }
    ),
    open && /* @__PURE__ */ jsxRuntime.jsxs(
      "ul",
      {
        role: "listbox",
        "aria-multiselectable": "true",
        className: "absolute z-50 mt-1 max-h-56 w-full overflow-auto rounded-md border border-border bg-background py-1 shadow-md",
        children: [
          options.map((o) => {
            const isSelected = selected.includes(o.value);
            return /* @__PURE__ */ jsxRuntime.jsxs(
              "li",
              {
                role: "option",
                "aria-selected": isSelected,
                onClick: () => toggle(o.value),
                className: cn(
                  "flex cursor-pointer items-center gap-2 px-3 py-1.5 text-sm hover:bg-surface-subtle",
                  isSelected && "font-medium text-primary"
                ),
                children: [
                  /* @__PURE__ */ jsxRuntime.jsx(
                    "span",
                    {
                      className: cn(
                        "flex size-3.5 items-center justify-center rounded-sm border border-border",
                        isSelected && "border-primary bg-primary"
                      ),
                      children: isSelected && /* @__PURE__ */ jsxRuntime.jsx("svg", { viewBox: "0 0 10 10", className: "size-2.5 text-white", fill: "currentColor", children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M1.5 5l2.5 2.5 4.5-4.5", stroke: "currentColor", strokeWidth: "1.5", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }) })
                    }
                  ),
                  o.label
                ]
              },
              o.value
            );
          }),
          options.length === 0 && /* @__PURE__ */ jsxRuntime.jsx("li", { className: "px-3 py-2 text-sm text-muted-foreground", children: "\u9078\u629E\u80A2\u304C\u3042\u308A\u307E\u305B\u3093" })
        ]
      }
    )
  ] });
}
MultiSelect.displayName = "MultiSelect";
function ConfirmDialog({
  trigger,
  title,
  description,
  confirmLabel = "\u78BA\u8A8D",
  cancelLabel = "\u30AD\u30E3\u30F3\u30BB\u30EB",
  variant = "default",
  onConfirm
}) {
  const [open, setOpen] = React19__namespace.useState(false);
  const [loading, setLoading] = React19__namespace.useState(false);
  async function handleConfirm(e) {
    e.preventDefault();
    setLoading(true);
    try {
      await onConfirm();
      setOpen(false);
    } finally {
      setLoading(false);
    }
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(AlertDialog, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxRuntime.jsx(AlertDialogTrigger, { asChild: true, children: trigger }),
    /* @__PURE__ */ jsxRuntime.jsxs(AlertDialogContent, { children: [
      /* @__PURE__ */ jsxRuntime.jsxs(AlertDialogHeader, { children: [
        /* @__PURE__ */ jsxRuntime.jsx(AlertDialogTitle, { children: title }),
        description && /* @__PURE__ */ jsxRuntime.jsx(AlertDialogDescription, { children: description })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsxs(AlertDialogFooter, { children: [
        /* @__PURE__ */ jsxRuntime.jsx(AlertDialogCancel, { disabled: loading, children: cancelLabel }),
        /* @__PURE__ */ jsxRuntime.jsx(
          AlertDialogAction,
          {
            className: cn(
              variant === "destructive" && buttonVariants({ variant: "destructive" })
            ),
            disabled: loading,
            onClick: handleConfirm,
            children: loading ? /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntime.jsx(Spinner, { size: "sm" }),
              confirmLabel
            ] }) : confirmLabel
          }
        )
      ] })
    ] })
  ] });
}
ConfirmDialog.displayName = "ConfirmDialog";
function LoadingOverlay({
  loading,
  children,
  label = "\u8AAD\u307F\u8FBC\u307F\u4E2D",
  className
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn("relative", className), children: [
    children,
    loading && /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        className: "absolute inset-0 z-10 flex flex-col items-center justify-center gap-2 rounded-[inherit] bg-background/70 backdrop-blur-[1px]",
        "aria-busy": "true",
        "aria-label": label,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Spinner, { size: "md", color: "primary" }),
          label && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-xs text-muted-foreground", children: label })
        ]
      }
    )
  ] });
}
LoadingOverlay.displayName = "LoadingOverlay";
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
  return /* @__PURE__ */ jsxRuntime.jsx(
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
  return /* @__PURE__ */ jsxRuntime.jsx(
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
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn("flex flex-col gap-1", className), ...props, children: [
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-baseline gap-1", children: [
      /* @__PURE__ */ jsxRuntime.jsx("span", { className: cn(s.value, "font-bold tabular-nums text-foreground"), children: value }),
      unit && /* @__PURE__ */ jsxRuntime.jsx("span", { className: cn(s.unit, "text-muted-foreground"), children: unit })
    ] }),
    trend && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn("flex items-center gap-1", trendColor), children: [
      trend.direction === "up" && /* @__PURE__ */ jsxRuntime.jsx(lucideReact.TrendingUp, { className: "size-3.5" }),
      trend.direction === "down" && /* @__PURE__ */ jsxRuntime.jsx(lucideReact.TrendingDown, { className: "size-3.5" }),
      /* @__PURE__ */ jsxRuntime.jsx("span", { className: s.trend, children: trend.label })
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
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "relative inline-flex items-center justify-center", style: { width: px, height: px }, children: [
    /* @__PURE__ */ jsxRuntime.jsxs(
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
          /* @__PURE__ */ jsxRuntime.jsx(
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
          /* @__PURE__ */ jsxRuntime.jsx(
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
    showLabel && /* @__PURE__ */ jsxRuntime.jsxs(
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
    return /* @__PURE__ */ jsxRuntime.jsx("ol", { className: cn("flex flex-col", className), children: resolvedSteps.map((step, i) => /* @__PURE__ */ jsxRuntime.jsxs("li", { className: "flex gap-4", children: [
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ jsxRuntime.jsx(StepIndicator, { status: step.status, index: i }),
        i < resolvedSteps.length - 1 && /* @__PURE__ */ jsxRuntime.jsx(
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
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "pb-6 pt-0.5", children: /* @__PURE__ */ jsxRuntime.jsx(StepLabel, { step }) })
    ] }, i)) });
  }
  return /* @__PURE__ */ jsxRuntime.jsx("ol", { className: cn("flex w-full items-start", className), children: resolvedSteps.map((step, i) => /* @__PURE__ */ jsxRuntime.jsxs("li", { className: "flex flex-1 items-center", children: [
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntime.jsx(StepIndicator, { status: step.status, index: i }),
      /* @__PURE__ */ jsxRuntime.jsx(StepLabel, { step, centered: true })
    ] }),
    i < resolvedSteps.length - 1 && /* @__PURE__ */ jsxRuntime.jsx(
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
    return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground", children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Check, { className: "size-4", strokeWidth: 2.5 }) });
  }
  if (status === "current") {
    return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground ring-4 ring-primary/20", children: /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-sm font-semibold", children: index + 1 }) });
  }
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex size-8 shrink-0 items-center justify-center rounded-full border-2 border-border bg-background text-muted-foreground", children: /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-sm font-semibold", children: index + 1 }) });
}
function StepLabel({ step, centered }) {
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn("flex flex-col gap-0.5", centered && "items-center text-center"), children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      "p",
      {
        className: cn(
          "text-sm font-medium",
          step.status === "upcoming" ? "text-muted-foreground" : "text-foreground"
        ),
        children: step.title
      }
    ),
    step.description && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-xs text-muted-foreground", children: step.description })
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
  return /* @__PURE__ */ jsxRuntime.jsxs(
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
        (title || actions) && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-start justify-between gap-4", children: [
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col gap-1", children: [
            title && /* @__PURE__ */ jsxRuntime.jsx("h2", { className: "text-base font-semibold text-foreground", children: title }),
            description && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm text-muted-foreground", children: description })
          ] }),
          actions && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "shrink-0", children: actions })
        ] }),
        divider && /* @__PURE__ */ jsxRuntime.jsx(Separator2, {}),
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
  return /* @__PURE__ */ jsxRuntime.jsxs(
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
        removable && /* @__PURE__ */ jsxRuntime.jsx(
          "button",
          {
            type: "button",
            "aria-label": "\u524A\u9664",
            onClick: (e) => {
              e.stopPropagation();
              onRemove?.();
            },
            className: "ml-0.5 flex size-3.5 items-center justify-center rounded-full opacity-60 hover:opacity-100",
            children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.X, { className: "size-2.5" })
          }
        )
      ]
    }
  );
}
function TagGroup({ wrap = true, className, children, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
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
function Combobox({
  options,
  value,
  onValueChange,
  placeholder = "\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044",
  searchPlaceholder = "\u691C\u7D22...",
  emptyText = "\u898B\u3064\u304B\u308A\u307E\u305B\u3093",
  disabled,
  className
}) {
  const [open, setOpen] = React19__namespace.useState(false);
  const selected = options.find((opt) => opt.value === value);
  return /* @__PURE__ */ jsxRuntime.jsxs(Popover, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxRuntime.jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsxs(
      Button,
      {
        variant: "outline",
        role: "combobox",
        "aria-expanded": open,
        disabled,
        className: cn("w-full justify-between font-normal", className),
        children: [
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: cn("truncate", !selected && "text-muted-foreground"), children: selected ? selected.label : placeholder }),
          /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronsUpDown, { className: "ml-2 size-4 shrink-0 opacity-50" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntime.jsx(PopoverContent, { className: "w-[var(--radix-popover-trigger-width)] p-0", align: "start", children: /* @__PURE__ */ jsxRuntime.jsxs(Command, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(CommandInput, { placeholder: searchPlaceholder }),
      /* @__PURE__ */ jsxRuntime.jsxs(CommandList, { children: [
        /* @__PURE__ */ jsxRuntime.jsx(CommandEmpty, { children: emptyText }),
        /* @__PURE__ */ jsxRuntime.jsx(CommandGroup, { children: options.map((opt) => /* @__PURE__ */ jsxRuntime.jsxs(
          CommandItem,
          {
            value: opt.value,
            onSelect: (current) => {
              onValueChange?.(current === value ? "" : current);
              setOpen(false);
            },
            children: [
              /* @__PURE__ */ jsxRuntime.jsx(
                lucideReact.Check,
                {
                  className: cn(
                    "mr-2 size-4",
                    value === opt.value ? "opacity-100" : "opacity-0"
                  )
                }
              ),
              opt.label
            ]
          },
          opt.value
        )) })
      ] })
    ] }) })
  ] });
}
var variantDotClass = {
  default: "bg-border",
  success: "bg-[color:var(--color-success)]",
  warning: "bg-[color:var(--color-warning)]",
  error: "bg-destructive"
};
function Timeline({ items, className }) {
  return /* @__PURE__ */ jsxRuntime.jsx("ol", { className: cn("flex flex-col", className), children: items.map((item, i) => /* @__PURE__ */ jsxRuntime.jsxs("li", { className: "relative flex gap-4 pb-6 last:pb-0", children: [
    i < items.length - 1 && /* @__PURE__ */ jsxRuntime.jsx(
      "span",
      {
        className: "absolute left-[11px] top-6 h-full w-px bg-border",
        "aria-hidden": true
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "relative z-10 mt-0.5 flex size-6 shrink-0 items-center justify-center", children: item.icon ? /* @__PURE__ */ jsxRuntime.jsx("span", { className: "flex size-6 items-center justify-center rounded-full border border-border bg-background text-muted-foreground", children: item.icon }) : /* @__PURE__ */ jsxRuntime.jsx(
      "span",
      {
        className: cn(
          "size-2.5 rounded-full",
          variantDotClass[item.variant ?? "default"]
        )
      }
    ) }),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex min-w-0 flex-1 flex-col gap-0.5", children: [
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-wrap items-baseline justify-between gap-x-2", children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-sm font-medium text-foreground", children: item.title }),
        item.timestamp && /* @__PURE__ */ jsxRuntime.jsx("time", { className: "shrink-0 text-xs text-muted-foreground", children: item.timestamp })
      ] }),
      item.description && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm text-muted-foreground", children: item.description })
    ] })
  ] }, item.id ?? i)) });
}
function DndProvider({ items, onReorder, children }) {
  const sensors = core.useSensors(
    core.useSensor(core.PointerSensor),
    core.useSensor(core.KeyboardSensor, {
      coordinateGetter: sortable.sortableKeyboardCoordinates
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
  return /* @__PURE__ */ jsxRuntime.jsx(core.DndContext, { sensors, collisionDetection: core.closestCenter, onDragEnd: handleDragEnd, children: /* @__PURE__ */ jsxRuntime.jsx(sortable.SortableContext, { items, strategy: sortable.verticalListSortingStrategy, children }) });
}
function SortableItem({ id, children, className }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = sortable.useSortable({ id });
  const style = {
    transform: utilities.CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
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
  return /* @__PURE__ */ jsxRuntime.jsx(
    "button",
    {
      type: "button",
      "aria-label": "\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u4E26\u3073\u66FF\u3048",
      className: cn(
        "flex cursor-grab items-center justify-center rounded p-1 text-muted-foreground hover:bg-surface-subtle hover:text-foreground active:cursor-grabbing",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.GripVertical, { className: "size-4" })
    }
  );
}
function ColorDot({ color, size = 8 }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
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
  return /* @__PURE__ */ jsxRuntime.jsx("form", { ...props, children: /* @__PURE__ */ jsxRuntime.jsx(SidebarGroup, { className: "py-0", children: /* @__PURE__ */ jsxRuntime.jsxs(SidebarGroupContent, { className: "relative", children: [
    /* @__PURE__ */ jsxRuntime.jsx(Label2, { htmlFor: "sidebar-search", className: "sr-only", children: "Search" }),
    /* @__PURE__ */ jsxRuntime.jsx(
      SidebarInput,
      {
        id: "sidebar-search",
        placeholder,
        className: "pl-8"
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Search, { className: "pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none opacity-50" })
  ] }) }) });
}
function AppSwitcher({
  currentApp,
  apps,
  onNavigate,
  placement = "top"
}) {
  const current = apps.find((a) => a.name === currentApp) ?? apps[0];
  function handleSelect(url) {
    if (onNavigate) {
      onNavigate(url);
    } else {
      window.location.href = url;
    }
  }
  return /* @__PURE__ */ jsxRuntime.jsx(SidebarMenu, { children: /* @__PURE__ */ jsxRuntime.jsx(SidebarMenuItem, { children: /* @__PURE__ */ jsxRuntime.jsxs(DropdownMenu, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsxs(
      SidebarMenuButton,
      {
        size: "lg",
        className: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground",
        "aria-label": "\u30A2\u30D7\u30EA\u3092\u5207\u308A\u66FF\u3048",
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(ColorDot, { color: current?.color ?? "#888", size: 10 }),
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col gap-0.5 leading-none min-w-0", children: [
            /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-xs text-muted-foreground", children: "App" }),
            /* @__PURE__ */ jsxRuntime.jsx("span", { className: "font-semibold truncate", children: current?.name ?? currentApp })
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronsUpDown, { className: "ml-auto shrink-0 opacity-50" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntime.jsxs(
      DropdownMenuContent,
      {
        className: "w-[var(--radix-dropdown-menu-trigger-width)] min-w-52",
        align: "start",
        side: placement === "bottom" ? "bottom" : "top",
        sideOffset: 4,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuLabel, { className: "text-xs text-muted-foreground", children: "Go\u30B7\u30EA\u30FC\u30BA" }),
          /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuSeparator, {}),
          apps.map((app) => /* @__PURE__ */ jsxRuntime.jsxs(
            DropdownMenuItem,
            {
              onSelect: () => handleSelect(app.url),
              className: "gap-2",
              children: [
                /* @__PURE__ */ jsxRuntime.jsx(ColorDot, { color: app.color, size: 8 }),
                /* @__PURE__ */ jsxRuntime.jsx("span", { className: "flex-1", children: app.name }),
                app.name === currentApp && /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Check, { className: "size-4 shrink-0 opacity-70" })
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
  return /* @__PURE__ */ jsxRuntime.jsxs(Sidebar, { ...props, children: [
    /* @__PURE__ */ jsxRuntime.jsxs(SidebarHeader, { children: [
      logo && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex items-center gap-2 px-2 py-1", children: logo }),
      /* @__PURE__ */ jsxRuntime.jsx(SearchForm, { placeholder: searchPlaceholder })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx(SidebarContent, { children: navItems.map(
      (section) => section.items ? (
        // グループ付きナビ（セクション見出し + サブ項目）
        /* @__PURE__ */ jsxRuntime.jsxs(SidebarGroup, { children: [
          /* @__PURE__ */ jsxRuntime.jsx(SidebarGroupLabel, { children: section.title }),
          /* @__PURE__ */ jsxRuntime.jsx(SidebarGroupContent, { children: /* @__PURE__ */ jsxRuntime.jsx(SidebarMenu, { children: section.items.map((item) => /* @__PURE__ */ jsxRuntime.jsx(SidebarMenuItem, { children: /* @__PURE__ */ jsxRuntime.jsx(
            SidebarMenuButton,
            {
              asChild: true,
              isActive: item.isActive,
              children: /* @__PURE__ */ jsxRuntime.jsx("a", { href: item.url, children: item.title })
            }
          ) }, item.title)) }) })
        ] }, section.title)
      ) : (
        // フラットなナビ項目
        /* @__PURE__ */ jsxRuntime.jsx(SidebarGroup, { children: /* @__PURE__ */ jsxRuntime.jsx(SidebarGroupContent, { children: /* @__PURE__ */ jsxRuntime.jsx(SidebarMenu, { children: /* @__PURE__ */ jsxRuntime.jsx(SidebarMenuItem, { children: /* @__PURE__ */ jsxRuntime.jsx(
          SidebarMenuButton,
          {
            asChild: true,
            isActive: section.isActive,
            className: cn(
              section.icon && "gap-2"
            ),
            children: /* @__PURE__ */ jsxRuntime.jsxs("a", { href: section.url, children: [
              section.icon && /* @__PURE__ */ jsxRuntime.jsx(section.icon, { className: "size-4 shrink-0" }),
              section.title
            ] })
          }
        ) }) }) }) }, section.title)
      )
    ) }),
    /* @__PURE__ */ jsxRuntime.jsx(SidebarFooter, { children: /* @__PURE__ */ jsxRuntime.jsx(
      AppSwitcher,
      {
        currentApp,
        apps,
        onNavigate
      }
    ) }),
    /* @__PURE__ */ jsxRuntime.jsx(SidebarRail, {})
  ] });
}
function TrendIcon({ direction }) {
  if (direction === "up") return /* @__PURE__ */ jsxRuntime.jsx(lucideReact.TrendingUpIcon, { className: "size-3" });
  if (direction === "down") return /* @__PURE__ */ jsxRuntime.jsx(lucideReact.TrendingDownIcon, { className: "size-3" });
  return /* @__PURE__ */ jsxRuntime.jsx(lucideReact.MinusIcon, { className: "size-3" });
}
var trendStyles = {
  up: "border-[color:var(--color-success)]/30 bg-[color:var(--color-success-subtle)] text-[color:var(--color-success)]",
  down: "border-[color:var(--color-danger)]/30 bg-[color:var(--color-danger-subtle)] text-[color:var(--color-danger)]",
  neutral: "border-border bg-muted text-muted-foreground"
};
function TrendBadge({ trend }) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    Badge,
    {
      variant: "outline",
      className: `flex gap-1 rounded-lg text-xs ${trendStyles[trend.direction]}`,
      "aria-label": `\u5909\u5316: ${trend.value}`,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(TrendIcon, { direction: trend.direction }),
        trend.value
      ]
    }
  );
}
function SectionCards({ cards, className }) {
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: `*:data-[slot=card]:shadow-xs @xl/main:grid-cols-2 @5xl/main:grid-cols-4 grid grid-cols-1 gap-3 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card ${className ?? ""}`, children: cards.map((card, i) => {
    const rawProgress = card.progress;
    const achieved = rawProgress !== void 0 && rawProgress >= 100;
    const displayProgress = rawProgress !== void 0 ? Math.min(rawProgress, 100) : void 0;
    const successColor = "var(--color-success)";
    const progressIndicatorStyle = achieved ? { backgroundColor: successColor } : void 0;
    const progressTrackStyle = achieved ? { backgroundColor: `color-mix(in srgb, ${successColor} 20%, transparent)` } : void 0;
    return /* @__PURE__ */ jsxRuntime.jsxs(
      Card,
      {
        className: "@container/card",
        style: achieved ? { borderColor: `color-mix(in srgb, ${successColor} 40%, transparent)` } : void 0,
        children: [
          /* @__PURE__ */ jsxRuntime.jsxs(CardHeader, { className: "pb-2", children: [
            /* @__PURE__ */ jsxRuntime.jsx(CardDescription, { children: card.title }),
            /* @__PURE__ */ jsxRuntime.jsx(CardTitle, { className: "@[250px]/card:text-3xl text-2xl font-semibold tabular-nums", children: card.value })
          ] }),
          (card.description || rawProgress !== void 0 || card.trend || card.icon) && /* @__PURE__ */ jsxRuntime.jsxs(CardFooter, { className: "flex-col items-start gap-2 text-sm pt-0", children: [
            (card.trend || card.description || card.icon) && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex w-full items-center justify-between gap-2", children: [
              card.description && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-muted-foreground line-clamp-1", children: card.description }),
              card.trend && /* @__PURE__ */ jsxRuntime.jsx(TrendBadge, { trend: card.trend }),
              card.icon && !card.trend && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-muted-foreground", children: card.icon })
            ] }),
            displayProgress !== void 0 && /* @__PURE__ */ jsxRuntime.jsx(
              Progress,
              {
                value: displayProgress,
                className: "h-1.5 w-full",
                style: progressTrackStyle,
                indicatorStyle: progressIndicatorStyle
              }
            )
          ] })
        ]
      },
      i
    );
  }) });
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
  const [timeRange, setTimeRange] = React19__namespace.useState(initialRange);
  const filteredData = React19__namespace.useMemo(() => {
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
  const uid = React19__namespace.useId().replace(/:/g, "");
  return /* @__PURE__ */ jsxRuntime.jsxs(Card, { className: "@container/card", children: [
    /* @__PURE__ */ jsxRuntime.jsxs(CardHeader, { className: "relative", children: [
      title && /* @__PURE__ */ jsxRuntime.jsx(CardTitle, { children: title }),
      description && /* @__PURE__ */ jsxRuntime.jsx(CardDescription, { children: description }),
      timeRanges.length > 0 && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "absolute right-4 top-4 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          ToggleGroup,
          {
            type: "single",
            value: timeRange,
            onValueChange: (v) => v && setTimeRange(v),
            variant: "outline",
            className: "@[767px]/card:flex hidden",
            children: timeRanges.map((r) => /* @__PURE__ */ jsxRuntime.jsx(ToggleGroupItem, { value: r.value, className: "h-8 px-2.5", children: r.label }, r.value))
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsxs(Select, { value: timeRange, onValueChange: setTimeRange, children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            SelectTrigger,
            {
              className: "@[767px]/card:hidden flex w-36",
              "aria-label": "\u671F\u9593\u3092\u9078\u629E",
              children: /* @__PURE__ */ jsxRuntime.jsx(SelectValue, {})
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(SelectContent, { className: "rounded-xl", children: timeRanges.map((r) => /* @__PURE__ */ jsxRuntime.jsx(SelectItem, { value: r.value, className: "rounded-lg", children: r.label }, r.value)) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx(CardContent, { className: "px-2 pt-4 sm:px-6 sm:pt-6", children: /* @__PURE__ */ jsxRuntime.jsx(ChartContainer, { config, className: "aspect-auto h-[250px] w-full", children: /* @__PURE__ */ jsxRuntime.jsxs(RechartsPrimitive.AreaChart, { data: filteredData, children: [
      /* @__PURE__ */ jsxRuntime.jsx("defs", { children: yKeys.map((key) => /* @__PURE__ */ jsxRuntime.jsxs(
        "linearGradient",
        {
          id: `${uid}-fill-${key}`,
          x1: "0",
          y1: "0",
          x2: "0",
          y2: "1",
          children: [
            /* @__PURE__ */ jsxRuntime.jsx("stop", { offset: "5%", stopColor: `var(--color-${key})`, stopOpacity: 0.8 }),
            /* @__PURE__ */ jsxRuntime.jsx("stop", { offset: "95%", stopColor: `var(--color-${key})`, stopOpacity: 0.1 })
          ]
        },
        key
      )) }),
      /* @__PURE__ */ jsxRuntime.jsx(RechartsPrimitive.CartesianGrid, { vertical: false }),
      /* @__PURE__ */ jsxRuntime.jsx(
        RechartsPrimitive.XAxis,
        {
          dataKey: xKey,
          tickLine: false,
          axisLine: false,
          tickMargin: 8,
          minTickGap: 32,
          tickFormatter: xTickFormatter
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        ChartTooltip,
        {
          cursor: false,
          content: /* @__PURE__ */ jsxRuntime.jsx(
            ChartTooltipContent,
            {
              labelFormatter: tooltipLabelFormatter ? tooltipLabelFormatter : (v) => xTickFormatter(v),
              indicator: "dot"
            }
          )
        }
      ),
      yKeys.map((key) => /* @__PURE__ */ jsxRuntime.jsx(
        RechartsPrimitive.Area,
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
  const [sorting, setSorting] = React19__namespace.useState([]);
  const [columnFilters, setColumnFilters] = React19__namespace.useState([]);
  const [columnVisibility, setColumnVisibility] = React19__namespace.useState({});
  const [pagination, setPagination] = React19__namespace.useState({
    pageIndex: 0,
    pageSize
  });
  const searchColumnId = typeof searchable === "object" ? searchable.columnId : void 0;
  const searchPlaceholder = typeof searchable === "object" ? searchable.placeholder ?? "\u691C\u7D22..." : "\u691C\u7D22...";
  const table = reactTable.useReactTable({
    data,
    columns,
    state: { sorting, columnFilters, columnVisibility, pagination },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onPaginationChange: setPagination,
    getCoreRowModel: reactTable.getCoreRowModel(),
    getFilteredRowModel: reactTable.getFilteredRowModel(),
    getPaginationRowModel: reactTable.getPaginationRowModel(),
    getSortedRowModel: reactTable.getSortedRowModel()
  });
  const searchValue = searchColumnId ? table.getColumn(searchColumnId)?.getFilterValue() ?? "" : "";
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col gap-4", children: [
    searchable && searchColumnId && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "relative max-w-xs", children: [
      /* @__PURE__ */ jsxRuntime.jsx(Label2, { htmlFor: "data-table-search", className: "sr-only", children: searchPlaceholder }),
      /* @__PURE__ */ jsxRuntime.jsx(lucideReact.SearchIcon, { className: "pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" }),
      /* @__PURE__ */ jsxRuntime.jsx(
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
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "overflow-hidden rounded-lg border border-border", children: /* @__PURE__ */ jsxRuntime.jsxs(Table, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(TableHeader, { className: "sticky top-0 z-10 bg-muted", children: table.getHeaderGroups().map((headerGroup) => /* @__PURE__ */ jsxRuntime.jsx(TableRow, { children: headerGroup.headers.map((header) => /* @__PURE__ */ jsxRuntime.jsx(TableHead, { colSpan: header.colSpan, children: header.isPlaceholder ? null : reactTable.flexRender(
        header.column.columnDef.header,
        header.getContext()
      ) }, header.id)) }, headerGroup.id)) }),
      /* @__PURE__ */ jsxRuntime.jsx(TableBody, { children: table.getRowModel().rows.length > 0 ? table.getRowModel().rows.map((row) => /* @__PURE__ */ jsxRuntime.jsx(
        TableRow,
        {
          "data-state": row.getIsSelected() ? "selected" : void 0,
          children: row.getVisibleCells().map((cell) => /* @__PURE__ */ jsxRuntime.jsx(TableCell, { children: reactTable.flexRender(cell.column.columnDef.cell, cell.getContext()) }, cell.id))
        },
        row.id
      )) : /* @__PURE__ */ jsxRuntime.jsx(TableRow, { children: /* @__PURE__ */ jsxRuntime.jsx(
        TableCell,
        {
          colSpan: columns.length,
          className: "h-24 text-center text-muted-foreground",
          children: emptyMessage
        }
      ) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between gap-4 text-sm", children: [
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-muted-foreground hidden lg:block", children: [
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
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "ml-auto flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "hidden items-center gap-2 lg:flex", children: [
          /* @__PURE__ */ jsxRuntime.jsx(Label2, { htmlFor: "page-size", className: "text-sm font-medium whitespace-nowrap", children: "\u8868\u793A\u4EF6\u6570" }),
          /* @__PURE__ */ jsxRuntime.jsxs(
            Select,
            {
              value: `${table.getState().pagination.pageSize}`,
              onValueChange: (v) => table.setPageSize(Number(v)),
              children: [
                /* @__PURE__ */ jsxRuntime.jsx(SelectTrigger, { className: "w-20", id: "page-size", children: /* @__PURE__ */ jsxRuntime.jsx(SelectValue, {}) }),
                /* @__PURE__ */ jsxRuntime.jsx(SelectContent, { side: "top", children: pageSizeOptions.map((size) => /* @__PURE__ */ jsxRuntime.jsx(SelectItem, { value: `${size}`, children: size }, size)) })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "font-medium", children: [
          table.getState().pagination.pageIndex + 1,
          " / ",
          table.getPageCount()
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            Button,
            {
              variant: "outline",
              size: "icon",
              className: "hidden size-8 lg:flex",
              onClick: () => table.setPageIndex(0),
              disabled: !table.getCanPreviousPage(),
              "aria-label": "\u6700\u521D\u306E\u30DA\u30FC\u30B8",
              children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronsLeftIcon, { className: "size-4" })
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(
            Button,
            {
              variant: "outline",
              size: "icon",
              className: "size-8",
              onClick: () => table.previousPage(),
              disabled: !table.getCanPreviousPage(),
              "aria-label": "\u524D\u306E\u30DA\u30FC\u30B8",
              children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronLeftIcon, { className: "size-4" })
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(
            Button,
            {
              variant: "outline",
              size: "icon",
              className: "size-8",
              onClick: () => table.nextPage(),
              disabled: !table.getCanNextPage(),
              "aria-label": "\u6B21\u306E\u30DA\u30FC\u30B8",
              children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronRightIcon, { className: "size-4" })
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(
            Button,
            {
              variant: "outline",
              size: "icon",
              className: "hidden size-8 lg:flex",
              onClick: () => table.setPageIndex(table.getPageCount() - 1),
              disabled: !table.getCanNextPage(),
              "aria-label": "\u6700\u5F8C\u306E\u30DA\u30FC\u30B8",
              children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronsRightIcon, { className: "size-4" })
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
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col gap-6", children: [
    cards && cards.length > 0 && /* @__PURE__ */ jsxRuntime.jsx(SectionCards, { cards }),
    chart && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "px-4 lg:px-6", children: /* @__PURE__ */ jsxRuntime.jsx(ChartArea, { ...chart }) }),
    table && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "px-4 lg:px-6", children: /* @__PURE__ */ jsxRuntime.jsx(
      DataTable,
      {
        columns: table.columns,
        data: table.data,
        searchable: table.searchable,
        pageSize: table.pageSize,
        emptyMessage: table.emptyMessage
      }
    ) }),
    children && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "px-4 lg:px-6", children })
  ] });
}
function GoogleIcon({ className }) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      className,
      "aria-hidden": true,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",
            fill: "#4285F4"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",
            fill: "#34A853"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",
            fill: "#FBBC05"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
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
  const [pending, setPending] = React19__namespace.useState(false);
  async function handleSignIn() {
    setPending(true);
    try {
      await onGoogleSignIn();
    } finally {
      setPending(false);
    }
  }
  const loading = isLoading || pending;
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background p-4", children: /* @__PURE__ */ jsxRuntime.jsxs(Card, { className: "w-full max-w-sm shadow-md", children: [
    /* @__PURE__ */ jsxRuntime.jsxs(CardHeader, { className: "flex flex-col items-center gap-3 pb-2 pt-8", children: [
      productLogo && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex size-14 items-center justify-center rounded-xl border border-border bg-surface-subtle text-foreground", children: productLogo }),
      /* @__PURE__ */ jsxRuntime.jsx(
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
      tagline && /* @__PURE__ */ jsxRuntime.jsx(CardDescription, { className: "text-center text-sm leading-relaxed", children: tagline })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsxs(CardContent, { className: "flex flex-col gap-4 px-8 pb-10 pt-6", children: [
      /* @__PURE__ */ jsxRuntime.jsxs(
        Button,
        {
          type: "button",
          size: "lg",
          className: "w-full gap-3 text-base",
          onClick: handleSignIn,
          disabled: loading,
          "aria-busy": loading,
          children: [
            loading ? /* @__PURE__ */ jsxRuntime.jsx("span", { className: "size-5 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" }) : /* @__PURE__ */ jsxRuntime.jsx(GoogleIcon, { className: "size-5 shrink-0" }),
            loading ? "\u30B5\u30A4\u30F3\u30A4\u30F3\u4E2D..." : "Google \u3067\u30B5\u30A4\u30F3\u30A4\u30F3"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-center text-xs text-muted-foreground", children: [
        "\u30B5\u30A4\u30F3\u30A4\u30F3\u3059\u308B\u3053\u3068\u3067",
        /* @__PURE__ */ jsxRuntime.jsx(
          "a",
          {
            href: "/terms",
            className: "underline underline-offset-2 hover:text-foreground",
            children: "\u5229\u7528\u898F\u7D04"
          }
        ),
        "\u304A\u3088\u3073",
        /* @__PURE__ */ jsxRuntime.jsx(
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
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "section",
    {
      className: cn("flex flex-col gap-4 border-t border-border pt-8", className),
      children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col gap-1", children: [
          /* @__PURE__ */ jsxRuntime.jsx(
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
          description && /* @__PURE__ */ jsxRuntime.jsx(
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
  return /* @__PURE__ */ jsxRuntime.jsxs("li", { className: "flex items-start gap-2.5 text-sm", children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      "span",
      {
        className: cn(
          "mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full",
          isSolve ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
        ),
        "aria-hidden": true,
        children: isSolve ? /* @__PURE__ */ jsxRuntime.jsx(lucideReact.CheckIcon, { className: "size-2.5 stroke-[2.5]" }) : /* @__PURE__ */ jsxRuntime.jsx(lucideReact.XIcon, { className: "size-2.5 stroke-[2.5]" })
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(
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
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col gap-3 rounded-lg border border-border bg-surface-subtle p-4", children: [
    /* @__PURE__ */ jsxRuntime.jsx(
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
    /* @__PURE__ */ jsxRuntime.jsx("ul", { className: "flex flex-col gap-2.5", children: items.map((item, i) => /* @__PURE__ */ jsxRuntime.jsx(ScopeItem, { text: item, type }, i)) })
  ] });
}
function StepCard({
  step,
  index,
  total
}) {
  const isLast = index === total - 1;
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col gap-1.5 rounded-lg border border-border bg-card p-4 shadow-sm min-w-0", children: [
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntime.jsx(
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
        /* @__PURE__ */ jsxRuntime.jsx(
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
      /* @__PURE__ */ jsxRuntime.jsx(
        "p",
        {
          className: "text-muted-foreground leading-relaxed",
          style: { fontSize: "var(--text-xs)", color: "var(--color-text-secondary)" },
          children: step.description
        }
      )
    ] }),
    !isLast && /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "hidden md:flex shrink-0 items-center text-muted-foreground", children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ArrowRightIcon, { className: "size-5", "aria-hidden": true }) }),
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex md:hidden justify-center text-muted-foreground", children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ArrowDownIcon, { className: "size-5", "aria-hidden": true }) })
    ] })
  ] });
}
function ProductLogicFlow({ steps, outcome }) {
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col gap-6", children: [
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex flex-col gap-3 md:flex-row md:items-stretch md:gap-2", children: steps.map((step, i) => /* @__PURE__ */ jsxRuntime.jsx(StepCard, { step, index: i, total: steps.length }, i)) }),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        lucideReact.ArrowRight,
        {
          className: "size-5 shrink-0 text-primary",
          "aria-hidden": true,
          style: { color: "var(--color-primary)" }
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
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
  return /* @__PURE__ */ jsxRuntime.jsxs(
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
        /* @__PURE__ */ jsxRuntime.jsx(CardHeader, { className: "pb-1", children: /* @__PURE__ */ jsxRuntime.jsx(
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
        /* @__PURE__ */ jsxRuntime.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntime.jsx(
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
  behaviorMetrics,
  className
}) {
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn("mx-auto w-full max-w-4xl px-4 py-10 md:px-8 md:py-14", className), children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col gap-10", children: [
    /* @__PURE__ */ jsxRuntime.jsxs("header", { className: "flex flex-col gap-4", children: [
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-3", children: [
        productLogo && /* @__PURE__ */ jsxRuntime.jsx(
          "div",
          {
            className: "flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-surface-subtle",
            "aria-hidden": true,
            children: productLogo
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
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
      /* @__PURE__ */ jsxRuntime.jsx(
        "p",
        {
          className: "text-muted-foreground",
          style: { fontSize: "var(--text-base)", color: "var(--color-text-secondary)" },
          children: tagline
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
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
    /* @__PURE__ */ jsxRuntime.jsx(Section2, { title: "\u30B3\u30A2\u30D0\u30EA\u30E5\u30FC", children: /* @__PURE__ */ jsxRuntime.jsx(
      "p",
      {
        className: "max-w-2xl leading-relaxed text-foreground",
        style: { fontSize: "var(--text-base)", color: "var(--color-text-primary)" },
        children: coreValue
      }
    ) }),
    /* @__PURE__ */ jsxRuntime.jsx(Section2, { title: "\u30B9\u30B3\u30FC\u30D7", description: "\u3053\u306E\u30D7\u30ED\u30C0\u30AF\u30C8\u304C\u5BFE\u8C61\u3068\u3059\u308B\u8AB2\u984C\u306E\u7BC4\u56F2", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "grid grid-cols-1 gap-4 sm:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntime.jsx(ScopeColumn, { title: "\u89E3\u6C7A\u3059\u308B\u3053\u3068", items: scope.solve, type: "solve" }),
      /* @__PURE__ */ jsxRuntime.jsx(ScopeColumn, { title: "\u89E3\u6C7A\u3057\u306A\u3044\u3053\u3068", items: scope.notSolve, type: "notSolve" })
    ] }) }),
    /* @__PURE__ */ jsxRuntime.jsx(
      Section2,
      {
        title: "\u30D7\u30ED\u30C0\u30AF\u30C8\u30ED\u30B8\u30C3\u30AF",
        description: "\u30E6\u30FC\u30B6\u30FC\u306E\u884C\u52D5\u304C\u3069\u306E\u3088\u3046\u306B\u4FA1\u5024\u306B\u3064\u306A\u304C\u308B\u304B",
        children: /* @__PURE__ */ jsxRuntime.jsx(ProductLogicFlow, { steps: productLogic.steps, outcome: productLogic.outcome })
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(Section2, { title: "\u7D50\u679C\u6307\u6A19\uFF08KGI\uFF09", description: "\u6700\u7D42\u7684\u306B\u9054\u6210\u3059\u3079\u304D\u6210\u679C", children: /* @__PURE__ */ jsxRuntime.jsx(
      MetricCard,
      {
        title: resultMetric.title,
        description: resultMetric.description,
        isPrimary: true
      }
    ) }),
    /* @__PURE__ */ jsxRuntime.jsx(Section2, { title: "\u884C\u52D5\u6307\u6A19\uFF08KPI\uFF09", description: "KGI \u306B\u3064\u306A\u304C\u308B\u4E2D\u9593\u7684\u306A\u884C\u52D5\u306E\u6307\u6A19", children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "grid grid-cols-1 gap-3 sm:grid-cols-2", children: behaviorMetrics.map((m, i) => /* @__PURE__ */ jsxRuntime.jsx(MetricCard, { title: m.title, description: m.description }, i)) }) })
  ] }) });
}
function SettingsItem({ label, description, control, className }) {
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn("flex items-center justify-between gap-4 py-4", className), children: [
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col gap-0.5", children: [
      /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm font-medium text-foreground", children: label }),
      description && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-xs text-muted-foreground", children: description })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "shrink-0", children: control })
  ] });
}
function SettingsGroup({ title, description, children, className }) {
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn("flex flex-col", className), children: [
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "mb-2", children: [
      /* @__PURE__ */ jsxRuntime.jsx("h3", { className: "text-sm font-semibold text-foreground", children: title }),
      description && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-xs text-muted-foreground", children: description })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "rounded-lg border border-border bg-card divide-y divide-border", children: React19__namespace.Children.map(children, (child, i) => /* @__PURE__ */ jsxRuntime.jsx("div", { className: "px-4", children: child }, i)) })
  ] });
}
function SettingsPage({
  sections,
  defaultSection,
  title = "\u8A2D\u5B9A",
  className
}) {
  const [activeId, setActiveId] = React19__namespace.useState(
    defaultSection ?? sections[0]?.id
  );
  const activeSection = sections.find((s) => s.id === activeId) ?? sections[0];
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn("mx-auto w-full max-w-5xl px-4 py-8 md:px-8", className), children: [
    /* @__PURE__ */ jsxRuntime.jsx("h1", { className: "mb-6 text-2xl font-bold text-foreground", children: title }),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex gap-8", children: [
      /* @__PURE__ */ jsxRuntime.jsx("nav", { className: "hidden w-48 shrink-0 md:block", children: /* @__PURE__ */ jsxRuntime.jsx("ul", { className: "flex flex-col gap-1", children: sections.map((s) => /* @__PURE__ */ jsxRuntime.jsx("li", { children: /* @__PURE__ */ jsxRuntime.jsxs(
        "button",
        {
          type: "button",
          onClick: () => setActiveId(s.id),
          className: cn(
            "flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors",
            activeId === s.id ? "bg-surface-subtle font-medium text-foreground" : "text-muted-foreground hover:bg-surface-subtle hover:text-foreground"
          ),
          children: [
            s.icon && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "shrink-0", children: s.icon }),
            s.label
          ]
        }
      ) }, s.id)) }) }),
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "mb-4 flex gap-1 overflow-x-auto md:hidden", children: sections.map((s) => /* @__PURE__ */ jsxRuntime.jsxs(
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
      /* @__PURE__ */ jsxRuntime.jsx(Separator2, { orientation: "vertical", className: "hidden h-auto md:block" }),
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "min-w-0 flex-1", children: activeSection && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex flex-col gap-6", children: activeSection.content }) })
    ] })
  ] });
}
function AppLayout({
  sidebar,
  header,
  children,
  defaultOpen = true
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs(SidebarProvider, { defaultOpen, children: [
    sidebar,
    /* @__PURE__ */ jsxRuntime.jsxs(SidebarInset, { children: [
      /* @__PURE__ */ jsxRuntime.jsxs("header", { className: "flex h-12 shrink-0 items-center gap-2 border-b border-border px-4", children: [
        /* @__PURE__ */ jsxRuntime.jsx(SidebarTrigger, { className: "-ml-1" }),
        header && /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
          /* @__PURE__ */ jsxRuntime.jsx(Separator2, { orientation: "vertical", className: "h-4" }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex flex-1 items-center", children: header })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx("main", { className: "@container/main flex flex-1 flex-col gap-4 p-4", children })
    ] })
  ] });
}
function PageHeader({
  title,
  description,
  actions,
  breadcrumbs
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col gap-1", children: [
    breadcrumbs && breadcrumbs.length > 0 && /* @__PURE__ */ jsxRuntime.jsx(Breadcrumb, { children: /* @__PURE__ */ jsxRuntime.jsx(BreadcrumbList, { children: breadcrumbs.map((crumb, i) => {
      const isLast = i === breadcrumbs.length - 1;
      return /* @__PURE__ */ jsxRuntime.jsxs(React19__namespace.Fragment, { children: [
        i > 0 && /* @__PURE__ */ jsxRuntime.jsx(BreadcrumbSeparator, {}),
        /* @__PURE__ */ jsxRuntime.jsx(BreadcrumbItem, { children: isLast || !crumb.href ? /* @__PURE__ */ jsxRuntime.jsx(BreadcrumbPage, { children: crumb.label }) : /* @__PURE__ */ jsxRuntime.jsx(BreadcrumbLink, { href: crumb.href, children: crumb.label }) })
      ] }, i);
    }) }) }),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-start justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col gap-1 min-w-0", children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "h1",
          {
            className: "text-2xl font-semibold leading-tight text-foreground truncate",
            style: { fontSize: "var(--text-2xl)", fontWeight: "var(--font-weight-semibold)" },
            children: title
          }
        ),
        description && /* @__PURE__ */ jsxRuntime.jsx(
          "p",
          {
            className: "text-sm text-muted-foreground",
            style: { fontSize: "var(--text-sm)" },
            children: description
          }
        )
      ] }),
      actions && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex shrink-0 items-center gap-2", children: actions })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx(Separator2, { className: "mt-2", style: { marginTop: "var(--space-2)" } })
  ] });
}

Object.defineProperty(exports, "FileImage", {
  enumerable: true,
  get: function () { return lucideReact.FileImage; }
});
Object.defineProperty(exports, "FileVideo", {
  enumerable: true,
  get: function () { return lucideReact.FileVideo; }
});
exports.Accordion = Accordion;
exports.AccordionContent = AccordionContent;
exports.AccordionItem = AccordionItem;
exports.AccordionTrigger = AccordionTrigger;
exports.Alert = Alert;
exports.AlertDescription = AlertDescription;
exports.AlertDialog = AlertDialog;
exports.AlertDialogAction = AlertDialogAction;
exports.AlertDialogCancel = AlertDialogCancel;
exports.AlertDialogContent = AlertDialogContent;
exports.AlertDialogDescription = AlertDialogDescription;
exports.AlertDialogFooter = AlertDialogFooter;
exports.AlertDialogHeader = AlertDialogHeader;
exports.AlertDialogOverlay = AlertDialogOverlay;
exports.AlertDialogPortal = AlertDialogPortal;
exports.AlertDialogTitle = AlertDialogTitle;
exports.AlertDialogTrigger = AlertDialogTrigger;
exports.AlertTitle = AlertTitle;
exports.AppLayout = AppLayout;
exports.AppSidebar = AppSidebar;
exports.AppSwitcher = AppSwitcher;
exports.AspectRatio = AspectRatio;
exports.Avatar = Avatar;
exports.AvatarFallback = AvatarFallback;
exports.AvatarImage = AvatarImage;
exports.Badge = Badge;
exports.Banner = Banner;
exports.Breadcrumb = Breadcrumb;
exports.BreadcrumbEllipsis = BreadcrumbEllipsis;
exports.BreadcrumbItem = BreadcrumbItem;
exports.BreadcrumbLink = BreadcrumbLink;
exports.BreadcrumbList = BreadcrumbList;
exports.BreadcrumbPage = BreadcrumbPage;
exports.BreadcrumbSeparator = BreadcrumbSeparator;
exports.Button = Button;
exports.Calendar = Calendar;
exports.CalendarDayButton = CalendarDayButton;
exports.Card = Card;
exports.CardContent = CardContent;
exports.CardDescription = CardDescription;
exports.CardFooter = CardFooter;
exports.CardHeader = CardHeader;
exports.CardTitle = CardTitle;
exports.ChartArea = ChartArea;
exports.ChartContainer = ChartContainer;
exports.ChartLegend = ChartLegend;
exports.ChartLegendContent = ChartLegendContent;
exports.ChartStyle = ChartStyle;
exports.ChartTooltip = ChartTooltip;
exports.ChartTooltipContent = ChartTooltipContent;
exports.Checkbox = Checkbox;
exports.Collapsible = Collapsible;
exports.CollapsibleContent = CollapsibleContent2;
exports.CollapsibleTrigger = CollapsibleTrigger2;
exports.Combobox = Combobox;
exports.Command = Command;
exports.CommandDialog = CommandDialog;
exports.CommandEmpty = CommandEmpty;
exports.CommandGroup = CommandGroup;
exports.CommandInput = CommandInput;
exports.CommandItem = CommandItem;
exports.CommandList = CommandList;
exports.CommandSeparator = CommandSeparator;
exports.CommandShortcut = CommandShortcut;
exports.ConceptPage = ConceptPage;
exports.ConfirmDialog = ConfirmDialog;
exports.DashboardPage = DashboardPage;
exports.DataTable = DataTable;
exports.DatePicker = DatePicker;
exports.DateRangePicker = DateRangePicker;
exports.DesignTokens = DesignTokens;
exports.Dialog = Dialog;
exports.DialogClose = DialogClose;
exports.DialogContent = DialogContent;
exports.DialogDescription = DialogDescription;
exports.DialogFooter = DialogFooter;
exports.DialogHeader = DialogHeader;
exports.DialogOverlay = DialogOverlay;
exports.DialogPortal = DialogPortal;
exports.DialogTitle = DialogTitle;
exports.DialogTrigger = DialogTrigger;
exports.DndProvider = DndProvider;
exports.DragHandle = DragHandle;
exports.Drawer = Drawer;
exports.DrawerClose = DrawerClose;
exports.DrawerContent = DrawerContent;
exports.DrawerDescription = DrawerDescription;
exports.DrawerFooter = DrawerFooter;
exports.DrawerHeader = DrawerHeader;
exports.DrawerOverlay = DrawerOverlay;
exports.DrawerPortal = DrawerPortal;
exports.DrawerTitle = DrawerTitle;
exports.DrawerTrigger = DrawerTrigger;
exports.DropdownMenu = DropdownMenu;
exports.DropdownMenuCheckboxItem = DropdownMenuCheckboxItem;
exports.DropdownMenuContent = DropdownMenuContent;
exports.DropdownMenuGroup = DropdownMenuGroup;
exports.DropdownMenuItem = DropdownMenuItem;
exports.DropdownMenuLabel = DropdownMenuLabel;
exports.DropdownMenuPortal = DropdownMenuPortal;
exports.DropdownMenuRadioGroup = DropdownMenuRadioGroup;
exports.DropdownMenuRadioItem = DropdownMenuRadioItem;
exports.DropdownMenuSeparator = DropdownMenuSeparator;
exports.DropdownMenuShortcut = DropdownMenuShortcut;
exports.DropdownMenuSub = DropdownMenuSub;
exports.DropdownMenuSubContent = DropdownMenuSubContent;
exports.DropdownMenuSubTrigger = DropdownMenuSubTrigger;
exports.DropdownMenuTrigger = DropdownMenuTrigger;
exports.EmptyState = EmptyState;
exports.FileUpload = FileUpload;
exports.Form = Form;
exports.FormActions = FormActions;
exports.FormControl = FormControl;
exports.FormDescription = FormDescription;
exports.FormField = FormField;
exports.FormItem = FormItem;
exports.FormLabel = FormLabel;
exports.FormMessage = FormMessage;
exports.Heading = Heading;
exports.HoverCard = HoverCard;
exports.HoverCardContent = HoverCardContent;
exports.HoverCardTrigger = HoverCardTrigger;
exports.InlineEdit = InlineEdit;
exports.Input = Input;
exports.Label = Label2;
exports.LoadingOverlay = LoadingOverlay;
exports.LoginPage = LoginPage;
exports.Menubar = Menubar;
exports.MenubarCheckboxItem = MenubarCheckboxItem;
exports.MenubarContent = MenubarContent;
exports.MenubarGroup = MenubarGroup;
exports.MenubarItem = MenubarItem;
exports.MenubarLabel = MenubarLabel;
exports.MenubarMenu = MenubarMenu;
exports.MenubarPortal = MenubarPortal;
exports.MenubarRadioGroup = MenubarRadioGroup;
exports.MenubarRadioItem = MenubarRadioItem;
exports.MenubarSeparator = MenubarSeparator;
exports.MenubarShortcut = MenubarShortcut;
exports.MenubarSub = MenubarSub;
exports.MenubarSubContent = MenubarSubContent;
exports.MenubarSubTrigger = MenubarSubTrigger;
exports.MenubarTrigger = MenubarTrigger;
exports.MetricCard = MetricCard;
exports.MetricText = MetricText;
exports.MultiSelect = MultiSelect;
exports.NavigationMenu = NavigationMenu;
exports.NavigationMenuContent = NavigationMenuContent;
exports.NavigationMenuIndicator = NavigationMenuIndicator;
exports.NavigationMenuItem = NavigationMenuItem;
exports.NavigationMenuLink = NavigationMenuLink;
exports.NavigationMenuList = NavigationMenuList;
exports.NavigationMenuTrigger = NavigationMenuTrigger;
exports.NavigationMenuViewport = NavigationMenuViewport;
exports.NumberInput = NumberInput;
exports.PageHeader = PageHeader;
exports.Pagination = Pagination;
exports.PaginationContent = PaginationContent;
exports.PaginationEllipsis = PaginationEllipsis;
exports.PaginationItem = PaginationItem;
exports.PaginationLink = PaginationLink;
exports.PaginationNext = PaginationNext;
exports.PaginationPrevious = PaginationPrevious;
exports.Popover = Popover;
exports.PopoverAnchor = PopoverAnchor;
exports.PopoverContent = PopoverContent;
exports.PopoverTrigger = PopoverTrigger;
exports.ProductLogicFlow = ProductLogicFlow;
exports.Progress = Progress;
exports.ProgressCircular = ProgressCircular;
exports.RadioGroup = RadioGroup;
exports.RadioGroupItem = RadioGroupItem;
exports.ResizableHandle = ResizableHandle;
exports.ResizablePanel = ResizablePanel;
exports.ResizablePanelGroup = ResizablePanelGroup;
exports.ScopeColumn = ScopeColumn;
exports.ScrollArea = ScrollArea;
exports.ScrollBar = ScrollBar;
exports.SearchForm = SearchForm;
exports.SearchInput = SearchInput;
exports.Section = Section;
exports.SectionCards = SectionCards;
exports.Select = Select;
exports.SelectContent = SelectContent;
exports.SelectGroup = SelectGroup;
exports.SelectItem = SelectItem;
exports.SelectLabel = SelectLabel;
exports.SelectScrollDownButton = SelectScrollDownButton;
exports.SelectScrollUpButton = SelectScrollUpButton;
exports.SelectSeparator = SelectSeparator;
exports.SelectTrigger = SelectTrigger;
exports.SelectValue = SelectValue;
exports.Separator = Separator2;
exports.SettingsGroup = SettingsGroup;
exports.SettingsItem = SettingsItem;
exports.SettingsPage = SettingsPage;
exports.Sheet = Sheet;
exports.SheetClose = SheetClose;
exports.SheetContent = SheetContent;
exports.SheetDescription = SheetDescription;
exports.SheetFooter = SheetFooter;
exports.SheetHeader = SheetHeader;
exports.SheetOverlay = SheetOverlay;
exports.SheetPortal = SheetPortal;
exports.SheetTitle = SheetTitle;
exports.SheetTrigger = SheetTrigger;
exports.Sidebar = Sidebar;
exports.SidebarContent = SidebarContent;
exports.SidebarFooter = SidebarFooter;
exports.SidebarGroup = SidebarGroup;
exports.SidebarGroupAction = SidebarGroupAction;
exports.SidebarGroupContent = SidebarGroupContent;
exports.SidebarGroupLabel = SidebarGroupLabel;
exports.SidebarHeader = SidebarHeader;
exports.SidebarInput = SidebarInput;
exports.SidebarInset = SidebarInset;
exports.SidebarMenu = SidebarMenu;
exports.SidebarMenuAction = SidebarMenuAction;
exports.SidebarMenuBadge = SidebarMenuBadge;
exports.SidebarMenuButton = SidebarMenuButton;
exports.SidebarMenuItem = SidebarMenuItem;
exports.SidebarMenuSkeleton = SidebarMenuSkeleton;
exports.SidebarMenuSub = SidebarMenuSub;
exports.SidebarMenuSubButton = SidebarMenuSubButton;
exports.SidebarMenuSubItem = SidebarMenuSubItem;
exports.SidebarProvider = SidebarProvider;
exports.SidebarRail = SidebarRail;
exports.SidebarSeparator = SidebarSeparator;
exports.SidebarTrigger = SidebarTrigger;
exports.Skeleton = Skeleton;
exports.Slider = Slider;
exports.SortableItem = SortableItem;
exports.Spinner = Spinner;
exports.Stepper = Stepper;
exports.Switch = Switch;
exports.Table = Table;
exports.TableBody = TableBody;
exports.TableCaption = TableCaption;
exports.TableCell = TableCell;
exports.TableFooter = TableFooter;
exports.TableHead = TableHead;
exports.TableHeader = TableHeader;
exports.TableRow = TableRow;
exports.Tabs = Tabs;
exports.TabsContent = TabsContent;
exports.TabsList = TabsList;
exports.TabsTrigger = TabsTrigger;
exports.Tag = Tag;
exports.TagGroup = TagGroup;
exports.Text = Text;
exports.Textarea = Textarea;
exports.Timeline = Timeline;
exports.Toaster = Toaster;
exports.Toggle = Toggle;
exports.ToggleGroup = ToggleGroup;
exports.ToggleGroupItem = ToggleGroupItem;
exports.Tooltip = Tooltip;
exports.TooltipContent = TooltipContent;
exports.TooltipProvider = TooltipProvider;
exports.TooltipTrigger = TooltipTrigger;
exports.badgeVariants = badgeVariants;
exports.buttonVariants = buttonVariants;
exports.cn = cn;
exports.navigationMenuTriggerStyle = navigationMenuTriggerStyle;
exports.toggleVariants = toggleVariants;
exports.useFormField = useFormField;
exports.useIsMobile = useIsMobile;
exports.useSidebar = useSidebar;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map