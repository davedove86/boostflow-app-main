import { AppSidebar } from "@/components/app-sidebar"
import { ModeToggle } from '@/components/modeToggle'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import Image from 'next/image'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Badge } from "@/components/ui/badge"

import invoices from "@/data/invoices.json"
import projects from "@/data/projects.json"

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="/dashboard">
                    Dashboard
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Profile</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <ModeToggle />
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 lg:grid-cols-3">
            <div className="bg-muted aspect-video rounded-xl">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>
                  <Image
                    src="/blue-bg.jpg"
                    alt="Banner Image"
                    width={2000}
                    height={2000}
                    className="w-90 h-full object-cover rounded-lg"
                  />
                </div>
                <Image
                  src="/john-doe.jpg"
                  alt="John Doe"
                  width={70}
                  height={70}
                  className="rounded-full object-cover aspect-square border-4 border-white shadow-sm mb-2 -mt-10"
                />
                <h2 className="text-lg font-bold">John Doe</h2>
                <p className="text-sm text-muted-foreground">Freelancer</p>
                <div className=""></div>
              </div>
            </div>
            <div className="bg-muted aspect-video rounded-xl p-4">
              <h2 className="text-sm font-bold mb-2">Your Projects</h2>
              <ul className="space-y-2">
                {projects.map((project) => (
                  <li key={project.name} className="flex items-center gap-2">{project.name}</li>
                ))}
              </ul>
            </div>
            <div className="bg-muted aspect-video rounded-xl p-4 flex flex-col gap-4">
            <h2 className="text-sm font-bold mb-2">Clients</h2>
                <div className="shadow-md rounded-md p-2 bg-white">
                  <ul className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Image
                        src="/john-doe.jpg"
                        alt="John Doe"
                        width={40}
                        height={40}
                        className="rounded-full object-cover"
                      />
                      <div className='flex flex-col'>
                        <span className="font-semibold">John Doe</span>
                        <span className="text-sm text-muted-foreground">Freelance Writer</span>
                      </div>
                    </div>
                  </ul>
                </div>
                <div className="shadow-md rounded-md p-2 bg-white">
                  <ul className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Image
                        src="/john-doe.jpg"
                        alt="John Doe"
                        width={40}
                        height={40}
                        className="rounded-full object-cover"
                      />
                      <div className='flex flex-col'>
                        <span className="font-semibold">John Doe</span>
                        <span className="text-sm text-muted-foreground">Business Owner</span>
                      </div>
                    </div>
                  </ul>
                </div>
                <div className="shadow-md rounded-md p-2 bg-white">
                  <ul className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Image
                        src="/john-doe.jpg"
                        alt="John Doe"
                        width={40}
                        height={40}
                        className="rounded-full object-cover"
                      />
                      <div className='flex flex-col'>
                        <span className="font-semibold">John Doe</span>
                        <span className="text-sm text-muted-foreground">Designer</span>
                      </div>
                    </div>
                  </ul>
                </div>
            </div>
          </div>
          <div className="bg-muted min-h-[100vh] flex-1 rounded-xl md:min-h-min p-4">
          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.id}>
                  <TableCell className="font-medium">{invoice.number}</TableCell>
                  <TableCell>
                    <Badge
                      variant="default"
                      className={
                        invoice.status === "paid"
                          ? "bg-blue-500 text-white dark:bg-blue-500"
                          : "bg-red-400 text-white dark:bg-red-400"
                      }
                    >
                      {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell>{invoice.method}</TableCell>
                  <TableCell className="text-right">
                    £{invoice.amount.toFixed(2)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
