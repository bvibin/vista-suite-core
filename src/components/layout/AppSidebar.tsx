import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  BarChart3,
  CreditCard,
  FileText,
  FolderKanban,
  HelpCircle,
  LifeBuoy,
  Mail,
  MoreHorizontal,
  Palette,
  PlusCircle,
  Search,
  Settings,
  TrendingUp,
  Users,
  Zap,
  Database,
  BookOpen,
  PenTool
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const mainItems = [
  { title: "Quick Create", url: "/quick-create", icon: PlusCircle, featured: true },
  { title: "Dashboard", url: "/", icon: BarChart3 },
  { title: "Mail", url: "/mail", icon: Mail },
  { title: "Pricing", url: "/pricing", icon: CreditCard },
  { title: "Color Palette", url: "/colors", icon: Palette },
];

const workflowItems = [
  { title: "Lifecycle", url: "/lifecycle", icon: LifeBuoy },
  { title: "Analytics", url: "/analytics", icon: TrendingUp },
  { title: "Projects", url: "/projects", icon: FolderKanban },
  { title: "Team", url: "/team", icon: Users },
];

const documentsItems = [
  { title: "Data Library", url: "/data-library", icon: Database },
  { title: "Reports", url: "/reports", icon: FileText },
  { title: "Word Assistant", url: "/word-assistant", icon: PenTool },
  { title: "More", url: "/more", icon: MoreHorizontal },
];

const bottomItems = [
  { title: "Settings", url: "/settings", icon: Settings },
  { title: "Get Help", url: "/help", icon: HelpCircle },
  { title: "Search", url: "/search", icon: Search },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => {
    if (path === "/" && currentPath === "/") return true;
    if (path !== "/" && currentPath.startsWith(path)) return true;
    return false;
  };

  const getNavCls = (path: string) => {
    return isActive(path) 
      ? "bg-sidebar-accent text-sidebar-primary font-medium" 
      : "hover:bg-sidebar-accent/50 text-sidebar-foreground";
  };

  const NavItem = ({ item, featured = false }: { item: any; featured?: boolean }) => (
    <SidebarMenuItem>
      <SidebarMenuButton asChild>
        <NavLink 
          to={item.url} 
          className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
            featured 
              ? "bg-primary text-primary-foreground font-semibold hover:bg-primary/90"
              : getNavCls(item.url)
          }`}
        >
          <item.icon className={`h-4 w-4 ${collapsed ? "" : "mr-2"}`} />
          {!collapsed && <span>{item.title}</span>}
        </NavLink>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );

  return (
    <Sidebar className={`${collapsed ? "w-16" : "w-64"} border-r border-sidebar-border bg-sidebar`}>
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <Zap className="h-4 w-4 text-primary-foreground" />
          </div>
          {!collapsed && (
            <div>
              <h2 className="font-semibold text-sidebar-foreground">Acme Inc.</h2>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="px-4">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {mainItems.map((item) => (
                <NavItem key={item.title} item={item} featured={item.featured} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {!collapsed && (
          <SidebarGroup>
            <h3 className="text-xs font-medium text-sidebar-foreground/60 uppercase tracking-wider mb-2 px-3">
              Workflow
            </h3>
            <SidebarGroupContent>
              <SidebarMenu className="space-y-1">
                {workflowItems.map((item) => (
                  <NavItem key={item.title} item={item} />
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}

        {!collapsed && (
          <SidebarGroup>
            <h3 className="text-xs font-medium text-sidebar-foreground/60 uppercase tracking-wider mb-2 px-3">
              Documents
            </h3>
            <SidebarGroupContent>
              <SidebarMenu className="space-y-1">
                {documentsItems.map((item) => (
                  <NavItem key={item.title} item={item} />
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarContent>

      <SidebarFooter className="p-4 space-y-2">
        <SidebarMenu className="space-y-1">
          {bottomItems.map((item) => (
            <NavItem key={item.title} item={item} />
          ))}
        </SidebarMenu>
        
        <div className="pt-4 border-t border-sidebar-border">
          <div className="flex items-center gap-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            {!collapsed && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-sidebar-foreground truncate">shadcn</p>
                <p className="text-xs text-sidebar-foreground/60 truncate">m@example.com</p>
              </div>
            )}
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}