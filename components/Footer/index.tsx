import Link from "next/link"
import styles from './Footer.module.scss'

export const Footer = () => {
  return(
    <footer>
      <div className="container">
        <div className={styles.flex_wrapper}>
          <ul className={styles.footer_nav}>
            <li className={styles.footer_nav_item}>
              <Link href="/">
                <a>twitter</a>
              </Link>
            </li>
            <li className={styles.footer_nav_item}>
              <Link href="/">
                <a>instagram</a>
              </Link>
            </li>
            <li className={styles.footer_nav_item}>
              <Link href="/">
                <a>facebook</a>
              </Link>
            </li>
          </ul>
          <span className={styles.copyright}><small>&copy;Furniture Design</small></span>
        </div>
      </div>
    </footer>
  )
}
