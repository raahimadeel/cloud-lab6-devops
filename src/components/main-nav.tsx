"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { BookOpen, Code, Terminal } from "lucide-react"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Binary to Decimal",
    href: "/conversions/binary-to-decimal",
    description:
      "Learn how to convert binary numbers to their decimal equivalent.",
  },
  {
    title: "Decimal to Binary",
    href: "/conversions/decimal-to-binary",
    description: "Understand the process of converting decimal numbers to binary.",
  },
  {
    title: "Hex to Decimal",
    href: "/conversions/hex-to-decimal",
    description: "A guide to converting hexadecimal values to decimal numbers.",
  },
];

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="flex justify-center mt-2">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), pathname === '/' ? 'bg-accent' : '')}>
                <Terminal className="mr-2"/> Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger><Code className="mr-2"/> Conversions</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/guides" legacyBehavior passHref>
              <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), pathname === '/guides' ? 'bg-accent' : '')}>
                <BookOpen className="mr-2"/> Guides
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), pathname === '/about' ? 'bg-accent' : '')}>
                    About
                </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href!}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
