import { useState } from 'react'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className={utilStyles.footer}>
      <div className={utilStyles.copyright}>
        © 2019 - 2020 iavivai, All rights reserved
      </div>
    </footer>
  )
}
