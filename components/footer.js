import { useState } from 'react'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { NAME } from '../lib/constants'

export default function Footer() {
  return (
    <footer className={utilStyles.footer}>
      <div className={utilStyles.copyright}>
        © {NAME}, All rights reserved
      </div>
    </footer>
  )
}
