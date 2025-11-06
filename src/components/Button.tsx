import React from 'react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Le variant visuel du bouton
   */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  /**
   * La taille du bouton
   */
  size?: 'sm' | 'md' | 'lg'
  /**
   * Si vrai, le bouton prend toute la largeur disponible
   */
  fullWidth?: boolean
  /**
   * Contenu du bouton
   */
  children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  children,
  disabled,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variantStyles = {
    primary: 'bg-[var(--color-fill-brand)] text-[var(--color-text-inverse)] hover:bg-[var(--color-fill-brand_hover)] focus:ring-[var(--color-fill-brand)]',
    secondary: 'bg-[var(--color-fill-sport)] text-[var(--color-text-inverse)] hover:bg-[var(--color-fill-sport_hover)] focus:ring-[var(--color-fill-sport)]',
    outline: 'border-2 border-[var(--color-stroke-default)] text-[var(--color-text-default)] hover:border-[var(--color-stroke-strong_hover)] hover:bg-[var(--color-fill-weak)]',
    ghost: 'text-[var(--color-text-default)] hover:bg-[var(--color-fill-weak)]'
  }
  
  const sizeStyles = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-6 py-3'
  }
  
  const widthStyle = fullWidth ? 'w-full' : ''
  
  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${className}`.trim()
  
  return (
    <button
      className={combinedClassName}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}
