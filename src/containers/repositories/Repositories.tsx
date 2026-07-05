import {memo} from 'react'
import {useSelector} from 'react-redux'

import {RepositoriesData, SingleProjectModel} from './RepositoriesData'
import Headings from 'shared/components/headings/Headings'
import SeeMore from 'shared/components/see-more/SeeMore'

const Repositories = memo(() => {
  const personalityId = useSelector((state: any) => state.personality.data.id)
  const repositoriesData = RepositoriesData()[personalityId]

  return (
    <section className="section bg-section">
      <div className="section-content">
        <Headings title={repositoriesData.title} subtitle={repositoriesData.subtitle} />

        <ul className="mx-auto my-12 grid grid-cols-1 gap-12 md:my-16 md:grid-cols-2 lg:grid-cols-3 lg:max-w-[1200px]">
          {repositoriesData.collection.map((repository: SingleProjectModel, i: number) => (
            <li key={i}>
              <a className="card card-hover relative flex h-full flex-col overflow-hidden rounded-lg [&:hover>span]:text-primary" href={repository.url} title={repository.name} target="blank">
                {repository.status === 'in-progress' && (
                  <span className="ribbon">{repository.status}</span>
                )}
                <span className="flex">
                  <i className="text-[1.26rem]">{repository.icon}</i>
                  <span className="flex-grow px-2 text-[1.2rem] font-bold leading-[1.25]">{repository.name}</span>
                  <span className={`repo-logo repo-logo-${repository.companyLogo}`} />
                </span>
                <span className="pt-4">{repository.description}</span>
              </a>
            </li>
          ))}
        </ul>
        <SeeMore
          props={{
            text: repositoriesData.seeMore,
            url: repositoriesData.url
          }}
        />
      </div>
    </section>
  )
})

export default Repositories
