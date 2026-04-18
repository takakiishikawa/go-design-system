// --- Styles ---
// 各Goプロダクトのエントリーで以下をimportしてください:
//   import "@takaki/go-design-system/tokens.css"
//   import "@takaki/go-design-system/globals.css"

// ============================================
// UI Components (shadcn/ui — New York style)
// ============================================

// Form
export * from "./components/ui/button";
export * from "./components/ui/input";
export * from "./components/ui/textarea";
export * from "./components/ui/select";
export * from "./components/ui/checkbox";
export * from "./components/ui/radio-group";
export * from "./components/ui/switch";
export * from "./components/ui/slider";
export * from "./components/ui/label";
export * from "./components/ui/form";

// Display
export * from "./components/ui/card";
export * from "./components/ui/badge";
export * from "./components/ui/avatar";
export * from "./components/ui/separator";
export * from "./components/ui/skeleton";
export * from "./components/ui/progress";
export * from "./components/ui/alert";

// Navigation
export * from "./components/ui/sidebar";
export * from "./components/ui/tabs";
export * from "./components/ui/breadcrumb";
export * from "./components/ui/navigation-menu";
export * from "./components/ui/dropdown-menu";
export * from "./components/ui/menubar";
export * from "./components/ui/command";

// Overlay / Dialog
export * from "./components/ui/dialog";
export * from "./components/ui/sheet";
export * from "./components/ui/drawer";
export * from "./components/ui/popover";
export * from "./components/ui/tooltip";
export * from "./components/ui/hover-card";
export * from "./components/ui/alert-dialog";
export * from "./components/ui/sonner";

// Data
export * from "./components/ui/table";
export * from "./components/ui/calendar";
export * from "./components/ui/chart";

// Layout / Interactive
export * from "./components/ui/accordion";
export * from "./components/ui/collapsible";
export * from "./components/ui/scroll-area";
export * from "./components/ui/toggle";
export * from "./components/ui/toggle-group";
export * from "./components/ui/resizable";
export * from "./components/ui/aspect-ratio";

// ============================================
// Templates (Goシリーズ共通テンプレート)
// ============================================
export {
  AppSidebar,
  AppSwitcher,
  SearchForm,
} from "./templates/sidebar-01/app-sidebar";
export type {
  AppSidebarProps,
  AppSwitcherProps,
  AppInfo,
  NavItem,
  NavSubItem,
} from "./templates/sidebar-01/app-sidebar";

// ============================================
// Layout Components
// ============================================
export { AppLayout } from "./components/layout/app-layout";
export type { AppLayoutProps } from "./components/layout/app-layout";
export { PageHeader } from "./components/layout/page-header";
export type { PageHeaderProps, BreadcrumbEntry } from "./components/layout/page-header";

// ============================================
// Hooks
// ============================================
export { useIsMobile } from "./hooks/use-mobile";

// ============================================
// Utilities
// ============================================
export { cn } from "./lib/utils";
