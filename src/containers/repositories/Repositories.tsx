import React, {memo} from 'react'
import {useSelector} from 'react-redux'

import styles from './Repositories.module.css'
import {RepositoriesData, SingleProjectModel} from './RepositoriesData'
import Headings from 'shared/components/headings/Headings'
import SeeMore from 'shared/components/see-more/SeeMore'
import {ReactComponent as GithubLogo} from 'assets/images/social/github.svg'

const Repositories = memo(() => {
  const personalityId = useSelector((state: any) => state.personality.data.id);
  const repositoriesData = RepositoriesData()[personalityId];

  return (
    <section className={`section ${styles['section-repositories']}`}>
      <div className="section-content">
        <Headings title={repositoriesData.title} subtitle={repositoriesData.subtitle} />

        <ul className={`${styles.list}`}>
          {repositoriesData.collection.map((repository: SingleProjectModel, i: number) => (
            <li key={i} className={styles['list-item']}>
              <a className={styles.link} href={repository.url} title={repository.name} target="blank">
                {repository.status === 'in-progress' && (
                  <span className={styles.status}>{repository.status === 'in-progress' ? repository.status : ''}</span>
                )}
                <span className={styles['link-wrapper']}>
                  <i className={styles.icon}>{repository.icon}</i>
                  <span className={styles.name}>{repository.name}</span>
                  <span className={styles['placed-at']}>
                    <GithubLogo />
                  </span>
                </span>
                <span className={styles.description}>{repository.description}</span>
              </a>
            </li>
          ))}
        </ul>
        <SeeMore
          props={{
            text:repositoriesData.seeMore,
            url: repositoriesData.url
          }}
        />
      </div>
    </section>
  )
});

export default Repositories;
