import cx from 'classnames'
import { forwardRef } from '~/utils/forwardRef'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

export const Card = forwardRef<'div', CardProps>((props, ref) => {
  const { as: Component = 'div', className, children, ...rest } = props
  const rootClassName = cx('card', className)
  return (
    <Component ref={ref} className={rootClassName} {...rest}>
      {children}
    </Component>
  )
})
