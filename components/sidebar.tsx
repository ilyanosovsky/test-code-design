"use client"

import { useState } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { LayoutDashboard, Layers, MonitorPlay, Menu } from 'lucide-react'

export function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div
      className={cn(
        "h-screen bg-black border-r border-neutral-800 transition-all duration-300 ease-in-out",
        isExpanded ? "w-64" : "w-16"
      )}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="flex flex-col h-full">
        <div className="p-4">
          <div className="w-8 h-8 bg-orange-500 rounded-lg" />
        </div>
        
        <nav className="flex-1 px-2 py-4">
          <div className="space-y-2">
            <NavItem icon={LayoutDashboard} label="Dashboard" isExpanded={isExpanded} />
            <NavItem icon={Layers} label="Companies" isExpanded={isExpanded} active />
            <NavItem icon={MonitorPlay} label="Projects" isExpanded={isExpanded} />
          </div>
        </nav>

        <div className="p-4">
          <Button variant="ghost" size="icon" className="w-8 h-8">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

function NavItem({ 
  icon: Icon, 
  label, 
  isExpanded, 
  active 
}: { 
  icon: any
  label: string
  isExpanded: boolean
  active?: boolean
}) {
  return (
    <Link
      href="#"
      className={cn(
        "flex items-center px-2 py-2 rounded-lg transition-colors",
        active 
          ? "bg-neutral-800 text-white" 
          : "text-neutral-400 hover:bg-neutral-800 hover:text-white"
      )}
    >
      <Icon className="h-5 w-5" />
      {isExpanded && (
        <span className="ml-3">{label}</span>
      )}
    </Link>
  )
}