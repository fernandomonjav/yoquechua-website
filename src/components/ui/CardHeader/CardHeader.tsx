import cx from 'classnames'
import { forwardRef } from '~/utils/forwardRef'

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  avatar?: React.ReactNode
  title: string
  subtitle?: string
}

export const CardHeader = forwardRef<'div', CardHeaderProps>((props, ref) => {
  const { avatar, title, subtitle, as: Component = 'div', className, ...rest } = props
  const rootClassName = cx('card-header', className)
  return (
    <Component ref={ref} className={rootClassName} {...rest}>
      {avatar && <div className="card-header__avatar">{avatar}</div>}
      <div className="card-header__content">
        <h3 className="card-header__title">{title}</h3>
        {subtitle && <span className="card-header__subtitle">{subtitle}</span>}
      </div>
    </Component>
  )
})
