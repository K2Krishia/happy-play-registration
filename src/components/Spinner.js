import cn from 'classnames'
import { forwardRef } from 'react'

const spinnerClass =  {
    base: 'animate-spin rounded-full !border-b-transparent',
    color: {
        primary: 'border-primary-500',
        secondary: 'border-secondary-500',
        danger: 'border-danger-500',
        warning: 'border-warning-500',
        success: 'border-success-500',
        info: 'border-info-500',
        default: 'border-default-500',
        active: 'border-active-500',
        light: 'border-light-500',
        dark: 'border-dark-500',
        inherit: 'border-inherit'
    },
    size: {
        sm: 'h-3 w-3 border',
        base: 'h-4 w-4 border-2',
        lg: 'h-5 w-5 border-2',
        xl: 'h-6 w-6 border-2'
    }
}
const Spinner = forwardRef(
  ({ size='base', color='primary', className }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(spinnerClass.base, spinnerClass.color[color], spinnerClass.size[size], className)}
      ></div>
    )
  }
)

Spinner.displayName = 'Spinner'

export default Spinner
