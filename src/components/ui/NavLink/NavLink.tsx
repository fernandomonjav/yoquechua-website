import { Children, cloneElement } from 'react'
import { useRouter } from 'next/router'
import Link, { LinkProps } from 'next/link'
import cx from 'classnames'

export interface NavLinkProps extends LinkProps {
  exact?: boolean
  activeClassName?: string
}

export const NavLink: React.FC<NavLinkProps> = (props) => {
  const { exact, activeClassName, children, ...rest } = props
  const { asPath } = useRouter()
  const child = Children.only(children) as React.ReactElement
  const childClassName = child.props.className || ''

  const href = rest.href.toString()

  const active = exact ? asPath === href : asPath.includes(href)

  const className = active ? cx(childClassName, activeClassName) : cx(childClassName)

  return <Link {...rest}>{cloneElement(child, { className })}</Link>
}
