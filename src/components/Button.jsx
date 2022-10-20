import Link from 'next/link'
import clsx from 'clsx'

const styles = {
  primary:
    'rounded-full bg-[#6D28D9] py-2 px-4 text-sm font-semibold text-white',
  secondary:
    'rounded-full bg-slate-800 py-2 px-4 text-sm font-medium text-white',
}

export function Button({ variant = 'primary', className, href, ...props }) {
  className = clsx(styles[variant], className)

  return href ? (
    <Link href={href} className={className} {...props} />
  ) : (
    <button className={className} {...props} />
  )
}
