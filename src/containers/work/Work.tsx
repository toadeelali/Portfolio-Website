import React from 'react'

import styles from './Work.module.css'
import {WorkData, WorkModel} from './WorkData'
import Headings from 'shared/components/headings/Headings'

import translationEN from 'locales/en/translation.json'

const oddJob = (int: number): Boolean => Math.abs(int % 2) === 1

const Work = () => {
  const workData = WorkData()
  const {work} = translationEN

  return (
    <section className={`section ${styles['section-work']}`}>
      <div className="section-content">
        <Headings title={work.title} subtitle={work.subtitle} />

        <div className={styles.content}>
          <div className={styles.about}>
            <h4 className={styles['about-title']}>{work.journey.title}</h4>
            <p dangerouslySetInnerHTML={{__html: work.journey.intro}} />

            <a className={styles.ad} href="https://www.linkedin.com/in/wikz87/" title={work['see-more']}>
              <em>{work['see-more']}</em>
            </a>

            <p dangerouslySetInnerHTML={{__html: work.journey.body}} />

            <p dangerouslySetInnerHTML={{__html: work.journey.conclusion}} />
          </div>

          <ul className={`${styles.list}`}>
            {workData.map((work: WorkModel, i: number) => (
              <li key={i} className={`${styles['list-item']} ${oddJob(i) ? styles['list-item-left'] : ''}`}>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  className={styles['list-item-card']}
                  href={work.url}
                  title={work.title}
                >
                  <span className={`${styles.logo} ${styles[work.logo + '']}`}>{work.title}</span>
                  <div>
                    <div className={styles.title}>{work.title}</div>
                    <div className={styles.position}>{work.position}</div>
                  </div>
                </a>
                <div className={styles['list-item-date']}>
                  <span>{work.year}</span>
                  <span>{work.country}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Work
