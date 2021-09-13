import cx from 'classnames'
import { forwardRef } from '~/utils/forwardRef'

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

export const Grid = forwardRef<'div', GridProps>((props, ref) => {
  const { as: Component = 'div', className, children, ...rest } = props
  const rootClassName = cx('grid', className)
  return (
    <Component ref={ref} className={rootClassName} {...rest}>
      {children}
    </Component>
  )
})
