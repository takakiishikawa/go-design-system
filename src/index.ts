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
export { FormActions } from "./components/ui/form-actions";

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
export * from "./components/ui/pagination";

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
// New Components
// ============================================

// Design Tokens (CSS variable injection — Tailwind v4 + Turbopack 対応)
export { DesignTokens } from "./components/ui/design-tokens";
export type { DesignTokensProps } from "./components/ui/design-tokens";

// Feedback / Status
export * from "./components/ui/spinner";
export * from "./components/ui/banner";
export * from "./components/ui/empty-state";

// Input
export * from "./components/ui/date-picker";
export * from "./components/ui/inline-edit";
export * from "./components/ui/file-upload";

// Typography
export * from "./components/ui/typography";

// Progress
export * from "./components/ui/progress-circular";

// Navigation / Steps
export * from "./components/ui/stepper";

// Layout
export * from "./components/ui/section";

// Tags
export * from "./components/ui/tag";

// Combobox (searchable select)
export * from "./components/ui/combobox";

// Timeline
export * from "./components/ui/timeline";

// Drag & Drop
export {
  DndProvider,
  SortableItem,
  DragHandle,
} from "./components/dnd";
export type {
  DndProviderProps,
  SortableItemProps,
  DragHandleProps,
} from "./components/dnd";

// ============================================
// Templates (Goシリーズ共通テンプレート)
// ============================================

// sidebar-01
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

// dashboard-01
export { SectionCards } from "./templates/dashboard-01/section-cards";
export type { SectionCardsProps, KpiCard, CardTrend } from "./templates/dashboard-01/section-cards";
export { ChartArea } from "./templates/dashboard-01/chart-area";
export type { ChartAreaProps, TimeRangeOption } from "./templates/dashboard-01/chart-area";
export { DataTable } from "./templates/dashboard-01/data-table";
export type { DataTableProps } from "./templates/dashboard-01/data-table";
export { DashboardPage } from "./templates/dashboard-01/dashboard-page";
export type { DashboardPageProps } from "./templates/dashboard-01/dashboard-page";

// login-01
export { LoginPage } from "./templates/login-01/login-page";
export type { LoginPageProps } from "./templates/login-01/login-page";

// concept-page (Section is private to concept-page; use UI Section from components/ui/section)
export { ConceptPage } from "./templates/concept-page/concept-page";
export type {
  ConceptPageProps,
  MetricCardProps,
} from "./templates/concept-page/concept-page";
export { MetricCard } from "./templates/concept-page/metric-card";
export { ProductLogicFlow } from "./templates/concept-page/product-logic-flow";
export type { ProductLogicFlowProps, LogicStep } from "./templates/concept-page/product-logic-flow";
export { ScopeColumn } from "./templates/concept-page/scope-column";
export type { ScopeColumnProps } from "./templates/concept-page/scope-column";

// settings-page
export {
  SettingsPage,
  SettingsGroup,
  SettingsItem,
} from "./templates/settings-page";
export type {
  SettingsPageProps,
  SettingsGroupProps,
  SettingsItemProps,
  SettingsSection,
} from "./templates/settings-page";

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
