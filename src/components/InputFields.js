import cn from 'classnames'
import React from 'react'

const inputStyles = {
  variant: {
    flat: {
      primary:
        'bg-transparent py-1 !px-0 !rounded-b-none text-primary-500 border-b border-primary-500',
      secondary:
        'bg-transparent py-1 !px-0 !rounded-b-none text-secondary-500 border-b border-secondary-500',
      light:
        'bg-transparent py-1 !px-0 !rounded-b-none text-light-500 border-b border-light-500',
      dark: 'bg-transparent py-1 !px-0 !rounded-b-none text-dark-500 border-b border-dark-500',
      default:
        'bg-transparent py-1 !px-0 !rounded-b-none text-default-500 border-b border-default-500',
      success:
        'bg-transparent py-1 !px-0 !rounded-b-none text-success-500 border-b border-success-500',
      warning:
        'bg-transparent py-1 !px-0 !rounded-b-none text-warning-500 border-b border-warning-500',
      danger:
        'bg-transparent py-1 !px-0 !rounded-b-none text-danger-500 border-b border-danger-500',
      info: 'bg-transparent py-1 !px-0 !rounded-b-none text-info-500 border-b border-info-500',
      active:
        'bg-transparent py-1 !px-0 !rounded-b-none text-active-500 border-b border-active-500'
    },
    solid: {
      primary:
        'pt-3 bg-primary-500 hover:bg-primary-600 text-light-500 border-light-500 border-0',
      secondary:
        'pt-3 bg-secondary-500 hover:bg-secondary-600 text-light-500 border-light-500 border-0',
      light:
        'pt-3 bg-light-500 hover:bg-light-600 text-dark-500 border-dark-500 border-0',
      dark: 'pt-3 bg-dark-500 hover:bg-dark-600 text-light-500 border-light-500 border-0',
      default:
        'pt-3 bg-default-500 hover:bg-default-600 text-light-500 border-light-500 border-0',
      success:
        'pt-3 bg-success-500 hover:bg-success-600 text-light-500 border-light-500 border-0',
      warning:
        'pt-3 bg-warning-500 hover:bg-warning-600 text-dark-500 border-dark-500 border-0',
      danger:
        'pt-3 bg-danger-500 hover:bg-danger-600 text-light-500 border-light-500 border-0',
      info: 'pt-3 bg-info-500 hover:bg-info-600 text-light-500 border-light-500 border-0',
      active:
        'pt-3 bg-active-500 hover:bg-active-600 text-light-500 border-light-500 border-0'
    },
    outlined: {
      primary:
        'py-1 bg-transparent border text-primary-500 border-primary-500 hover:text-primary-600 hover:border-primary-600',
      secondary:
        'py-1 bg-transparent border text-secondary-500 border-secondary-500 hover:text-secondary-600 hover:border-secondary-600',
      light:
        'py-1 bg-transparent border text-light-500 border-light-500 hover:text-light-600 hover:border-light-600',
      dark: 'py-1 bg-transparent border text-dark-500 border-dark-500 hover:text-dark-600 hover:border-dark-600',
      default:
        'py-1 bg-transparent border text-default-500 border-default-500 hover:text-default-600 hover:border-default-600',
      success:
        'py-1 bg-transparent border text-success-500 border-success-500 hover:text-success-600 hover:border-success-600',
      warning:
        'py-1 bg-transparent border text-warning-500 border-warning-500 hover:text-warning-600 hover:border-warning-600',
      danger:
        'py-1 bg-transparent border text-danger-500 border-danger-500 hover:text-danger-600 hover:border-danger-600',
      info: 'py-1 bg-transparent border text-info-500 border-info-500 hover:text-info-600 hover:border-info-600',
      active:
        'py-1 bg-transparent border text-active-500 border-active-500 hover:text-active-600 hover:border-active-600'
    },
    soft: {
      primary: 'pt-3 bg-primary-100 hover:bg-primary-200 text-primary-500',
      secondary:
        'pt-3 bg-secondary-100 hover:bg-secondary-200 text-secondary-500',
      light: 'pt-3 bg-default-50 hover:bg-default-100 text-light-700',
      dark: 'pt-3 bg-dark-100 hover:bg-dark-200 text-dark-500',
      default: 'pt-3 bg-default-100 hover:bg-default-200 text-default-500',
      success: 'pt-3 bg-success-100 hover:bg-success-200 text-success-500',
      warning: 'pt-3 bg-warning-100 hover:bg-warning-200 text-warning-500',
      danger: 'pt-3 bg-danger-100 hover:bg-danger-200 text-danger-500',
      info: 'pt-3 bg-info-100 hover:bg-info-200 text-info-500',
      active: 'pt-3 bg-active-100 hover:bg-active-200 text-active-500'
    }
  },
  labelVariant: {
    flat: '-top-1 left-0 bg-white',
    solid: 'top-1 left-2',
    outlined: '-top-5 left-2',
    soft: 'top-1 left-2'
  },
  size: {
        sm: 'gap-2 px-2 text-xs/5',
        base: 'gap-2 px-2 text-sm/6',
        lg: 'gap-2 px-3 text-sm/7',
        xl: 'gap-2 px-4 text-base/8'
    },
    radius: {
        none: 'rounded-none',
        soft: 'rounded',
        round: 'rounded-full'
    }
}

const InputFields = React.forwardRef(
  (
    {
      variant = 'soft',
      color = 'default',
      size,
      radius,
      className,
      label,
      icon,
      required,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          inputStyles.variant[variant][color],
          inputStyles.radius[radius],
          inputStyles.size[size],
          'relative'
        )}
      >
        <span
          className={cn(
            inputStyles.labelVariant[variant],
            'absolute text-[12px] text-dark-400 font-light leading-none text-inherit'
          )}
        >
          {label}
          {required && <span className='text-danger-500'> * </span>}
        </span>
        {icon && icon}
        <input
          className="bg-transparent text-dark-400 pl-2 outline-none"
          {...props}
        />
      </div>
    )
  }
)

InputFields.displayName = 'InputFields'

export default InputFields
