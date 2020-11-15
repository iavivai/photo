import Head from 'next/head'
import styles from './layout.module.css'
import Link from 'next/link'
import Header from '../components/header'
import Footer from '../components/footer'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Bungee&display=swap" rel="stylesheet" />
      </Head>

      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
