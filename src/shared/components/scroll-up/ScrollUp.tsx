import styles from './ScrollUp.module.css'
import translationEN from 'locales/en/translation.json'

import {ReactComponent as ArrowUpIcon} from '../../../assets/images/icons/arrow-up.svg'

const ScrollUp = () => {
  const scrollTop = () =>
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })

  return (
    <button className={styles.button} onClick={scrollTop} title={translationEN['scroll-up'].title}>
      <span className={styles.arrow}>
        <ArrowUpIcon />
      </span>
    </button>
  )
}

export default ScrollUp
