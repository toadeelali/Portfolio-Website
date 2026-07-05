import styles from './Footer.module.css'

import Social from 'shared/components/social/Social'
import Theme from 'shared/components/theme/Theme'
import ScrollUp from 'shared/components/scroll-up/ScrollUp'
import translationEN from 'locales/en/translation.json'

const Footer = () => {
  const {footer} = translationEN

  return (
    <footer className="section">
      <div className={`section-content ${styles.footer}`}>
        <div className={styles['top-wrapper']}>
          <Social props={{className: styles.social}} />
          <div className={styles.actions}>
            <Theme />
            <ScrollUp />
          </div>
        </div>
        <div className={styles['bottom-wrapper']}>
          <p className={styles.copyright}>© 2021 Adeel Ali - {footer.copyright}</p>
          <p className={styles.quote}>
            <span>
              Made with a lot of <em>anxiety</em> during&nbsp;
            </span>
            <a
              rel="noopener noreferrer"
              target="_blank"
              className={styles['quote-link']}
              href="https://www.google.com/search?q=covid+19&rlz=1C1GCEA_enES841ES841&oq=covid+19&aqs=chrome..69i57j0l4j69i60l3.1589j0j4&sourceid=chrome&ie=UTF-8"
            >
              a quarantine time.
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
