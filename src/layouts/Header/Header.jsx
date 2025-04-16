import "./Header.scss"
import Logo from "@/components/Logo";
import classNames from "classnames";
import Button from "@/components/Button";

const Header = (props) => {

  const {url} = props

  const menuItems = [
    {
      id: 1,
      label: 'Home',
      href: '/'
    },
    {
      id: 2,
      label: 'Movies & Shows',
      href: '/movies'
    },
    {
      id: 3,
      label: 'Support',
      href: '/support'
    },
    {
      id: 4,
      label: 'Subscriptions',
      href: '/subscriptions'
    },
  ]

  return (
    <header className='header'>
      <div className="header__inner container">
        <Logo loading='eager'/>
        <nav className="header__menu">
          <ui className="header__menu-list">
            {menuItems.map(({label, href, id}) => (<li className="header__menu-item" key={id}>
              <a href={href} className={classNames('header__menu-link', {
                'is-active': href === url
              })}>{label}</a>
            </li>))}
          </ui>
        </nav>
        <div className="header__actions">
          <Button className="header__button" label="Search" isLabelHidden iconName="search" mode="transparent"/>
          <Button className="header__button" label="Notification" isLabelHidden iconName="notification" mode="transparent"/>
        </div>
      </div>
    </header>
  )
}

export default Header;