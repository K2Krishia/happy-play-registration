import { forwardRef } from 'react'
import { Spinner } from '.'
import cn from 'classnames'

const btnStyles = {
  base: 'flex gap-2 items-center justify-center',
  variant: {
    flat: {
      primary: 'bg-transparent hover:bg-primary-50 text-primary-500',
      secondary: 'bg-transparent hover:bg-secondary-50 text-secondary-500',
      light: 'bg-transparent hover:bg-light-50 text-light-500',
      dark: 'bg-transparent hover:bg-dark-50 text-dark-500',
      default: 'bg-transparent hover:bg-default-50 text-default-500',
      success: 'bg-transparent hover:bg-success-50 text-success-500',
      warning: 'bg-transparent hover:bg-warning-50 text-warning-500',
      danger: 'bg-transparent hover:bg-danger-50 text-danger-500',
      info: 'bg-transparent hover:bg-info-50 text-info-500',
      active: 'bg-transparent hover:bg-active-50 text-active-500'
    },
    solid: {
      primary:
        'bg-primary-500 hover:bg-primary-600 text-light-500 border-light-500 border-0',
      secondary:
        'bg-secondary-500 hover:bg-secondary-600 text-light-500 border-light-500 border-0',
      light:
        'bg-light-500 hover:bg-light-600 text-dark-500 border-dark-500 border-0',
      dark: 'bg-dark-500 hover:bg-dark-600 text-light-500 border-light-500 border-0',
      default:
        'bg-default-500 hover:bg-default-600 text-light-500 border-light-500 border-0',
      success:
        'bg-success-500 hover:bg-success-600 text-light-500 border-light-500 border-0',
      warning:
        'bg-warning-500 hover:bg-warning-600 text-dark-500 border-dark-500 border-0',
      danger:
        'bg-danger-500 hover:bg-danger-600 text-light-500 border-light-500 border-0',
      info: 'bg-info-500 hover:bg-info-600 text-light-500 border-light-500 border-0',
      active:
        'bg-active-500 hover:bg-active-600 text-light-500 border-light-500 border-0'
    },
    outlined: {
      primary:
        'bg-transparent border text-primary-500 border-primary-500 hover:text-primary-600 hover:border-primary-600 hover:bg-primary-50',
      secondary:
        'bg-transparent border text-secondary-500 border-secondary-500 hover:text-secondary-600 hover:border-secondary-600 hover:bg-secondary-50',
      light:
        'bg-transparent border text-light-500 border-light-500 hover:text-light-600 hover:border-light-600',
      dark: 'bg-transparent border text-dark-500 border-dark-500 hover:text-dark-600 hover:border-dark-600 hover:bg-dark-50',
      default:
        'bg-transparent border text-default-500 border-default-500 hover:text-default-600 hover:border-default-600 hover:bg-default-50',
      success:
        'bg-transparent border text-success-500 border-success-500 hover:text-success-600 hover:border-success-600 hover:bg-success-50',
      warning:
        'bg-transparent border text-warning-500 border-warning-500 hover:text-warning-600 hover:border-warning-600 hover:bg-warning-50',
      danger:
        'bg-transparent border text-danger-500 border-danger-500 hover:text-danger-600 hover:border-danger-600 hover:bg-danger-50',
      info: 'bg-transparent border text-info-500 border-info-500 hover:text-info-600 hover:border-info-600 hover:bg-info-50',
      active:
        'bg-transparent border text-active-500 border-active-500 hover:text-active-600 hover:border-active-600 hover:bg-active-50'
    },
    soft: {
      primary: 'bg-primary-100 hover:bg-primary-200 text-primary-500',
      secondary: 'bg-secondary-100 hover:bg-secondary-200 text-secondary-500',
      light: 'bg-default-50 hover:bg-default-100 text-light-700',
      dark: 'bg-dark-100 hover:bg-dark-200 text-dark-500',
      default: 'bg-default-100 hover:bg-default-200 text-default-500',
      success: 'bg-success-100 hover:bg-success-200 text-success-500',
      warning: 'bg-warning-100 hover:bg-warning-200 text-warning-500',
      danger: 'bg-danger-100 hover:bg-danger-200 text-danger-500',
      info: 'bg-info-100 hover:bg-info-200 text-info-500',
      active: 'bg-active-100 hover:bg-active-200 text-active-500'
    }
  },
  radius: {
    none: 'rounded-none',
    soft: 'rounded',
    round: 'rounded-full'
  },
  size: {
    sm: 'text-sm/8 px-4',
    base: 'text-base/9 px-5',
    lg: 'text-base/9 px-5 font-semibold',
    xl: 'text-base/10 px-6 font-semibold'
  },
  transition: 'hover:scale-105 transition-all duration-200',
  block: 'w-full'
}


const Button= forwardRef(
  (props, ref) => {
    const {
      className,
      color = 'primary',
      type = 'button',
      size = 'base',
      variant = 'solid',
      radius = 'none',
      scaleUp = false,
      block = false,
      loading = false,
      children,
      ...rest
    } = props

    const btnClass = cn(
      btnStyles.base,
      scaleUp ? btnStyles.transition : '',
      block ? btnStyles.block : 'w-auto',
      btnStyles.radius[radius],
      btnStyles.variant[variant][color],
      btnStyles.size[size],
      className
    )

    return (
      <button ref={ref} className={btnClass} type={type} {...rest}>
        {loading && (
          <Spinner
            size={size === 'sm' ? size : 'base'}
            color={variant === 'solid' ? 'inherit' : color}
          />
        )}
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
