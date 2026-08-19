import React from 'react'
import { TechIcon } from './TechIcon'

export const TechBadge = ({ name, size = "md", className = "" }) => {
  const isSmall = size === "sm"
  const paddingClass = isSmall ? "px-2.5 py-1 text-[11px]" : "px-3 py-1.5 text-xs"
  const iconSize = isSmall ? "w-3.5 h-3.5" : "w-4 h-4"
  
  return (
    <span className={`inline-flex items-center gap-2 font-medium rounded-lg bg-zinc-900/90 border border-zinc-800 text-zinc-200 hover:border-zinc-700 hover:text-white transition-all ${paddingClass} ${className}`}>
      <TechIcon name={name} className={`${iconSize} flex-shrink-0`} />
      <span>{name}</span>
    </span>
  )
}
