import React from 'react'
import styles from './SeeMore.module.css'

const SeeMore = ({t, props}: any) => {
  return (
    <div className={styles.wrapper}>
      <a className={styles['section-link']} href={props.url} target="blank">
        {props.text}
      </a>
    </div>
  )
}

export default SeeMore;
