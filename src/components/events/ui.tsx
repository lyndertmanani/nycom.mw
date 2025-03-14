import type React from "react"

export const Card = ({ className, children, ...props }: { className?: string; children: React.ReactNode }) => {
  return (
    <div
      className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}
      data-v0-t="card"
      {...props}
    >
      {children}
    </div>
  )
}

export const CardHeader = ({ className, children, ...props }: { className?: string; children: React.ReactNode }) => {
  return (
    <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props}>
      {children}
    </div>
  )
}

export const CardBody = ({ className, children, ...props }: { className?: string; children: React.ReactNode }) => {
  return (
    <div className={`p-6 ${className}`} {...props}>
      {children}
    </div>
  )
}

export const CardFooter = ({ className, children, ...props }: { className?: string; children: React.ReactNode }) => {
  return (
    <div className={`flex justify-end pt-6 ${className}`} {...props}>
      {children}
    </div>
  )
}

export const Button = ({ className, children, ...props }: { className?: string; children: React.ReactNode }) => {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 h-9 px-4 py-2 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

