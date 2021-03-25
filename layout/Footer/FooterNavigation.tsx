import { FC } from 'react'

interface INavigation {
  id: number
  link: string
  label: string
}

const FooterNavigation: FC = () => {
  const navigations: INavigation[] = [
    {
      id: 1,
      link: '/',
      label: 'Sign-Up',
    },
    {
      id: 2,
      link: '/',
      label: 'Contact Us',
    },
    {
      id: 3,
      link: '/',
      label: 'Apps',
    },
    {
      id: 4,
      link: '/',
      label: 'Follow Us',
    },
    {
      id: 5,
      link: '/',
      label: 'California Transparency',
    },
    {
      id: 6,
      link: '/',
      label: 'Legal Notice',
    },
    {
      id: 7,
      link: '/',
      label: 'Careers',
    },
    {
      id: 8,
      link: '/',
      label: 'Sitemap',
    },
  ]

  const navigationRender = navigations.map((item) => (
    <li key={item.id}>
      <a className="footer-navigation__list--link">{item.label}</a>
    </li>
  ))

  return (
    <div className="footer-navigation">
      <ul className="footer-navigation__list">
        <a
          href="/"
          className="footer-navigation__region"
          title="Change Country/Region"
        >
          <img src="/flags/us.svg" alt="" className="ls-flag" />
          <span>United States</span>
        </a>
        {navigationRender}
      </ul>
      <hr />
      <a
        href="/"
        className="footer-navigation__region"
        title="Change Country/Region"
      >
        <span>Ship to:</span>
        <img src="/flags/us.svg" alt="" className="ls-flag" />
        <span>United States</span>
      </a>
    </div>
  )
}

export default FooterNavigation
