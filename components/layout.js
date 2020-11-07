import Head from 'next/head'
import styles from './layout.module.css'
import Link from 'next/link'
import Header from '../components/header'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Bungee&display=swap" rel="stylesheet" />
      </Head>

      <Header />
      <main>{children}</main>
    </div>
  )
}
