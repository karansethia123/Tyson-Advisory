import Link from "next/link";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Separator } from "./ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const Header = () => {
  return (
    <div className="w-full z-20 backdrop-blur-sm h-[8vh] fixed px-5 md:px-10 xl:px-20 py-5 flex justify-between items-center">
      <Link href="/" className="font-header tracking-wide text-xl font-bold">Tysons Advisory</Link>
      <Sheet>
        <SheetTrigger asChild>
          <Button type="button" variant="ghost" size="icon" className="visible md:invisible">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetTitle className="hidden">
            Tyson Advisory
          </SheetTitle>
          <div className="w-full p-5 flex flex-col gap-2">
            <Accordion type="single" collapsible>
              <AccordionItem value="services">
                <AccordionTrigger>
                  Services
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-2">
                  <Link href='/services/Data_and_Analytics' className="py-2 ps-3">Data and Analytics</Link>
                  <Link href='/services/Cloud' className="py-2 ps-3">Cloud</Link>
                  <Link href='/services/AI_and_Automation' className="py-2 ps-3">AI and Automation</Link>
                  <Link href='/services/Managed_Services' className="py-2 ps-3">Managed Services</Link>
                  <Link href='/services/Application_Services' className="py-2 ps-3">Application Services</Link>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Separator />
            <Link href='#' className="py-2">Who we are</Link>
            <Separator />
            <Link href='#' className="py-2">Reach us</Link>
          </div>
        </SheetContent>
      </Sheet>
      <nav className="items-center gap-4 font-content hidden md:flex">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <p className="cursor-pointer">Services</p>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuGroup>
              <DropdownMenuItem asChild>
                <Link href='/services/Data_and_Analytics' className="py-0">Data and Analytics</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href='/services/Cloud' className="py-0">Cloud</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href='/services/AI_and_Automation' className="py-0">AI and Automation</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href='/services/Managed_Services' className="py-0">Managed Services</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href='/services/Application_Services' className="py-0">Application Services</Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        <Link href='#'>Who we are</Link>
        <Link href='#'>
          <Button variant="outline" className=" rounded-full border-2 border-blue-200">Contact Us</Button>
        </Link>
      </nav>
    </div>
  )
}

export default Header;
