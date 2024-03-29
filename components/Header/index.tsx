import styles from './Header.module.scss'
import Link from 'next/link'
import { useState, FC } from 'react'

export const Header: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const clickToggle: VoidFunction = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className={'header'}>
      <div className='container'>
        <div className={styles.flex_wrapper}>
          <Link href='/'>
            <a>
              <h1 className={styles.logo_title}>Furniture Design</h1>
            </a>
          </Link>
          <div
            className={`${styles.menu_btn} ${isOpen ? styles.active : ''}`}
            onClick={clickToggle}
          >
            <span></span>
          </div>
        </div>
      </div>

      <ul className={`${styles.header_nav} ${isOpen ? styles.active : ''}`}>
        <li>
          <Link href='/products'>
            <a>products</a>
          </Link>
        </li>
        <li>
          <Link href='/about'>
            <a>about</a>
          </Link>
        </li>
        <li>
          <Link href='/company'>
            <a>company</a>
          </Link>
        </li>
        <li>
          <Link href='/contact'>
            <a>contact</a>
          </Link>
        </li>
      </ul>
    </header>
  )
}
