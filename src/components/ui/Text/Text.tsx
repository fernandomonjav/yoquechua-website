import cx from 'classnames'
import { forwardRef } from '~/utils/forwardRef'

export interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl'
  weight?:
    | 'thin'
    | 'extralight'
    | 'light'
    | 'normal'
    | 'medium'
    | 'semibold'
    | 'bold'
    | 'extrabold'
    | 'black'
  italic?: boolean
  align?: 'left' | 'center' | 'right' | 'justify'
}

export const Text = forwardRef<'span', TextProps>((props, ref) => {
  const {
    size = 'md',
    weight,
    italic,
    align,
    as: Component = 'span',
    className,
    children,
    ...rest
  } = props
  const rootClassName = cx(
    'text',
    {
      [`text--${size}`]: size,
      [`text--${weight}`]: weight,
      'text--italic': italic,
      [`text--${align}`]: align,
    },
    className
  )
  return (
    <Component ref={ref} className={rootClassName} {...rest}>
      {children}
    </Component>
  )
})
