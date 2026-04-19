import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React$1 from 'react';
import { VariantProps } from 'class-variance-authority';
import * as SelectPrimitive from '@radix-ui/react-select';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import * as SliderPrimitive from '@radix-ui/react-slider';
import * as LabelPrimitive from '@radix-ui/react-label';
import * as _radix_ui_react_slot from '@radix-ui/react-slot';
import * as react_jsx_runtime from 'react/jsx-runtime';
import * as react_hook_form from 'react-hook-form';
import { FieldValues, FieldPath, ControllerProps } from 'react-hook-form';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import * as MenubarPrimitive from '@radix-ui/react-menubar';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { DialogProps } from '@radix-ui/react-dialog';
import * as vaul from 'vaul';
import { Drawer as Drawer$1 } from 'vaul';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { Toaster as Toaster$1 } from 'sonner';
import { DayPicker, DayButton, DateRange } from 'react-day-picker';
export { DateRange } from 'react-day-picker';
import * as recharts_types_util_payload_getUniqPayload from 'recharts/types/util/payload/getUniqPayload';
import * as recharts_types_component_Tooltip from 'recharts/types/component/Tooltip';
import * as recharts_types_util_types from 'recharts/types/util/types';
import * as recharts_types_component_DefaultTooltipContent from 'recharts/types/component/DefaultTooltipContent';
import * as RechartsPrimitive from 'recharts';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import * as TogglePrimitive from '@radix-ui/react-toggle';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import { Separator as Separator$1, Panel, Group } from 'react-resizable-panels';
import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio';
import { ColumnDef } from '@tanstack/react-table';
import { ClassValue } from 'clsx';
export { FileImage, FileVideo } from 'lucide-react';

