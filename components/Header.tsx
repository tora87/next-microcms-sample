import styles from './Header.module.scss'

export const Header = () => {
  return(
    <header className="header">
      <div className="container">
        <div className={styles.flex_wrapper}>
          <h1 className={styles.logo_title}>Furniture Design</h1>
          <div className={styles.menu_btn}>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  )
}
