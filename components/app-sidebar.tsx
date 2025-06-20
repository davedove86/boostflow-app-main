"use client"

import * as React from "react"
import {
  Rocket,
  UserRoundSearch,
  Frame,
  LifeBuoy,
  Map,
  MessageCircle,
  PieChart,
  Settings,
  BadgePoundSterling,
  SquareKanban,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
// import { NavProjects } from "@/components/nav-projects"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from 'next/link'

const data = {
  user: {
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "/john-doe.jpg",
    initials: "JD",
  },
  navMain: [
    {
      title: "Projects",
      url: "#",
      icon: SquareKanban,
      // add isActive to the first item to make it open by default
      isActive: true,
      items: [
        {
          title: "All Projects",
          url: "/projects",
        },
        {
          title: "Create Project",
          url: "#",
        },
        // {
        //   title: "Project Groups",
        //   url: "#",
        // },
      ],
    },
    {
      title: "Clients",
      url: "#",
      icon: UserRoundSearch,
      items: [
        {
          title: "All Clients",
          url: "/clients",
        },
        {
          title: "Create Client",
          url: "#",
        },
        // {
        //   title: "Client Groups",
        //   url: "#",
        // },
      ],
    },
    {
      title: "Invoices",
      url: "#",
      icon: BadgePoundSterling,
      items: [
        {
          title: "All Invoices",
          url: "/invoices",
        },
        {
          title: "Create Invoice",
          url: "#",
        },
        {
          title: "Sent Invoices",
          url: "#",
        },
        {
          title: "Draft Invoices",
          url: "#",
        },
      ],
    },
    {
      title: "Messages",
      url: "#",
      icon: MessageCircle,
      items: [
        {
          title: "Inbox",
          url: "/messages",
        },
        {
          title: "Sent",
          url: "#",
        },
        {
          title: "Drafts",
          url: "#",
        },
        {
          title: "Trash",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "/support",
      icon: LifeBuoy,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings,
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/dashboard">
                <div className="bg-[#2883bf] text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Rocket className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">BoostFlow</span>
                  <span className="truncate text-xs">Your Clients Connected</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* Uncomment the line below to include project navigation in the sidebar */}
        {/* <NavProjects projects={data.projects} /> */}
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
