import React from 'react'

export function Button({
  variant = 'normal',
  fullWidth = false,
  children,
  className = '',
  ...props
}) {
  const classes = [
    'blick-btn',
    variant === 'outline' && 'blick-btn-outline',
    fullWidth && 'blick-btn-full',
    className
  ].filter(Boolean).join(' ')

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
