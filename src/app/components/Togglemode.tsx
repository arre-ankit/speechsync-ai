"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='link' size="icon">
          {theme === "light" ? (
            <Moon className="h-[1.2rem] w-[1.2rem] transition-transform transform scale-100" color="black" />
          ) : (
            null)}
          {theme === "dark" ? (
            <Sun className="h-[1.2rem] w-[1.2rem] transition-transform transform scale-100" color="white" />
          ) : (
            null
          )}
          {theme === "system" ? (
            <Sun className="h-[1.2rem] w-[1.2rem] transition-transform transform scale-100" color="white" />
          ) : (
            null
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
