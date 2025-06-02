
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
            <div className="bg-muted aspect-video rounded-xl" />
            <div className="bg-muted aspect-video rounded-xl" />
          </div>
          <div className="bg-muted min-h-[100vh] flex-1 rounded-xl md:min-h-min">
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
              <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell><Badge variant="default" className="bg-blue-500 text-white dark:bg-blue-500">Paid</Badge></TableCell>
                <TableCell>Bank Transfer</TableCell>
                <TableCell className="text-right">£100.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">INV002</TableCell>
                <TableCell><Badge variant="default" className="bg-blue-500 text-white dark:bg-blue-500">Paid</Badge></TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">£600.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">INV003</TableCell>
                <TableCell><Badge variant="default" className="bg-blue-500 text-white dark:bg-blue-500">Paid</Badge></TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">£60.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">INV004</TableCell>
                <TableCell><Badge variant="default" className="bg-blue-500 text-white dark:bg-blue-500">Paid</Badge></TableCell>
                <TableCell>Bank Transfer</TableCell>
                <TableCell className="text-right">£300.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">INV005</TableCell>
                <TableCell><Badge variant="default" className="bg-red-400 text-white dark:bg-red-400">Unpaid</Badge></TableCell>
                <TableCell>None</TableCell>
                <TableCell className="text-right">£450.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">INV006</TableCell>
                <TableCell><Badge variant="default" className="bg-red-400 text-white dark:bg-red-400">Unpaid</Badge></TableCell>
                <TableCell>None</TableCell>
                <TableCell className="text-right">£150.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
