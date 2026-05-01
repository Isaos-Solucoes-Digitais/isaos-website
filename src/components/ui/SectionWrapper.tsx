import { ReactNode } from 'react'
import { clsx } from 'clsx'

interface SectionWrapperProps {
  children: ReactNode
  className?: string
  id?: string
  container?: boolean
}

export default function SectionWrapper({
  children,
  className,
  id,
  container = true,
}: SectionWrapperProps) {
  return (
    <section id={id} className={clsx('py-24 md:py-32', className)}>
      {container ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
      ) : (
        children
      )}
    </section>
  )
}
