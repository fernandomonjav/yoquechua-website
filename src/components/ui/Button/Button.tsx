import cx from 'classnames'
import { forwardRef } from '~/utils/forwardRef'

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  primary?: boolean
  icon?: boolean
}

export const Button = forwardRef<'button', ButtonProps>((props, ref) => {
  const { primary, icon, as: Component = 'button', className, children, ...rest } = props
  const rootClassName = cx(
    'button',
    { 'button--primary': primary, 'button--icon': icon },
    className
  )
  return (
    <Component ref={ref} className={rootClassName} {...rest}>
      {children}
    </Component>
  )
})
