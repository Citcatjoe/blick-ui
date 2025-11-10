import React from 'react'

export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  children,
  className = '',
  ...props
}) {
  const classes = [
    'blick-btn',
    `blick-btn-${variant}`,
    `blick-btn-${size}`,
    fullWidth && 'blick-btn-full',
    className
  ].filter(Boolean).join(' ')

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
