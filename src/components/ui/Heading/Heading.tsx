import cx from 'classnames'
import { forwardRef } from '~/utils/forwardRef'

export interface HeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  subtitle?: string
  description?: string
}

export const Heading = forwardRef<'div', HeadingProps>((props, ref) => {
  const { title, subtitle, description, as: Component = 'div', className, ...rest } = props
  const rootClassName = cx('heading', className)
  return (
    <Component ref={ref} className={rootClassName} {...rest}>
      <h2 className="heading__title">{title}</h2>
      {subtitle && <span className="heading__subtitle">{subtitle}</span>}
      {description && <p className="heading__description">{description}</p>}
    </Component>
  )
})
