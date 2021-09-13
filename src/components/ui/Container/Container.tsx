import cx from 'classnames'
import { forwardRef } from '~/utils/forwardRef'

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

export const Container = forwardRef<'div', ContainerProps>((props, ref) => {
  const { as: Component = 'div', className, children, ...rest } = props
  const rootClassName = cx('container', className)
  return (
    <Component ref={ref} className={rootClassName} {...rest}>
      {children}
    </Component>
  )
})
