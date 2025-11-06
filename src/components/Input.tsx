import React from 'react'

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * Label affiché au-dessus de l'input
   */
  label?: string
  /**
   * Message d'erreur affiché sous l'input
   */
  error?: string
  /**
   * Message d'aide affiché sous l'input
   */
  helperText?: string
  /**
   * La taille de l'input
   */
  size?: 'sm' | 'md' | 'lg'
  /**
   * Si vrai, l'input prend toute la largeur disponible
   */
  fullWidth?: boolean
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, size = 'md', fullWidth = false, className = '', disabled, ...props }, ref) => {
    const baseStyles = 'border rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
    
    const sizeStyles = {
      sm: 'text-sm px-3 py-1.5',
      md: 'text-base px-4 py-2',
      lg: 'text-lg px-5 py-3'
    }
    
    const stateStyles = error
      ? 'border-[var(--color-static-red-500)] focus:ring-[var(--color-static-red-500)] focus:border-[var(--color-static-red-500)]'
      : 'border-[var(--color-stroke-default)] focus:ring-[var(--color-fill-brand)] focus:border-[var(--color-fill-brand)] hover:border-[var(--color-stroke-strong_hover)]'
    
    const widthStyle = fullWidth ? 'w-full' : ''
    
    const combinedClassName = `${baseStyles} ${sizeStyles[size]} ${stateStyles} ${widthStyle} ${className}`.trim()
    
    return (
      <div className={`flex flex-col gap-1 ${fullWidth ? 'w-full' : ''}`}>
        {label && (
          <label className="text-sm font-medium text-[var(--color-text-default)]">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={combinedClassName}
          disabled={disabled}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? 'error-message' : helperText ? 'helper-text' : undefined}
          style={{
            backgroundColor: 'var(--color-fill-default)',
            color: 'var(--color-text-default)'
          }}
          {...props}
        />
        {error && (
          <span id="error-message" className="text-sm text-[var(--color-static-red-500)]">
            {error}
          </span>
        )}
        {!error && helperText && (
          <span id="helper-text" className="text-sm text-[var(--color-text-weak)]">
            {helperText}
          </span>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'
