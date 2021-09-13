import cx from 'classnames'
import { forwardRef } from '~/utils/forwardRef'

export interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

export const CardBody = forwardRef<'div', CardBodyProps>((props, ref) => {
  const { as: Component = 'div', className, children, ...rest } = props
  const rootClassName = cx('card-body', className)
  return (
    <Component ref={ref} className={rootClassName} {...rest}>
      {children}
    </Component>
  )
})
