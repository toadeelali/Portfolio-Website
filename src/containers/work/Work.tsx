import {WorkData, WorkModel} from './WorkData'
import Headings from 'shared/components/headings/Headings'

import translationEN from 'locales/en/translation.json'

const oddJob = (int: number): Boolean => Math.abs(int % 2) === 1

const Work = () => {
  const workData = WorkData()
  const {work} = translationEN

  return (
    <section className="section">
      <div className="section-content">
        <Headings title={work.title} subtitle={work.subtitle} />

        <div className="flex flex-col justify-between lg:flex-row lg:my-16">
          <div className="order-1 mt-12 lg:order-0 lg:mt-4 lg:pr-4 lg:w-[calc(100%-704px)]">
            <h4 className="mb-1 text-[1.2rem] font-semibold leading-[1.9rem]">{work.journey.title}</h4>
            <p dangerouslySetInnerHTML={{__html: work.journey.intro}} />

            <a className="link my-6 flex items-center justify-center border-t border-dashed border-primary py-0 text-center leading-[3rem]" href="https://www.linkedin.com/in/wikz87/" title={work['see-more']}>
              <em>{work['see-more']}</em>
            </a>

            <p dangerouslySetInnerHTML={{__html: work.journey.body}} />
            <p dangerouslySetInnerHTML={{__html: work.journey.conclusion}} />
          </div>

          <ul className="timeline flex flex-col lg:w-[670px] lg:h-full lg:m-0">
            {workData.map((workItem: WorkModel, i: number) => (
              <li key={i} className={`grid gap-0 lg:grid-cols-[342px_auto] lg:items-center lg:mt-5 lg:justify-start ${oddJob(i) ? 'timeline-left lg:grid-cols-[auto_auto] lg:self-end lg:pr-1' : ''}`}>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  className="timeline-card card card-hover [&:hover>div>.name]:text-primary"
                  href={workItem.url}
                  title={workItem.title}
                >
                  <span className={`job-logo size-[50px] max-w-[50px] max-h-[50px] min-w-[50px] min-h-[50px] mr-3 job-logo-${workItem.logo}`}>{workItem.title}</span>
                  <div>
                    <div className="name text-[0.9rem] font-semibold">{workItem.title}</div>
                    <div className="pt-0.5 text-[0.8rem]">{workItem.position}</div>
                  </div>
                </a>
                <div className="timeline-date">
                  <span>{workItem.year}</span>
                  <span>{workItem.country}</span>
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
