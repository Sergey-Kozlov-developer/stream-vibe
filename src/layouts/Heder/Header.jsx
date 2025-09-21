import './Header.scss'
import Logo from "@/components/Logo/Logo.jsx";
import classNames from "classnames";
import Button from "@/components/Button/index.js";

export default (props) => {
    // url для использования isActive
    const {url} = props

    const menuItems = [
        {
            label: "Home",
            href: '/'
        },{

            label: "Movies & Shows",
            href: '/movies'
        },
        {
            label: "Support",
            href: '/support'
        },
        {
            label: "Subscriptions",
            href: '/subscriptions'
        },
    ]

    return (
        <header className="header">
            <div className="header__inner container">
                <Logo className='header__logo' loading='eager'/>
                <nav className="header__menu">
                    <ul className="header__menu-list">
                        {
                            menuItems.map(({label, href}, index) => (
                                <li key={index} className="header__menu-item">
                                    <a href={href} className={classNames("header__menu-link", {
                                        'is-active': href === url
                                    })}>{label}</a>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
                <div className="header__actions">
                    <Button
                        label="Search"
                        isLabelHidden
                        mode='transparent'
                        iconName="search"
                        className='header__button'
                    />
                    <Button
                        label="Notificaations"
                        isLabelHidden
                        mode='transparent'
                        iconName="notification"
                        className='header__button'

                    />
                </div>
            </div>
        </header>
    )
}
