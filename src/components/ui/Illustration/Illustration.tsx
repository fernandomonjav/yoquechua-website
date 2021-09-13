import cx from 'classnames'
import { forwardRef } from '~/utils/forwardRef'

export interface IllustrationProps extends React.SVGAttributes<SVGElement> {
  children?: React.ReactNode
}

export const Illustration = forwardRef<'svg', IllustrationProps>((props, ref) => {
  const { as: Component = 'svg', className, children, ...rest } = props
  const rootClassName = cx('illustration', className)
  return (
    <Component ref={ref} className={rootClassName} {...rest}>
      {children}
    </Component>
  )
})

export const createIllustration = (props: { viewBox: string; path: React.ReactNode }) => {
  const { viewBox, path } = props
  const Component = forwardRef<'svg', IllustrationProps>((props, ref) => {
    return (
      <Illustration ref={ref} viewBox={viewBox} {...props}>
        {path}
      </Illustration>
    )
  })
  return Component
}
