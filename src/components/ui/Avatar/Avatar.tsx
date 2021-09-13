import cx from 'classnames'
import { forwardRef } from '~/utils/forwardRef'

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string
  icon?: React.ReactNode
  name?: string
}

export const Avatar = forwardRef<'div', AvatarProps>((props, ref) => {
  const { src, icon, name, as: Component = 'div', className, ...rest } = props
  const rootClassName = cx('avatar', className)
  return (
    <Component ref={ref} className={rootClassName} {...rest}>
      {src ? (
        <img src={src} alt={name} />
      ) : icon ? (
        icon
      ) : name ? (
        <span>{name.substr(0, 1)}</span>
      ) : null}
    </Component>
  )
})
