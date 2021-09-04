import Layout from '../components/layout'
import styles from '../styles/error.module.css'

export default function Custom404() {
  return (
    <Layout home>
      <h1 className={styles.notFound}>404</h1>
    </Layout>
  )
}
