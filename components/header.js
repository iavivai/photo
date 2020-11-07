import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function Header() {
  return (
    <header className={utilStyles.header}>
      <h1>
        <Link
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          PHOTOGRAPHY.
        </Link>
      </h1>
      <nav className={utilStyles.desktopNav}>
        <Link href="https://instagram.com/iavivai">
          <a rel="noopener noreferrer" target="_blank" className={utilStyles.navItem}>Instagram</a>
        </Link>
        <Link href="https://unsplash.com/@iavivai">
          <a rel="noopener noreferrer" target="_blank" className={utilStyles.navItem}>Unsplash</a>
        </Link>
        <Link href="https://iavivai.com/about">
          <a rel="noopener noreferrer" target="_blank" className={utilStyles.navItem}>ABOUT</a>
        </Link>
      </nav>
    </header>
  )
}
