import cx from 'classnames'
import { forwardRef } from '~/utils/forwardRef'

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

export const CardFooter = forwardRef<'div', CardFooterProps>((props, ref) => {
  const { as: Component = 'div', className, children, ...rest } = props
  const rootClassName = cx('card-footer', className)
  return (
    <Component ref={ref} className={rootClassName} {...rest}>
      {children}
    </Component>
  )
})