declare const buttonVariants: (props?: ({
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined;
    size?: "default" | "sm" | "lg" | "icon" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ButtonProps extends React$1.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}
declare const Button: React$1.ForwardRefExoticComponent<ButtonProps & React$1.RefAttributes<HTMLButtonElement>>;

declare const Input: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> & React$1.RefAttributes<HTMLInputElement>>;

declare const Textarea: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, "ref"> & React$1.RefAttributes<HTMLTextAreaElement>>;

declare const Select: React$1.FC<SelectPrimitive.SelectProps>;
declare const SelectGroup: React$1.ForwardRefExoticComponent<SelectPrimitive.SelectGroupProps & React$1.RefAttributes<HTMLDivElement>>;
declare const SelectValue: React$1.ForwardRefExoticComponent<SelectPrimitive.SelectValueProps & React$1.RefAttributes<HTMLSpanElement>>;
declare const SelectTrigger: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectTriggerProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const SelectScrollUpButton: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectScrollUpButtonProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SelectScrollDownButton: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectScrollDownButtonProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SelectContent: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SelectLabel: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectLabelProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SelectItem: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SelectSeparator: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectSeparatorProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

declare const Checkbox: React$1.ForwardRefExoticComponent<Omit<CheckboxPrimitive.CheckboxProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;

declare const RadioGroup: React$1.ForwardRefExoticComponent<Omit<RadioGroupPrimitive.RadioGroupProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const RadioGroupItem: React$1.ForwardRefExoticComponent<Omit<RadioGroupPrimitive.RadioGroupItemProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;

declare const Switch: React$1.ForwardRefExoticComponent<Omit<SwitchPrimitives.SwitchProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;

declare const Slider: React$1.ForwardRefExoticComponent<Omit<SliderPrimitive.SliderProps & React$1.RefAttributes<HTMLSpanElement>, "ref"> & React$1.RefAttributes<HTMLSpanElement>>;

declare const Label: React$1.ForwardRefExoticComponent<Omit<LabelPrimitive.LabelProps & React$1.RefAttributes<HTMLLabelElement>, "ref"> & VariantProps<(props?: class_variance_authority_types.ClassProp | undefined) => string> & React$1.RefAttributes<HTMLLabelElement>>;

declare const Form: <TFieldValues extends FieldValues, TContext = any, TTransformedValues = TFieldValues>(props: react_hook_form.FormProviderProps<TFieldValues, TContext, TTransformedValues>) => React$1.JSX.Element;
declare const FormField: <TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>({ ...props }: ControllerProps<TFieldValues, TName>) => react_jsx_runtime.JSX.Element;
declare const useFormField: () => {
    invalid: boolean;
    isDirty: boolean;
    isTouched: boolean;
    isValidating: boolean;
    error?: react_hook_form.FieldError;
    id: string;
    name: string;
    formItemId: string;
    formDescriptionId: string;
    formMessageId: string;
};
declare const FormItem: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;
declare const FormLabel: React$1.ForwardRefExoticComponent<Omit<LabelPrimitive.LabelProps & React$1.RefAttributes<HTMLLabelElement>, "ref"> & React$1.RefAttributes<HTMLLabelElement>>;
declare const FormControl: React$1.ForwardRefExoticComponent<Omit<_radix_ui_react_slot.SlotProps & React$1.RefAttributes<HTMLElement>, "ref"> & React$1.RefAttributes<HTMLElement>>;
declare const FormDescription: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLParagraphElement> & React$1.RefAttributes<HTMLParagraphElement>>;
declare const FormMessage: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLParagraphElement> & React$1.RefAttributes<HTMLParagraphElement>>;

declare const Card: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;
declare const CardHeader: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;
declare const CardTitle: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;
declare const CardDescription: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;
declare const CardContent: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;
declare const CardFooter: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;

declare const badgeVariants: (props?: ({
    variant?: "default" | "destructive" | "outline" | "secondary" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface BadgeProps extends React$1.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
}
declare function Badge({ className, variant, ...props }: BadgeProps): react_jsx_runtime.JSX.Element;

declare const Avatar: React$1.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarProps & React$1.RefAttributes<HTMLSpanElement>, "ref"> & React$1.RefAttributes<HTMLSpanElement>>;
declare const AvatarImage: React$1.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarImageProps & React$1.RefAttributes<HTMLImageElement>, "ref"> & React$1.RefAttributes<HTMLImageElement>>;
declare const AvatarFallback: React$1.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarFallbackProps & React$1.RefAttributes<HTMLSpanElement>, "ref"> & React$1.RefAttributes<HTMLSpanElement>>;

declare const Separator: React$1.ForwardRefExoticComponent<Omit<SeparatorPrimitive.SeparatorProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

declare function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;

declare const Progress: React$1.ForwardRefExoticComponent<Omit<ProgressPrimitive.ProgressProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

declare const Alert: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & VariantProps<(props?: ({
    variant?: "default" | "destructive" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & React$1.RefAttributes<HTMLDivElement>>;
declare const AlertTitle: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLHeadingElement> & React$1.RefAttributes<HTMLParagraphElement>>;
declare const AlertDescription: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLParagraphElement> & React$1.RefAttributes<HTMLParagraphElement>>;

declare const TooltipProvider: React$1.FC<TooltipPrimitive.TooltipProviderProps>;
declare const Tooltip: React$1.FC<TooltipPrimitive.TooltipProps>;
declare const TooltipTrigger: React$1.ForwardRefExoticComponent<TooltipPrimitive.TooltipTriggerProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const TooltipContent: React$1.ForwardRefExoticComponent<Omit<TooltipPrimitive.TooltipContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

type SidebarContextProps = {
    state: "expanded" | "collapsed";
    open: boolean;
    setOpen: (open: boolean) => void;
    openMobile: boolean;
    setOpenMobile: (open: boolean) => void;
    isMobile: boolean;
    toggleSidebar: () => void;
};
declare function useSidebar(): SidebarContextProps;
declare const SidebarProvider: React$1.ForwardRefExoticComponent<Omit<React$1.ClassAttributes<HTMLDivElement> & React$1.HTMLAttributes<HTMLDivElement> & {
    defaultOpen?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const Sidebar: React$1.ForwardRefExoticComponent<Omit<React$1.ClassAttributes<HTMLDivElement> & React$1.HTMLAttributes<HTMLDivElement> & {
    side?: "left" | "right";
    variant?: "sidebar" | "floating" | "inset";
    collapsible?: "offcanvas" | "icon" | "none";
}, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SidebarTrigger: React$1.ForwardRefExoticComponent<Omit<ButtonProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const SidebarRail: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const SidebarInset: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLElement>, HTMLElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SidebarInput: React$1.ForwardRefExoticComponent<Omit<Omit<React$1.DetailedHTMLProps<React$1.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> & React$1.RefAttributes<HTMLInputElement>, "ref"> & React$1.RefAttributes<HTMLInputElement>>;
declare const SidebarHeader: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SidebarFooter: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SidebarSeparator: React$1.ForwardRefExoticComponent<Omit<Omit<SeparatorPrimitive.SeparatorProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SidebarContent: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SidebarGroup: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SidebarGroupLabel: React$1.ForwardRefExoticComponent<Omit<React$1.ClassAttributes<HTMLDivElement> & React$1.HTMLAttributes<HTMLDivElement> & {
    asChild?: boolean;
}, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SidebarGroupAction: React$1.ForwardRefExoticComponent<Omit<React$1.ClassAttributes<HTMLButtonElement> & React$1.ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean;
}, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const SidebarGroupContent: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SidebarMenu: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLUListElement>, HTMLUListElement>, "ref"> & React$1.RefAttributes<HTMLUListElement>>;
declare const SidebarMenuItem: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "ref"> & React$1.RefAttributes<HTMLLIElement>>;
declare const SidebarMenuButton: React$1.ForwardRefExoticComponent<Omit<React$1.ClassAttributes<HTMLButtonElement> & React$1.ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean;
    isActive?: boolean;
    tooltip?: string | React$1.ComponentProps<typeof TooltipContent>;
} & VariantProps<(props?: ({
    variant?: "default" | "outline" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const SidebarMenuAction: React$1.ForwardRefExoticComponent<Omit<React$1.ClassAttributes<HTMLButtonElement> & React$1.ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean;
    showOnHover?: boolean;
}, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const SidebarMenuBadge: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SidebarMenuSkeleton: React$1.ForwardRefExoticComponent<Omit<React$1.ClassAttributes<HTMLDivElement> & React$1.HTMLAttributes<HTMLDivElement> & {
    showIcon?: boolean;
}, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SidebarMenuSub: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLUListElement>, HTMLUListElement>, "ref"> & React$1.RefAttributes<HTMLUListElement>>;
declare const SidebarMenuSubItem: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "ref"> & React$1.RefAttributes<HTMLLIElement>>;
declare const SidebarMenuSubButton: React$1.ForwardRefExoticComponent<Omit<React$1.ClassAttributes<HTMLAnchorElement> & React$1.AnchorHTMLAttributes<HTMLAnchorElement> & {
    asChild?: boolean;
    size?: "sm" | "md";
    isActive?: boolean;
}, "ref"> & React$1.RefAttributes<HTMLAnchorElement>>;

declare const Tabs: React$1.ForwardRefExoticComponent<TabsPrimitive.TabsProps & React$1.RefAttributes<HTMLDivElement>>;
declare const TabsList: React$1.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsListProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const TabsTrigger: React$1.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsTriggerProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const TabsContent: React$1.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

declare const Breadcrumb: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLElement>, HTMLElement>, "ref"> & {
    separator?: React$1.ReactNode;
} & React$1.RefAttributes<HTMLElement>>;
declare const BreadcrumbList: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>, "ref"> & React$1.RefAttributes<HTMLOListElement>>;
declare const BreadcrumbItem: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "ref"> & React$1.RefAttributes<HTMLLIElement>>;
declare const BreadcrumbLink: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "ref"> & {
    asChild?: boolean;
} & React$1.RefAttributes<HTMLAnchorElement>>;
declare const BreadcrumbPage: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "ref"> & React$1.RefAttributes<HTMLSpanElement>>;
declare const BreadcrumbSeparator: {
    ({ children, className, ...props }: React$1.ComponentProps<"li">): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const BreadcrumbEllipsis: {
    ({ className, ...props }: React$1.ComponentProps<"span">): react_jsx_runtime.JSX.Element;
    displayName: string;
};

declare const NavigationMenu: React$1.ForwardRefExoticComponent<Omit<NavigationMenuPrimitive.NavigationMenuProps & React$1.RefAttributes<HTMLElement>, "ref"> & React$1.RefAttributes<HTMLElement>>;
declare const NavigationMenuList: React$1.ForwardRefExoticComponent<Omit<NavigationMenuPrimitive.NavigationMenuListProps & React$1.RefAttributes<HTMLUListElement>, "ref"> & React$1.RefAttributes<HTMLUListElement>>;
declare const NavigationMenuItem: React$1.ForwardRefExoticComponent<NavigationMenuPrimitive.NavigationMenuItemProps & React$1.RefAttributes<HTMLLIElement>>;
declare const navigationMenuTriggerStyle: (props?: class_variance_authority_types.ClassProp | undefined) => string;
declare const NavigationMenuTrigger: React$1.ForwardRefExoticComponent<Omit<NavigationMenuPrimitive.NavigationMenuTriggerProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const NavigationMenuContent: React$1.ForwardRefExoticComponent<Omit<NavigationMenuPrimitive.NavigationMenuContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const NavigationMenuLink: React$1.ForwardRefExoticComponent<NavigationMenuPrimitive.NavigationMenuLinkProps & React$1.RefAttributes<HTMLAnchorElement>>;
declare const NavigationMenuViewport: React$1.ForwardRefExoticComponent<Omit<NavigationMenuPrimitive.NavigationMenuViewportProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const NavigationMenuIndicator: React$1.ForwardRefExoticComponent<Omit<NavigationMenuPrimitive.NavigationMenuIndicatorProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

declare const DropdownMenu: React$1.FC<DropdownMenuPrimitive.DropdownMenuProps>;
declare const DropdownMenuTrigger: React$1.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuTriggerProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const DropdownMenuGroup: React$1.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuGroupProps & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuPortal: React$1.FC<DropdownMenuPrimitive.DropdownMenuPortalProps>;
declare const DropdownMenuSub: React$1.FC<DropdownMenuPrimitive.DropdownMenuSubProps>;
declare const DropdownMenuRadioGroup: React$1.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuRadioGroupProps & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuSubTrigger: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSubTriggerProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuSubContent: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSubContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuContent: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuItem: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuCheckboxItem: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuCheckboxItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuRadioItem: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuRadioItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuLabel: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuLabelProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuSeparator: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSeparatorProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuShortcut: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLSpanElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};

declare function MenubarMenu({ ...props }: React$1.ComponentProps<typeof MenubarPrimitive.Menu>): react_jsx_runtime.JSX.Element;
declare function MenubarGroup({ ...props }: React$1.ComponentProps<typeof MenubarPrimitive.Group>): react_jsx_runtime.JSX.Element;
declare function MenubarPortal({ ...props }: React$1.ComponentProps<typeof MenubarPrimitive.Portal>): react_jsx_runtime.JSX.Element;
declare function MenubarRadioGroup({ ...props }: React$1.ComponentProps<typeof MenubarPrimitive.RadioGroup>): react_jsx_runtime.JSX.Element;
declare function MenubarSub({ ...props }: React$1.ComponentProps<typeof MenubarPrimitive.Sub>): react_jsx_runtime.JSX.Element;
declare const Menubar: React$1.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const MenubarTrigger: React$1.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarTriggerProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const MenubarSubTrigger: React$1.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarSubTriggerProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React$1.RefAttributes<HTMLDivElement>>;
declare const MenubarSubContent: React$1.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarSubContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const MenubarContent: React$1.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const MenubarItem: React$1.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React$1.RefAttributes<HTMLDivElement>>;
declare const MenubarCheckboxItem: React$1.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarCheckboxItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const MenubarRadioItem: React$1.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarRadioItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const MenubarLabel: React$1.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarLabelProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React$1.RefAttributes<HTMLDivElement>>;
declare const MenubarSeparator: React$1.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarSeparatorProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const MenubarShortcut: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLSpanElement>): react_jsx_runtime.JSX.Element;
    displayname: string;
};

declare const Command: React$1.ForwardRefExoticComponent<Omit<{
    children?: React$1.ReactNode;
} & Pick<Pick<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React$1.HTMLAttributes<HTMLDivElement>> & {
    ref?: React$1.Ref<HTMLDivElement>;
} & {
    asChild?: boolean;
}, "asChild" | "key" | keyof React$1.HTMLAttributes<HTMLDivElement>> & {
    label?: string;
    shouldFilter?: boolean;
    filter?: (value: string, search: string, keywords?: string[]) => number;
    defaultValue?: string;
    value?: string;
    onValueChange?: (value: string) => void;
    loop?: boolean;
    disablePointerSelection?: boolean;
    vimBindings?: boolean;
} & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const CommandDialog: ({ children, ...props }: DialogProps) => react_jsx_runtime.JSX.Element;
declare const CommandInput: React$1.ForwardRefExoticComponent<Omit<Omit<Pick<Pick<React$1.DetailedHTMLProps<React$1.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "key" | keyof React$1.InputHTMLAttributes<HTMLInputElement>> & {
    ref?: React$1.Ref<HTMLInputElement>;
} & {
    asChild?: boolean;
}, "asChild" | "key" | keyof React$1.InputHTMLAttributes<HTMLInputElement>>, "type" | "value" | "onChange"> & {
    value?: string;
    onValueChange?: (search: string) => void;
} & React$1.RefAttributes<HTMLInputElement>, "ref"> & React$1.RefAttributes<HTMLInputElement>>;
declare const CommandList: React$1.ForwardRefExoticComponent<Omit<{
    children?: React$1.ReactNode;
} & Pick<Pick<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React$1.HTMLAttributes<HTMLDivElement>> & {
    ref?: React$1.Ref<HTMLDivElement>;
} & {
    asChild?: boolean;
}, "asChild" | "key" | keyof React$1.HTMLAttributes<HTMLDivElement>> & {
    label?: string;
} & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const CommandEmpty: React$1.ForwardRefExoticComponent<Omit<{
    children?: React$1.ReactNode;
} & Pick<Pick<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React$1.HTMLAttributes<HTMLDivElement>> & {
    ref?: React$1.Ref<HTMLDivElement>;
} & {
    asChild?: boolean;
}, "asChild" | "key" | keyof React$1.HTMLAttributes<HTMLDivElement>> & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const CommandGroup: React$1.ForwardRefExoticComponent<Omit<{
    children?: React$1.ReactNode;
} & Omit<Pick<Pick<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React$1.HTMLAttributes<HTMLDivElement>> & {
    ref?: React$1.Ref<HTMLDivElement>;
} & {
    asChild?: boolean;
}, "asChild" | "key" | keyof React$1.HTMLAttributes<HTMLDivElement>>, "value" | "heading"> & {
    heading?: React$1.ReactNode;
    value?: string;
    forceMount?: boolean;
} & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const CommandSeparator: React$1.ForwardRefExoticComponent<Omit<Pick<Pick<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React$1.HTMLAttributes<HTMLDivElement>> & {
    ref?: React$1.Ref<HTMLDivElement>;
} & {
    asChild?: boolean;
}, "asChild" | "key" | keyof React$1.HTMLAttributes<HTMLDivElement>> & {
    alwaysRender?: boolean;
} & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const CommandItem: React$1.ForwardRefExoticComponent<Omit<{
    children?: React$1.ReactNode;
} & Omit<Pick<Pick<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React$1.HTMLAttributes<HTMLDivElement>> & {
    ref?: React$1.Ref<HTMLDivElement>;
} & {
    asChild?: boolean;
}, "asChild" | "key" | keyof React$1.HTMLAttributes<HTMLDivElement>>, "disabled" | "value" | "onSelect"> & {
    disabled?: boolean;
    onSelect?: (value: string) => void;
    value?: string;
    keywords?: string[];
    forceMount?: boolean;
} & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const CommandShortcut: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLSpanElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};

declare const Pagination: {
    ({ className, ...props }: React$1.ComponentProps<"nav">): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const PaginationContent: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLUListElement>, HTMLUListElement>, "ref"> & React$1.RefAttributes<HTMLUListElement>>;
declare const PaginationItem: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "ref"> & React$1.RefAttributes<HTMLLIElement>>;
type PaginationLinkProps = {
    isActive?: boolean;
} & Pick<ButtonProps, "size"> & React$1.ComponentProps<"a">;
declare const PaginationLink: {
    ({ className, isActive, size, ...props }: PaginationLinkProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const PaginationPrevious: {
    ({ className, ...props }: React$1.ComponentProps<typeof PaginationLink>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const PaginationNext: {
    ({ className, ...props }: React$1.ComponentProps<typeof PaginationLink>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const PaginationEllipsis: {
    ({ className, ...props }: React$1.ComponentProps<"span">): react_jsx_runtime.JSX.Element;
    displayName: string;
};

declare const Dialog: React$1.FC<DialogPrimitive.DialogProps>;
declare const DialogTrigger: React$1.ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const DialogPortal: React$1.FC<DialogPrimitive.DialogPortalProps>;
declare const DialogClose: React$1.ForwardRefExoticComponent<DialogPrimitive.DialogCloseProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const DialogOverlay: React$1.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogOverlayProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DialogContent: React$1.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DialogHeader: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const DialogFooter: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const DialogTitle: React$1.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogTitleProps & React$1.RefAttributes<HTMLHeadingElement>, "ref"> & React$1.RefAttributes<HTMLHeadingElement>>;
declare const DialogDescription: React$1.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogDescriptionProps & React$1.RefAttributes<HTMLParagraphElement>, "ref"> & React$1.RefAttributes<HTMLParagraphElement>>;

declare const Sheet: React$1.FC<DialogPrimitive.DialogProps>;
declare const SheetTrigger: React$1.ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const SheetClose: React$1.ForwardRefExoticComponent<DialogPrimitive.DialogCloseProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const SheetPortal: React$1.FC<DialogPrimitive.DialogPortalProps>;
declare const SheetOverlay: React$1.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogOverlayProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const sheetVariants: (props?: ({
    side?: "top" | "right" | "bottom" | "left" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface SheetContentProps extends React$1.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>, VariantProps<typeof sheetVariants> {
}
declare const SheetContent: React$1.ForwardRefExoticComponent<SheetContentProps & React$1.RefAttributes<HTMLDivElement>>;
declare const SheetHeader: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const SheetFooter: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const SheetTitle: React$1.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogTitleProps & React$1.RefAttributes<HTMLHeadingElement>, "ref"> & React$1.RefAttributes<HTMLHeadingElement>>;
declare const SheetDescription: React$1.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogDescriptionProps & React$1.RefAttributes<HTMLParagraphElement>, "ref"> & React$1.RefAttributes<HTMLParagraphElement>>;

declare const Drawer: {
    ({ shouldScaleBackground, ...props }: React$1.ComponentProps<typeof Drawer$1.Root>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const DrawerTrigger: React$1.ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const DrawerPortal: typeof vaul.Portal;
declare const DrawerClose: React$1.ForwardRefExoticComponent<DialogPrimitive.DialogCloseProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const DrawerOverlay: React$1.ForwardRefExoticComponent<Omit<Omit<DialogPrimitive.DialogOverlayProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DrawerContent: React$1.ForwardRefExoticComponent<Omit<Omit<DialogPrimitive.DialogContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DrawerHeader: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const DrawerFooter: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const DrawerTitle: React$1.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogTitleProps & React$1.RefAttributes<HTMLHeadingElement>, "ref"> & React$1.RefAttributes<HTMLHeadingElement>>;
declare const DrawerDescription: React$1.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogDescriptionProps & React$1.RefAttributes<HTMLParagraphElement>, "ref"> & React$1.RefAttributes<HTMLParagraphElement>>;

declare const Popover: React$1.FC<PopoverPrimitive.PopoverProps>;
declare const PopoverTrigger: React$1.ForwardRefExoticComponent<PopoverPrimitive.PopoverTriggerProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const PopoverAnchor: React$1.ForwardRefExoticComponent<PopoverPrimitive.PopoverAnchorProps & React$1.RefAttributes<HTMLDivElement>>;
declare const PopoverContent: React$1.ForwardRefExoticComponent<Omit<PopoverPrimitive.PopoverContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

declare const HoverCard: React$1.FC<HoverCardPrimitive.HoverCardProps>;
declare const HoverCardTrigger: React$1.ForwardRefExoticComponent<HoverCardPrimitive.HoverCardTriggerProps & React$1.RefAttributes<HTMLAnchorElement>>;
declare const HoverCardContent: React$1.ForwardRefExoticComponent<Omit<HoverCardPrimitive.HoverCardContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

declare const AlertDialog: React$1.FC<AlertDialogPrimitive.AlertDialogProps>;
declare const AlertDialogTrigger: React$1.ForwardRefExoticComponent<AlertDialogPrimitive.AlertDialogTriggerProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const AlertDialogPortal: React$1.FC<AlertDialogPrimitive.AlertDialogPortalProps>;
declare const AlertDialogOverlay: React$1.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogOverlayProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const AlertDialogContent: React$1.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const AlertDialogHeader: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const AlertDialogFooter: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const AlertDialogTitle: React$1.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogTitleProps & React$1.RefAttributes<HTMLHeadingElement>, "ref"> & React$1.RefAttributes<HTMLHeadingElement>>;
declare const AlertDialogDescription: React$1.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogDescriptionProps & React$1.RefAttributes<HTMLParagraphElement>, "ref"> & React$1.RefAttributes<HTMLParagraphElement>>;
declare const AlertDialogAction: React$1.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogActionProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const AlertDialogCancel: React$1.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogCancelProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;

type ToasterProps = React.ComponentProps<typeof Toaster$1>;
declare const Toaster: ({ ...props }: ToasterProps) => react_jsx_runtime.JSX.Element;

declare const Table: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLTableElement> & React$1.RefAttributes<HTMLTableElement>>;
declare const TableHeader: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLTableSectionElement> & React$1.RefAttributes<HTMLTableSectionElement>>;
declare const TableBody: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLTableSectionElement> & React$1.RefAttributes<HTMLTableSectionElement>>;
declare const TableFooter: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLTableSectionElement> & React$1.RefAttributes<HTMLTableSectionElement>>;
declare const TableRow: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLTableRowElement> & React$1.RefAttributes<HTMLTableRowElement>>;
declare const TableHead: React$1.ForwardRefExoticComponent<React$1.ThHTMLAttributes<HTMLTableCellElement> & React$1.RefAttributes<HTMLTableCellElement>>;
declare const TableCell: React$1.ForwardRefExoticComponent<React$1.TdHTMLAttributes<HTMLTableCellElement> & React$1.RefAttributes<HTMLTableCellElement>>;
declare const TableCaption: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLTableCaptionElement> & React$1.RefAttributes<HTMLTableCaptionElement>>;

declare function Calendar({ className, classNames, showOutsideDays, captionLayout, buttonVariant, formatters, components, ...props }: React$1.ComponentProps<typeof DayPicker> & {
    buttonVariant?: React$1.ComponentProps<typeof Button>["variant"];
}): react_jsx_runtime.JSX.Element;
declare function CalendarDayButton({ className, day, modifiers, ...props }: React$1.ComponentProps<typeof DayButton>): react_jsx_runtime.JSX.Element;

declare const THEMES: {
    readonly light: "";
    readonly dark: ".dark";
};
type ChartConfig = {
    [k in string]: {
        label?: React$1.ReactNode;
        icon?: React$1.ComponentType;
    } & ({
        color?: string;
        theme?: never;
    } | {
        color?: never;
        theme: Record<keyof typeof THEMES, string>;
    });
};
declare const ChartContainer: React$1.ForwardRefExoticComponent<Omit<React$1.ClassAttributes<HTMLDivElement> & React$1.HTMLAttributes<HTMLDivElement> & {
    config: ChartConfig;
    children: React$1.ComponentProps<typeof RechartsPrimitive.ResponsiveContainer>["children"];
}, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const ChartStyle: ({ id, config }: {
    id: string;
    config: ChartConfig;
}) => react_jsx_runtime.JSX.Element | null;
declare const ChartTooltip: typeof RechartsPrimitive.Tooltip;
declare const ChartTooltipContent: React$1.ForwardRefExoticComponent<Omit<RechartsPrimitive.DefaultTooltipContentProps<recharts_types_component_DefaultTooltipContent.ValueType, recharts_types_component_DefaultTooltipContent.NameType> & {
    accessibilityLayer?: boolean;
    active?: boolean | undefined;
    includeHidden?: boolean | undefined;
    allowEscapeViewBox?: recharts_types_util_types.AllowInDimension;
    animationDuration?: recharts_types_util_types.AnimationDuration;
    animationEasing?: recharts_types_util_types.AnimationTiming;
    content?: recharts_types_component_Tooltip.ContentType<recharts_types_component_DefaultTooltipContent.ValueType, recharts_types_component_DefaultTooltipContent.NameType> | undefined;
    coordinate?: Partial<recharts_types_util_types.Coordinate>;
    cursor?: boolean | React$1.ReactElement | React$1.SVGProps<SVGElement>;
    filterNull?: boolean;
    defaultIndex?: number;
    isAnimationActive?: boolean;
    offset?: number;
    payloadUniqBy?: recharts_types_util_payload_getUniqPayload.UniqueOption<recharts_types_component_DefaultTooltipContent.Payload<recharts_types_component_DefaultTooltipContent.ValueType, recharts_types_component_DefaultTooltipContent.NameType>> | undefined;
    position?: Partial<recharts_types_util_types.Coordinate>;
    reverseDirection?: recharts_types_util_types.AllowInDimension;
    shared?: boolean;
    trigger?: "hover" | "click";
    useTranslate3d?: boolean;
    viewBox?: recharts_types_util_types.CartesianViewBox;
    wrapperStyle?: React$1.CSSProperties;
} & React$1.ClassAttributes<HTMLDivElement> & React$1.HTMLAttributes<HTMLDivElement> & {
    hideLabel?: boolean;
    hideIndicator?: boolean;
    indicator?: "line" | "dot" | "dashed";
    nameKey?: string;
    labelKey?: string;
}, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const ChartLegend: typeof RechartsPrimitive.Legend;
declare const ChartLegendContent: React$1.ForwardRefExoticComponent<Omit<React$1.ClassAttributes<HTMLDivElement> & React$1.HTMLAttributes<HTMLDivElement> & Pick<RechartsPrimitive.LegendProps, "payload" | "verticalAlign"> & {
    hideIcon?: boolean;
    nameKey?: string;
}, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

declare const Accordion: React$1.ForwardRefExoticComponent<(AccordionPrimitive.AccordionSingleProps | AccordionPrimitive.AccordionMultipleProps) & React$1.RefAttributes<HTMLDivElement>>;
declare const AccordionItem: React$1.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const AccordionTrigger: React$1.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionTriggerProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const AccordionContent: React$1.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

declare const Collapsible: React$1.ForwardRefExoticComponent<CollapsiblePrimitive.CollapsibleProps & React$1.RefAttributes<HTMLDivElement>>;
declare const CollapsibleTrigger: React$1.ForwardRefExoticComponent<CollapsiblePrimitive.CollapsibleTriggerProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const CollapsibleContent: React$1.ForwardRefExoticComponent<CollapsiblePrimitive.CollapsibleContentProps & React$1.RefAttributes<HTMLDivElement>>;

declare const ScrollArea: React$1.ForwardRefExoticComponent<Omit<ScrollAreaPrimitive.ScrollAreaProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const ScrollBar: React$1.ForwardRefExoticComponent<Omit<ScrollAreaPrimitive.ScrollAreaScrollbarProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

declare const toggleVariants: (props?: ({
    variant?: "default" | "outline" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare const Toggle: React$1.ForwardRefExoticComponent<Omit<TogglePrimitive.ToggleProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & VariantProps<(props?: ({
    variant?: "default" | "outline" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & React$1.RefAttributes<HTMLButtonElement>>;

declare const ToggleGroup: React$1.ForwardRefExoticComponent<((Omit<ToggleGroupPrimitive.ToggleGroupSingleProps & React$1.RefAttributes<HTMLDivElement>, "ref"> | Omit<ToggleGroupPrimitive.ToggleGroupMultipleProps & React$1.RefAttributes<HTMLDivElement>, "ref">) & VariantProps<(props?: ({
    variant?: "default" | "outline" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string>) & React$1.RefAttributes<HTMLDivElement>>;
declare const ToggleGroupItem: React$1.ForwardRefExoticComponent<Omit<ToggleGroupPrimitive.ToggleGroupItemProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & VariantProps<(props?: ({
    variant?: "default" | "outline" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & React$1.RefAttributes<HTMLButtonElement>>;

declare const ResizablePanelGroup: ({ className, ...props }: React.ComponentProps<typeof Group>) => react_jsx_runtime.JSX.Element;
declare const ResizablePanel: typeof Panel;
declare const ResizableHandle: ({ withHandle, className, ...props }: React.ComponentProps<typeof Separator$1> & {
    withHandle?: boolean;
}) => react_jsx_runtime.JSX.Element;

declare const AspectRatio: React$1.ForwardRefExoticComponent<AspectRatioPrimitive.AspectRatioProps & React$1.RefAttributes<HTMLDivElement>>;

interface DesignTokensProps {
    /** このGoのプライマリカラー（例: "#E74C3C"） */
    primaryColor?: string;
    /** ホバー時のプライマリカラー。省略時は primaryColor をそのまま使用 */
    primaryColorHover?: string;
}
/**
 * Goシリーズ共通デザイントークンを <style> タグとして注入するコンポーネント。
 *
 * Tailwind v4 + Turbopack 環境では CSS ファイルを node_modules から
 * @import すると PostCSS エラーが発生するため、このコンポーネントを使う。
 *
 * 使い方（app/layout.tsx）:
 *   import { DesignTokens } from '@takaki/go-design-system'
 *
 *   export default function RootLayout({ children }) {
 *     return (
 *       <html lang="ja">
 *         <head>
 *           <DesignTokens primaryColor="#E74C3C" primaryColorHover="#C0392B" />
 *         </head>
 *         <body>{children}</body>
 *       </html>
 *     )
 *   }
 */
declare function DesignTokens({ primaryColor, primaryColorHover }: DesignTokensProps): react_jsx_runtime.JSX.Element;

declare const sizeMap$1: {
    readonly sm: 16;
    readonly md: 24;
    readonly lg: 32;
    readonly xl: 48;
};
interface SpinnerProps extends React$1.HTMLAttributes<SVGSVGElement> {
    size?: keyof typeof sizeMap$1;
    color?: "current" | "primary";
    "aria-label"?: string;
}
declare function Spinner({ size, color, className, "aria-label": ariaLabel, ...props }: SpinnerProps): react_jsx_runtime.JSX.Element;

declare const variantConfig: {
    readonly default: {
        readonly container: "bg-surface-subtle border-border text-foreground";
        readonly icon: react_jsx_runtime.JSX.Element;
    };
    readonly info: {
        readonly container: "bg-[color:var(--color-info-subtle)] border-[color:var(--color-info)] text-foreground";
        readonly icon: react_jsx_runtime.JSX.Element;
    };
    readonly success: {
        readonly container: "bg-[color:var(--color-success-subtle)] border-[color:var(--color-success)] text-foreground";
        readonly icon: react_jsx_runtime.JSX.Element;
    };
    readonly warning: {
        readonly container: "bg-[color:var(--color-warning-subtle)] border-[color:var(--color-warning)] text-foreground";
        readonly icon: react_jsx_runtime.JSX.Element;
    };
    readonly danger: {
        readonly container: "bg-[color:var(--color-danger-subtle)] border-[color:var(--color-danger)] text-foreground";
        readonly icon: react_jsx_runtime.JSX.Element;
    };
};
interface BannerProps extends React$1.HTMLAttributes<HTMLDivElement> {
    variant?: keyof typeof variantConfig;
    title?: string;
    description?: string;
    action?: {
        label: string;
        onClick: () => void;
    };
    dismissible?: boolean;
    onDismiss?: () => void;
}
declare function Banner({ variant, title, description, action, dismissible, onDismiss, className, children, ...props }: BannerProps): react_jsx_runtime.JSX.Element | null;

interface EmptyStateProps extends React$1.HTMLAttributes<HTMLDivElement> {
    icon?: React$1.ReactNode;
    title: string;
    description?: string;
    action?: {
        label: string;
        onClick: () => void;
        variant?: React$1.ComponentPropsWithoutRef<typeof Button>["variant"];
    };
    secondaryAction?: {
        label: string;
        onClick: () => void;
    };
}
declare function EmptyState({ icon, title, description, action, secondaryAction, className, ...props }: EmptyStateProps): react_jsx_runtime.JSX.Element;

interface DatePickerProps {
    value?: Date;
    onChange?: (date: Date | undefined) => void;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
    /** Dates to disable in the calendar */
    disabledDates?: (date: Date) => boolean;
    fromDate?: Date;
    toDate?: Date;
}
declare function DatePicker({ value, onChange, placeholder, disabled, className, disabledDates, fromDate, toDate, }: DatePickerProps): react_jsx_runtime.JSX.Element;
interface DateRangePickerProps {
    value?: DateRange;
    onChange?: (range: DateRange | undefined) => void;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
    disabledDates?: (date: Date) => boolean;
    fromDate?: Date;
    toDate?: Date;
}
declare function DateRangePicker({ value, onChange, placeholder, disabled, className, disabledDates, fromDate, toDate, }: DateRangePickerProps): react_jsx_runtime.JSX.Element;

interface InlineEditProps {
    value: string;
    onChange: (value: string) => void;
    validate?: (value: string) => string | undefined;
    placeholder?: string;
    multiline?: boolean;
    disabled?: boolean;
    className?: string;
    inputClassName?: string;
    renderDisplay?: (value: string) => React$1.ReactNode;
}
declare function InlineEdit({ value, onChange, validate, placeholder, multiline, disabled, className, inputClassName, renderDisplay, }: InlineEditProps): react_jsx_runtime.JSX.Element;

type FileAccept = "image" | "video" | "image-or-video";
interface FileUploadProps {
    accept?: FileAccept;
    maxSize?: number;
    maxFiles?: number;
    onUpload: (files: File[]) => Promise<void> | void;
    disabled?: boolean;
    className?: string;
}
declare function FileUpload({ accept, maxSize, maxFiles, onUpload, disabled, className, }: FileUploadProps): react_jsx_runtime.JSX.Element;

interface HeadingProps extends React$1.HTMLAttributes<HTMLHeadingElement> {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    as?: React$1.ElementType;
}
declare function Heading({ level, as, className, children, ...props }: HeadingProps): react_jsx_runtime.JSX.Element;
declare const textSizes: {
    readonly xs: "text-xs";
    readonly sm: "text-sm";
    readonly base: "text-base";
    readonly lg: "text-lg";
    readonly xl: "text-xl";
};
declare const textWeights: {
    readonly normal: "font-normal";
    readonly medium: "font-medium";
    readonly semibold: "font-semibold";
    readonly bold: "font-bold";
};
declare const textColors: {
    readonly default: "text-foreground";
    readonly muted: "text-muted-foreground";
    readonly primary: "text-primary";
    readonly success: "text-[color:var(--color-success)]";
    readonly warning: "text-[color:var(--color-warning)]";
    readonly danger: "text-[color:var(--color-danger)]";
};
interface TextProps extends React$1.HTMLAttributes<HTMLElement> {
    size?: keyof typeof textSizes;
    weight?: keyof typeof textWeights;
    color?: keyof typeof textColors;
    as?: React$1.ElementType;
}
declare function Text({ size, weight, color, as: Tag, className, children, ...props }: TextProps): react_jsx_runtime.JSX.Element;
interface MetricTextProps extends React$1.HTMLAttributes<HTMLDivElement> {
    value: string | number;
    unit?: string;
    trend?: {
        direction: "up" | "down" | "neutral";
        label: string;
        positive?: boolean;
    };
    size?: "sm" | "md" | "lg";
}
declare function MetricText({ value, unit, trend, size, className, ...props }: MetricTextProps): react_jsx_runtime.JSX.Element;

declare const sizeMap: {
    readonly sm: 32;
    readonly md: 48;
    readonly lg: 64;
    readonly xl: 96;
};
declare const colorMap: {
    readonly primary: "var(--color-primary)";
    readonly success: "var(--color-success)";
    readonly warning: "var(--color-warning)";
    readonly danger: "var(--color-danger)";
};
interface ProgressCircularProps extends React$1.SVGAttributes<SVGSVGElement> {
    value: number;
    size?: keyof typeof sizeMap;
    color?: keyof typeof colorMap;
    showLabel?: boolean;
    strokeWidth?: number;
}
declare function ProgressCircular({ value, size, color, showLabel, strokeWidth, className, ...props }: ProgressCircularProps): react_jsx_runtime.JSX.Element;

interface StepperStep {
    title: string;
    description?: string;
    status?: "completed" | "current" | "upcoming";
}
interface StepperProps {
    steps: StepperStep[];
    currentStep?: number;
    orientation?: "horizontal" | "vertical";
    className?: string;
}
declare function Stepper({ steps, currentStep, orientation, className }: StepperProps): react_jsx_runtime.JSX.Element;

interface SectionProps extends React$1.HTMLAttributes<HTMLElement> {
    title?: string;
    description?: string;
    actions?: React$1.ReactNode;
    variant?: "default" | "bordered" | "elevated";
    divider?: boolean;
    as?: React$1.ElementType;
}
declare function Section({ title, description, actions, variant, divider, as: Tag, className, children, ...props }: SectionProps): react_jsx_runtime.JSX.Element;

declare const colorVariants: {
    readonly default: "bg-surface-subtle text-foreground border-border";
    readonly primary: "bg-[color:var(--color-primary)]/10 text-primary border-primary/30";
    readonly success: "bg-[color:var(--color-success-subtle)] text-[color:var(--color-success)] border-[color:var(--color-success)]/30";
    readonly warning: "bg-[color:var(--color-warning-subtle)] text-[color:var(--color-warning)] border-[color:var(--color-warning)]/30";
    readonly danger: "bg-[color:var(--color-danger-subtle)] text-[color:var(--color-danger)] border-[color:var(--color-danger)]/30";
    readonly info: "bg-[color:var(--color-info-subtle)] text-[color:var(--color-info)] border-[color:var(--color-info)]/30";
};
interface TagProps extends React$1.HTMLAttributes<HTMLSpanElement> {
    color?: keyof typeof colorVariants;
    removable?: boolean;
    onRemove?: () => void;
}
declare function Tag({ color, removable, onRemove, className, children, ...props }: TagProps): react_jsx_runtime.JSX.Element;
interface TagGroupProps extends React$1.HTMLAttributes<HTMLDivElement> {
    wrap?: boolean;
}
declare function TagGroup({ wrap, className, children, ...props }: TagGroupProps): react_jsx_runtime.JSX.Element;

interface DndProviderProps {
    items: string[];
    onReorder: (items: string[]) => void;
    children: React$1.ReactNode;
}
declare function DndProvider({ items, onReorder, children }: DndProviderProps): react_jsx_runtime.JSX.Element;
interface SortableItemProps {
    id: string;
    children: React$1.ReactNode;
    className?: string;
}
declare function SortableItem({ id, children, className }: SortableItemProps): react_jsx_runtime.JSX.Element;
interface DragHandleProps extends React$1.HTMLAttributes<HTMLButtonElement> {
}
declare function DragHandle({ className, ...props }: DragHandleProps): react_jsx_runtime.JSX.Element;

interface AppInfo {
    name: string;
    url: string;
    color: string;
}
interface NavSubItem {
    title: string;
    url: string;
    isActive?: boolean;
}
interface NavItem {
    title: string;
    url: string;
    icon?: React$1.ElementType;
    isActive?: boolean;
    items?: NavSubItem[];
}
interface AppSwitcherProps {
    currentApp: string;
    apps: AppInfo[];
    /** 遷移処理を外から注入。省略時は window.location.href を使用 */
    onNavigate?: (url: string) => void;
}
interface AppSidebarProps extends React$1.ComponentProps<typeof Sidebar> {
    currentApp: string;
    apps: AppInfo[];
    navItems: NavItem[];
    logo?: React$1.ReactNode;
    searchPlaceholder?: string;
    onNavigate?: (url: string) => void;
}
declare function SearchForm({ placeholder, ...props }: React$1.ComponentProps<"form"> & {
    placeholder?: string;
}): react_jsx_runtime.JSX.Element;
declare function AppSwitcher({ currentApp, apps, onNavigate, }: AppSwitcherProps): react_jsx_runtime.JSX.Element;
declare function AppSidebar({ currentApp, apps, navItems, logo, searchPlaceholder, onNavigate, ...props }: AppSidebarProps): react_jsx_runtime.JSX.Element;

interface CardTrend {
    value: string;
    direction: "up" | "down" | "neutral";
}
interface KpiCard {
    title: string;
    value: string | number;
    description?: string;
    trend?: CardTrend;
    icon?: React$1.ReactNode;
}
interface SectionCardsProps {
    cards: KpiCard[];
}
declare function SectionCards({ cards }: SectionCardsProps): react_jsx_runtime.JSX.Element;

interface TimeRangeOption {
    label: string;
    value: string;
    /** X軸のキーの値が ISO 日付文字列の場合に使う遡り日数 */
    daysBack?: number;
}
interface ChartAreaProps {
    /** recharts 用の行データ配列 */
    data: Record<string, unknown>[];
    /** shadcn/ui ChartConfig */
    config: ChartConfig;
    /** X軸に使うデータキー */
    xKey: string;
    /** 面グラフとして描画するデータキー群 */
    yKeys: string[];
    title?: string;
    description?: string;
    /**
     * 時間レンジ切り替えボタンの設定。
     * 省略するとフィルタリングなし（全データを表示）。
     */
    timeRanges?: TimeRangeOption[];
    defaultRange?: string;
    /**
     * xKey の値が ISO 日付文字列のとき、選択レンジ（daysBack）でフィルタする。
     * xKey が日付でない場合は false を渡してフィルタを無効化。
     * デフォルト: true
     */
    filterByDate?: boolean;
    /** X軸ラベルのフォーマッター */
    xTickFormatter?: (value: string) => string;
    /** ツールチップのラベルフォーマッター */
    tooltipLabelFormatter?: (value: string) => string;
}
declare function ChartArea({ data, config, xKey, yKeys, title, description, timeRanges, defaultRange, filterByDate, xTickFormatter, tooltipLabelFormatter, }: ChartAreaProps): react_jsx_runtime.JSX.Element;

interface DataTableProps<TData> {
    columns: ColumnDef<TData>[];
    data: TData[];
    /** 検索ボックスを表示し、指定したカラム ID でフィルタリング */
    searchable?: boolean | {
        columnId: string;
        placeholder?: string;
    };
    pageSize?: number;
    /** ページサイズ選択肢（省略時: [10, 20, 50]） */
    pageSizeOptions?: number[];
    /** 空時のメッセージ */
    emptyMessage?: string;
}
declare function DataTable<TData>({ columns, data, searchable, pageSize, pageSizeOptions, emptyMessage, }: DataTableProps<TData>): react_jsx_runtime.JSX.Element;

interface DashboardPageProps {
    /** KPIカード群 */
    cards?: SectionCardsProps["cards"];
    /** エリアチャートの設定 */
    chart?: ChartAreaProps;
    /** データテーブルの設定 */
    table?: {
        columns: ColumnDef<any>[];
        data: any[];
        searchable?: boolean | {
            columnId: string;
            placeholder?: string;
        };
        pageSize?: number;
        emptyMessage?: string;
    };
    /** ページ固有のカスタムセクションを自由に追加 */
    children?: React$1.ReactNode;
}
declare function DashboardPage({ cards, chart, table, children, }: DashboardPageProps): react_jsx_runtime.JSX.Element;

interface LoginPageProps {
    /** プロダクト名（例: "NativeGo"） */
    productName: string;
    /** ロゴコンポーネント */
    productLogo?: React$1.ReactNode;
    /** キャッチコピー（例: "ネイティブ英語学習を加速する"） */
    tagline?: string;
    /** Google OAuth 開始関数 */
    onGoogleSignIn: () => void | Promise<void>;
    /** ローディング中フラグ */
    isLoading?: boolean;
}
declare function LoginPage({ productName, productLogo, tagline, onGoogleSignIn, isLoading, }: LoginPageProps): react_jsx_runtime.JSX.Element;

interface LogicStep {
    title: string;
    description: string;
}
interface ProductLogicFlowProps {
    steps: LogicStep[];
    outcome: string;
}
declare function ProductLogicFlow({ steps, outcome }: ProductLogicFlowProps): react_jsx_runtime.JSX.Element;

interface MetricCardProps {
    title: string;
    description: string;
    /** KGI の場合 true —— primary border でハイライト */
    isPrimary?: boolean;
    className?: string;
}
declare function MetricCard({ title, description, isPrimary, className }: MetricCardProps): react_jsx_runtime.JSX.Element;

interface ConceptPageProps {
    productName: string;
    productLogo?: React$1.ReactNode;
    /** 一言説明（例: "家計を守るツール"） */
    tagline: string;
    /** コアメッセージ（1〜2文） */
    coreMessage: string;
    /** コアバリュー */
    coreValue: string;
    scope: {
        solve: string[];
        notSolve: string[];
    };
    productLogic: {
        steps: LogicStep[];
        /** ロジックが達成する目標 */
        outcome: string;
    };
    /** 結果指標（KGI） */
    resultMetric: {
        title: string;
        description: string;
    };
    /** 行動指標（KPI） */
    behaviorMetrics: Array<{
        title: string;
        description: string;
    }>;
}

declare function ConceptPage({ productName, productLogo, tagline, coreMessage, coreValue, scope, productLogic, resultMetric, behaviorMetrics, }: ConceptPageProps): react_jsx_runtime.JSX.Element;

interface ScopeColumnProps {
    title: string;
    items: string[];
    type: "solve" | "notSolve";
}
declare function ScopeColumn({ title, items, type }: ScopeColumnProps): react_jsx_runtime.JSX.Element;

interface SettingsItemProps {
    label: string;
    description?: string;
    control: React$1.ReactNode;
    className?: string;
}
declare function SettingsItem({ label, description, control, className }: SettingsItemProps): react_jsx_runtime.JSX.Element;
interface SettingsGroupProps {
    title: string;
    description?: string;
    children: React$1.ReactNode;
    className?: string;
}
declare function SettingsGroup({ title, description, children, className }: SettingsGroupProps): react_jsx_runtime.JSX.Element;
interface SettingsSection {
    id: string;
    label: string;
    icon?: React$1.ReactNode;
    content: React$1.ReactNode;
}
interface SettingsPageProps {
    sections: SettingsSection[];
    defaultSection?: string;
    title?: string;
    className?: string;
}
declare function SettingsPage({ sections, defaultSection, title, className, }: SettingsPageProps): react_jsx_runtime.JSX.Element;

interface AppLayoutProps {
    /** AppSidebar を渡す */
    sidebar: React$1.ReactNode;
    /** 任意のヘッダー（PageHeader 等） */
    header?: React$1.ReactNode;
    /** メインコンテンツ */
    children: React$1.ReactNode;
    /** SidebarProvider の defaultOpen（デフォルト: true） */
    defaultOpen?: boolean;
}
declare function AppLayout({ sidebar, header, children, defaultOpen, }: AppLayoutProps): react_jsx_runtime.JSX.Element;

interface BreadcrumbEntry {
    label: string;
    href?: string;
}
interface PageHeaderProps {
    title: string;
    description?: string;
    /** 右側に配置するアクションボタン群 */
    actions?: React$1.ReactNode;
    breadcrumbs?: BreadcrumbEntry[];
}
declare function PageHeader({ title, description, actions, breadcrumbs, }: PageHeaderProps): react_jsx_runtime.JSX.Element;

declare function useIsMobile(): boolean;

declare function cn(...inputs: ClassValue[]): string;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Alert, AlertDescription, AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, AlertDialogPortal, AlertDialogTitle, AlertDialogTrigger, AlertTitle, type AppInfo, AppLayout, type AppLayoutProps, AppSidebar, type AppSidebarProps, AppSwitcher, type AppSwitcherProps, AspectRatio, Avatar, AvatarFallback, AvatarImage, Badge, type BadgeProps, Banner, type BannerProps, Breadcrumb, BreadcrumbEllipsis, type BreadcrumbEntry, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, Button, type ButtonProps, Calendar, CalendarDayButton, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, type CardTrend, ChartArea, type ChartAreaProps, type ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartStyle, ChartTooltip, ChartTooltipContent, Checkbox, Collapsible, CollapsibleContent, CollapsibleTrigger, Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut, ConceptPage, type ConceptPageProps, DashboardPage, type DashboardPageProps, DataTable, type DataTableProps, DatePicker, type DatePickerProps, DateRangePicker, type DateRangePickerProps, DesignTokens, type DesignTokensProps, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger, DndProvider, type DndProviderProps, DragHandle, type DragHandleProps, Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerPortal, DrawerTitle, DrawerTrigger, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, EmptyState, type EmptyStateProps, type FileAccept, FileUpload, type FileUploadProps, Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, Heading, type HeadingProps, HoverCard, HoverCardContent, HoverCardTrigger, InlineEdit, type InlineEditProps, Input, type KpiCard, Label, type LogicStep, LoginPage, type LoginPageProps, Menubar, MenubarCheckboxItem, MenubarContent, MenubarGroup, MenubarItem, MenubarLabel, MenubarMenu, MenubarPortal, MenubarRadioGroup, MenubarRadioItem, MenubarSeparator, MenubarShortcut, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger, MetricCard, type MetricCardProps, MetricText, type MetricTextProps, type NavItem, type NavSubItem, NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport, PageHeader, type PageHeaderProps, Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, Popover, PopoverAnchor, PopoverContent, PopoverTrigger, ProductLogicFlow, type ProductLogicFlowProps, Progress, ProgressCircular, type ProgressCircularProps, RadioGroup, RadioGroupItem, ResizableHandle, ResizablePanel, ResizablePanelGroup, ScopeColumn, type ScopeColumnProps, ScrollArea, ScrollBar, SearchForm, Section, SectionCards, type SectionCardsProps, type SectionProps, Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue, Separator, SettingsGroup, type SettingsGroupProps, SettingsItem, type SettingsItemProps, SettingsPage, type SettingsPageProps, type SettingsSection, Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetOverlay, SheetPortal, SheetTitle, SheetTrigger, Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarInput, SidebarInset, SidebarMenu, SidebarMenuAction, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, SidebarMenuSkeleton, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarProvider, SidebarRail, SidebarSeparator, SidebarTrigger, Skeleton, Slider, SortableItem, type SortableItemProps, Spinner, type SpinnerProps, Stepper, type StepperProps, type StepperStep, Switch, Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow, Tabs, TabsContent, TabsList, TabsTrigger, Tag, TagGroup, type TagGroupProps, type TagProps, Text, type TextProps, Textarea, type TimeRangeOption, Toaster, Toggle, ToggleGroup, ToggleGroupItem, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, badgeVariants, buttonVariants, cn, navigationMenuTriggerStyle, toggleVariants, useFormField, useIsMobile, useSidebar };
