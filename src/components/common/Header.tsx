import { useEffect, useState } from 'react'
import Link from 'next/link'
import cx from 'classnames'
import { CloseIcon, HomeIcon, InfoIcon, MenuIcon, RocketIcon } from '~/components/icons'
import { Button, Container, NavLink } from '~/components/ui'
import { useMediaQuery } from '~/hooks'

export const Header = () => {
  const { isSmallScreen } = useMediaQuery()
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    {
      href: '/',
      name: 'Inicio',
      icon: HomeIcon,
      exact: true,
    },
    {
      href: '/iniciativas',
      name: 'Iniciativas',
      icon: RocketIcon,
    },
    {
      href: '/acerca',
      name: 'Acerca',
      icon: InfoIcon,
    },
  ]

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'scroll'
    }
  }, [isOpen])

  useEffect(() => {
    if (isOpen) {
      setIsOpen(false)
    }
  }, [isSmallScreen])

  const headerClassName = cx('header', {
    'header--menu': isOpen,
  })

  return (
    <header className={headerClassName}>
      <Container>
        <div className="header__container">
          <Link href="/">
            <a className="logo" onClick={() => setIsOpen(false)}>
              <span>YoQuechua</span>
            </a>
          </Link>

          <Button icon id="menu-btn" className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </Button>

          <nav className="nav">
            <ul className="nav__menu">
              {links.map(({ icon: Icon, ...link }, i) => (
                <li key={i} className="nav__item" onClick={() => setIsOpen(false)}>
                  <NavLink href={link.href} activeClassName="active" exact={link.exact}>
                    <a className="nav__link">
                      <Icon />
                      <span>{link.name}</span>
                    </a>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  )
}
