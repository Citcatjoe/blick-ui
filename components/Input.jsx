import React from 'react'

export const Input = React.forwardRef(function Input({
  label,
  error,
  helperText,
  size = 'md',
  fullWidth = false,
  className = '',
  ...props
}, ref) {
  const wrapperClasses = [
    'blick-input-wrapper',
    fullWidth && 'full-width'
  ].filter(Boolean).join(' ')

  const inputClasses = [
    'blick-input',
    `blick-input-${size}`,
    error && 'error',
    className
  ].filter(Boolean).join(' ')

  return (
    <div className={wrapperClasses}>
      {label && (
        <label className="blick-input-label">
          {label}
        </label>
      )}
      <input
        ref={ref}
        className={inputClasses}
        aria-invalid={error ? 'true' : 'false'}
        {...props}
      />
      {error && (
        <span className="blick-input-error">{error}</span>
      )}
      {!error && helperText && (
        <span className="blick-input-helper">{helperText}</span>
      )}
    </div>
  )
})
