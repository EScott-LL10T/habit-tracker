import type { ComponentProps, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

type Variant = "primary" | "secondary" | "ghost-destructive"

type ButtonProps = {
    variant?: Variant
} & ComponentProps<"button">

export function Button({variant = "primary", className, ...props}: ButtonProps){
    return <button 
        {...props} 
        className ={twMerge(
            "transition-colors rounded px-2 py-1 disabled:opacity-30 disabled:cursor-not-allowed", 
            getVariantStyles(variant), 
            className,
        )}
    />
        
}

function getVariantStyles(variant: Variant){
    switch(variant){
        case "primary":
            return "bg-blue-600 hover:bg-blue-500"
        case "secondary":
            return "bg-zinc-700 hover:bg-zinc-600 text-zinc-400"
        case "ghost-destructive":
            return "hover:bg-red-800 text-red-800 hover:text-red-200"
        default:
            throw new Error(`Unknown variant: ${variant satisfies never}`)
    }
}