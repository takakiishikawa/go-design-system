"use client"

import { usePathname } from "next/navigation"
import { AppSidebar } from "@takaki/go-design-system"
import {
  LayoutDashboard,
  Palette,
  Package,
  FileText,
} from "lucide-react"

const APPS = [
  { name: "Go Design System", url: "/",                                    color: "#6366F1" },
  { name: "NativeGo",         url: "https://native-go.vercel.app",         color: "#0052CC" },
  { name: "CareGo",           url: "https://care-go.vercel.app",           color: "#22C55E" },
  { name: "KenyakuGo",        url: "https://kenyaku-go.vercel.app",        color: "#F59E0B" },
  { name: "TaskGo",           url: "https://task-go.vercel.app",           color: "#6366F1" },
  { name: "CookGo",           url: "https://cook-go.vercel.app",           color: "#10B981" },
  { name: "PhysicalGo",       url: "https://physical-go.vercel.app",       color: "#3B82F6" },
]

const COMPONENT_ITEMS = [
  { title: "Button",           url: "/components/button" },
  { title: "Card",             url: "/components/card" },
  { title: "Badge",            url: "/components/badge" },
  { title: "Banner",           url: "/components/banner" },
  { title: "Spinner",          url: "/components/spinner" },
  { title: "Empty State",      url: "/components/empty-state" },
  { title: "Dialog",           url: "/components/dialog" },
  { title: "Input / Textarea", url: "/components/input" },
  { title: "Select",           url: "/components/select" },
  { title: "Tabs",             url: "/components/tabs" },
  { title: "Table",            url: "/components/table" },
  { title: "Date Picker",      url: "/components/date-picker" },
  { title: "Chart Area",       url: "/components/chart-area" },
  { title: "Combobox",         url: "/components/combobox" },
  { title: "Timeline",         url: "/components/timeline" },
  { title: "Confirm Dialog",   url: "/components/confirm-dialog" },
  { title: "Number Input",     url: "/components/number-input" },
  { title: "Search Input",     url: "/components/search-input" },
  { title: "Loading Overlay",  url: "/components/loading-overlay" },
  { title: "Multi Select",     url: "/components/multi-select" },
]

const TEMPLATE_ITEMS = [
  { title: "Dashboard Page", url: "/templates/dashboard-page" },
  { title: "Concept Page",   url: "/templates/concept-page" },
  { title: "Settings Page",  url: "/templates/settings-page" },
  { title: "Login Page",     url: "/templates/login-page" },
]

export function ShowcaseSidebar() {
  const pathname = usePathname()

  const navItems = [
    {
      title: "はじめに",
      url: "/",
      icon: LayoutDashboard,
      isActive: pathname === "/",
    },
    {
      title: "デザイントークン",
      url: "/tokens",
      icon: Palette,
      isActive: pathname === "/tokens",
    },
    {
      title: "コンポーネント",
      url: "#",
      icon: Package,
      items: COMPONENT_ITEMS.map((item) => ({
        ...item,
        isActive: pathname === item.url,
      })),
    },
    {
      title: "テンプレート",
      url: "#",
      icon: FileText,
      items: TEMPLATE_ITEMS.map((item) => ({
        ...item,
        isActive: pathname === item.url,
      })),
    },
  ]

  return (
    <AppSidebar
      currentApp="Go Design System"
      apps={APPS}
      navItems={navItems}
      searchPlaceholder="コンポーネントを検索..."
    />
  )
}
