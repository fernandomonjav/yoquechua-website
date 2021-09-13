import cx from 'classnames'
import { forwardRef } from '~/utils/forwardRef'

export interface IconProps extends React.SVGAttributes<SVGElement> {
  children?: React.ReactNode
}

export const Icon = forwardRef<'svg', IconProps>((props, ref) => {
  const { className, children, ...rest } = props
  const rootClassName = cx('icon', className)
  return (
    <svg ref={ref} className={rootClassName} {...rest}>
      {children}
    </svg>
  )
})

export const createIcon = (props: { viewBox: string; path: React.ReactNode }) => {
  const { viewBox, path } = props
  const Component = forwardRef<'svg', IconProps>((props, ref) => {
    return (
      <Icon ref={ref} viewBox={viewBox} {...props}>
        {path}
      </Icon>
    )
  })
  return Component
}
